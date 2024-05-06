import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <Navbar />
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;