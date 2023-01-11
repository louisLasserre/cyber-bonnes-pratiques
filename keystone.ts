import { config } from '@keystone-6/core';

import { Quizz } from './schemas';

export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
  },
  lists: { Quizz },
});
