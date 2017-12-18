/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc store.ts
 */

import { action, observable } from 'mobx'
import { FormEvent } from 'react'
import { AMap, MMap } from './map'
import { nonenumerable } from './nonenumerable'
import memoize = require('lodash/memoize')

export interface ValidateConfig {
  label: string;
  rules: Rule[];
}

export type FormHandler = (event: FormEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => void

export type Validator = (value: any, label: string, key: string, obj: any) => any

export interface Rule {
  validate: Validator;
  name: string;
}

export function rule(name: string, validate: Validator): Rule {
  return { validate, name }
}

export function isEmpty(value: any) {
  return !value && value !== 0 && value !== false
}

export function validate(label: string, rules: Rule[]) {
  return (p: any, key: string) => {
    if (!('__validators__' in p)) {
      Object.defineProperty(p, '__validators__', {
        enumerable: false,
        writable: false,
        configurable: false,
        value: {},
      })
    }
    p.__validators__[key] = { label, rules }
  }
}

export interface ValidateResult<T> {
  ok: boolean;
  message: string;
  map: Partial<MMap<T, AMap<any>>>;
  count: number;
}

export function format(formatter: (value: string) => any) {
  return (p: any, key: string) => {
    if (!('__formatters__' in p)) {
      Object.defineProperty(p, '__formatters__', {
        enumerable: false,
        writable: false,
        configurable: false,
        value: {},
      })
    }
    p.__formatters__[key] = formatter
  }
}

export class BaseStore {
  private __validators__: MMap<this, ValidateConfig>
  private __changes__: MMap<this, FormHandler>
  private __formatters__: MMap<this, (value: string) => any>

  validate(): Promise<ValidateResult<this>>
  validate<T extends keyof this>(fields: T[]): Promise<ValidateResult<{[P in T]: void}>>
  async validate<T extends keyof this>(fields: T[] = Object.keys(this.__validators__) as T[]): Promise<any> {
    const out: ValidateResult<{[P in T]: void}> = { ok: true, message: '', count: 0, map: {} }
    let next = Promise.resolve()
    fields.forEach((key) => {
      const { label, rules } = this.__validators__[key]
      rules.forEach((rule) => {
        next = next.then(async () => {
          let ret: any
          try {
            ret = await rule.validate(this[key] || '', label, key, this)
          } catch (e) {
            ret = e instanceof Error ? e.message : e && e.toString ? e.toString() : '未知错误'
          }
          if (ret !== true) {
            out.ok = false
            out.message = out.message || String(ret)
            if (!out.map[key]) {
              out.map[key] = {}
              out.count += 1
            }
            (out.map[key] as AMap<any>)[rule.name] = ret
          }
        })
      })
    })
    return next.then(() => out)
  }

  get change(): MMap<this, FormHandler> {
    if (!this.__changes__) {
      Object.defineProperty(this, '__changes__', { enumerable: false, value: {} })
      for (const key in this) {
        if (this.hasOwnProperty(key)) {
          Object.defineProperty(this.__changes__, key, {
            configurable: true,
            get: () => {
              const value: FormHandler = (event) => {
                const value = event.currentTarget.value
                this.attr({
                  [key]: this.__formatters__ && this.__formatters__[key]
                    ? this.__formatters__[key](value)
                    : value,
                } as any)
              }
              Object.defineProperty(this.__changes__, key, { value })
              return this.__changes__[key]
            },
          })
        }
      }
    }
    return this.__changes__
  }

  @nonenumerable attr: (data: Partial<this> | void) => this = attr as any
}

export interface Store<T> {
  set<K extends keyof T>(key: K, value: T[K]): void;
  attr(data: Partial<T> | void): void;
  update<K extends keyof T>(key: K): (value: T[K]) => void;
}

const set = action(function <S, K extends keyof S>(this: S, key: K, value: S[K]) {
  this[key] = value
})

const attr = action(function <S>(this: S, data: Partial<S> | void) {
  if (data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        switch (typeof this[key]) {
          case 'number':
            this[key] = +data[key] as any
            break
          case 'string':
            this[key] = data[key] + '' as any
            break
          default:
            this[key] = data[key] as any
            break
        }
      }
    }
  }
  return this
})

const update = memoize((key: string) => action(function (this: any, value: any) {
  this[key] = value
}))

export function createStore<S extends object, A extends object, E extends object>(
  store: S,
  actions?: A,
  extra?: E,
): S & A & E & Store<S> {
  const output: S & A & E & Store<S> = observable(store) as any
  output.set = set
  output.attr = attr
  output.update = update
  if (actions) {
    for (const key in actions) {
      if (actions.hasOwnProperty(key)) {
        if (typeof actions[key] === 'function') {
          output[key] = action(actions[key])
        } else {
          output[key] = actions[key]
        }
      }
    }
  }
  if (extra) {
    for (const key in extra) {
      if (extra.hasOwnProperty(key)) {
        output[key] = extra[key]
      }
    }
  }
  return output
}
