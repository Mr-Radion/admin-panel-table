export function dataToArray(obj) {
  let result = [];
  (function universalParsingData(self) {
    for (let key of Object.values(self)) {
      if (typeof key == 'object') {
        key = universalParsingData(key);
      } else {
        result.push(key);
      }
    }
  })(obj);
  return result;
}
