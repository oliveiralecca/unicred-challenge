import { StyledTitle } from "./styles";

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <StyledTitle>{text}</StyledTitle>;
}
