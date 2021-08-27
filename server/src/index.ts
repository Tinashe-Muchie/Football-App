import { ApolloServer } from 'apollo-server';
import 'dotenv/config';
import typeDefs from './schema';
import resolvers from './resolvers';
import FootballAPI from './datasources/FootballAPI';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:  {
        API_KEY: process.env.API_KEY
    },
    dataSources: ()=> {
        return { 
            footballAPI: new FootballAPI()
        };
    }
});

server.listen().then(()=>{
    console.log(`server is running on port 4000`);
});