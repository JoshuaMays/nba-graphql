const fetch = require('node-fetch')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat
} = require('graphql')

// this is the root url for stats.nba.com
let rootURL = 'http://stats.nba.com'

// these headers are required to make requests to stats.nba.com
let headers = {
  'user-agent': ('Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'),
  'Dnt': ('1'),
  'Accept-Encoding': ('gzip, deflate, sdch'),
  'Accept-Language': ('en'),
  'origin': ('http://stats.nba.com')
}

const PlayerType = require('./types/Player')
const TeamType = require('./types/Team');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      team: {
        type: TeamType,
        args: {
          id: { type: GraphQLInt },
          season: { type: GraphQLString },
          seasonType: { type: GraphQLString }
        },
        resolve: (root, args) => fetch(
          `${rootURL}/stats/teaminfocommon?leagueid=00&teamid=${args.id}&season=${args.season}&seasonType=${args.seasonType}`, {headers: headers}
        ).then(response => response.json())
      },
      player: {
        type: PlayerType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => {
          return fetch(
            `${rootURL}/stats/commonplayerinfo?playerId=${args.id}`, {headers: headers}
          ).then(response => response.json())
        }
      }
    })
  })
})
