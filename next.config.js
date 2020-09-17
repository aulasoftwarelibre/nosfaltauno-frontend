module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:slug",
        destination: `${process.env.API_URL}/:slug`,
      },
    ];
  },
};
