import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './page/Home';
import Media from './page/Media';
import NotFound from './page/Notfound';
function App() {


  return (
    <>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>



  );
}

export default App;
