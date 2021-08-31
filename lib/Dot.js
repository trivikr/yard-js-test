var inherit = require("./inherit");
var Point = require("./Point");

var Dot = inherit(Point, {
  /**
   * Create a dot.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   * @param {number} width - The width of the dot, in pixels.
   */
  constructor(x, y, width) {
    Point.call(this, x, y);
    this.width = width;
  },

  /**
   * Get the dot's width.
   * @return {number} The dot's width, in pixels.
   */
  getWidth: function () {
    return this.x;
  },
});

modules.exports = Dot;
