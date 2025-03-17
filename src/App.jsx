import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <nav className='rounded-full bg-mainblue w-fit p-4 flex gap-4 fixed bottom-4 left-1/2 -translate-x-1/2 shadow-lg'>
        <a href='https://github.com/marsyaaurl' target='_blank' className='px-2 py-1'><i className='fa-brands fa-github text-white text-3xl'></i></a>
        <a href='https://instagram.com/marsyaaurl' target='_blank' className='px-2 py-1'><i className='fa-brands fa-instagram text-white text-3xl'></i></a>
        <a href='https://www.linkedin.com/in/marsyaaurl' target='_blank' className='px-2 py-1'><i className='fa-brands fa-linkedin text-white text-3xl'></i></a>
      </nav>

      <Routes>
        <Route path='/' element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
