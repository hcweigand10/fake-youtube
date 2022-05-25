import axios from "axios"

const KEY = "AIzaSyDkPdBkJZbJ97GpIezdUkvsPUP6FCPDPfk"

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?key=${KEY}`,
})
