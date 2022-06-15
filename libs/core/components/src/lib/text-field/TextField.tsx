import {
  styled,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

/* eslint-disable-next-line */
export type TextFieldProps = {} & MuiTextFieldProps;

export function TextField(props: TextFieldProps) {
  return <StyledTextField {...props} />;
}

const StyledTextField = styled(MuiTextField)({});

export default TextField;
