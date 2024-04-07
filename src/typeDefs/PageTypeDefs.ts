import { gql } from 'apollo-server';

const PageTypeDefs = gql`
    type Page {
        id: ID!
        title: String!
        blocks: [AnyBlock]
        versionNumber: Int!
    }

    input PageInput {
        title: String!
        blocks: [ID!]
    }
    
    extend type Query {
        getPages: [Page]
        getPage(id: ID!): Page
    }
    
    extend type Mutation {
        createPage(input: PageInput): Page
        updatePage(id: ID!, input: PageInput): Page
        deletePage(id: ID!): Page
    }
`;

export default PageTypeDefs;