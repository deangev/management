import { TextField as MuiTextField } from '@mui/material';
import { ChangeEvent, memo } from 'react';

export interface TextFieldProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
}

export const TextField = memo(
  ({ placeholder, value, name, onChange, type }: TextFieldProps) => {
    return (
      <MuiTextField
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        inputProps={
          type === 'number' ? { inputMode: 'numeric', pattern: '[0-9]*' } : {}
        }
      />
    );
  }
);

export default TextField;
