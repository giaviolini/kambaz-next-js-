import React, { useState } from "react";
export default function EventObject() {
  const [event, setEvent] = useState<React.MouseEvent<HTMLElement> | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const eventCopy = {
      ...e,
      target: (e.target as HTMLElement).outerHTML,
      view: undefined,
    };
    setEvent(eventCopy as any);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
);}
