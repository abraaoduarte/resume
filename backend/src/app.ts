import Koa from 'koa';
import Router from 'koa-router';
import { graphqlHTTP, OptionsData } from 'koa-graphql';
import { GraphQLError } from 'graphql';
import koaPlayground from 'graphql-playground-middleware-koa';
import schema from './graphql/schema';

const router = new Router();
const app = new Koa();

router.get('/', async (ctx) => {
  ctx.body = 'first router';
});

const graphqlSettingsPerReq = async () => {
  return {
    graphiql: process.env.NODE_ENV !== 'production',
    schema,
    customFormatErrorFn: (error: GraphQLError) => {
      console.log(error.message);
      console.log(error.locations);
      console.log(error.stack);

      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack,
      };
    },
  } as OptionsData;
};

const graphqlServer = graphqlHTTP(graphqlSettingsPerReq);

router.all('/graphql', graphqlServer);

router.all(
  '/graphiql',
  koaPlayground({
    endpoint: '/graphql',
  })
);

app.use(router.routes()).use(router.allowedMethods());

export default app;
