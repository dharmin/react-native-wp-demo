import { gql } from 'apollo-boost';

const searchPosts = gql`
  query SearchPosts($keyword: String!, $cursor: String) {
    posts(last: 10, where: { search: $keyword }, before: $cursor) {
      nodes {
        title
        id
      }
      pageInfo {
        endCursor
        hasPreviousPage
      }
    }
  }
`;

export default searchPosts;
