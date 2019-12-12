/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 13:35:11
 * @version 1.0.0
 * @desc mock-list.ts
 */
/**
 * create a mocked list
 * @param model
 * @param key
 * @param count
 */
export declare function mockList<T>(
  model: T,
  key: keyof T,
  count?: number,
): T[];
