const key = "685f8c0eaamshe1d63aad603f259p15eac7jsn4890b8464953";
const rapidapi = "api-football-v1.p.rapidapi.com";
const url = "https://api-football-v1.p.rapidapi.com/v3/";

/* 
Documentación https://rapidapi.com/api-sports/api/api-football/
 */
export async function getData() {
    return await fetch(`${url}players/topscorers?league=39&season=2021`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": rapidapi,
		"x-rapidapi-key": key
	}
})
    .then(response => response.json())
    .then(resultado => {return topScorers(resultado);})
}

function topScorers(objeto) {
    let scorers = [];
    for (let i = 0; i < 5; i++){
        scorers.push(objeto.response[i].player)
    }

    console.log(scorers);
    return scorers;
}