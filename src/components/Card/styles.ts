import { Link } from "react-router-dom";

import styled from "styled-components";

export const CardContainer = styled(Link)`
  background: ${(props) => props.theme.colors["gray-500"]};
  color: ${(props) => props.theme.colors["gray-100"]};
  text-decoration: none;

  border: 1px solid ${(props) => props.theme.colors["gray-400"]};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  transition: 0.1s;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.225rem;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.colors["green-700"]};
  }
`;
