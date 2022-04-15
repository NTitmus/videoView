import axios from 'axios';

const KEY = 'AIzaSyBW3lzjukbfGZ4egfVb30tH73zj4a6dQl4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
}

});