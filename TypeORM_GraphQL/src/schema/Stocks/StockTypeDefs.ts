export const stockTypeDefs =`#graphql
    type Stock {
        type: String
        price: Int
        quantity: Int
    }
    type Query {
        stocks: [Stock]
    }
`