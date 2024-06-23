import "./navbar.scss";
import logImg from '@/assets/images/logo.png'
import Image from 'next/image';


const Navbar = () => {
  return (
    <div className='navbar-container shadow'>
      <div className='flex items-center container mx-auto'>
        <Image
          src={logImg}
          alt="Logo"
          width={150}
          height={62}
          priority
        />
        <div className=' grow-1 flex justify-end  ms-auto me-[30px]'>
          <div className='flex justify-end items-center gap-5'>
            <a className='nav-links active text-0C0C active text-lg lg:mx-4'>Business Solutions</a>
            <a className='nav-links text-0C0C text-lg lg:mx-4'>Services</a>
            <a className='nav-links text-0C0C text-lg lg:mx-4'>About Us</a>
            <a className='nav-links text-0C0C text-lg lg:mx-4'>Blog</a>
            <a className='nav-links text-0C0C text-lg lg:mx-4'>Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;