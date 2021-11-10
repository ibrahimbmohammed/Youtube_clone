import {BsYoutube, BsArrowBarUp, BsBell} from 'react-icons/bs'
import {VscMenu} from 'react-icons/vsc'
import {IoGridOutline, IoSearchOutline} from 'react-icons/io5'
import {FaMicrophone} from 'react-icons/fa'
import image from 'next'



function index():JSX.Element {
    return (
        <nav className="w-screen h-14 flex justify-between items-center fixed top-0 border border-gray-400 z-50 bg-white opacity-95">
            <div className=" flex items-center justify-center space-x-6 ml-6 ">
                <VscMenu className="text-xl "/>
                <span className='inline-flex mflex space-x-1'>
                  <BsYoutube className="text-red-600 text-3xl mt-1"/>
                  <p className="text-lg font-bold tracking-tighter"> YouTube <sup className="text-xs font-normal">NG</sup> </p>
                </span>
            </div>
            <div className="mflex">
                <span className="mflex space-x-3">
                    <span className="mflex">
                    <input type="text" placeholder="Search" className="border border-gray-400 pt-1 pb-1 px-5 shadow-inner w-120" />
                        <button className="bg-gray-150 pt-1.5 pb-1.5 px-5 border border-l-0 border-gray-400 ">
                            <IoSearchOutline className="text-xl"/>
                        </button>
                    </span>
                    <span className="rounded-full bg-gray-300 p-2"><FaMicrophone/></span>
                </span>
            </div>
            <div className="mflex mr-6 space-x-5">
                <BsArrowBarUp/>
                <IoGridOutline/>
                <BsBell/>
                <span className=" rounded-full bg-red-500 text-center w-6 h-6">
                 i
                </span>
            </div>
        </nav>
    )
}

export default index
