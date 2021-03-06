import _arity from './internal/_arity';
import _pipe from './internal/_pipe';
import reduce from './reduce';
import tail from './tail';

/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
export default function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  let fns = Array.prototype.slice.call(arguments, 0);
  let last = fns.shift();
  return _arity(last.length, function (...rest) {
    return fns.reverse().reduce((prev, curr) => {
      return curr(prev);
    }, last(...rest));
  });
}
