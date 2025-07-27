import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar.tsx';



createRoot(document.getElementById('root')!).render(
    <BrowserRouter >
        <Navbar/>
        <div className="bg-[url('images/background.png')]">
        <App/>
        </div>
        <Toaster />
    </BrowserRouter>
);
