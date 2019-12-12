/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-25 20:30:49
 */
declare global {
  namespace Express {
    interface Request {
      id: string;
    }
  }
}
export {};
