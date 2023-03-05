import axios from 'axios'

const API_URL = '/api/clubs/'

//Create new club
const createClub = async (clubData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.post(API_URL, clubData, config)

    return response.data
}

//Get user clubs
const getClubs = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

//Delete clubs

const deleteClub = async (clubId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + clubId, config)

    return response.data
}

//join clubs

/*const joinClub = async (clubId, userId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.put(API_URL + clubId, {
        members: [{name: userId.name}]
    }, config)

    return response.data
}*/


const clubService = {
    createClub,
    getClubs,
    deleteClub,
    //joinClub,
}

export default clubService