
const taobaoHeaders = {
    "x-rapidapi-host": "taobao-api.p.rapidapi.com",
    "x-rapidapi-key": "pgIpYdsMbLmshKSnodVWVQOZrSirp1U6HnIjsni2mklfznQrJ2",
    "Accept": "application/json"

}



// external api methods

export const searchForItems = (query, max_results) => {
    
    const url = `https://taobao-api.p.rapidapi.com/api?page_size=${max_results}&sort=default&q=${query}&api=item_search`
    const configuration = {
        method: "GET",
        headers: taobaoHeaders
    }

    return fetch(url, configuration).then(resp => resp.json())
}

// internal / our rails backend api methods

export const getPurchasedItems = (userId, token) => {

    const url = `http://localhost:3000/api/v1/users/${userId}/purchases`
    const configuration = {
        method: "GET",
        headers: {
           "Authorization": `Bearer ${token}`,
           "Accept": "application/json"
        }
    }
    
    return fetch(url, configuration).then(resp => resp.json())
}

export const authenticate = (token) => {
    const url = `http://localhost:3000/api/v1/auth`
    const configuration = {
        method: "POST",
        headers: {
           "Authorization": `Bearer ${token}`,
           "Accept": "application/json"
                                         }
    }
    return fetch(url, configuration).then(resp => resp.json())
}

export const buyItems = (items, token, userId) => {

    const url = `http://localhost:3000/api/v1/users/${userId}/purchases`
    const configuration = {
        method: "POST",
        headers: {
           "Content-Type": "application/json", 
           "Authorization": `Bearer ${token}`,
           "Accept": "application/json"
                                         },
        body: JSON.stringify({purchase: {items_attributes: items,
        user_id: userId, vendor: "TaoBao" }})
    }
    return fetch(url, configuration).then(resp => resp.json())


}

export const updateProfile = (profile, token, userId) => {
    const configuration = {
        method: "PATCH",
        headers: {

           "Content-Type": "application/json", 
           "Authorization": `Bearer ${token}`,
           "Accept": "application/json"

        },
        body: JSON.stringify({user: profile})
    }
    const url = `http://localhost:3000/api/v1/users/${userId}`
    return fetch(url, configuration).then(resp => resp.json())
}

