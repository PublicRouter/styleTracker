import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()
  if (!session) return <Layout />;
  return (
    <Layout>
      <div className="text-blue-900 flex items-center justify-between mr-3">
        <h1>Dashboard</h1>
        <div className="flex gap-1 items-center">
          <img src={session?.user?.image} alt="users google profile image" className="h-6 w-6" />
          <h2>Hello, <b>{session?.user?.name}</b></h2>
        </div>
        
      </div>
      <div className="bg-white border-blue-500 border-2 flex flex-wrap min-h-[60%] mx-2 mt-3 rounded-lg overflow-hidden">

      </div>
    </Layout>
  )
}