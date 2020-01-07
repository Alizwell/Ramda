/* eslint-disable no-unused-vars */
import _isPlaceHolder from './_isPlaceHolder';
import _curry1 from './_curry1';

function _curry2__(fn) {
  return function f1(a, b) {
    if (arguments.length >= 2) {
      return fn(arguments);
    } else if (arguments.length === 1) {
      return (b1) => {
        return fn(a, b1);
      };
    } else {
      return f1;
    }
  };
}


export default function _curry2(fn) {
  return function f1(a, b) {
    if (arguments.length === 0) {
      return f1;
    } else if (arguments.length === 1) {
      return _isPlaceHolder(a) ? f1 : _curry1((b1) => fn(a, b1));
    } else {
      return _isPlaceHolder(a) && _isPlaceHolder(b)
        ? f1
        : _isPlaceHolder(a)
          ? _curry1((a1) => fn(a1, b))
          : _isPlaceHolder(b)
            ? _curry1((b1) => fn(a, b1))
            : fn(a, b);
    }
  };
}
