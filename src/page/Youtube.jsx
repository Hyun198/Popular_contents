import React from 'react'
import { usePopularYoutubeQuery } from '../hooks/useYoutubeQuery'

const Youtube = () => {

    const { popularVideos, videoDetails, isLoading, error } = usePopularYoutubeQuery();



    return (
        <div>
            <ul>
                {popularVideos && popularVideos.map((video, index) => (
                    <li key={video.id.videoId}>
                        <h2>{video.snippet.title}</h2>
                        <p>Views: {videoDetails[index]?.statistics.viewCount || 'Loading...'}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Youtube