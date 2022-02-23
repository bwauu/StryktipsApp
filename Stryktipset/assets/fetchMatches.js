export function getMatches() {

    return fetch('https://stryk.herokuapp.com/strycket2021')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.matches;
            

        })
}
