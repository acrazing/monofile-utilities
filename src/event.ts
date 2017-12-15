/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-11-24 21:18:56
 * @version 1.0.0
 * @desc misc.ts
 */

import { SyntheticEvent } from 'react'

export function locally(e: SyntheticEvent<any>) {
  e.stopPropagation()
}

export function manually(e: SyntheticEvent<any>) {
  e.preventDefault()
}

export function killed(e: SyntheticEvent<any> | Event) {
  e.stopPropagation()
  e.preventDefault()
}
