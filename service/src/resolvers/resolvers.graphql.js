module.exports = {
  Query: {
    users: (_, __, { dataSources }) =>
      dataSources.usersService.getAllLUsers(),
    user: (_, { id }, { dataSources }) =>
      dataSources.usersService.getUserByIds({ Id: id })
  }
};
