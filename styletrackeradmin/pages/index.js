import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()
  if (!session) return <Layout />;
  return (
    <Layout>
      <div className="text-blue-900 flex gap-2 items-center">
        <div>
          <img src={session?.user?.image} alt="users google profile image" className="h-8 w-8" />
        </div>
        <h2>Hello, <b>{session?.user?.name}</b></h2>
      </div>
      <div className="bg-blue-500 flex flex-wrap min-h-[60%] m-4 rounded-lg overflow-hidden">
        <div className="flex-grow min-w-[320px] m-1 p-1 bg-white rounded-lg">

        </div>
        <div className="m-1 p-1 flex-grow min-w-[300px]">

        </div>

      </div>
    </Layout>
  )
}