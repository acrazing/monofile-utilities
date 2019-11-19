/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-17 14:07:02
 */

import { UINT32_MAX } from './consts';
import { ip2int, IP_MAX, IP_MIN } from './ip';
import { createDecoder, createEncoder, isGuid } from './request-guid';

describe('request guid', () => {
  it('should encode/decode guid as expected', () => {
    const secret = Buffer.allocUnsafe(8);
    const cases: [
      [string, number | undefined, string, number | undefined],
      [string?, number?, string?, number?],
    ][] = [
      [['127.0.0.1', void 0, '127.0.0.1', void 0], []],
      [
        ['::1', 0, '::1', UINT32_MAX],
        [IP_MIN, 0, IP_MAX, UINT32_MAX],
      ],
      [['255.255.255.255', void 0, '0.0.0.0', void 0], []],
      [
        ['1.2.3.4', void 0, '::1', UINT32_MAX],
        [void 0, void 0, IP_MAX, UINT32_MAX],
      ],
    ];
    const fixedTs = 0x12345678;
    const fixedIso = new Date(fixedTs * 1e3).toISOString();
    Date.now = () => fixedTs * 1e3;
    const encoder = createEncoder(secret);
    const decoder = createDecoder(secret);
    cases.forEach(
      (
        [
          [
            inputLocalIP,
            inputLocalInt = ip2int(inputLocalIP),
            inputRemoteIP,
            inputRemoteInt = ip2int(inputRemoteIP),
          ],
          [
            outputLocalIP = inputLocalIP,
            outputLocalInt = inputLocalInt,
            outputRemoteIP = inputRemoteIP,
            outputRemoteInt = inputRemoteInt,
          ],
        ],
        count,
      ) => {
        [
          encoder(inputLocalIP, inputRemoteIP),
          encoder(inputLocalInt, inputRemoteInt),
        ].forEach((guid, child) => {
          const index = count * 2 + child + 1;
          expect(isGuid(guid)).toBe(true);
          expect(guid.substr(0, 8)).toBe(index.toString(16).padStart(8, '0'));
          const data = decoder(guid);
          const friendly = decoder(guid, true);
          expect(data.index).toBe(index);
          expect(data.timestamp).toBe(fixedTs);
          expect(data.localIP).toBe(outputLocalInt);
          expect(data.remoteIP).toBe(outputRemoteInt);
          expect(friendly.index).toBe(index);
          expect(friendly.timestamp).toBe(fixedIso);
          expect(friendly.localIP).toBe(outputLocalIP);
          expect(friendly.remoteIP).toBe(outputRemoteIP);
        });
      },
    );
  });
});
