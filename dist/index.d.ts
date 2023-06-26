import './index.css';
import * as React from 'react';
import { DatePickerProps } from './DatePicker';
interface EnhanceDatePickerProps extends Pick<DatePickerProps, 'onCancel'> {
    isOpen?: boolean;
}
export declare type DateState = {
    value: Date;
    setValue: (value: Date) => void;
};
export declare const useStoreDate: import("zustand").UseBoundStore<import("zustand").StoreApi<DateState>>;
declare type ModalDatePickerProps = EnhanceDatePickerProps & DatePickerProps & {
    isPopup?: boolean;
};
declare const ModalDatePicker: React.FC<ModalDatePickerProps>;
export * from './types';
export type { ModalDatePickerProps, EnhanceDatePickerProps, DatePickerProps };
export default ModalDatePicker;
