import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import DescriptionTab from "./DescriptionTab";
import InformationTab from "./InformationTab";
import ReviewsTab from "./reviews";

import Classes from "./tabs.module.scss";

export default function TabsComponent(props) {
  const [key, setKey] = useState("description");

  return (
    <>
      <Tabs
        defaultActiveKey="description"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className={`mb-3 ${Classes.Tabs}`}
      >
        <Tab
          eventKey="description"
          title="DESCRIPTION"
          className={`${Classes.Tabs.tab}`}
        >
          <DescriptionTab />
        </Tab>
        <Tab
          eventKey="additionalInformation"
          title="ADDITIONAL INFORMATION"
          className={`${Classes.Tabs.tab}`}
        >
          <InformationTab />
        </Tab>
        <Tab
          eventKey="reviews"
          title="REVIEWS"
          className={`${Classes.Tabs.tab}`}
        >
          <ReviewsTab />
        </Tab>
      </Tabs>
    </>
  );
}
