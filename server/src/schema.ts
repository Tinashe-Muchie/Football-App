import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        "A query to get the league competitions in different countries"
        getLeagues(id: Int!): [Country!]!
    }

    "The country that provides different leagues/competitions"
    type Country {
        "The id of the country"
        idCountry: ID!
        "The name of the country"
        countryName: String!
        "The name of the league competition"
        name: String!
        league: [League!]!
    }

    "The league found in a particular country"
    type League {
        "The id of a particular league"
        idLeague: ID!
        "The name of the league"
        leagueName: String!
        "The year when the league started"
        start: String!
        "The year when the league ended/ will end"
        end: String!
        stage: [Stage]
        fixture: [Fixtures]
        allUpcomingFixtures: [Fixtures]
        leagueUpcomingFixtures: [Fixtures]
        inPlay: [Fixtures]
        teams: [Teams]
        players: [Players]
    }  

    "The stage of a league's season e.g semi-final"
    type Stage {
        "The id of a league's particular season"
        idSeason: ID!
        "The name of the stage"
        name: String!
        standings: [Standings]
    }

    "The standings of a chosen stage for a season"
    type Standings  {
        idTeam:Int
        teamName:String
        ga:Int
        ga_away:Int
        ga_home:Int
        gf:Int
        gf_away:Int
        gf_home:Int
        gd:Int
        gd_away:Int
        gd_home:Int
        p:Int
        p_away:Int
        p_home:Int
        w:Int
        w_away:Int
        w_home:Int
        d:Int
        d_away:Int
        d_home:Int
        l:Int
        l_away:Int
        l_home:Int
        pts:Int
        pts_away:Int
        pts_home:Int
        pos:Int
    }

    "The fixtures of a league's season"
    type Fixtures {
        countryName: String
        leagueName:String
        seasonName:String
        homeName:String!
        awayName:String!
        venueName:String!
        date:String!
        status:String!
        round:Int!
        attendance:Int!
        team_home_90min_goals:Int!
        team_away_90min_goals:Int!
        team_home_ET_goals:Int!
        team_away_ET_goals:Int!
        team_home_PEN_goals:Int!
        team_away_PEN_goals:Int!
        team_home_1stHalf_goals:Int!
        team_away_1stHalf_goals:Int!
        team_home_2ndHalf_goals:Int!
        team_away_2ndHalf_goals:Int!
        elapsed:Int!
        elapsedPlus:Int!
        referees: [Referee!]!
        lineup: [Lineup]
    }

    "The name of the referee of a particular match in a season"
    type Referee {
        refereeName:String!
    }

    "The lineup for a particular fixture"
    type Lineup {
        idTeam:ID
        teamName:String
        idPlayer:ID
        playerName:String
        position:String
        shirtNumber:Int
        isStartingXI:Boolean
    }

    "The teams that are participating in a particular season"
    type Teams {
        id:ID!
        name:String
        fullName:String
        country:String
        founded:String
        officialPage:String
        phone:String
        email:String
        address:String
        badgeURL:String
    }

    type Players {
        id:ID
        name:String
        fullName:String
        pob:String
        dob:String
        height:String
        weight:String
        foot:String
        photoURL:String
    }
`;

export default typeDefs;