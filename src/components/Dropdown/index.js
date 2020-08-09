import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { DropDownStyles } from "./styles";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (dropdownRef.current.contains(e.target)) return;
      setIsOpen(false);
    };

    document.addEventListener("click", onBodyClick);

    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);

  const rederedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        className="item"
        onClick={() => onSelectedChange(option)}
        key={option.value}
      >
        <label>{option.label}</label>
      </div>
    );
  });

  return (
    <DropDownStyles ref={dropdownRef}>
      <label className="label">{label}</label>
      <div className="base">
        <div className="clickable" onClick={() => setIsOpen(!isOpen)}>
          <label>{selected.label}</label>
          <FiChevronDown />
        </div>
        {isOpen && <div className="container">{rederedOptions}</div>}
      </div>
    </DropDownStyles>
  );
};

export default Dropdown;
