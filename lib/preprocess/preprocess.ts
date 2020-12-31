export type ContentfulErrorResponse = {
    errors: {
        message: string;
        extensions: {
            contentful: {
                code: string;
                requestId: string;
            }
        }
    }[];
}

export type ContentfulSucessfulResponse = {
    data: {}
}

export type CollectionProps = {
    response: ContentfulSucessfulResponse 
    type: string;
}

export function contentful() {
    function extractCollection({ response, type }: CollectionProps) {
        return response.data[type];
    }

    return {
        extractCollection
    };
}