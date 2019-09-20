import { gql } from 'apollo-boost';
import client from '../config';

client.query({
  query: gql`
    {
      tags {
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
      categories {
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
    }
  `
});
