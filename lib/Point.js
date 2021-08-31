var inherit = require("./inherit");

var Point = inherit({
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  },

  /**
   * Get the x value.
   * @return {number} The x value.
   */
  getX: function () {
    return this.x;
  },

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY: function () {
    return this.y;
  },
});

modules.exports = Point;
