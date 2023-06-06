// import Image from 'next/image'
// import orangeSplat from "../public/orangeSplat.png"
// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       {/* <h1 className='text-xl'>Welcome to <em className='text-2xl text-orange-500'>StyleTracker!</em></h1>
//       <div className="h-44 w-44 p-4 flex-col align-center justify-center relative hover:p-8 hover:text-sm">
//         <Image src={orangeSplat} className='block mx-0 my-auto'/>
//         <em className='absolute top-[48%] left-[38%]'>Enter</em>
//       </div> */}
//       {/* <div className='bg-gray-200 h-[80vh] w-[80vw]'>

//       </div> */}
//     </main>
//   )
// }

import Link from "next/link"

export default function Page() {
    return (
        <div className="bg-blue-500 min-w-screen min-h-screen flex justify-center items-center text-center">
              {/* <h3 className="text-blue-600 text-[38px]">Welcome to Home Page</h3>
              <Link href="/pages/dashboard">View Clothes</Link> */}
            <button className="text-black text-sm border-2 p-2 px-3 rounded-lg bg-white shadow-lg hover:shadow-inner hover:border-blue-500 hover:border-1">Login with Google</button>
            
            
        </div>
    )
}
