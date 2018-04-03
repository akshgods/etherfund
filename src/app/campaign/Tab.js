import React from "react";
import { Tab } from "semantic-ui-react";
import TargetFrom from "./TargetForm"

const panes = [
  { menuItem: "New Campaign", render: () => <Tab.Pane><TargetFrom /></Tab.Pane> },
  { menuItem: "Details", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Preview", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
];

const Tabs = () => (
  <Tab
    menu={{ attached: true, fluid: true, vertical: true, tabular: true }}
    panes={panes}
  />
);

export default Tabs;
