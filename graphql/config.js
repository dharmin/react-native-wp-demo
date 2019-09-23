import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://wordcamp-pwa-demo.dev5.rt.gw/graphql'
});

export default client;
