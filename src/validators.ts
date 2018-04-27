/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 12:29:38
 * @version 1.0.0
 * @desc validate.ts
 */

import { isEmpty, rule, Rule } from './base-store';

export const V = {
  required: rule('required', (value, label) => {
    if (isEmpty(value)) {
      return `请填写${label}`;
    }
    return true;
  }),
  mobile: rule('mobile', (value) => {
    if (!isEmpty(value) && !/^1\d{10}$/.test(value)) {
      return '请填写正确的手机号';
    }
    return true;
  }),
  idcard: rule('idcard', (value) => {
    if (isEmpty(value)) {
      return true;
    }
    if (value.length === 15) {
      if (!/^\d+$/.test(value)) {
        return '请填写正确的身份证号';
      }
      const year = parseInt(value.substring(6, 8), 10);
      const month = parseInt(value.substring(8, 10), 10) - 1;
      const day = parseInt(value.substring(10, 12), 10);
      const date = new Date(year, month, day);
      return +date.getFullYear().toString().substr(-2) === year
      && date.getMonth() === month && date.getDate() === day
        ? true : '请填写正确的身份证号';
    }
    if (value.length === 18) {
      if (!/^\d{17}(\d|X|x)$/.test(value)) {
        return '请填写正确的身份证号';
      }
      const year = parseInt(value.substring(6, 10), 10);
      const month = parseInt(value.substring(10, 12), 10) - 1;
      const day = parseInt(value.substring(12, 14), 10);
      const date = new Date(year, month, day);
      if (date.getFullYear() !== year
        || date.getMonth() !== month
        || date.getDate() !== day) {
        return '请填写正确的身份证号';
      }
      const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
      const Y = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      let sum = 0;
      const bytes = value.split('');
      if (bytes[17].toLowerCase() === 'x') {
        bytes[17] = '10';
      }
      const flag = bytes[17].toLowerCase() === 'x' ? 10 : +bytes[17];
      for (let i = 0; i < 17; i++) {
        sum += Wi[i] * +bytes[i];
      }
      return flag === Y[sum % 11] ? true : '请填写正确的身份证号';
    }
    return '请填写正确的身份证号';
  }),
  select: (handler: (value: any, label: string, key: string, obj: any) => Rule | Promise<Rule>): Rule => {
    return {
      name: 'select',
      validate: async (value, label, key, obj) => {
        const rule = await handler(value, label, key, obj);
        return !rule || rule.validate(value, label, key, obj);
      },
    };
  },
  int: rule('int', (value, label) => {
    return /^\d*$/.test(value) || `请填写正确的${label}`;
  }),
  minLength: (length: number) => {
    return rule('minLength', (value: string, label) => {
      return isEmpty(value) || value.length >= length || `${label}过短`;
    });
  },
  maxLength: (length: number) => {
    return rule('maxLength', (value: string, label) => {
      return isEmpty(value) || value.length <= length || `${label}过长`;
    });
  },
};
