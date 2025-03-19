import { ChevronRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Stories() {
  const stories = [
    { id: 1, user: "Your Story", image: "/placeholder.svg?height=200&width=120&text=Your+Story", isUser: true },
    { id: 2, user: "Sarah J.", image: "/placeholder.svg?height=200&width=120&text=Sarah", isUser: false },
    { id: 3, user: "Mike B.", image: "/placeholder.svg?height=200&width=120&text=Mike", isUser: false },
    { id: 4, user: "Emily D.", image: "/placeholder.svg?height=200&width=120&text=Emily", isUser: false },
    { id: 5, user: "David W.", image: "/placeholder.svg?height=200&width=120&text=David", isUser: false },
    { id: 6, user: "Jessica T.", image: "/placeholder.svg?height=200&width=120&text=Jessica", isUser: false },
  ]

  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative min-w-[120px] h-[200px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
          >
            <img src={story.image || "/placeholder.svg"} alt={story.user} className="w-full h-full object-cover" />

            {story.isUser ? (
              <div className="absolute bottom-0 w-full p-3 bg-white">
                <div className="flex justify-center -mt-8">
                  <div className="bg-white p-1 rounded-full">
                    <div className="bg-[#1877F2] rounded-full flex items-center justify-center w-8 h-8">
                      <Plus className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm font-medium mt-1">{story.user}</p>
              </div>
            ) : (
              <>
                <div className="absolute top-3 left-3 ring-4 ring-[#1877F2] rounded-full">
                  <Avatar className="h-10 w-10 border-4 border-white">
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40&text=${story.user.charAt(0)}`}
                      alt={story.user}
                    />
                    <AvatarFallback>{story.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm font-medium">{story.user}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full shadow-lg bg-white hover:bg-gray-100 z-10"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

