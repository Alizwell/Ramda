export default function _isPlaceHolder(a) {
  return a !== null &&
    typeof a === 'object' &&
    a['@@functional/placeholder'] === true;
}
