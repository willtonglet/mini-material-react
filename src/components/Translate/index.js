import React, { useState } from "react";

import Dropdown from "../Dropdown";
import Convert from "../Convert";

import { TranslateStyles } from "./styles";

const options = [
  {
    label: "Portuguese",
    value: "pt",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <TranslateStyles>
      <div className="type-input">
        <label className="type-input__label">Enter Text</label>
        <input
          className="type-input__input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a language"
      />
      <div className="output">
        <Convert text={text} language={language} />
      </div>
    </TranslateStyles>
  );
};

export default Translate;
