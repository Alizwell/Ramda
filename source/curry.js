import _curry1 from './internal/_curry1';
import curryN from './curryN';

var curry = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

export default curry;
