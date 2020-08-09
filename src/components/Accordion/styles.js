import styled from "styled-components";

export const AccordionStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Archivo", sans-serif;
`;

export const AccordionItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 0.8rem;
  padding: 1rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #666;
  }
`;

export const TitleStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 700;

  &:after {
    content: "${(props) => (props.active ? "-" : "+")}";
    display: block;
  }
`;

export const ContentStyles = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  color: #777;
  line-height: 1.6rem;
`;
