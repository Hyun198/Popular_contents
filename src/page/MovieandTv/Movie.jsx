import React, { useEffect } from 'react'
import { usePopularMoviesQuery } from '../../hooks/useMovieQuery'
import TagCloud from 'TagCloud';
import './Movie.style.css';

const Movie = () => {

    const { data, isLoading, error, isError } = usePopularMoviesQuery();

    useEffect(() => {
        if (!data?.results) return;

        const container = '.tagcloud';
        const texts = data.results.map((movie) => movie.title || movie.name); // 영화 제목만 추출
        const options = {
            radius: 300,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            keep: true,
        };

        // TagCloud 초기화
        TagCloud(container, texts, options);

        // 컴포넌트 언마운트 시 기존 태그 클라우드 제거
        return () => {
            const tagCloudContainer = document.querySelector(container);
            if (tagCloudContainer) tagCloudContainer.innerHTML = '';
        };
    }, [data?.results]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return (
            <div>
                Error 발생, 개발자에게 문의 주세요☹
                <p>Contact : hwn123h@naver.com</p>
            </div>
        );
    }




    return (
        <div className="MoviePage">
            <h1>Trending Movie & tv shows</h1>
            <span className="tagcloud"></span>
        </div>
    )
}

export default Movie