
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import {useRef} from 'react'


function ScrollBar (): JSX.Element{
const myRef:any = useRef<HTMLDivElement>(null)
const handldClick = (direction: string): void =>{
 const distance: number =  myRef.current .getBoundingClientRect().x - 50;
 if (direction === "left"){
  myRef.current.style.transform = `translate(${230 + distance}px)`
 }
 if (direction === "right"){
    myRef.current.style.transform = `translate(${-230 + distance}px)`
}

} 



    return (
<div className="relative ">
        <div className="flex items-center w-screen h-14 border-b border-gray-100 top-14  fixed z-50 bg-white opacity-95">
            <span onClick={()=> handldClick("left")} className=" absolute w-24 h-12 font-light bg-white mflex opacity-95 myinset z-20">
                <MdKeyboardArrowLeft  className="text-3xl font-thin myinset"/>
            </span>
            <div className="overflow-hidden">
            <div className="flex space-x-3 " ref={myRef}>
                <span className="mflex rounded-full bg-black text-white h-8 px-3 pt-1 pb-1.5 border border-gray-500 ml-2 "> <p>
                    all
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                <span className="mflex rounded-full bg-gray-200 h-8 px-3 pt-1 pb-1.5 border border-gray-400"> <p>
                    javascript
                </p></span>
                </div>
                <span onClick={()=> handldClick("right")} className="right absolute right-0 inset-y-1 w-24 h-12 font-thin bg-white mflex myinset opacity-95">
                    <MdKeyboardArrowRight className="text-3xl font-thin " />
                </span>
            </div>
            </div>

        </div>
    )
}

export default ScrollBar
