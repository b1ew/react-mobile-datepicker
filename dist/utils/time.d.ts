import { Unit } from '../types';
export declare function convertDate(date: Date, format: string): string;
export declare function nextYear(now: Date, index?: number): Date;
export declare function nextMonth(now: Date, index?: number): Date;
export declare function nextDate(now: Date, index?: number): Date;
export declare function nextHour(now: Date, index?: number): Date;
export declare function nextMinute(now: Date, index?: number): Date;
export declare function nextSecond(now: Date, index?: number): Date;
export declare const nextMap: {
    [k in Unit]: typeof nextYear | typeof nextMonth | typeof nextDate | typeof nextMinute | typeof nextSecond | typeof nextHour;
};
