import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './page/Home';
import Movie from './page/Movie';
import Tv from './page/Tv';
import NotFound from './page/Notfound';
function App() {

  /* const { data, isLoading, error, isError } = usePopularMoviesQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error 발생, 개발자에게 문의 주세요☹
      <p>Contact : hwn123h@naver.com</p>
    </div>
  } */

  return (
    <>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>



  );
}

export default App;
