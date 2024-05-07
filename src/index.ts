import { ApolloServer } from "apollo-server";
import mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config(
    {
        path: '.env.local',
    }
);

import typeDefs from './graphql/schemas/index';
import resolvers from './graphql/resolvers/index';


mongoose.connect(
    process.env.MONGODB_URI
)
.then(() => {
    console.log('Connecté à MongoDB');
    new ApolloServer(
        {
            typeDefs,
            resolvers
        }
    ).listen({
        port: process.env.PORT
    }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    }).catch(err => console.error('Erreur de démarrage du serveur Apollo', err));
})
.catch(err => console.error('Erreur de connexion à MongoDB', err))
