import { FieldError } from "react-hook-form";
import { InputProps } from "../input/index.type";

export type FromInputProps = {
  label: string;
  error?: FieldError | undefined;
} & InputProps;
