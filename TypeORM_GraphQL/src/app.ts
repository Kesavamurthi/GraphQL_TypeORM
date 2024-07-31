import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { AppDataSource } from "./data-source";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";

AppDataSource.initialize()
.then(()=>{
    console.log('db is created');
})
.catch((err)=>{
    console.log(err);
})

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 4000 },
  }).then(() => {
    console.log(`Server ready at port 4000`);
  });