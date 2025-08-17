import { FunctionComponent } from "react";

interface ButtonProps {
    theme?: 'dark' | 'light';
    onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = () => {
  return <button>Clique aqui</button>;
}

export default Button;