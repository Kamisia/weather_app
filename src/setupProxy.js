const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // ścieżka, na której będzie działać proxy
    createProxyMiddleware({
      target: "https://api.weatherapi.com", // docelowy adres URL API Google Places
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // usuwa /api z żądania, przed przekierowaniem do docelowego serwera
      },
    })
  );
};
