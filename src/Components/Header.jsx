import { Link } from 'react-router-dom'
import logo from '../assets/log.png'
const Header = () => {



  return (
    <div className="flex justify-between px-20 pt-5 shadow-lg py-6 text-3xl">
    <div className='flex gap-16'> 
        <img className='w-16 -mt-2' src={logo} alt="" />
          <h1 className='text-4xl -ml-4'> Zain Coffee</h1>

    </div>
   <i className="fa-solid fa-bars sm:hidden ml-44"></i>
      <div>
        <ul className='sm:flex gap-4 hidden'>
         <Link to="/"><li> Home</li></Link> 
         <Link to="/menu"><li>Menu</li></Link>  
        <Link to="/contact"><li>Contact</li></Link>  
        
          
         
        </ul>
      
      </div>
    </div>
  )
}

export default Header