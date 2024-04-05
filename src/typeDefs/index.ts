import { gql } from 'apollo-server';

import blockTypeDefs from "./blockTypeDefs";
import pageTypeDefs from "./pageTypeDefs";

// Utiliser gql pour étendre des types si nécessaire
const linkSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }
`;


const typeDefs = [linkSchema, blockTypeDefs, pageTypeDefs];

export default typeDefs;