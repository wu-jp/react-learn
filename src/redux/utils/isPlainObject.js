/**
 * 判断某个对象是否是一个plain-object（平面对象）
 * @param obj
 * @returns {boolean}
 */
export default function (obj) {
  if (typeof obj !== "object") {
    return false
  }
  return Object.getPrototypeOf(obj) === Object.prototype
}
