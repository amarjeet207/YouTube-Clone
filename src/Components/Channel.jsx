import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useAppContext } from "../AppContext";
import MiniSidebar from "./MiniSidebar";
import cover from "../assets/cover.jpg";
import searchicon from "../assets/search.svg";
import VideoItem from "./VideoItem";
import axios from 'axios';

const Channel = () => {
  const { toggleMenu, setToggleMenu } = useAppContext();
  const { allVideos, setAllVideos } = useAppContext();
  const [user,setUser] = useState(null)
  const [videos,setVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await fetch("http://localhost:3000/api/channel", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId
          }),
        });

        const data = await response.json();

        setUser(data.user);
        setVideos(data.videos);
        console.log(data.user)
        console.log(data.videos)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setAllVideos]);

  return (
    <div className="max-w-screen box-border font-sans">
      <NavBar />

      <div className="relative top-20 flex ">
        {toggleMenu ? (
          <div className="relative left-0 z-10 ">
            <MiniSidebar />
          </div>
        ) : (
          <div className="relative -left-40 ">
            <MiniSidebar />
          </div>
        )}

        <div className=" w-screen ml-5 mr-15 flex flex-col gap-10 ">
          {/* CoverImage */}
          <div className="w-full h-40">
            <img src={cover} className="w-full h-full rounded-lg" />
          </div>

          {/* Profile pic , Name , about */}
          <div className="flex flex-col gap-6 border-b-1 border-zinc-400 ">
            <div className="flex gap-10">
              <div className="w-40 h-40">
                <img  src= {user && user.profilePicUrl ? user.profilePicUrl : cover }
                className="w-full h-full rounded-full" />
              </div>

              <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-medium "> {user && user.fullName }</h1>
                <h2 className="font-medium">@{user && user.fullName.split(" ")[0] }</h2>
                <p className="text-sm text-zinc-700">More about this channel... </p>
              </div>
            </div>

            {/* filters */}
            <div className="flex gap-5 font-medium text-zinc-700 pb-2">
              <p className="hover:text-zinc-950 cursor-pointer">Home</p>
              <p className="hover:text-zinc-950 cursor-pointer">Videos</p>
              <p className="hover:text-zinc-950 cursor-pointer">Shorts</p>
              <p className="hover:text-zinc-950 cursor-pointer">Playlists</p>
              <p className="hover:text-zinc-950 cursor-pointer">Posts</p>
              <img src={searchicon} className="cursor-pointer" />
            </div>
          </div>

          {/* Videos uploaded by user */}
          <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Link to={`/videopage/${video._id}`} key={video._id}>
                <VideoItem
                  title={video.title}
                  thumbnailURL={video.thumbnailURL}
                  channelName={video.channelName}
                  views={video.views}
                  profilePicUrl={video.profilePicUrl}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
