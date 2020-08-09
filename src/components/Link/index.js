import React from "react";

const Link = ({ className, href, children }) => {
  function handleClick(e) {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    window.history.pushState({}, "", href);

    const navigate = new PopStateEvent("popstate");
    window.dispatchEvent(navigate);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
