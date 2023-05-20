import Image from 'next/image'
import orangeSplat from "../public/orangeSplat.png"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-xl'>Welcome to <em className='text-2xl text-orange-500'>StyleTracker!</em></h1>
      <div className="h-44 w-44 p-4 flex-col align-center justify-center relative hover:p-8 hover:text-sm">
        <Image src={orangeSplat} className='block mx-0 my-auto'/>
        <em className='absolute top-[48%] left-[38%]'>Enter</em>
      </div>
    </main>
  )
}
