import Nav from "@/components/Nav"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Layout({ children }) {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="bg-blue-500 min-h-screen flex">
        <Nav />
        <div className="bg-white flex-grow mt-3 mr-3 mb-3 rounded-lg p-4">
            { children }
        </div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center p-4 bg-blue-500">
      <h1 className="pb-[1vh] text-[28px] text-center text-white underline md:text-[36px]">StyleTracker</h1>
      <button onClick={() => signIn('google')} className="bg-white text-blue-500 border-2 p-2 px-3 mb-12 rounded-lg hover:bg-blue-600 hover:text-white">Login with Google</button>
    </main>
  )
}