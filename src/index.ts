import { ApolloServer } from "apollo-server";
import mongoose  from "mongoose";

import typeDefs from './typeDefs/index';
import resolvers from './resolvers/index';

mongoose.connect(
    'mongodb://root:root@localhost:27017/m2b?authSource=admin'
)
    .then(() => console.log('Connecté à MongoDB avec succès'))
    .catch(err => console.error('Erreur de connexion à MongoDB', err));

const server = new ApolloServer(
    {
        typeDefs,
        resolvers
    }
);

server.listen({
    port: 4000
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});