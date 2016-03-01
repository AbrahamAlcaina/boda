import graphqlHTTP from 'express-graphql';
import { schema } from './schema';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhosts');

export const graphql = graphqlHTTP({ schema: schema, graphiql: true });
