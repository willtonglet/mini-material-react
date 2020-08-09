import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Archivo", sans-serif;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    li {
      a {
        padding: 1.2rem;
        text-transform: uppercase;
        text-decoration: none;
        display: block;
        color: #111;
      }
    }
  }
`;
