import _curryN from './internal/_curryN';
import _curry2 from './internal/_curry2';
import _curry1 from './internal/_curry1';
import _arity from './internal/_arity';

var curryN = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  // why not use _curryN(length, [], fn) dircetly
  // if you don't use _arity to wrap the function, you will lose the length for curried function
  return _arity(length, _curryN(length, [], fn));
});

export default curryN;
