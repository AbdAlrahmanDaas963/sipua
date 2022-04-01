import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import inView from "./scrollService";

function Spy({ navTabId }) {
  const [ref1, inView1] = useInView();
  useEffect(() => {
    inView(inView1, navTabId);
  }, [inView1]);
  return (
    <div className="itemm" id="ref1">
      <div ref={ref1} className="spy"></div>
    </div>
  );
}

export default Spy;
