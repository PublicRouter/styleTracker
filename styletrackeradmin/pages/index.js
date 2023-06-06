import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
  }

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center p-4 bg-blue-500">
      <h1 className="pb-[5vh] text-[28px] text-center text-white underline md:text-[36px]">StyleTracker</h1>
      <button onClick={() => signIn('google')} className="bg-white text-blue-500 border-2 p-2 px-3 mb-12 rounded-lg hover:bg-blue-600 hover:text-white">Login with Google</button>
    </main>
    // <div className="bg-blue-400 min-w-screen min-h-screen">
    //   <button className="bg-red-600">Login with Google</button>
    // </div>
  )
}