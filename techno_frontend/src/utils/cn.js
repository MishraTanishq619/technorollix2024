const { clsx } = require("clsx");
const classNames = require("classnames");

function cn(...inputs) {
  return classNames(inputs);
}

module.exports = { cn };
