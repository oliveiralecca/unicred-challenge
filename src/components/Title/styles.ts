import styled from "styled-components";

export const StyledTitle = styled.h2`
  background: ${(props) => props.theme.colors["gold-800"]};
  color: ${(props) => props.theme.colors["gray-500"]};

  border: none;
  border-radius: 8px;

  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
