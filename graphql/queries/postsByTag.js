import { gql } from 'apollo-boost';

const getPostsByTag = gql`
  query getPostsByTag($tagId: ID!, $cursor: String) {
    tag(id: $tagId) {
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

export default getPostsByTag;
