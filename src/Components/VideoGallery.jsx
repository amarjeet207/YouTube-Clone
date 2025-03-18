import React, { useState, useEffect } from 'react';
import VideoItem from './VideoItem';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import axios from 'axios';

const VideoGallery = () => {
  const { allVideos, setAllVideos } = useAppContext();
  const [filters, setFilters] = useState({
    All: true, // Default to "All" being active at the start
    HTML: false,
    Motivation: false,
    React: false,
    "Web Development": false,
    Vlogs: false,
    "Data Structure": false,
    JavaScript: false,
    "Stand up": false,
    "Cricket bats": false,
    "Indian Movies": false,
    "Funny Videos": false,
    "Cat Videos": false,
    "Pop Music": false,
  });

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/videos");
            const data = response.data; 
            console.log(data);
            setAllVideos(data); // Initially set allVideos with the full video list
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, [setAllVideos]);

useEffect(() => {
    const fetchAndFilter = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/videos");
            const data = response.data; 

            let result = data;
            const activeFilter = Object.keys(filters).find((key) => filters[key]); // Find the active filter

            if (activeFilter === "All") {
                result = data; // Show all videos if "All" is active
            } else if (activeFilter) {
                result = data.filter((video) => video.category === activeFilter); // Filter videos by the active category
            }

            setAllVideos(result);
        } catch (error) {
            console.error("Error filtering videos:", error);
        }
    };

    fetchAndFilter();
}, [filters, setAllVideos]);

  const handleFilterChange = (filter) => {
    setFilters(() => {
      const newFilters = Object.keys(filters).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key === filter, // Set the selected filter to true, others to false
        }),
        {}
      );
      return newFilters;
    });
  };

  return (
    <div className='box-border border-amber-400 pl-4 pr-4 font-sans w-[78%]'>

      {/* Filters */}
      <div className='flex gap-5 mb-10 w-full'>
        {Object.keys(filters).map((filter) => (
          <button
            key={filter}
            className={`xs:text-[10px] lg:text-[14px] p-1 whitespace-nowrap text-center font-[Roboto] bg-[#0000000D] 
                        rounded-md text-[14px] font-semibold ${
                          filters[filter] ? 'text-white bg-zinc-800' : 'text-zinc-800'
                        }`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {allVideos.map((video) => (
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
  );
};

export default VideoGallery;
