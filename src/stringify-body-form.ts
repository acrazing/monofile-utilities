/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-07-30 18:58:57
 */

import {
  isArray,
  isBlob,
  isDate,
  isFile,
  isNull,
  isObject,
  isUndefined,
} from './is'

function objectToFormData(
  obj: any,
  fd = new FormData(),
  pre = '',
  hasBlob = false,
): [FormData, boolean] {
  if (isUndefined(obj)) {
    return [fd, hasBlob]
  } else if (isNull(obj)) {
    fd.append(pre, '')
  } else if (isArray(obj)) {
    if (!obj.length) {
      const key = pre + '[]'
      fd.append(key, '')
    } else {
      obj.forEach((value, index) => {
        const key = pre + '[' + index + ']'
        hasBlob = objectToFormData(value, fd, key, hasBlob)[1]
      })
    }
  } else if (isDate(obj)) {
    fd.append(pre, obj.toISOString())
  } else if (isObject(obj) && !isFile(obj) && !isBlob(obj)) {
    Object.keys(obj).forEach((prop) => {
      const value = (obj as any)[prop]
      if (isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2)
        }
      }
      const key = pre ? (pre + '[' + prop + ']') : prop
      hasBlob = objectToFormData(value, fd, key, hasBlob)[1]
    })
  } else {
    fd.append(pre, obj)
  }
  hasBlob = hasBlob || isBlob(obj)

  return [fd, hasBlob]
}

export function stringifyBodyForm(input: any) {
  const [fd, hasBlob] = objectToFormData(input)
  return [
    hasBlob ? 'multipart/formdata' : 'application/x-www-form-urlencoded',
    fd,
  ]
}
