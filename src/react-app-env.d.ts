/// <reference types="react-scripts" />

declare type Tip = {
    id?: string;
    tag: string;
    place: string;
    text: string;
}

declare type ReducerAction<Payload> = {
    type: string;
    payload?: Payload;
}

declare type NotRequired<T> = T | undefined;