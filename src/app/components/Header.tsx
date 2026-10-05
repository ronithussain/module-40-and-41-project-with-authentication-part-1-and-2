import Image from 'next/image';
import NavLInks from './NavLInks';


const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {dateStyle:'full'});
    // console.log(date);
    return (
        <header className='relative container mx-auto py-4'>
            <div className='flex flex-col justify-center items-center gap-2 sm:flex-row'>
                <Image className='' src='/logo.webp' alt='' height={50} width={50} ></Image>
                <div className='flex flex-col items-center sm:items-start'>
                    <h2 className='text-2xl  sm:text-3xl text-red-700 font-bold '>Bangla News 24</h2>
                    <p>{date}</p>
                </div>
            </div>
            <div className='absolute top-5 right-2 flex items-center gap-2 text-sm'>
                <button className='btn'>সাইন ইন</button>
                <button className='btn bg-red-700 text-white'>সাইন আপ</button>
            </div>
            <NavLInks/>
        </header>
    );
};

export default Header;