import { ApolloServer } from "apollo-server";
import mongoose  from "mongoose";

import typeDefs from './typeDefs/index';
import resolvers from './resolvers/index';

mongoose.connect(
    'mongodb://root:root@localhost:27017/m2b?authSource=admin'
)
.then(() => {
    console.log('Connecté à MongoDB');
    new ApolloServer(
        {
            typeDefs,
            resolvers
        }
    ).listen({
        port: 4000
    }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    }).catch(err => console.error('Erreur de démarrage du serveur Apollo', err));
})
.catch(err => console.error('Erreur de connexion à MongoDB', err))
