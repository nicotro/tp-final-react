import axios from 'axios'

export const getAddsService = () => {
    return axios.get("http://localhost/adds")
}

export const getAddByIdService = (id) => {
    return axios.get("http://localhost/add/" + id)
}


export const searchAddsService = (search) => {
    return axios.get("http://localhost/adds/search/" + search)
}


export const createAddService = (add) => {
    return axios.post("http://localhost/add", { ...add })
}