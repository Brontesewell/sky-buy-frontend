
const taobaoHeaders = {
    "x-rapidapi-host": "taobao-api.p.rapidapi.com",
    "x-rapidapi-key": "pgIpYdsMbLmshKSnodVWVQOZrSirp1U6HnIjsni2mklfznQrJ2",
    "Accept": "application/json"

}


export const searchForItems = (query, max_results) => {
    
    const url = `https://taobao-api.p.rapidapi.com/api?page_size=${max_results}&sort=default&q=${query}&api=item_search`
    const configuration = {
        method: "GET",
        headers: taobaoHeaders
    }

    return fetch(url, configuration).then(resp => resp.json())


   
} 