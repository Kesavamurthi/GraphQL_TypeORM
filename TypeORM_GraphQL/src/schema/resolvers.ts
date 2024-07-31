import { stockResolvers } from "./Stocks/StockResolver";
import { userResolvers } from "./userData/userResolver";

const combinedresolvers = [stockResolvers,userResolvers]
export const resolvers = [...combinedresolvers];