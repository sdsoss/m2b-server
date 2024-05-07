import { gql } from 'apollo-server';

const TextBlockDefs = gql`
    type TextBlock implements Block {
        id: ID!
        _type: String!
        content: TextBlockContent!
        versionNumber: Int!
        page: Page!
    }
    
    type TextBlockContent {
        text: String!
    }
    
    input TextBlockContentInput {
        text: String!
    }

    input TextBlockInput {
        _type: String = "TextBlock"
        content: TextBlockContentInput!
    }
    
    extend type Mutation {
        createTextBlock(pageId: ID!, input: TextBlockInput): TextBlock
        updateTextBlock(id: ID!, input: TextBlockInput): TextBlock
    }
`;

export default TextBlockDefs;