/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc sleep.ts
 */
export interface Timer extends Promise<void> {
  interrupt(resolve?: boolean): void;
}
export declare function sleep(time: number): Timer;
