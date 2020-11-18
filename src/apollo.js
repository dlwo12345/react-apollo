import {ApolloClient, InMemoryCache} from '@apollo/client';

// ref: https://www.apollographql.com/docs/react/get-started/
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, {id}, {cache}) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: true,
            medium_cover_image: 'lalalalal',
          },
        });
      },
    },
  },
});

export default client;
