import React from "react";
import thumbnail from "../assets/thumbnail.webp";
import vert from "../assets/more_vert.svg";

const VideoItem = (props) => {
  return (
    <div className={`box-border font-Arial flex gap-3  flex-col`}>

      {/* thumbnail */}
      <div className={`w-80 h-48 overflow-hidden`}>
        <img
          src={props.thumbnailURL}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div>
        {/* channel profile, title,vert */}
        <div className="flex gap-2 justify-between ">
         
            <div>
              <img
                src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg"
                className="w-10 h-10 rounded-full"
              />
            </div>
        
          <div className={`font-semibold text-[16px] text-[#0f0f0f] `}> {props.title} </div>
          <div>
            <img src={vert} className="h-10" />
          </div>
        </div>

        {/* Channel Name */}
        <div
          className={`mt-2 text-[14px] text-[#606060] pl-8`}>
          {props.channelName}
        </div>

        {/* Views, days  */}
        <div
          className={`text-[14px] text-[#606060] pl-8`}>
          {props.views} Views
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
