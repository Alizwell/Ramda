/**
 * @symb R.pipe(f,g,h)(a, b) = h(g(f(a, b)))
 */
export default function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
}