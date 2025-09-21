"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const socialPosts = [
  {
    id: 1,
    platform: "twitter",
    username: "@ChiomaNkem",
    handle: "Chioma Nkem",
    time: "2h",
    content: "Not me screaming karaoke in pajamas 😭🔥 #MidnightInPJs",
    likes: 234,
    retweets: 45,
    comments: 12,
    verified: true,
  },
  {
    id: 2,
    platform: "instagram",
    username: "@kemi_styles",
    handle: "Kemi Adebayo",
    time: "4h",
    content: "Lanterns + fireworks = my Christmas is complete 🎆🎄",
    likes: 567,
    comments: 23,
    shares: 8,
  },
  {
    id: 3,
    platform: "twitter",
    username: "@EmekaNaija",
    handle: "Emeka Johnson",
    time: "6h",
    content: "Christmas photo shoot with my girls = IG on lock 📸✨",
    likes: 189,
    retweets: 34,
    comments: 7,
  },
  {
    id: 4,
    platform: "instagram",
    username: "@ada_vibes",
    handle: "Ada Okafor",
    time: "8h",
    content: "This is better than Detty December fr. 💯",
    likes: 445,
    comments: 18,
    shares: 12,
  },
]

export function SocialProofSection() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const TwitterPost = ({ post }: { post: (typeof socialPosts)[0] }) => (
    <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold">
            {post.handle.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold text-gray-900">{post.handle}</span>
              {post.verified && <span className="text-blue-500">✓</span>}
              <span className="text-gray-500 text-sm">{post.username}</span>
              <span className="text-gray-500 text-sm">·</span>
              <span className="text-gray-500 text-sm">{post.time}</span>
            </div>
            <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
            <div className="flex items-center justify-between text-gray-500 max-w-md">
              <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                <Share className="w-4 h-4" />
                <span className="text-sm">{post.retweets}</span>
              </button>
              <button
                className={`flex items-center space-x-2 transition-colors ${
                  likedPosts.includes(post.id) ? "text-red-500" : "hover:text-red-500"
                }`}
                onClick={() => handleLike(post.id)}
              >
                <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                <span className="text-sm">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
              </button>
              <button className="hover:text-gray-700 transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const InstagramPost = ({ post }: { post: (typeof socialPosts)[0] }) => (
    <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {post.handle.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900">{post.username}</div>
            <div className="text-gray-500 text-sm">{post.time} ago</div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-4">
            <button
              className={`transition-colors ${likedPosts.includes(post.id) ? "text-red-500" : "hover:text-red-500"}`}
              onClick={() => handleLike(post.id)}
            >
              <Heart className={`w-6 h-6 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
            </button>
            <button className="hover:text-gray-700 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:text-gray-700 transition-colors">
              <Share className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-900">
          <span className="font-semibold">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)} likes</span>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="hype" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Student Hype Section</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what students are saying about Midnight in PJs across social media
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialPosts.map((post) =>
            post.platform === "twitter" ? (
              <TwitterPost key={post.id} post={post} />
            ) : (
              <InstagramPost key={post.id} post={post} />
            ),
          )}
        </div>

        {/* Social Sharing CTAs */}
        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join the Conversation!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Share your excitement and help spread the word about the most magical Christmas event for students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
              >
                <span className="mr-2">🐦</span>
                Tweet this
              </Button>
              <Button
                variant="outline"
                className="border-2 border-pink-400 text-pink-600 hover:bg-pink-50 font-semibold bg-transparent"
              >
                <span className="mr-2">📸</span>
                Share on IG story
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Use #MidnightInPJs to join the hype!</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
