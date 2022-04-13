// Import dependencies
import apiUrl from "../apiConfig"
import axios from "axios"

// Putting export at the beginning of each function makes it easy to destructure when you need it.
//
// INDEX
// Fetch call to pull all ramen from the API.
export const getAllRamen = () => {
    return axios(`${apiUrl}/ramen`)
}

// SHOW
// Fetch call for just the selected ramen.
export const getOneRamen = (ramenId) => {
    return axios(`${apiUrl}/ramen/${ramenId}`)
}

// POST
// API call to create a new ramen.
// The arguemnts are passing the things we need to make the POST happen (user info and newRamen object with the entered details).
export const createRamen = (user, newRamen) => {
    console.log("user:", user)
    console.log("newRamen:", newRamen)
    return axios({
        url: `${apiUrl}/ramen`,
        method: "POST",
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {ramen: newRamen }
    })
}

// PATCH
// API call to upset an existing ramen.

// DELETE
// API call to destroy a ramen from the database.
export const removeRamen = (user, ramenId) => {
    console.log("user:", user)
    return axios({
        url: `${apiUrl}/ramen/${ramenId}`,
        method: "DELETE",
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
