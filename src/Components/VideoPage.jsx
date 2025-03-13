import React, { useEffect } from "react";
import NavBar from "./NavBar";
import MiniSidebar from "./MiniSidebar";
import MainSidebar from "./MainSidebar";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../Redux/reducer";
import thumbnail from "../assets/thumbnail.webp";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import VideoItem from "./VideoItem";

const VideoPage = () => {
  const isMenuClicked = useSelector((state) => state.menu.isMenuClicked);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "New Page Title";
  }, []);

  return (
    <div className="max-w-screen box-border font-sans ">
      <NavBar
        isMenuClicked={isMenuClicked}
        setIsMenuClicked={() => dispatch(toggleMenu())}
      />

      <div className="relative top-20 flex">
        {isMenuClicked ? (
          <div className="relative left-0  z-10 'w-[18%]">
            <MiniSidebar />
          </div>
        ) : (
          <div className="relative -left-40 ">
            <MiniSidebar />
          </div>
        )}

        <div className="absolute -z-10 left-28 right-20 flex xs:flex-col lg:flex-row gap-10 w-[80%]">
          {/* Video*/}
          <div className="">
            <div className=" h-[25rem] object-cover overflow-hidden">
              <img src={thumbnail} className="w-full h-full rounded-lg" />
            </div>

            {/* Title */}
            <div className="mt-5 text-xl font-semibold">
              SURPRISE trip to INDIA to see my FAMILY! - TITLE
            </div>

            <div className="flex justify-between mt-5">
              {/* Channel profile, name,subscribe */}
              <div className="flex gap-4 items-center">
                <div>
                  <img src={thumbnail} className="w-10 h-10 rounded-full" />
                </div>
                <div>Channel Name</div>
                <button className="rounded-3xl py-1 px-4  cursor-pointer bg-black text-zinc-50">
                  Subscribe
                </button>
              </div>

              {/* like, dislike, share, vert   */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center bg-gray-100 rounded-3xl px-4 py-1 ">
                  <img src={like} className="w-5 mr-1" />
                  <p className="border-r-1 pr-2 border-gray-200 mr-2">11k</p>
                  <img src={dislike} className="w-5 " />
                </div>

                <div className="flex items-center bg-gray-100 rounded-3xl px-4 py-1">
                  Share
                </div>

                <div className="flex items-center justify-center bg-gray-100 rounded-full w-8 h-8  ">
                  ●oo
                </div>
              </div>
            </div>

            {/* description */}
            <div className="mt-5 bg-zinc-200 rounded-lg text-zinc-800">
              description -- Thanks for watching!
              https://www.amazon.com/shop/alannapanday Get the best deals on you
              fav fragrances at https://www.fragrancenet.com/?mv_pc=a.... You
              can use my code AP35 for an addition 35% OFF!
            </div>

            {/* comments */}
            <div className="mt-5">
                <h2 className="font-semibold text-lg">Comments</h2>
                <div className="mt-5 mb-5">
                    <p className="font-semibold">@Name of the person</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis?</p>
                </div>
            </div>
          </div>

          {/* video Suggestions */}
          <div className="flex flex-col gap-5">
            <VideoItem pageType={"videoPage"}/>
            <VideoItem  pageType={"videoPage"}/>
            <VideoItem pageType={"videoPage"}/>
            <VideoItem  pageType={"videoPage"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
