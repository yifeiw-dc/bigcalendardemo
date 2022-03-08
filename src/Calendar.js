import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
import Event from "./Event";
import EventWrapper from "./EventWrapper";

import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

export default () => (
  <BigCalendar
    components={{
      eventWrapper: EventWrapper
      // event: Event
    }}
    defaultDate={new Date(2018, 3, 27)}
    defaultView="day"
    events={events}
    views={["week", "day"]}
  />
);
