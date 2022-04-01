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

// PATCH
// API call to upset an existing ramen.

// DELETE
// API call to destroy a ramen from the database.
