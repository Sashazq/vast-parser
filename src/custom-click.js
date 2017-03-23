class CustomClick {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.id = node.attr('id')
    this.uri = node.keyValue
  }
}

export default CustomClick
