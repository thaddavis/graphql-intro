var { composeMongoose } = require('graphql-compose-mongoose');

var User = require('../models/User')

const customizationOptions = {}; // left it empty for simplicity, described below
const UserTC = composeMongoose(User, customizationOptions);

module.exports = {
    queries: {
        userById: UserTC.mongooseResolvers.findById(),
        userByIds: UserTC.mongooseResolvers.findByIds(),
        userOne: UserTC.mongooseResolvers.findOne(),
        userMany: UserTC.mongooseResolvers.findMany(),
        userDataLoader: UserTC.mongooseResolvers.dataLoader(),
        userDataLoaderMany: UserTC.mongooseResolvers.dataLoaderMany(),
        userByIdLean: UserTC.mongooseResolvers.findById({ lean: true }),
        userByIdsLean: UserTC.mongooseResolvers.findByIds({ lean: true }),
        userOneLean: UserTC.mongooseResolvers.findOne({ lean: true }),
        userManyLean: UserTC.mongooseResolvers.findMany({ lean: true }),
        userDataLoaderLean: UserTC.mongooseResolvers.dataLoader({ lean: true }),
        userDataLoaderManyLean: UserTC.mongooseResolvers.dataLoaderMany({ lean: true }),
        userCount: UserTC.mongooseResolvers.count(),
        userConnection: UserTC.mongooseResolvers.connection(),
        userPagination: UserTC.mongooseResolvers.pagination(),
    },
    mutations: {
        userCreateOne: UserTC.mongooseResolvers.createOne(),
        userCreateMany: UserTC.mongooseResolvers.createMany(),
        userUpdateById: UserTC.mongooseResolvers.updateById(),
        userUpdateOne: UserTC.mongooseResolvers.updateOne(),
        userUpdateMany: UserTC.mongooseResolvers.updateMany(),
        userRemoveById: UserTC.mongooseResolvers.removeById(),
        userRemoveOne: UserTC.mongooseResolvers.removeOne(),
        userRemoveMany: UserTC.mongooseResolvers.removeMany(),
    }   
}