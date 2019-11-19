/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-17 12:14:56
 */

import Blowfish from 'egoroof-blowfish';
import { UINT32_MAX } from './consts';
import { int2ip, ip2int } from './ip';

export interface GuidData {
  index: number;
  timestamp: number; // unix seconds
  localIP: number;
  remoteIP: number;
}

export interface FriendlyGuidData {
  index: number;
  timestamp: string; // ISO date string
  localIP: string;
  remoteIP: string;
}

export type IpInput = number | string;

export const GUID_RE = /^[\dA-F]{8}-[\dA-F]{8}-[\dA-F]{8}-[\dA-F]{8}$/;

export function isGuid(guid: string) {
  return GUID_RE.test(guid);
}

/**
 * localIP: if is not ok, as 0
 * remoteIP: if is not ok, as 0xffffffff
 */
export type Encoder = (localIP: IpInput, remoteIP: IpInput) => string;

export type Decoder = {
  (guid: string): GuidData;
  (guid: string, friendly: true): FriendlyGuidData;
};

export type SecretInput = Buffer | string;

export interface MiddlewareOptions<N> {
  secret: SecretInput;
  header?: string;
  name: N;
  trustHeader?: boolean;
}

function fish(secret: SecretInput) {
  return new Blowfish(
    typeof secret === 'string' ? Buffer.from(secret, 'hex') : secret,
    Blowfish.MODE.CBC,
    Blowfish.PADDING.NULL,
  );
}

const iv = Buffer.allocUnsafe(8);
const ip = Buffer.allocUnsafe(8);
const cipher = Buffer.allocUnsafe(8);

export function createEncoder(secret: SecretInput): Encoder {
  const bf = fish(secret);
  let index = 0;
  return (localIP, remoteIP) => {
    if (++index > UINT32_MAX) {
      index = 0;
    }
    const timestamp = Math.floor(Date.now() / 1e3);
    iv.writeUInt32BE(index, 0);
    iv.writeUInt32BE(timestamp, 4);
    localIP = typeof localIP === 'number' ? localIP : ip2int(localIP, 0);
    remoteIP =
      typeof remoteIP === 'number' ? remoteIP : ip2int(remoteIP, UINT32_MAX);
    ip.writeUInt32BE(localIP, 0);
    ip.writeUInt32BE(remoteIP, 4);
    bf.setIv(iv);
    cipher.set(bf.encode(ip));
    return (
      iv
        .slice(0, 4)
        .toString('hex')
        .toUpperCase() +
      '-' +
      iv
        .slice(4)
        .toString('hex')
        .toUpperCase() +
      '-' +
      cipher
        .slice(0, 4)
        .toString('hex')
        .toUpperCase() +
      '-' +
      cipher
        .slice(4)
        .toString('hex')
        .toUpperCase()
    );
  };
}

export function createDecoder(secret: SecretInput): Decoder {
  const bf = fish(secret);
  return (guid: string, friendly2?: boolean) => {
    const [index, timestamp, localIP, remoteIP] = guid.split('-', 4);
    iv.write(index + timestamp, 0, 8, 'hex');
    cipher.write(localIP + remoteIP, 0, 8, 'hex');
    bf.setIv(iv);
    ip.fill(0);
    ip.set(bf.decode(cipher, Blowfish.TYPE.UINT8_ARRAY));
    if (friendly2) {
      return ({
        index: iv.readUInt32BE(0),
        timestamp: new Date(iv.readUInt32BE(4) * 1e3).toISOString(),
        localIP: int2ip(ip.readUInt32BE(0)),
        remoteIP: int2ip(ip.readUInt32BE(4)),
      } as FriendlyGuidData) as any;
    } else {
      return ({
        index: iv.readUInt32BE(0),
        timestamp: iv.readUInt32BE(4),
        localIP: ip.readUInt32BE(0),
        remoteIP: ip.readUInt32BE(4),
      } as GuidData) as any;
    }
  };
}
