import { fetchGraphQL } from "./fetch";
import { CollectionParams, PostCollection } from "./interface";
import { convertCollectionParamsToQuery } from "./util";

export const postCollectionQueryGraphQL = (query: CollectionParams): string => (
  `query {
    postCollection(${convertCollectionParamsToQuery(query)}) {
      total,
      items {
        title,
        slug,
        date,
        excerpt,
        sys {
          id
        }
        coverImage {
          title,
          url
        }
        content {
          json
        }
      }
    }
  }`
  );

export async function getPosts(query: CollectionParams): Promise<PostCollection> {
    const params = {
      query: postCollectionQueryGraphQL(query),
      preview: query.preview,
    };
    const posts = await fetchGraphQL<PostCollection>(params);
    return posts.data;
}
