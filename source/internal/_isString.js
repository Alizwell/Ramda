export default function _isString(val) {
  return Object.prototype.toString.call(val) === '[object String]';
}
