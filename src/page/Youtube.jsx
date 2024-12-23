import React from 'react'
import { usePopularYoutubeQuery } from '../hooks/useYoutubeQuery'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, PointElement, LinearScale);

const Youtube = () => {
    const { popularVideos, videoDetails, isLoading, error } = usePopularYoutubeQuery();
    console.log(videoDetails);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>데이터 불러오는 중에 에러가 발생했습니다. Contact로 연락주세요.😢</div>
    }
    //총 조회수
    const chartData = {
        labels: popularVideos?.map((video) => video.snippet.title), // X축
        datasets: [
            {
                label: 'View Count',
                data: videoDetails?.map((video) => parseInt(video.statistics.viewCount)), // Y축
                fill: false,
                borderColor: 'rgb(182, 50, 50)',
                tension: 0.1,
            },
        ],
    };

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

            <Line data={chartData} />
        </div>
    )
}

export default Youtube