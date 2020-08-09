import styled from "styled-components";

export const DropDownStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Archivo", sans-serif;

  .label {
    font-weight: 700;
  }

  .base {
    margin-top: 0.4rem;
    border: 1px solid #ddd;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .clickable,
  .item {
    padding: 0.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: 0.2s;

    &:hover {
      background-color: #eee;
    }
  }
`;
