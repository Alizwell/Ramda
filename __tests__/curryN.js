import curryN from '../source/curryN';

function add(a, b, c, d) {
  return a + b + c + d;
}

describe('test curryN', () => {
  it('test 1', () => {
    expect(curryN(4, add)(1, 2, 3, 4)).toBe(10);
    expect(curryN(4, add)(1, 2, 3)(4)).toBe(10);
    expect(curryN(4, add)(1, 2)(3)(4)).toBe(10);
    expect(curryN(4, add)(1)(2)(3)(4)).toBe(10);
    expect(curryN(4, add)(1)(2, 3, 4)).toBe(10);
    expect(curryN(4, add)(1, 2)(3, 4)).toBe(10);
    expect(curryN(4, add)(1, 2, 3)(4)).toBe(10);
    expect(curryN(4, add)()()(1, 2, 3)(4)).toBe(10);
  })

  it('test 1', () => {
    expect(curryN(4, add)(1, 3, 4)(2)).toBe(10);
  })

  it('test 1', () => {
    expect(curryN(4, add)()()(1, 3, 4)(2)).toBe(10);
    expect(curryN(4, add)()()(1, 3, 4)(2)).toBe(10);
    expect(curryN(4, add)()()(1, 3, 4)(2)).toBe(10);
  })
})
