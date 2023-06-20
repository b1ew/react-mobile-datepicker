import { DateConfig } from '../types';
export declare const isTouchEvent: <T extends HTMLElement>(e: import("react").TouchEvent<T> | import("react").MouseEvent<T, MouseEvent>) => e is import("react").TouchEvent<T>;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isDateConfigKey: (val: unknown) => val is import("../types").Unit;
export declare const isObject: (val: unknown) => val is Record<string, unknown>;
export declare const isDateConfig: (val: unknown) => val is DateConfig;
export declare const isTheme: (val: unknown) => val is "default" | "dark" | "ios" | "android" | "android-dark";
