import { gql } from 'apollo-server';

const QuoteBlockDefs = gql`
    type QuoteBlock implements Block {
        id: ID!
        _type: String!
        page: Page!
        versionNumber: Int!
        content: QuoteBlockContent!
    }
    
    type QuoteBlockContent {
        quote: String!
        author: String!
    }
    
    input QuoteBlockContentInput {
        quote: String!
        author: String!
    }

    input QuoteBlockInput {
        _type: String = "QuoteBlock"
        content: QuoteBlockContentInput!
    }
    
    extend type Mutation {
        createQuoteBlock(pageId: ID!, input: QuoteBlockInput): QuoteBlock
        updateQuoteBlock(id: ID!, input: QuoteBlockInput): QuoteBlock
    }

`;

export default QuoteBlockDefs;