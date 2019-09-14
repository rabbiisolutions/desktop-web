import React from "react";
import TeeChaStep from "./sub-items/TeeChaStep";
import TeeChaSteps from "../constants/TeeChaSteps";
import texts from "../constants/texts";


const HowTeeChaWorks = () => {
  return (
      <section className="how-teecha">
        <div className="how-teecha-title">{texts.howTeeChaWorks}</div>
        <div className="how-teecha-steps">
          { TeeChaStep(TeeChaSteps[0]) }

          { TeeChaStep(TeeChaSteps[1]) }

          { TeeChaStep(TeeChaSteps[2]) }

          { TeeChaStep(TeeChaSteps[3]) }
        </div>
      </section>
  );
};

export default HowTeeChaWorks;
