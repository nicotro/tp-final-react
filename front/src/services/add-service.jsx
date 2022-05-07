import axios from 'axios'

const adds=[]

export const getAddsService = ()=>{
    return axios.get("http://localhost/adds")
}

export const getAddByIdService = (id)=>{
    return axios.get("http://localhost/add/"+id)
}


export const searchAddsService = (search) =>  new Promise((r, rej) => {
    r(adds.filter(a => a.title.includes(search)))
})


export const createAddService = (add) => {
    return axios.post("http://localhost/add", {...add})
}