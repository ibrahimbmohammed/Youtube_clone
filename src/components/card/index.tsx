import React from 'react'
import Image from 'next/image'
import { AiOutlineClockCircle} from 'react-icons/ai'
import {RiPlayList2Fill} from 'react-icons/ri'


const thumb1: string = "https://i.ytimg.com/vi/N3lWAesVg8I/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBNxiewuID8mOhWSQ_Li7OZ7HN_LA"
const thumb2: string = "https://i.ytimg.com/vi/eDc2xowd0RI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqcvs_cdFr_9cBfPJvmWVRfT3z1w"
const thumb3: string = "https://i.ytimg.com/vi/-UW_c8VT2ZE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqrK_MD5-pV7kDvWFusTbiFJKtcw"
const thumb4: string = "https://i.ytimg.com/vi/y66RgYMAgSo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvtAGde-6UOzNKyisfsy-tIdTwJQ"
function index():JSX.Element {
    const myLoader =(): string =>{
      return thumb4;
    }
    return (
        <div className="flex flex-col contFit w-full">
           <div className="upper">
               <div className="img relative">
               <Image  loader={myLoader} src={thumb4} width="720" height="404" alt="thumb"/>
               <span className="bg-gray-900 text-white mflex w-max absolute p-0.5  right-0 top-1">
               <AiOutlineClockCircle className="text-xl"/>
               </span>
               <span className="bg-gray-900 text-white mflex w-max absolute p-0.5  right-0 top-8">
               <RiPlayList2Fill className="text-xl"/>
               </span>
               <span className="bg-gray-900 text-white mflex w-max absolute p-0.5 px-1 right-0 bottom-2">
                  <p>2:00:00</p>
               </span>
               <span className="bg-gray-900 text-white"></span>
               </div>
           </div>
         <div className="mflex space-x-2 ml-2">
          <div className="image ">
              <Image loader={myLoader} src={thumb1} width="60rem" height="60rem"  alt="avatar" className="w-6 h-6 rounded-full"/>
          </div>
          <div className="mflex ">
              <p className=" font-bold  text-gray-800 text-md tracking-tight">
                  Lorem ipsum dolor sit amet consectetu
                  r adipisicing elit. Quas, similique.
              </p>
          </div>
         </div>
         <div className="flex flex-col ml-14 my-2 text-gray-350">
         <span className="">
             <p>switched and Click</p>
         </span>
         <span className="">
             <p>
               2.2k views &bull; 6 months ago
             </p>
         </span>
         </div>
        </div>
    )
}

export default index
