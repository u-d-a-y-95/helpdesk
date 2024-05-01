export type InputProps = {
  name?: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
  value?: string;
  onChange?: () => void;
};
