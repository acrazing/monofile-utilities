/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-17 12:14:56
 */

import { Request, RequestHandler } from 'express';
import { createEncoder, isGuid, MiddlewareOptions } from './request-guid';
import { Only, WritableKeys } from './types';

export function requestGuid(
  options: MiddlewareOptions<WritableKeys<Only<Request, string>>>,
): RequestHandler {
  const { secret, header = 'x-request-id', name, trustHeader = true } = options;
  const encoder = createEncoder(secret);
  return (req, res, next) => {
    if (trustHeader) {
      const input = req.headers[header];
      const upstream = input
        ? Array.isArray(input)
          ? input[0]
          : input
        : void 0;
      if (upstream && isGuid(upstream)) {
        req[name] = upstream;
        res.setHeader(header, upstream);
        next();
        return;
      }
    }
    const id = (req[name] = encoder(req.connection.localAddress, req.ip));
    res.setHeader(header, id);
    next();
  };
}
