const paginateResults = require("../../utils").paginateResults;
console.log('paginateResults: ', paginateResults);
module.exports = {
  Query: {
    users: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allUsers = await dataSources.usersService.getAllLUsers();
      const users = paginateResults({
        after,
        pageSize,
        results: allUsers
      });

      return {
        users,
        cursor: users.length ? users[users.length - 1].cursor : null,
        hasMore: users.length
          ? users[users.length - 1].cursor !==
            allUsers[allUsers.length - 1].cursor
          : false
      };
    },
    user: (_, { id }, { dataSources }) =>
      dataSources.usersService.getUserById({ Id: id })
  }
};
