import { ContentfulApi} from "./interface";
import { getPosts } from "./posts";

const contentfulApi: ContentfulApi = {
    getPosts(query) {
        console.log(`Plain contenfulapi function called.`);
        return getPosts(query);
    }
};

export default contentfulApi;