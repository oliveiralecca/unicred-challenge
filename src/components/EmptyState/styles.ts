import styled from "styled-components";

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4rem 1.5rem;
  border-radius: 8px;

  border-top: 1px solid ${(props) => props.theme.colors["gray-400"]};

  strong {
    margin-top: 1rem;
  }
`;
