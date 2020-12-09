export type ContentFullResponse = {
    data: {}
}

export type CollectionProps = {
    response: 
    type: string;
}

export function contentful() {
    function extractCollection({ type }: CollectionProps) {
    }

    return {
        extractCollection
    };
}