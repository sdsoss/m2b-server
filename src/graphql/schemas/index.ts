import { gql } from 'apollo-server';

import PageTypeDefs from "@/graphql/schemas/PageTypeDefs";

import BlockTypeDefs from "@/graphql/schemas/BlockTypeDefs";

// Import all typeDefs for each block type
import TextBlockDefs from "@/graphql/schemas/TextBlockDefs";
import QuoteBlockDefs from "@/graphql/schemas/QuoteBlockDefs";

// Utiliser gql pour étendre des types si nécessaire
const linkSchema = gql`
    scalar JSON

    union AnyBlock = TextBlock | QuoteBlock
    
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }
`;


const typeDefs = [
    linkSchema,
    PageTypeDefs,
    BlockTypeDefs,
    QuoteBlockDefs,
    TextBlockDefs
];

export default typeDefs;