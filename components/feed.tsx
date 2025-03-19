import { Stories } from "@/components/stories"
import { CreatePost } from "@/components/create-post"
import { PostCard } from "@/components/post-card"

export function Feed() {
  const posts = [
    {
      id: 1,
      user: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40&text=JS",
        verified: true,
      },
      time: "3 hrs",
      content: "Just finished my new website design! What do you think? 🎨 #webdesign #uidesign",
      image: "/placeholder.svg?height=500&width=600&text=Website+Design",
      likes: 243,
      comments: 42,
      shares: 12,
    },
    {
      id: 2,
      user: {
        name: "Tech Insights",
        avatar: "/placeholder.svg?height=40&width=40&text=TI",
        verified: true,
      },
      time: "5 hrs",
      content:
        "The future of AI is here! Our latest article explores how artificial intelligence is transforming industries across the globe. Read more on our website. #AI #Technology #Innovation",
      image: "/placeholder.svg?height=400&width=600&text=AI+Technology",
      likes: 1243,
      comments: 89,
      shares: 156,
    },
    {
      id: 3,
      user: {
        name: "Travel Adventures",
        avatar: "/placeholder.svg?height=40&width=40&text=TA",
        verified: false,
      },
      time: "Yesterday",
      content:
        "Sunset views from Bali 🌅 Sometimes you need to disconnect to reconnect with yourself. #travel #bali #sunset #mindfulness",
      image: "/placeholder.svg?height=600&width=600&text=Bali+Sunset",
      likes: 3542,
      comments: 231,
      shares: 87,
    },
  ]

  return (
    <div className="space-y-4">
      <Stories />
      <CreatePost />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

