import { gql } from 'apollo-server';

import PageTypeDefs from "@/typeDefs/PageTypeDefs";

import BlockTypeDefs from "@/typeDefs/BlockTypeDefs";

// Import all typeDefs for each block type
import TextBlockDefs from "@/typeDefs/TextBlockDefs";
import QuoteBlockDefs from "@/typeDefs/QuoteBlockDefs";

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