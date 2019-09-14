import React from "react";
import TeeChaStep from "./sub-items/TeeChaStep";
import TeeChaSteps from "../constants/TeeChaSteps";


const HowTeeChaWorks = () => {
  return (
      <div className="">
        <div className="">How TeeCha Works</div>
        <div className="">
          { TeeChaStep(TeeChaSteps[0]) }

          { TeeChaStep(TeeChaSteps[1]) }

          { TeeChaStep(TeeChaSteps[2]) }

          { TeeChaStep(TeeChaSteps[3]) }
        </div>
      </div>
  );
};

export default HowTeeChaWorks;
