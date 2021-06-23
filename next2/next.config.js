const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "next2",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Nav": "./components/Nav.js",
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    }
  },
})({
  reactStrictMode: true,
  future: {
    webpack5: true
  }
});
