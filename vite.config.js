export default {
  server: {
      proxy: {
          '/posts': 'http://localhost:3000',
      },
  },
};

