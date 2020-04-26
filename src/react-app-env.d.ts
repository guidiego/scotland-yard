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

declare type AvailableStates = Record<string, {
    reducer: [React.Reducer<any, any>, any],
    actions: any
}>