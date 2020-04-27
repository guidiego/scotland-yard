/* eslint-disable @typescript-eslint/no-explicit-any */
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
declare type AnyObject<T = string, X = any> = Record<T, T>
declare type AnyFunction = (...any) => any;

declare type AvailableStates = Record<string, {
    reducer: [React.Reducer<any, any>, AnyObject];
    actions: AnyObject;
}>