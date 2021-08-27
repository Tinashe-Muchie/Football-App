const resolvers ={
    Query: {
        /*returns an array of competitions in a particular country*/
        getLeagues: (_: unknown, {id}: {id:number}, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getLeagues(id);
        }
    },

    Country: {
        /*returns an array of the seasons of a particular league*/
        league: ( {id}:{id: number}, _: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getSeasons(id);
        }
    },

    League: {
        /*returns an array of the stages in a particular season*/
        stage:  ({id}:{id: number}, _: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getSeasonStage(id);
        },

        /*returns an array of fixtures of a season*/
        fixture: ({id}:{id: number}, _: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getFixtures(id);
        },

        /*returns an array of all the fixtures to be played in the next 24 hours across
        different leagues*/
        allUpcomingFixtures: (_: unknown, __: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getAllUpcoming();
        },

        /*returns an array of all the fixtures to be played in 24 hours in a particular 
        league*/
        leagueUpcomingFixtures: ({id}:{id: number},_: number, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getLeaguesUpcoming(id);
        },

        /*returns an array of all fixtures that are currently being played*/
        inPlay: ({id}:{id: number}, _: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getInPlay(id);
        },

        /*returns an array of all teams that are participating in a season*/
        teams: ({id}:{id: number}, _: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getTeams(id);
        },

        /*returns an array of all the players involved in particular season*/
        players: ({id}:{id: number}, _: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getPlayers(id);
        }
    },

    Stage: {
        /*returns an array of standings for a particular stage in the season*/
        standings: ({id}:{id: number}, _: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getStandings(id);
        }
    },

    Fixtures: {
        /*returns an array of lineups for teams that participated in a fixture*/
        lineup: ({id}:{id: number}, _: unknown, {dataSources}:{dataSources: any}) => {
            return dataSources.footballAPI.getLineups(id);
        }
    }
}

export default resolvers;