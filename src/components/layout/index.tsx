import Navbar from '@components/nav-bar';

const index:React.FunctionComponent = ({children}) => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar/>
            {children}
        </div>
    )
}

export default index


// interface Props {
//     children: React.ReactNode

//   }

// function index({children}:Props):JSX.Element {
//     return (
//         <div className="w-screen h-screen flex flex-col">
//             <Navbar/>
//             {children}
//         </div>
//     )
// }

// export default index
