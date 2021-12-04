var { schemaComposer } = require('graphql-compose');

var UserComposed = require('./User')

schemaComposer.Query.addFields(
    {
        ...UserComposed.queries
    }
);

schemaComposer.Mutation.addFields(
    {
        ...UserComposed.mutations
    }
);

const schema = schemaComposer.buildSchema();
module.exports = schema;