import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import style from './App.module.css';

const About = lazy(() => import('./views/about/About'));
const Home = lazy(() => import('./views/home/Home'));

function App() {
  return (
    <div className={style.app}>
      <h1>Welcome to the Enterprise Boilerplate</h1>
      <nav className={style.nav}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
