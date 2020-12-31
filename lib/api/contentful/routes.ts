import { fetchGraphQL } from "./fetch";
import { CollectionParams, RoutesCollection } from "./interface";
import { convertCollectionParamsToQuery } from "./util";

export const routesCollectionQueryGraphQL = (query: CollectionParams): string => (
    `query {
        routesCollection(${convertCollectionParamsToQuery(query)}) {
          items {
            name
            routes
          }
        }
      }`
    );

export default async function queryRoutes(query: CollectionParams): Promise<RoutesCollection> {
    const params = {
        query: routesCollectionQueryGraphQL(query),
        preview: query.preview,
    };
    const routes = await fetchGraphQL<RoutesCollection>(params);
    return routes.data;
}    