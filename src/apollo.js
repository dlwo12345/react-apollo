import {ApolloClient, InMemoryCache} from '@apollo/client';

// ref: https://www.apollographql.com/docs/react/get-started/
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export default client;
