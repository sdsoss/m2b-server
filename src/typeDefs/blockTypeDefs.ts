import { gql } from 'apollo-server';

const blockTypeDefs = gql`
    type Block {
        id: ID!
        type: String!
        content: String
        url: String
    }

    input BlockInput {
        type: String!
        content: String
        url: String
    }
`;

export default blockTypeDefs;