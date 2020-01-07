/* eslint-disable no-unused-vars */
import _isPlaceHolder from './_isPlaceHolder';

function _curry1__(fn) {
  return function (...rest) {
    return fn(...rest);
  };
}

export default function _curry1(fn) {
  return function f1(a) {
    if (f1.length === 0 || _isPlaceHolder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
