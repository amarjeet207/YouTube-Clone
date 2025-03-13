import React from "react";
import thumbnail from "../assets/thumbnail.webp";
import vert from "../assets/more_vert.svg";

const VideoItem = (props) => {
  return (
    <div className={`box-border font-Arial flex gap-3  ${props.pageType == "videoGallary" ? "flex-col" : "flex-row"}`} >
      {/* thumbnail */}
      <div className="rounded-md">
        <img src={thumbnail} className="w-xl rounded-md" />
      </div>

      <div>
        {/* channel profile, title,vert */}
        <div className="flex gap-2 justify-between ">
          {props.pageType == "videoGallary" && <div>
            <img src={thumbnail} className="w-10 h-10 rounded-full" />
          </div> }
          <div className={`font-semibold text-[16px] text-[#0f0f0f]  ${props.pageType == "videoGallary" ? "text-[16px]" : "text-[12px]"}`}>
            Develop a YouTube Clone Using the MERN Stack Project
          </div>
          <div>
            <img src={vert} className="h-10" />
          </div>
        </div>

        {/* Channel Name */}
        <div className={`mt-2 text-[14px] text-[#606060]  ${props.pageType == "videoGallary" ? "pl-8" : "pl-0"}`}>Channel Name</div>

        {/* Views, days  */}
        <div className={`text-[14px] text-[#606060]   ${props.pageType == "videoGallary" ? "pl-8" : "pl-0"}`}>
          10k Views
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
