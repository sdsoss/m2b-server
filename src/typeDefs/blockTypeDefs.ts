import { gql } from 'apollo-server';

const blockTypeDefs = gql`
    type Block {
        id: ID!
        type: String!
        content: String
        url: String
        page: Page!
    }

    input BlockInput {
        type: String!
        content: String
        url: String
    }
    
    extend type Query {
        getBlock(id: ID!): Block
    }
    
    extend type Mutation {
        createBlock(pageId: ID!, input: BlockInput!): Block
        updateBlock(id: ID!, input: BlockInput!): Block
        moveBlock(id: ID!, pageId: ID!): Block
        deleteBlock(id: ID!): Block
    }
`;

export default blockTypeDefs;