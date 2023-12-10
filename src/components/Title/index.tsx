import { StyledTitle } from "./styles";

type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return <StyledTitle>{text}</StyledTitle>;
}
