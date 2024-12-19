import './App.css';
import { usePopularMoviesQuery } from './hooks/useMovieQuery';
function App() {

  const { data, isLoading, error, isError } = usePopularMoviesQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error 발생, 개발자에게 문의 주세요☹
      <p>Contact : hwn123h@naver.com</p>
    </div>
  }

  return (
    <div className="App">
      <nav>
        <div className="navbar">
          <ul>
            <li>Movies</li>
            <li>Tvs</li>
          </ul>
        </div>
      </nav>


      <article>
        <div className="contents">
          {data?.results.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>

      </article >
    </div >
  );
}

export default App;
