import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding-bottom: 4rem;

  main {
    max-width: 46rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    margin-top: calc(0px - 1.7rem);

    & > div > :first-child {
      margin-bottom: 4rem;
    }
  }
`;
