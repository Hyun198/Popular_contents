import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './page/Home';
import Movie from './page/MovieandTv/Movie';
import NotFound from './page/Notfound';
import Youtube from './page/Youtube';
function App() {
  return (
    <>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>



  );
}

export default App;
