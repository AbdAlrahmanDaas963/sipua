import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Spy from "./ScrollSpy/Spy";
import WhatIPara from "./common/whatIPara";

function WhatI() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  return (
    <motion.div animate={controls} className="what-i pos-rel" id="Services">
      <Spy navTabId={"3"} />
      <div className="tra"></div>
      <div className="what-head">
        <div>
          What I can <br /> Help you with
        </div>
        <div>
          In a world full of copies and cliches, We see ourselves fading out
          with the feeling that something is missing..... What I offer here is
          what I use to get out of the bubble of normality to try new things and
          go crazy with ideas.
        </div>
      </div>
      <div className="what-body">
        <WhatIPara
          id="par0"
          delay="0.1"
          one="Web design"
          two="Why would you need a website?"
          three="Social media algorithm are controlling your business and your content And that makes you frustrated? Why don't you create your own website where you have the freedom to customize it as you want."
        />
        <WhatIPara
          id="par1"
          delay="0.2"
          one="Design mentoring"
          two="What I can help you with?"
          three="Don't know where to start to improve your creative process? Feeling lost and unable to use your potentials well? Let me help you with your process and give you what you need to stand out with your work."
        />
        <WhatIPara
          id="par2"
          delay="0.3"
          one="Artwork"
          two="Art what?"
          three="Lemme take care of what you want to hang on your room or your event wall, My artwork have the collage surreal style, And it's made by editing photos and retouching them to make new one."
        />
        <WhatIPara
          id="par3"
          delay="0.4"
          one="Branding"
          two="When to start branding?"
          three="Sick of working for others and want to create your own brand? exited about an idea for a start-up or persona project, and need to make it appear great looking? I'll will help you creating a strong creative brand that will stand out between other brands."
        />
      </div>
    </motion.div>
  );
}

export default WhatI;
