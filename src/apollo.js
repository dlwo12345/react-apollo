import {ApolloClient, InMemoryCache} from '@apollo/client';

// ref: https://www.apollographql.com/docs/react/get-started/
const client = new ApolloClient({
  uri: 'https://movieql.now.sh',
  cache: new InMemoryCache(),
});

export default client;
