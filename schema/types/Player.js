const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Player',
  description: '...',

  fields: () => ({
    personId: {
      type: GraphQLInt,
      resolve: json => json.resultSets[0].rowSet[0][0]
    },
    firstName: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][1]
    },
    lastName: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][2]
    },
    displayFirstLast: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][3]
    },
    displaylastCommaFirst: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][4]
    },
    displayFILast: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][5]
    },
    birthDate: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][6]
    },
    school: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][7]
    },
    country: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][8]
    },
    lastAffiliation: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][9]
    },
    height: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][10]
    },
    weight: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][11]
    },
    seasonExp: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][12]
    },
    jersey: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][13]
    },
    position: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][14]
    },
    rosterStatus: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][15]
    },
    teamId: {
      type: GraphQLInt,
      resolve: json => json.resultSets[0].rowSet[0][16]
    },
    teamName: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][17]
    },
    teamAbbreviation: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][18]
    },
    teamCode: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][19]
    },
    teamCity: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][20]
    },
    playerCode: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][21]
    },
    fromYear: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][22]
    },
    toYear: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][23]
    },
    dLeagueFlag: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][24]
    },
    gamesPlayedFlag: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][25]
    },
    draftYear: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][26]
    },
    draftRound: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][27]
    },
    draftNumber: {
      type: GraphQLString,
      resolve: json => json.resultSets[0].rowSet[0][28]
    },
    headlineStatsTimeFrame: {
      type: GraphQLString,
      resolve: json => json.resultSets[1].rowSet[0][2]
    },
    headlineStatsPoints: {
      type: GraphQLString,
      resolve: json => json.resultSets[1].rowSet[0][3]
    },
    headlineStatsAssists: {
      type: GraphQLString,
      resolve: json => json.resultSets[1].rowSet[0][4]
    },
    headlineStatsRebounds: {
      type: GraphQLString,
      resolve: json => json.resultSets[1].rowSet[0][5]
    },
    headlineStatsPie: {
      type: GraphQLString,
      resolve: json => json.resultSets[1].rowSet[0][6]
    }
  })
})