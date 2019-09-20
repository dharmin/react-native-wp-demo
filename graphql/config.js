import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://mysite.test/graphql'
});

export default client;
