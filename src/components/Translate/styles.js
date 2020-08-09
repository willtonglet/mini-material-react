import styled from "styled-components";

export const TranslateStyles = styled.div`
  font-family: "Archivo", sans-serif;

  .type-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    &__label {
      font-weight: 700;
    }

    &__input {
      margin-top: 0.4rem;
      border: 1px solid #ddd;
      border-radius: 0.8rem;
      height: 2.4rem;
      padding: 0 0.8rem;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  }

  .output {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
`;
