import { gql } from 'apollo-boost';

const searchPosts = gql`
  query SearchPosts($keyword: String!, $cursor: String) {
    posts(last: 20, where: { search: $keyword }, before: $cursor) {
      nodes {
        title
        id
      }
      pageInfo {
        startCursor
        hasPreviousPage
      }
    }
  }
`;

export default searchPosts;
