import { gql } from 'apollo-boost';

const initQuery = gql`
  query InitialQuery {
    tags(first: 10) {
      edges {
        node {
          id
          tagId
          name
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    categories(first: 10) {
      edges {
        node {
          id
          categoryId
          name
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    posts(first: 10) {
      edges {
        node {
          title
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default initQuery;
