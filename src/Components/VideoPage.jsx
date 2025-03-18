import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MiniSidebar from "./MiniSidebar";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import share from "../assets/share.png";
import VideoItem from "./VideoItem";
import { useAppContext } from "../AppContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const VideoPage = () => {
  const { id } = useParams();

  const { toggleMenu, setToggleMenu } = useAppContext();
  const [video, setVideo] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [commentText, setCommentText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/videos");
        const data = await res.json();
        console.log(data);
        setAllVideos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchVideo = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/video/${id}`);
        const data = await res.json();
        console.log(data[0]);
        setVideo(data[0]);
      } catch (error) {
        console.error("Error fetching Video:", error);
      }
    };

    fetchData();
    fetchVideo();
  }, []);

  async function handleComment() {
    try {
      const token = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("userId");
      const res = await fetch("http://localhost:3000/api/video/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
        body: JSON.stringify({
          commentText: commentText,
          userId: userId,
          videoId: id
          
        }),
      });

      const data = await res.json();

      if (res.status === 200) {
        toast("Comment Added");
        setTimeout(() => {
          window.location.href = `/videopage/${id}`;
        }, 1000);
      } else if (res.status === 403) {
        toast("Please Login");
      } else {
        toast("Something went wrong. Try again!");
      }
    } catch (error) {
      console.error("Error Adding Video:", error);
    }
  }

  return (
    <div className="max-w-screen box-border font-sans  ">
      <NavBar />

      <div className="relative top-20 flex">
        {toggleMenu ? (
          <div className="relative left-0 z-10 ">
            <MiniSidebar />
          </div>
        ) : (
          <div className="relative -left-40 ">
            <MiniSidebar />
          </div>
        )}

        <div className="w-screen ml-5 mr-5 flex xs:flex-col lg:flex-row gap-10 ">
          {/* Video*/}
          {video ? (
            <div className=" w-[70%] flex flex-col">
              <div className=" h-[25rem] object-cover overflow-hidden">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={video.videoURL}
                  title="GeeksforGeeks"
                ></iframe>
              </div>

              {/* Title */}
              <div className="mt-5 text-xl font-semibold">{video.title}</div>

              <div className="flex justify-between mt-5">
                {/* Channel profile, name,subscribe */}
                <div className="flex gap-4 items-center">
                  <div>
                    <img
                      src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg"
                      className="w-10 h-10 rounded-full cursor-pointer"
                    />
                  </div>
                  <div>{video.channelName}</div>
                  <button className="rounded-3xl py-1 px-4  cursor-pointer bg-black text-zinc-50">
                    Subscribe
                  </button>
                </div>

                {/* like, dislike, share, vert   */}
                <div className="flex gap-4 items-center">
                  <div className="flex items-center bg-gray-100 rounded-3xl px-4 py-1 ">
                    <img src={like} className="w-5 mr-1 cursor-pointer" />
                    <p className="border-r-1 pr-2 border-gray-200 mr-2 ">
                      {video.likes}
                    </p>
                    <img src={dislike} className="w-5 cursor-pointer " />
                  </div>

                  <div className="flex items-center bg-gray-100 font-medium rounded-3xl px-4 py-1">
                    <img src={share} className="w-5 mr-1 cursor-pointer" />
                    <p>Share</p>
                  </div>
                </div>
              </div>

              {/* description */}
              <div className="mt-5 bg-zinc-200 rounded-lg text-zinc-800 p-4 ">
                {video.description}
              </div>

              {/* comments */}
              <div className="mt-15">
                <h2 className="font-semibold text-lg">Comments</h2>

                <div className="flex ">
                <input type="text" placeholder="Add a comment" className="mt-5 border-b-1 border-zinc-600 outline-0 flex-1 " 
                onChange={e=>setCommentText(e.target.value)}/>

                <button onClick={handleComment} 
                className="cursor-pointer bg-blue-700 text-slate-50 font-medium px-6 py-2 rounded-3xl hover:bg-blue-500">Comment</button>
                </div>

                <div className="mt-5 mb-5 bg-zinc-50 p-2">
                  {video?.comments?.map((c) => (
                    <div className="mt-5 mb-5">
                      <p className="font-semibold">{c.commentBy}</p>
                      <p>{c.commentText}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>Loading video...</div>
          )}

          {/* video Suggestions */}
          <div className="flex flex-col gap-5 h-40 w-40  ">
            {allVideos.map((video) => (
              <Link to={`/videopage/${video._id}`} key={video._id}>
                <VideoItem
                  key={video._id}
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

export default VideoPage;
