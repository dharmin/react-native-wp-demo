import { gql } from 'apollo-boost';

const getPostsByCategory = gql`
  query getPostsByCategory($categoryId: ID!, $cursor: String) {
    category(id: $categoryId) {
      posts(first: 10, after: $cursor) {
        nodes {
          title
          excerpt
          id
          postId
          featuredImage {
            sourceUrl
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export default getPostsByCategory;
