// Import dependencies
import apiUrl from "../apiConfig"
import axios from "axios"

// Fetch call to pull all ramen from the API
export const getAllRamen = () => {
    return axios(`${apiUrl}/ramen`)
}
