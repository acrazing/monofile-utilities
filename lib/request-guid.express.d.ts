/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-17 12:14:56
 */
import { Request, RequestHandler } from 'express';
import { MiddlewareOptions } from './request-guid';
import { Only, WritableKeys } from './types';
export declare function requestGuid(
  options: MiddlewareOptions<WritableKeys<Only<Request, string>>>,
): RequestHandler;
