import { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const fetchPopularYoutube = () => {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=movie%20trailer&type=video&maxResults=10&key=${API_KEY}`)
}

const fetchDetails = (videoIds) => {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds.join(',')}&key=${API_KEY}`)
}


export const usePopularYoutubeQuery = () => {

    const [videoDetails, setVideoDetails] = useState([]);

    const { data: popularVideos, isLoading, error } = useQuery({
        queryKey: ['PopularYoutube'],
        queryFn: fetchPopularYoutube,
        select: (result) => result.data.items,
    });

    useEffect(() => {
        if (popularVideos && popularVideos.length > 0) {
            const videoIds = popularVideos.map(video => video.id.videoId);
            fetchDetails(videoIds).then(response => {
                setVideoDetails(response.data.items);
            });
        }
    }, [popularVideos])

    return {
        popularVideos,
        isLoading,
        error,
        videoDetails,
    }
}