import { gql } from 'apollo-boost';

const getSinglePost = gql`
  query getSinglePost($id: ID!) {
    postBy(id: $id) {
      title
      excerpt
      id
      postId
      featuredImage {
        sourceUrl
      }
    }
  }
`;

export default getSinglePost;
