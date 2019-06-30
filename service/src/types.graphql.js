const {gql} = require('apollo-server/dist/index');

module.exports = gql`
    type Query {
    # Gets a list of suggested users.
        users: [User]!
    # Get a user by Id.     
        user(id: ID!): User
    # Get the current user profile. (Revisit this query)    
        profile(id: ID!): User
    # Gets filtered users on search by cuisine, restaurant or username.    
        search(cuisine: String, username: String, restaurant: String): [User] 
    # Gets a list of restaurants.
        restaurants: [Restaurant]! 
    #View sent invites or received invites
        viewMyInvitations(senderId: ID, receiverId: ID): [Invitation]!
    #View an invitation by invite ID    
        viewInvitation(id: ID!): Invitation                    
    }
    
    type User {
        id: ID!
        rating: Int
        username: String!
        email: String!
        preferredName: String!
        summary: String!
        createdOn: String!
        lastModifiedOn: String!
        city: String
        state: String
        country: String
        restaurants: [String]!
    }
    
    type Restaurant {
        id: ID!
        name: String!
        city: String!
        state: String!
        country: String!
        open: String!
        contact: String!
        cuisine: [String]!
    }
    
    type Invitation {
        id: ID!
        sender: ID!
        receiver: ID!
        accepted: Boolean!
        summary: String
        location: String!
        restaurant: String!
        time: String!
        createdOn: String!
    }
    
    type Mutation {
        login(username: String!, password: String!): User #sets login token in the cookie.
        createPreferences(ids: [ID!]!): UserUpdateResponse
        createProfile(username: String, preferredName: String, summary: String, city: String, state: String, country: String): UserUpdateResponse
        createInvitation(id: ID!, time: String!, restaurant: String!, location: String!): InvitationUpdateResponse
        acceptInvitation(id: ID!): InvitationUpdateResponse
        rateUser(id: ID!): UserUpdateResponse
        logout(username: String): Boolean #success or not. 
    }
    
    type UserUpdateResponse {
        success: Boolean!
        message: String!
        user: User
    }
    
    type InvitationUpdateResponse {
        success: Boolean!
        message: String!
        invitation: Invitation
    }    
`;