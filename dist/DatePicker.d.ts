/**
 * @module DatePicker Component
 */
import React from 'react';
import { DateConfig, Theme, Unit } from './types';
export interface DatePickerProps {
    theme?: Theme;
    value?: Date;
    min?: Date;
    max?: Date;
    customHeader?: React.ReactNode;
    showHeader?: boolean;
    showFooter?: boolean;
    showCaption?: boolean;
    dateConfig?: Unit[] | DateConfig[];
    headerFormat?: string;
    confirmText?: string;
    cancelText?: string;
    onChange?: Function;
    onSelect?: Function;
    onCancel?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}
/**
 * Class DatePicker Component Class
 * @extends Component
 */
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
