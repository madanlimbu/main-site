import { ServiceRequest, Api } from "./Interface";
import { ContentfulApi } from "./contentful/interface";

// const API_ENDPOINT = 'http://localhost:3000';
const API_ENDPOINT = 'http://localhost:3000/api/contentful';

function requestApi(req?: ServiceRequest) {
    console.log(`requestApi:`, req);
    return fetch(`${API_ENDPOINT}`, {
        // return fetch(`${API_ENDPOINT}/api/proxy`, {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(r => r.json());
}

const api: ContentfulApi = {
    getPosts(query) {
        return requestApi({
            service: 'getPosts',
            args: query
        });
    }
}

export default api;