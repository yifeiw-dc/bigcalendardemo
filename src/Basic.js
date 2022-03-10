import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import backgroundEvents from "./backgroundEvents";

import "react-big-calendar/lib/css/react-big-calendar.css";

export default () => (
  <Calendar
    events={events}
    defaultView="day"
    views={["week", "day"]}
    defaultDate={new Date(2018, 3, 27)}
    backgroundEvents={backgroundEvents}
    dayLayoutAlgorithm={"no-overlap"}
    localizer={momentLocalizer(moment)}
  />
);

