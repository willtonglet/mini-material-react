import styled from "styled-components";

export const SearchStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Archivo", sans-serif;
`;

export const InputStyles = styled.input`
  border: 1px solid #bbb;
  border-radius: 0.8rem;
  padding: 0 1.6rem;
  min-height: 3.6rem;
  font-size: 1.2rem;
  font-family: "Archivo", sans-serif;
  flex: 1;
`;

export const ListStyles = styled.div`
  display: flex;
  flex-direction: column;

  .li {
    padding: 0.8rem;
    border: 1px solid #ddd;
    background-color: #eee;
    border-radius: 0.8rem;
    margin-top: 0.8rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    &__text {
      display: flex;
      flex-direction: column;
      flex: 80%;
      margin-right: 1.6rem;

      h4 {
        margin: 0 0 0.4rem;
      }
    }
  }

  .link {
    display: flex;
    color: #fff;
    background-color: #111;
    border-radius: 0.8rem;
    min-width: 6rem;
    padding: 0.8rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      background-color: #333;
    }
  }
`;
