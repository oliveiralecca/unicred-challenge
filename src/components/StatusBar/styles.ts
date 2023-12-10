import styled from "styled-components";

export const StatusBarContainer = styled.div`
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme.colors["green-500"]};

  p {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.908rem;

    background: ${(props) => props.theme.colors["gray-400"]};

    min-width: 1.563rem;
    height: 1.188rem;
    border-radius: 999px;

    padding: 0.125rem 0.5rem;
  }
`;
