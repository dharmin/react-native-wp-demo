import { gql } from 'apollo-boost';

const endCursor = () => `pageInfo {
  endCursor
  hasNextPage
}`;

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
     ${endCursor()}
    }
    categories(first: 10) {
      edges {
        node {
          id
          categoryId
          name
        }
      }
      ${endCursor()}
    }
    posts(first: 10) {
      edges {
        node {
          id
          postId
          title
          featuredImage {
            sourceUrl
          }
          excerpt
        }
      }
      ${endCursor()}
    }
  }
`;

export default initQuery;
