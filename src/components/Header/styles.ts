import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors["gray-700"]};

  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 12.5rem;
    height: 100%;
  }
`;
