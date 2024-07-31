export const userTypeDefs =`#graphql
    type User{
        id: ID!
        name: String
        Publications: String
        isAuthorised: Boolean
    }
    type Query{
        users: [User]
    }
`