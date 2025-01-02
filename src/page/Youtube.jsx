import React, { useState } from 'react'
import { usePopularYoutubeQuery } from '../hooks/useYoutubeQuery'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, PointElement, LinearScale, BarElement);

const Youtube = () => {
    const { popularVideos, videoDetails, isLoading, error } = usePopularYoutubeQuery();
    console.log(popularVideos);
    const [hoverIndex, setHoverIndex] = useState(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>데이터 불러오는 중에 에러가 발생했습니다. Contact로 연락주세요.😢</div>
    }

    const backgroundColors = videoDetails?.map((_, index) =>
        index === hoverIndex ? 'rgba(255, 99, 132, 0.8)' : 'rgba(75, 192, 192, 0.5)'
    );
    //총 조회수
    const chartData = {
        labels: popularVideos?.map((video) => video.snippet.title.split()[0]), // X축
        datasets: [
            {
                label: 'View Count',
                data: videoDetails?.map((video) => parseInt(video.statistics.viewCount)), // Y축
                fill: false,
                backgroundColor: backgroundColors, // 막대 색상
                borderColor: 'rgba(75, 192, 192, 1)', // 막대 테두리 색상
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // 범례 위치
            },
            title: {
                display: true,
                text: 'Popular Movie Trailers - View Count', // 제목
            },
        },
    };

    return (
        <div>
            <div>
                <ul>
                    {popularVideos && popularVideos.map((video, index) => (
                        <li key={video.id.videoId}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}>
                            <h2>{video.snippet.title}</h2>
                            <p>Views: {videoDetails[index]?.statistics.viewCount || 'Loading...'}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Bar data={chartData} options={options} />
            </div>


        </div>
    )
}

export default Youtube