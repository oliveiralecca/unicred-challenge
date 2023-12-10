import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) => props.theme.colors["green-700"]};
  color: ${(props) => props.theme.colors["gray-100"]};

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.225rem;

  border: none;
  border-radius: 8px;

  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: 0.1s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors["green-500"]};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
