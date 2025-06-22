import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
    <nav className='flex w-full items-center fixed text-whitefont text-xl gap-x-[1220px] font-semibold px-10 py-6'>
      <a href='/' className='text-whitefont font-krona'>marsya</a>
      <div className='flex gap-x-10'>
        <a href=''>About</a>
        <a href=''>Projects</a>
        <a href=''>Contacts</a>
      </div>
    </nav>
      {/* <nav className='rounded-full bg-mainblue w-fit p-4 flex gap-4 fixed bottom-4 left-1/2 -translate-x-1/2 shadow-lg'>
        <a href='https://github.com/marsyaaurl' target='_blank' className='px-2 py-1'><i className='fa-brands fa-github text-white text-3xl'></i></a>
        <a href='https://instagram.com/marsyaaurl' target='_blank' className='px-2 py-1'><i className='fa-brands fa-instagram text-white text-3xl'></i></a>
        <a href='https://www.linkedin.com/in/marsyaaurl' target='_blank' className='px-2 py-1'><i className='fa-brands fa-linkedin text-white text-3xl'></i></a>
      </nav> */}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
