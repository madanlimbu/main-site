import api from "../../lib/api/contentful/client";

export default async function contentful(req, res) {
    const { service, args } = req.body;

    try {
        res.json(await api[service](args));
    } catch(error) {
        // Todo: comeback to have a generic way to handle invalid service request.
        res.status(404).end();
    }
}