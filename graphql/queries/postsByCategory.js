import { gql } from 'apollo-boost';

const getPostsByCategory = gql`
  query getPostsByCategory($categoryId: ID!) {
    category(id: $categoryId) {
      posts {
        nodes {
          title
          excerpt
          id
          postId
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default getPostsByCategory;
