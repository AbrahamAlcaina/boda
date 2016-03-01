import graphqlHTTP from 'express-graphql';
import { schema } from './schema';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI || 'mongodb://app:Marti2015@ds033744.mlab.com:33744/heroku_0b8kmf5g');

export const graphql = graphqlHTTP({ schema, graphiql: true });
