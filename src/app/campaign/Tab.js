import React from "react";
import { Tab } from "semantic-ui-react";
import TargetFrom from "./TargetForm";
import BasicForm from "./BasicForm";
import DetailForm from "./DetailForm";


const panes = [
  { menuItem: "Get Started", render: () => <Tab.Pane><TargetFrom /></Tab.Pane> },
  { menuItem: "Basics", render: () => <Tab.Pane><BasicForm /></Tab.Pane> },
  { menuItem: "Story", render: () => <Tab.Pane><DetailForm /></Tab.Pane> },
  { menuItem: "Preview", render: () => <Tab.Pane>Preview</Tab.Pane> }
];

const Tabs = () => (
  <Tab
    activeIndex={0}
    onTabChange={() => console.log("happy")}
    menu={{ attached: true, fluid: true, vertical: true, tabular: true }}
    panes={panes}
  />
);

export default Tabs;
