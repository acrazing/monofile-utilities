/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-11-24 21:18:56
 * @version 1.0.0
 * @desc misc.ts
 */

export interface StopEvent {
  stopPropagation (): void;
  preventDefault (): void;
}

export function locally (e: StopEvent) {
  e.stopPropagation();
}

export function manually (e: StopEvent) {
  e.preventDefault();
}

export function killed (e: StopEvent) {
  e.stopPropagation();
  e.preventDefault();
}
