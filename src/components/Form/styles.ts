import { Link } from "react-router-dom";

import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    margin-top: 1.5rem;
  }
`;

export const RadioFieldsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 1rem;
`;

export const RadioContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  label {
    color: ${(props) => props.theme.colors["gray-200"]};
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;

  label {
    color: ${(props) => props.theme.colors["gray-200"]};

    span {
      color: ${(props) => props.theme.colors["red-300"]};
    }

    span:hover {
      cursor: help;
    }
  }
`;

export const SmallFieldsBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DefaultInput = styled.input<{ $error?: boolean }>`
  background: ${(props) => props.theme.colors["gray-500"]};
  color: ${(props) => props.theme.colors["gray-100"]};

  border: 1px solid
    ${(props) =>
      props.$error
        ? props.theme.colors["red-300"]
        : props.theme.colors["gray-400"]};
  border-radius: 8px;

  padding: 0.5rem;
  color-scheme: dark;

  &::placeholder {
    color: ${(props) => props.theme.colors["gray-300"]};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors["green-500"]};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${(props) => props.theme.colors["gray-500"]};
    opacity: 0.5;
  }
`;

export const ErrorMessage = styled.small`
  color: ${(props) => props.theme.colors["red-300"]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  & > :first-child {
    background: ${(props) => props.theme.colors["red-700"]};
  }

  & > :first-child:hover {
    background: ${(props) => props.theme.colors["red-500"]};
  }
`;

export const FeedbackContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: -2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.colors["green-300"]};
  font-size: 1.25rem;
`;

export const BackToHomeLink = styled(Link)`
  margin-top: 4rem;
  text-align: center;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors["gold-800"]};
`;
