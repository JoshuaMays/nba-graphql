const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Team',
  description: '...',

  fields: () => ({
    season: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][1]
    },
    city: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][2]
    },
    name: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][3]
    },
    shortName: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][4]
    },
    conference: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][5]
    },
    division: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][6]
    },
    wins: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[0].rowSet[0][8]
    },
    loses: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[0].rowSet[0][9]
    },
    winPercentage: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[0].rowSet[0][10]
    },
    confRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[0].rowSet[0][11]
    },
    divRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[0].rowSet[0][12]
    },
    minYear: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][13]
    },
    maxYear: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][14]
    },
    ptsRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[1].rowSet[0][3]
    },
    ptsPerGame: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[1].rowSet[0][4]
    },
    rebRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[1].rowSet[0][5]
    },
    rebPerGame: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[1].rowSet[0][6]
    },
    astRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[1].rowSet[0][7]
    },
    astPerGame: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[1].rowSet[0][8]
    },
    oppPointsRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[1].rowSet[0][9]
    },
    oppPointsPerGame: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[1].rowSet[0][10]
    }
  })
});