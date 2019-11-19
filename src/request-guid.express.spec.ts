/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-25 20:30:49
 */

import e from 'express';
import fetch from 'node-fetch';
import { GUID_RE } from './request-guid';
import { requestGuid } from './request-guid.express';

declare global {
  namespace Express {
    export interface Request {
      id: string;
    }
  }
}

describe('express middleware', function() {
  it('should set header correctly', async () => {
    const header = 'x-request-id-2';
    const from = 'AAAAAAAA-AAAAAAAA-AAAAAAAA-AAAAAAAA';
    return new Promise<any>((resolve, reject) => {
      const app = e();
      app.use(
        requestGuid({
          secret: '13456789abcdef0',
          trustHeader: true,
          name: 'id',
          header: header,
        }),
      );
      app.get('/', (req, res) => {
        expect(req.id).toMatch(GUID_RE);
        res.end('');
      });
      const srv = app.listen(2345, '127.0.0.1', () => {
        new Promise((resolve) => setTimeout(resolve, 0))
          .then(() => {
            return fetch('http://127.0.0.1:2345/').then((r) => {
              expect(r.headers.get(header)).toMatch(GUID_RE);
              expect(r.headers.get(header)).not.toBe(from);
            });
          })
          .then(() => {
            return fetch('http://127.0.0.1:2345/', {
              headers: { [header]: from },
            }).then((r) => {
              expect(r.headers.get(header)).toBe(from);
            });
          })
          .then(resolve, reject)
          .then(() => {
            srv.close();
          });
      });
    });
  });
});
