import React, { useState } from "react";
import {
  AccordionStyles,
  AccordionItemStyles,
  TitleStyles,
  ContentStyles,
} from "./styles";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  function onTitleClick(index) {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    return (
      <AccordionItemStyles key={index}>
        <TitleStyles
          active={index === activeIndex && true}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
        </TitleStyles>
        {index === activeIndex && <ContentStyles>{item.content}</ContentStyles>}
      </AccordionItemStyles>
    );
  });

  return (
    <AccordionStyles className="accordion">{renderedItems}</AccordionStyles>
  );
};

export default Accordion;
