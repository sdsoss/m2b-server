import { gql } from 'apollo-server';

const pageTypeDefs = gql`
    type Page {
        id: ID!
        title: String!
        blocks: [Block]
    }

    input PageInput {
        title: String!
        blocks: [ID!]
    }
`;

export default pageTypeDefs;