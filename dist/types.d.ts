export declare type Unit = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';
export declare enum Direction {
    UP = 1,
    DOWN = -1
}
export declare const Themes: readonly ["default", "dark", "ios", "android", "android-dark"];
export declare type Theme = typeof Themes[number];
export interface DateConfig {
    format: string;
    caption: string;
    step: number;
    type: Unit;
}
export declare const dateConfigMap: {
    [key in Unit]: DateConfig;
};
