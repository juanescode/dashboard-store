/*secundaria, barra busqueda*/
import React from 'react'
import { RiHome6Line, RiPercentLine, RiPieChartLine, RiMailLine, RiNotification3Line, RiSettings4Line, RiLogoutCircleRLine /* llamado a los iconos*/} from "react-icons/ri"; /*react icons google */

/* primera parte, logo home*/
const Sidebar = (props) => {
    const { showMenu } = props;

    return (
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 ${showMenu ? "left-0" : "-left-full"}`}>

        {/* Contenido de la barra lateral */}
        <div>
          <ul className='pl-4'>
            <li>
              <h1 className='text-3xl text-gray-300 uppercase font-bold text-center my-5'>
                Logo
              </h1> 
            </li>
            {/* Primer home (logo) */}
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
                <RiHome6Line className='text-2xl'/>
              </a>
            </li>
            {/* Segundo logo */}
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'> 
                <RiPercentLine className='text-2xl'/>
              </a>
            </li>
            {/* Tercer logo */}
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'> 
                <RiPieChartLine className='text-2xl'/>
              </a>
            </li>
            {/* Cuarto logo */}
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'> 
                <RiMailLine className='text-2xl'/>
              </a>
            </li>
            {/* Quinto logo */}
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'> 
                <RiNotification3Line className='text-2xl'/>
              </a>
            </li>
            {/* Sexto logo */}
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'> 
                <RiSettings4Line className='text-2xl'/>
              </a>
            </li>
          </ul>
        </div>
        {/* Contenido de logout */}
        <div>
          <ul className='pl-4'>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'> 
                <RiLogoutCircleRLine className='text-2xl'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }; 
  
  export default Sidebar;
  