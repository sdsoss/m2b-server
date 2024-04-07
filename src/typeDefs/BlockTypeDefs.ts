import { gql } from 'apollo-server';

const BlockTypeDefs = gql`
    interface Block {
        id: ID!
        _type: String!
        versionNumber: Int!
        page: Page!
    }

    extend type Query {
        getBlock(id: ID!): AnyBlock
        getBlocks: [AnyBlock]
    }
    
    extend type Mutation {
        moveBlock(id: ID!, pageId: ID!): AnyBlock
        deleteBlock(id: ID!): AnyBlock
    }
`;

export default BlockTypeDefs;