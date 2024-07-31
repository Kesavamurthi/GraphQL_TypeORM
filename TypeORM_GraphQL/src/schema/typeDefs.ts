import { userTypeDefs } from "./userData/userTypedef";
import { stockTypeDefs } from "./Stocks/StockTypeDefs";

const combinedTypeDefs = [userTypeDefs,stockTypeDefs]
export const typeDefs = [...combinedTypeDefs];