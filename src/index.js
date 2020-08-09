import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./Route";

import { MainStyles } from "./styles/theme";

const items = [
  {
    title: "Lorem Ipsum Dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ante et augue porttitor vulputate. Cras fermentum, nibh id blandit luctus, nisl erat tristique tortor, vel ultricies enim magna quis neque. Ut et porttitor nisi, ut finibus dolor. Nunc ullamcorper, neque vel faucibus egestas, risus nibh euismod magna, ut scelerisque lacus turpis sed nisi. Donec egestas congue ex ut consectetur. Mauris justo elit, facilisis nec ante vitae, egestas euismod massa. Suspendisse potenti. Nam scelerisque consectetur tempor. Morbi et nibh ultrices, dignissim nisl et, feugiat lectus.",
  },
  {
    title: "Lorem Ipsum Dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ante et augue porttitor vulputate. Cras fermentum, nibh id blandit luctus, nisl erat tristique tortor, vel ultricies enim magna quis neque. Ut et porttitor nisi, ut finibus dolor. Nunc ullamcorper, neque vel faucibus egestas, risus nibh euismod magna, ut scelerisque lacus turpis sed nisi. Donec egestas congue ex ut consectetur. Mauris justo elit, facilisis nec ante vitae, egestas euismod massa. Suspendisse potenti. Nam scelerisque consectetur tempor. Morbi et nibh ultrices, dignissim nisl et, feugiat lectus.",
  },
  {
    title: "Lorem Ipsum Dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ante et augue porttitor vulputate. Cras fermentum, nibh id blandit luctus, nisl erat tristique tortor, vel ultricies enim magna quis neque. Ut et porttitor nisi, ut finibus dolor. Nunc ullamcorper, neque vel faucibus egestas, risus nibh euismod magna, ut scelerisque lacus turpis sed nisi. Donec egestas congue ex ut consectetur. Mauris justo elit, facilisis nec ante vitae, egestas euismod massa. Suspendisse potenti. Nam scelerisque consectetur tempor. Morbi et nibh ultrices, dignissim nisl et, feugiat lectus.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color BLue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <MainStyles>
      <Header />
      <div className="main-container">
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label="Select a Color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </MainStyles>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
