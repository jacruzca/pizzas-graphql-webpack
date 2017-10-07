import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import typeDefs from './schemas';
import resolvers from './resolvers';

const endPoint = '/pizza_api';

const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use(endPoint, bodyParser.json(), graphqlExpress({
    schema
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: endPoint,
}));

export default app;