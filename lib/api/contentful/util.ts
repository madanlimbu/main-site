import { CollectionParams } from "./interface";

export function convertCollectionParamsToQuery(params: CollectionParams): string {
        let queries: Array<string> = [];

        console.log(`params: `, params);

        if (params.skip) {
            queries.push(`skip: ${params.skip}`);
        }

        if (params.limit) {
            queries.push(`limit: ${params.limit}`);
        }

        if (params.where) {
            queries.push(`where: ${params.where}`);
        }

        queries.push(`preview: ${params.preview}`);
        
        return queries.length ? queries.join(', ') : '';
}