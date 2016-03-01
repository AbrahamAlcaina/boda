import cors from 'cors';
import { graphql } from './graphql';

export default app => {
  app.use(cors());
  app.use('/graphql', graphql);
};
