import { Api } from "../../lib/api/Interface";
import { ContentfulApi } from "../../lib/api/contentful/interface";
import { getPosts } from "../../lib/api/contentful/posts";

export const services = (): Api => {
    return {
        getPosts(args) {
            return getPosts(args);
        }
    };
};

export default async function proxy(req, res) {
    console.log(`proxy`);
    const { service, args } = req.body;

    try {
        res.json(await services()[service](args));
    } catch(error) {
        // Todo: comeback to have a generic way to handle invalid service request.
        res.status(404).end();
    }
}