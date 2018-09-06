/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-08-21 10:49:08
 */

export function detectIE () {
  if (typeof window === 'undefined' || !window.navigator || !window.navigator.userAgent) {
    return false;
  }
  const ua = window.navigator.userAgent;
  const MSIE = 'MSIE ';
  const msie = ua.indexOf(MSIE);
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(
      ua.substring(msie + MSIE.length, ua.indexOf('.', msie)),
      10,
    );
  }
  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    const RV = 'rv:';
    const rv = ua.indexOf(RV);
    return parseInt(ua.substring(rv + RV.length, ua.indexOf('.', rv)), 10);
  }
  const EDGE = 'Edge/';
  const edge = ua.indexOf(EDGE);
  if (edge > 0) {
    // IE 12 => return version number
    return parseInt(
      ua.substring(edge + EDGE.length, ua.indexOf('.', edge)),
      10,
    );
  }
  // other browser
  return false;
}

export const isIE = detectIE();
