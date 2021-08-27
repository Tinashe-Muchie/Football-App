import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

class FootballAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL='https://elenasport-io1.p.rapidapi.com';
    }
    /*will sendRequest is used to set headers for a request*/
    willSendRequest(request:RequestOptions) {
        request.headers.set('x-rapidapi-host', 'elenasport-io1.p.rapidapi.com');
        request.headers.set('x-rapidapi-key', this.context.API_KEY);
    }

    async getLeagues(idCountry: number) {
        const {data} = await this.get(`v2/countries/${idCountry}/leagues`);
        return data;
    }

    async getSeasons(idLeague: number) {
        const {data} = await this.get(`v2/leagues/${idLeague}/seasons`);
        return data;
    }

    async getSeasonStage(idSeason: number) {
        const {data} = await this.get(`v2/seasons/${idSeason}/stage`);
        return data;
    }

    async getFixtures(idSeason: number) {
        const {data} = await this.get(`v2/seasons/${idSeason}/fixtures`);
        return data;
    }

    async getAllUpcoming() {
        const {data} = await this.get(`v2/upcoming`);
        return data;
    }

    async getLeaguesUpcoming(idSeason: number) {
        const {data} = await this.get(`v2/seasons/${idSeason}/upcoming`);
        return data;
    }

    async getInPlay(idSeason: number) {
        const {data} = await this.get(`v2/seasons/${idSeason}/inplay`);
        return data;
    }

    async getLineups(idFixture: number) {
        const {data} = await this.get(`v2/fixtures/${idFixture}/lineups`);
        return data;
    }

    async getStandings(idStage: number) {
        const {data} = await this.get(`v2//stages/${idStage}/standing`);
        return data;
    }

    async getTeams(idSeason: number) {
        const {data} = await this.get(`v2/seasons/${idSeason}/teams`);
        return data;
    }

    async getPlayers(idSeason: number) {
        const {data} = await this.get(`v2/seasons/${idSeason}/teams`);
        return data;
    }
}

export default FootballAPI;