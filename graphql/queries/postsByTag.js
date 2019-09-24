import { gql } from 'apollo-boost';

const getPostsByTag = gql`
  query getPostsByTag($categoryId: ID!) {
    tag(id: $categoryId) {
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

export default getPostsByTag;
