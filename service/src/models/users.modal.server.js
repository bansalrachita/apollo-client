const data = require('../datasources/data');
const DataSource = require('apollo-datasource/dist/index').DataSource;
class UsersModalServer extends DataSource{
    constructor({store}){
        super();

        this.store = store;
    }
    async getAllLUsers() {
        const response = await setTimeout(() => data.users, 0);
        return Array.isArray(response)
            ? response.map(user => this.userReducer(user))
            : [];
    }

    /**
     * This is a function that gets called by ApolloServer when being setup.
     * This function gets called with the datasource config including things
     * like caches and context. We'll assign this.context to the request context
     * here, so we can know about the user making requests
     */
    initialize(config) {
        this.context = config.context;
    }

    userReducer(user) {
        return {
            id: user.id || 0,
            username: user.username,
            email: user.email,
            summary: user.summary,
            location: user.city + "," + user.state + user.country
        };
    }

    getUserByIds({ids}){
        return Promise.all(ids.map((id) => this.getUserById({id})));
    }

    async getUserById({id}) {
        return data.users.map(user => user.id === id);
    }
}

module.exports = UsersModalServer;