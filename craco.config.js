const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "~components": path.resolve(__dirname, "src/components"),
      "~containers": path.resolve(__dirname, "src/containers"),
      "~contexts": path.resolve(__dirname, "src/contexts"),
      "~hooks": path.resolve(__dirname, "src/hooks"),
      "~utils": path.resolve(__dirname, "src/utils"),
      "~": path.resolve(__dirname, "src/modules"),
    },
  },
};
