import { RouteProps } from "../Interface";
import { Document } from "@contentful/rich-text-types";

export type CollectionParams = {
    skip?: number;
    limit?: number;
    where?: string;
    preview?: boolean;
}

export type ContentfulSucessfulResponse<T> = {
    data: T;
}

// export type ContentfulRichText = {
//     content: ContentfulRichText;
//     data: {};
//     marks?: [];
//     value?: string;
//     nodeType: string;
// }

// export type RouteProps = {
//     title: string;
//     path?: string;
//     routes?: RouteProps[];
// }

export type RouteContentType = {
    name: string;
    routes: RouteProps;
}

export interface PostContentType {
    title: string;
    slug: string;
    excerpt: string;
    date: string; // 2020-12-08T00:00:00.000Z
    author: {
        name: string;
        picture: {
            title: string;
            url: string;
        };
    };
    sys: {
        id: string;
    };
    coverImage: {
        title: string;
        url: string;
    };
    content: {
        json: Document;
        links: {
            entries: {
                inline: [unknown];
                block: [unknown];
            };
            assets: {
                block: ImageBlock[];
            }
        }
    };
}

export type ImageBlock = {
    sys: {
        id: string;
    };
    url: string;
    title: string;
    width: number;
    height: number;
    description: string | null;
}

export type ContentCollection<T> = {
    total: number;
    items: T[];
}

export type PostCollection = {
    postCollection: ContentCollection<PostContentType>;
}

export type RoutesCollection = {
    routesCollection: ContentCollection<RouteContentType>;
}

export type ContentfulApi = {
    getPosts(query: CollectionParams): Promise<PostCollection>
}