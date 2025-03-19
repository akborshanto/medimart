import { Globe, MoreHorizontal, MessageCircle, Share2, ThumbsUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface PostCardProps {
  post: {
    id: number
    user: {
      name: string
      avatar: string
      verified: boolean
    }
    time: string
    content: string
    image?: string
    likes: number
    comments: number
    shares: number
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardHeader className="p-4 pb-0 flex flex-row items-start gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.user.avatar} alt={post.user.name} />
          <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold">{post.user.name}</span>
            {post.user.verified && (
              <svg className="h-4 w-4 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-4.5-4.5 1.4-1.4 3.1 3.1 6.5-6.5 1.4 1.4-7.9 7.9z" />
              </svg>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <span>{post.time}</span>
            <span className="mx-1">•</span>
            <Globe className="h-3 w-3" />
          </div>
        </div>

        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>

      <CardContent className="p-4">
        <p className="whitespace-pre-line">{post.content}</p>

        {post.image && (
          <div className="mt-3 -mx-4">
            <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full" />
          </div>
        )}

        <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <div className="bg-[#1877F2] rounded-full p-1">
              <ThumbsUp className="h-3 w-3 text-white fill-white" />
            </div>
            <span>{post.likes.toLocaleString()}</span>
          </div>

          <div className="flex gap-2">
            <span>{post.comments.toLocaleString()} comments</span>
            <span>{post.shares.toLocaleString()} shares</span>
          </div>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="p-1">
        <div className="grid grid-cols-3 w-full">
          <Button variant="ghost" className="gap-2 rounded-none">
            <ThumbsUp className="h-5 w-5" />
            <span className="font-medium">Like</span>
          </Button>

          <Button variant="ghost" className="gap-2 rounded-none">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">Comment</span>
          </Button>

          <Button variant="ghost" className="gap-2 rounded-none">
            <Share2 className="h-5 w-5" />
            <span className="font-medium">Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

