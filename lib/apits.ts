import { RouteProps } from "./api/Interface";
import { contentful, ContentfulSucessfulResponse } from "./preprocess/preprocess";


export async function fetchGraphQL(query, preview = false): Promise<ContentfulSucessfulResponse> {
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

export type RoutesCollection = {
  name: string;
  routes: RouteProps;
}
interface QueryMenuProps {
  menuName?: string;
  preview: boolean;
}
 
export async function queryMenus({ menuName, preview }: QueryMenuProps): Promise<RoutesCollection[]> {
    const menus = await fetchGraphQL(
        `query {
          routesCollection(${menuName ? `where: { name: ${menuName} },` : ''} preview: ${preview} ) {
            items {
              name
              routes
            }
          }
        }`, preview
    );
    return menus.data['routesCollection'].items;
    // return contentful().extractCollection({ response: menus, type: 'routesCollection' });
}
