import { ContentfulSucessfulResponse } from "./interface";

interface GraphqlQueryParams {
    query: string;
    preview: boolean;
}

export async function fetchGraphQL<T>(params: GraphqlQueryParams): Promise<ContentfulSucessfulResponse<T>> {
    const { query, preview } = params;
    const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
            },
            body: JSON.stringify({ query }),
        }
    )
    .then(response => response.json())
    .catch(e => {
      console.log(`Error on network request.`);
      throw e;
    });

    console.log(`responsess`, response);

    if (response?.errors) {
        console.log(`Error on response`);
        throw response;
    }

    return response;  
}
