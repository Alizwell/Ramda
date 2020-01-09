import _arity from './_arity';
import _isPlaceHolder from './_isPlaceHolder';

// version 1.0 without placeHolder
// eslint-disable-next-line no-unused-vars
function _curryN__(length, reveived, fn) {
  return function (...rest) {
    let left = length - reveived.length - rest.length;
    let combined = [...reveived, ...rest];
    return left <= 0
      ? fn.apply(this, combined)
      : _arity(left, _curryN__(length, combined, fn));
  };
}

// version 2.0 with placeHolder
// eslint-disable-next-line no-unused-vars
export default function _curryN(length, received, fn) {
  return function (...rest) {
    let left = length;
    let combined = [];
    let combinedIdx = 0;
    let argIdx = 0;
    while (combinedIdx < received.length || argIdx < rest.length) {
      let result;
      if (combinedIdx < received.length &&
        (!_isPlaceHolder(received[combinedIdx]) ||
          argIdx >= rest.length)
      ) {
        result = received[combinedIdx];
      } else {
        result = rest[argIdx];
        argIdx += 1;
      }

      combined[combinedIdx] = result;
      if (!_isPlaceHolder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0
      ? fn.apply(this, combined)
      : _arity(left, _curryN(length, combined, fn));
  };
}
