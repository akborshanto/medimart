import { Camera, Image, Smile } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function CreatePost() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button
            variant="outline"
            className="rounded-full h-10 flex-1 justify-start text-gray-500 font-normal bg-gray-100 border-0"
          >
            What's on your mind, John?
          </Button>
        </div>

        <Separator className="my-3" />

        <div className="flex justify-between">
          <Button variant="ghost" className="flex-1 gap-2">
            <Camera className="h-5 w-5 text-red-500" />
            <span className="font-medium">Live video</span>
          </Button>

          <Button variant="ghost" className="flex-1 gap-2">
            <Image className="h-5 w-5 text-green-500" />
            <span className="font-medium">Photo/video</span>
          </Button>

          <Button variant="ghost" className="flex-1 gap-2">
            <Smile className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">Feeling/activity</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

