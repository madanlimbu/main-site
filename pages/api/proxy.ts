import { getPosts } from "../../lib/api/contentful/posts";
import { Api } from "../../lib/api/Interface";

export const services = (): Api => {
    return {
        getPosts(args) {
            return getPosts(args);
        }
    };
};

export default async function proxy(req, res) {
    const { service, args } = req.body;

    try {
        res.json(await services()[service](args));
    } catch(error) {
        // Todo: comeback to have a generic way to handle invalid service request.
        res.status(404).end();
    };
}