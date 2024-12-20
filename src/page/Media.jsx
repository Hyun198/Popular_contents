import React from 'react'
import { usePopularMoviesQuery } from '../hooks/useMovieQuery'
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';
import { scaleLog } from '@visx/scale';
import { Text } from '@visx/text';
const Movie = () => {

    const { data, isLoading, error, isError } = usePopularMoviesQuery();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error 발생, 개발자에게 문의 주세요☹
            <p>Contact : hwn123h@naver.com</p>
        </div>
    }

    const colors = ['#143059', '#2F6B9A', '#82a6c2'];

    function movieWordFreq(movies) {
        return movies.map((movie) => ({
            text: movie.title,
            value: movie.popularity,
        }))
    }


    const movies = movieWordFreq(data.results);

    const fontScale = scaleLog({
        domain: [Math.min(...movies.map((m) => m.value)), Math.max(...movies.map((m) => m.value))],
        range: [10, 100],
    });

    const fontSizeSetter = (datum) => fontScale(datum.value);

    return (
        <div>
            <div className="movie-wordcloud">
                <Wordcloud
                    words={movies}
                    width={800}
                    height={600}
                    fontSize={fontSizeSetter}
                    font="Impact"
                    padding={2}
                    spiral="archimedean"
                    rotate={0}
                    random={() => 0.5}
                >
                    {(cloudWords) =>
                        cloudWords.map((word, index) => (
                            <Text
                                key={word.text}
                                fill={colors[index % colors.length]}
                                textAnchor="middle"
                                transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
                                fontSize={word.size}
                                fontFamily={word.font}
                            >
                                {word.text}
                            </Text>
                        ))
                    }
                </Wordcloud>
                <style jsx>{`
                .movie-wordcloud {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .movie-wordcloud svg {
                    margin: 1rem 0;
                }
            `}</style>
            </div>


        </div>
    )
}

export default Movie