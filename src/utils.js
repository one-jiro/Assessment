import axios from "axios"
export const endPointUrl = ({start_date="2022-10-01",end_date="2022-10-29",thumbs=true}={}) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${start_date}&end_date=${end_date}&thumbs=${thumbs}`
    return axios.get(url)
}