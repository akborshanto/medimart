import { authOptions } from "@/utils/authOption/authOption"
import { getServerSession } from "next-auth"
import type { Session } from "next-auth"
import Image from "next/image"

const DashboardPage = async () => {
  // Get the session
  const session = (await getServerSession(authOptions)) as Session | null

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mt-10 mb-8">Welcome To Dashboard Page</h1>

      {session?.user ? (
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full border-4 border-primary shadow-lg"
            alt="User profile"
            src={session.user.image || "/placeholder.svg?height=300&width=300"}
            width={300}
            height={300}
          />
          <h2 className="text-2xl font-medium mt-4">{session.user.name}</h2>
          <p className="text-muted-foreground">{session.user.email}</p>
        </div>
      ) : (
        <div className="text-center p-6 bg-muted rounded-lg">
          <p className="text-xl">You are not signed in</p>
        </div>
      )}
    </div>
  )
}

export default DashboardPage

