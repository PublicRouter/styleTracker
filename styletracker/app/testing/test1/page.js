import { Suspense } from "react";

export default function Page() {
    return (
        <div className="bg-blue-500 min-w-screen min-h-screen flex justify-center items-center text-center">
              {/* <h3 className="text-blue-600 text-[38px]">Welcome to Home Page</h3>
              <Link href="/pages/dashboard">View Clothes</Link> */}
              <Suspense fallback={"Loading..."}>
                 <h1>Test1 Page</h1>

              </Suspense>
            
            
        </div>
    )
}