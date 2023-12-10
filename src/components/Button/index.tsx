import { ButtonHTMLAttributes, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  path?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function Button({
  text,
  path,
  children: icon,
  onClick,
  ...props
}: ButtonProps) {
  const navigate = useNavigate();

  function onClickButton() {
    return path ? navigate(path) : onClick?.();
  }

  return (
    <ButtonContainer onClick={onClickButton} {...props}>
      {text}
      {icon}
    </ButtonContainer>
  );
}
