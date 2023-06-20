import React from 'react';
import { Unit } from './types';
interface Props {
    type: Unit;
    value: Date;
    min: Date;
    max: Date;
    format: string | ((date: Date) => string);
    step: number;
    onSelect: Function;
    wheelClassName?: string;
    colOneClassName?: string;
    datePickerListClassName?: string;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;