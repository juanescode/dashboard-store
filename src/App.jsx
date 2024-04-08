/*app principal*/ 
import { useState } from 'react'; {/*llamar useState ---*/}
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine} from "react-icons/ri";
//components
import Sidebar from "./components/shared/Sidebar" /*export de sidebar.jsx*/
import Car from "./components/shared/Car" /* Export barra Pagos (payments ) */


function App() {
  const [showMenu, setShowMenu] = useState(false); {/*---*/}
  const [showOrder, setShowOrder] = useState(false); {/*---*/}

  const toggleMenu = () => { {/*---*/}
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return ( /*seccion donde cambia el fondo de pantalla*/
    <div className="bg-[#262837] w-full min-h-screen"> 
      {/* Esta es la seccion del navegador*/}
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil*/}
      {/* barra para moviles, solo se vera en celulares, lg:hidden solo se vera en pantallas pequeñas*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className='p-2'>
          <RiUser3Line />
        </button>
        <button className='p-2'>
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className='p-2'>
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill/>} {/* La logica es que si showMenu esta true me muestre el icono del close para cerrar y si esta false muestre el icono de menu*/}
        </button>
      </nav> 
      {/*Esta parte es para la zona donde aparece el menu de comida, lg-grid-cols-8 es para indicar que me lo divida en 8 columnas, Donde 6 columnas son del primer div y 2 del segundo div */}
      <main className='lg:pl-32 lg:pr-96 pb-20'>
        <div className='md:p-8 p-4'>
          {/* Header */}
          <header>
            {/* titulo y buscador */}
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
              <div>
                <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
                <p className='text-gray-500'>17 febrero 2024</p>
              </div>
              <form>
                <div className='w-full relative '>
                  < RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300'/>
                  <input type="text" className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none' placeholder='Search' />
              </div>
            </form>
            </div>
            {/* Tabs */}
            <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'>
              <a href="#" className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'>hot dishes</a>
              <a href="#" className='py-2 pr-4'>Col dishes</a>
              <a href="#" className='py-2 pr-4' >Soup</a>
              <a href="#" className='py-2'>Grill</a>
            </nav>
          </header>
          {/* contenido del titulo */}
          <div className='flex items-center justify-between mb-16 '>
            <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
              < RiArrowDownSLine />Dine in
            </button>
          </div>
          {/* Contenido */}
          <div className='p-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-16'>
            {/* card 1*/}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
              <img src="cerveza1.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
              <p className='text-xl'>Speacy seasone seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* card 2*/}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
              <img src="cerveza1.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
              <p className='text-xl'>Speacy seasone seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* card 3*/}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
              <img src="cerveza1.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
              <p className='text-xl'>Speacy seasone seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* card 4*/}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
              <img src="cerveza1.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
              <p className='text-xl'>Speacy seasone seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* card 5*/}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
              <img src="cerveza1.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
              <p className='text-xl'>Speacy seasone seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* card 6*/}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300'>
              <img src="cerveza1.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>
              <p className='text-xl'>Speacy seasone seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
