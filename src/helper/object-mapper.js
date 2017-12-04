import isArray from './is-array'
import isDefined from './is-defined'

/**
 * Passing `node` to the `constructor` as argument
 *
 * @param {*} node
 * @returns {Object} Returns the object contains helper function `to`
 * @example
 *
 * objectMapper({}).to(function Foo() {})
 * // => [ <instance of Foo() {}> ]
 */
function objectMapper (node) {
  return {
    /**
     * mapping to an instance of `constructor`
     *
     * @param {Object} Element
     * @returns {Array} Returns the array of `constructor` instances
     */
    to: function (Element) {
      return (isArray(node) ? node : [node])
        .filter((item) => isDefined(item))
        .map((item) => new Element(item))
    }
  }
}

export default objectMapper
