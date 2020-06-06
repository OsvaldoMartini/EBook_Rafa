const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/**',
    proxy({
      target: 'http://localhost:9095',
      changeOrigin: true,
    }),
  );

  app.use(
    '/api/backlog',
    proxy({
      target: 'http://localhost:9095',
      changeOrigin: true,
    }),
  );
  app.use(
    '/v1/gathering',
    proxy({
      target: 'http://localhost:10000',
      changeOrigin: true,
    }),
  );
  app.use(
    '/socketio',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );

  app.use(
    '/cxf/ConvenienceCardWebsiteRSServiceCH',
    proxy({
      protocol: 'https',
      target:
        'https://esb-b1.cc-wo-ccsweb-t3.ittest.cornercard.local',
      changeOrigin: true,
    }),
  );
};
