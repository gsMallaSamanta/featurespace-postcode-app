export interface PostcodeResponsePayload {
    postcode: string;
    country: string;
    region: string;
}

export interface BaseResponsePayload {
    status: number;
    result: PostcodeResponsePayload;
}

export interface BaseNearestResponsePayload {
    status: number;
    result: PostcodeResponsePayload[];
}