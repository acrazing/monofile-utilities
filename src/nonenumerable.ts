/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc nonenumerable.ts
 */

export function nonenumerable(p: any, key: string, desc?: PropertyDescriptor): any {
  console.log(
    'decorate',
    p,
    key,
    desc,
    Object.getOwnPropertyDescriptor(
      p,
      key,
    ), desc && desc.get && desc.get.toString(), desc && desc.set && desc.set.toString(),
  );
  desc = desc || Object.getOwnPropertyDescriptor(p, key);
  let pValue: any;
  if (desc) {
    desc.enumerable = false;
    const { get, set } = desc;
    pValue = desc.value;
    desc.set = function (value) {
      console.log('set 2', key, value, pValue, this === p, typeof set);
      set && set.call(this, value);
      if (this === p) {
        pValue = value;
        return;
      }
      const instDesc = Object.getOwnPropertyDescriptor(this, key);
      if (instDesc) {
        instDesc.enumerable = false;
        Object.defineProperty(this, key, instDesc);
      }
      else {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: value,
        });
      }
    };
    desc.get = function () {
      console.log('get 2', key, pValue, this === p);
      return get ? get.call(this) : pValue;
    };
    return desc;
  }
  return {
    enumerable: false,
    configurable: true,
    set(value: any) {
      if (this === p) {
        pValue = value;
        return;
      }
      console.log('set', key, value, pValue, this === p);
      Object.defineProperty(this, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: value,
      });
    },
    get() {
      console.log('get', key, pValue, this === p);
      return pValue;
    },
  };
}
