import { Api } from "./Interface";

export interface ServiceRequest {
    service: string,
    args?: unknown
}

const API_ENDPOINT = 'http://localhost:3000';

function requestApi(req?: ServiceRequest) {
    return fetch(`${API_ENDPOINT}/api/proxy`, {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(r => r.json());
}

const api: Api = {
    getPosts(query) {
        return requestApi({
            service: 'getPosts',
            args: query
        });
    }
}

export default api;