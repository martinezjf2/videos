import axios from "axios";

const KEY = 'AIzaSyBjynl2RBOYcHoyAH_Om2WjkAuP-Vmz20A';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

// used axios to fetch data