const path = require("path");
module.exports = {
  resolve: {
    extensions: [".js", "scss", "json"],
    alias: {
      "@/components": path.resolve(__dirname, "..", "src/components")
    }
  }
};
