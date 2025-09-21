"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sparkles,
  CheckCircle,
  Eye,
  Heart,
  Gift,
  Star,
  Zap,
  Crown,
  GraduationCap,
  Mail,
  Gamepad2,
  Trophy,
  Target,
  Rocket,
  Flame,
  Shield,
  Sword,
  Gem,
  Joystick,
  Cpu,
  Wifi,
  Battery,
  Settings,
  Play,
  Camera,
  Signal,
  Radar,
  Satellite,
  Crosshair,
  Bolt,
  Dice3,
  Coins,
  Diamond,
  BookOpen,
  RotateCcw,
  Database,
  Lock,
  Navigation,
} from "lucide-react"

const wishCategories = [
  "AirPods & Tech Gadgets",
  "Designer Sneakers",
  "Celebrity Dinner Date",
  "Dream Vacation",
  "Academic Success",
  "Love & Relationships",
  "Career Goals",
  "Family Blessings",
  "Health & Wellness",
  "Creative Dreams",
]

export function WishlistSection() {
  const [wish, setWish] = useState("")
  const [category, setCategory] = useState("")
  const [userType, setUserType] = useState("")
  const [lanternChoice, setLanternChoice] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [showForm, setShowForm] = useState(false)

  const handleUserTypeSelect = (type: string) => {
    setUserType(type)
    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (wish.trim() && category && userType && email.trim()) {
      try {
        console.log("[v0] Submitting wish:", { wish, category, userType, email, lanternChoice })
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setWish("")
          setCategory("")
          setUserType("")
          setEmail("")
          setLanternChoice("")
          setShowForm(false)
        }, 5000)
      } catch (error) {
        console.error("[v0] Error submitting wish:", error)
      }
    }
  }

  return (
    <section
      id="wish"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20 relative overflow-hidden pb-16 md:pb-20 min-h-screen"
    >
      {/* Gaming-style background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neon grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating gaming particles with Lucide icons - responsive positioning */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 animate-bounce">
          <Cpu className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
        </div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 animate-pulse">
          <Joystick className="h-4 w-4 sm:h-6 sm:w-6 text-purple-400 drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]" />
        </div>
        <div className="absolute bottom-24 sm:bottom-32 left-1/4 animate-ping">
          <Dice3 className="h-2 w-2 sm:h-3 sm:w-3 text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
        </div>
        <div className="absolute bottom-16 sm:bottom-20 right-1/3 animate-bounce">
          <Coins className="h-3 w-3 sm:h-5 sm:w-5 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
        </div>
        <div className="absolute top-1/2 left-1/2 animate-ping">
          <Bolt className="h-2 w-2 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse">
          <Diamond className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
        </div>
        <div className="absolute top-3/4 left-1/6 animate-spin">
          <Settings className="h-2 w-2 sm:h-3 sm:w-3 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
        </div>
        <div className="absolute top-1/4 left-3/4 animate-bounce">
          <Wifi className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
        </div>
        <div className="absolute bottom-1/3 right-1/6 animate-pulse">
          <Battery className="h-2 w-2 sm:h-3 sm:w-3 text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
        </div>
        <div className="absolute top-2/3 left-2/3 animate-ping">
          <Signal className="h-2 w-2 text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
        </div>
        
        {/* Gaming UI elements - responsive positioning */}
        <div className="absolute top-4 sm:top-10 right-4 sm:right-10 flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-cyan-400/30">
          <Gamepad2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-xs sm:text-sm font-mono hidden sm:inline">LEVEL UP</span>
          <span className="text-cyan-400 text-xs font-mono sm:hidden">LVL</span>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-purple-400/30">
          <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 animate-bounce" />
          <span className="text-purple-400 text-xs sm:text-sm font-mono hidden sm:inline">QUEST ACTIVE</span>
          <span className="text-purple-400 text-xs font-mono sm:hidden">QUEST</span>
        </div>
        
        {/* Additional gaming HUD elements */}
        <div className="absolute top-1/2 left-4 sm:left-10 flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-green-400/30">
          <Radar className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 animate-spin" />
          <span className="text-green-400 text-xs sm:text-sm font-mono hidden sm:inline">SCANNING</span>
          <span className="text-green-400 text-xs font-mono sm:hidden">SCAN</span>
        </div>
        
        <div className="absolute top-1/2 right-4 sm:right-10 flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-orange-400/30">
          <Satellite className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400 animate-pulse" />
          <span className="text-orange-400 text-xs sm:text-sm font-mono hidden sm:inline">ONLINE</span>
          <span className="text-orange-400 text-xs font-mono sm:hidden">ON</span>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          {/* Gaming-style title with neon effect */}
          <div className="relative">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 md:mb-6">
              <Joystick className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-cyan-400 animate-bounce" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                WISH QUEST: MIDNIGHT EDITION
              </h2>
              <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-pink-400 animate-pulse" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl rounded-lg" />
          </div>
          
          {/* Gaming HUD elements - responsive */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-6">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-cyan-400/40">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-spin" />
              <span className="text-cyan-400 font-mono text-xs sm:text-sm">OBJECTIVE: MAKE WISH</span>
              <Crosshair className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-purple-400/40">
              <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 animate-bounce" />
              <span className="text-purple-400 font-mono text-xs sm:text-sm">STATUS: ACTIVE</span>
              <Play className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-green-400/40">
              <Wifi className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 animate-pulse" />
              <span className="text-green-400 font-mono text-xs sm:text-sm">ONLINE</span>
              <Signal className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 animate-bounce" />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 font-mono">
            🚀 Enter the ultimate wish-granting arena where dreams become reality!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="space-y-6 md:space-y-8">
            {/* Gaming-style story section */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="h-8 w-8 text-orange-400 animate-pulse" />
                  <span className="text-orange-400 font-mono font-bold text-xl">MISSION BRIEFING</span>
                  <Target className="h-6 w-6 text-orange-400 animate-bounce" />
                </div>
                
                <p className="flex items-start gap-3 text-gray-200">
                  <Gem className="h-6 w-6 md:h-7 md:w-7 text-cyan-400 flex-shrink-0 mt-1 animate-pulse" />
                  <span>
                    <strong className="text-cyan-400">SCENARIO:</strong> You and your squad, suited up in Christmas PJs, 
                    inscribing your 2026 power-ups on a glowing lantern...
                  </span>
                </p>
                
                <p className="text-gray-300 leading-relaxed ml-9">
                  Then launching it into the night sky alongside hundreds of other wish-rockets, creating an epic 
                  light show with music, fireworks, and victory celebrations! 🎆
                </p>
                
                <p className="flex items-start gap-3 text-gray-200">
                  <Shield className="h-6 w-6 md:h-7 md:w-7 text-purple-400 flex-shrink-0 mt-1 animate-bounce" />
                  <span className="text-purple-400">
                    <strong>POWER-UP ACTIVATED:</strong> This isn't just a lantern — it's your dream beacon, 
                    your prayer missile, your 2026 achievement unlock... ascending with epic soundtrack and celebration effects!
                  </span>
                </p>
              </div>
            </div>

            {/* Gaming choice selection */}
         
            {/* Gaming-style Wishlist Magic Section */}
            <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-pink-400/40 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
              <div className="flex items-center gap-3 mb-6">
                <Gem className="h-8 w-8 text-pink-400 animate-pulse" />
                <span className="text-pink-400 font-mono font-bold text-xl">LOOT SYSTEM</span>
                <Sparkles className="h-6 w-6 text-pink-400 animate-spin" />
              </div>
              
              <p className="text-gray-200 mb-4 md:mb-6 leading-relaxed font-mono">
                <Gift className="inline h-4 w-4 text-pink-400 mr-1 animate-bounce" />
                🎁 <strong className="text-pink-400">LEGENDARY DROPS AVAILABLE:</strong> AirPods, designer sneakers, 
                celebrity dinner dates, and more epic loot!
                <Heart className="inline h-4 w-4 text-pink-400 mx-1 animate-pulse" />
                <Crown className="inline h-4 w-4 text-yellow-400 mx-1 animate-bounce" />
                High-level sponsors are standing by to grant wishes in real-time during the event!
                <Zap className="inline h-4 w-4 text-cyan-400 ml-1 animate-pulse" />
              </p>
              
              {!showForm ? (
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <span className="text-cyan-400 font-mono text-sm bg-black/40 px-3 py-1 rounded-full border border-cyan-400/30 flex items-center justify-center gap-2">
                      <Sword className="h-4 w-4 animate-pulse" />
                      SELECT YOUR CLASS
                      <Shield className="h-4 w-4 animate-pulse" />
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <Button
                      onClick={() => handleUserTypeSelect("student")}
                      className="group relative h-auto min-h-[80px] sm:min-h-[100px] p-4 sm:p-6 rounded-xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-mono font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] border border-cyan-400/50 flex flex-col items-center justify-center text-center"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
                        <span className="text-sm sm:text-base md:text-lg">🎓 STUDENT CLASS</span>
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                      </div>
                      <div className="text-xs sm:text-sm text-cyan-100 font-normal flex items-center justify-center gap-1">
                        <Star className="h-3 w-3 animate-spin" />
                        Drop Wish
                        <Sparkles className="h-3 w-3 animate-bounce" />
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleUserTypeSelect("sponsor")}
                      className="group relative h-auto min-h-[80px] sm:min-h-[100px] p-4 sm:p-6 rounded-xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-mono font-bold shadow-[0_0_25px_rgba(147,51,234,0.4)] border border-purple-400/50 flex flex-col items-center justify-center text-center"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Crown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
                        <span className="text-sm sm:text-base md:text-lg">👑 SPONSOR CLASS</span>
                        <Diamond className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                      </div>
                      <div className="text-xs sm:text-sm text-purple-100 font-normal flex items-center justify-center gap-1">
                        <Coins className="h-3 w-3 animate-spin" />
                        Grant Wishes
                        <Gem className="h-3 w-3 animate-bounce" />
                      </div>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center bg-black/40 rounded-lg p-4 border border-cyan-400/30">
                  <p className="text-sm text-gray-300 mb-3 font-mono flex items-center justify-center gap-2">
                    <Gamepad2 className="h-4 w-4 text-cyan-400 animate-pulse" />
                    🎮 CLASS SELECTED: <span className="font-bold text-cyan-400 uppercase">{userType}</span>
                    <CheckCircle className="h-4 w-4 text-green-400 animate-bounce" />
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowForm(false)
                      setUserType("")
                    }}
                    className="text-sm font-mono border-orange-400/50 text-orange-400 hover:bg-orange-400/10 flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4 animate-spin" />
                    🔄 CHANGE CLASS
                    <Settings className="h-4 w-4 animate-pulse" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {showForm && (
            <Card className="bg-black/80 backdrop-blur-sm border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.4)] rounded-2xl md:rounded-3xl">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
                    <div className="text-center mb-6">
                      {/* Gaming-style form header */}
                      <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-xl p-4 border border-cyan-400/30 mb-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 flex items-center justify-center gap-2 font-mono">
                          {userType === "student" ? (
                            <>
                              <GraduationCap className="h-6 w-6 text-cyan-400" />
                              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                🎓 STUDENT TERMINAL
                              </span>
                            </>
                          ) : (
                            <>
                              <Crown className="h-6 w-6 text-purple-400" />
                              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                👑 SPONSOR CONSOLE
                              </span>
                            </>
                          )}
                        </h3>
                        <p className="text-sm text-gray-300 flex items-center justify-center gap-1 font-mono">
                          {userType === "student" ? (
                            <>
                              🚀 Initialize wish upload sequence
                              <Rocket className="h-4 w-4 text-cyan-400 animate-bounce" />
                            </>
                          ) : (
                            <>
                              💎 Activate wish-granting protocol
                              <Gem className="h-4 w-4 text-purple-400 animate-pulse" />
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm md:text-base font-bold mb-2 md:mb-3 text-gray-200 flex items-center gap-2 font-mono">
                        {userType === "student" ? (
                          <>
                            <Target className="h-5 w-5 text-cyan-400 animate-spin" />
                            🎯 TARGET WISH DATA
                          </>
                        ) : (
                          <>
                            <Gem className="h-5 w-5 text-purple-400 animate-pulse" />
                            💎 SPONSORSHIP PARAMETERS
                          </>
                        )}
                      </label>
                      <Textarea
                        placeholder={
                          userType === "student" 
                            ? "🎮 Enter your wish code... (e.g., 'AirPods Pro power-up for study mode' or 'Burna Boy dinner quest unlock')"
                            : "🏆 Define your sponsorship mission... (e.g., 'Sponsor tech loot for 5 players' or 'Provide celebrity encounter rewards')"
                        }
                        value={wish}
                        onChange={(e) => setWish(e.target.value)}
                        className="min-h-[100px] sm:min-h-[120px] md:min-h-[140px] resize-none text-sm sm:text-base md:text-lg rounded-xl border-2 border-cyan-400/30 focus:border-cyan-400 bg-black/60 text-gray-200 placeholder-gray-400 transition-all duration-200 font-mono shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm md:text-base font-bold mb-2 md:mb-3 text-gray-200 flex items-center gap-2 font-mono">
                        <Mail className="h-5 w-5 text-green-400 animate-pulse" />
                        📧 CONTACT PROTOCOL
                      </label>
                      <input
                        type="email"
                        placeholder={
                          userType === "student" 
                            ? "player.name@university.edu" 
                            : "sponsor.name@company.com"
                        }
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-xl border-2 border-green-400/30 focus:border-green-400 focus:outline-none bg-black/60 text-gray-200 placeholder-gray-400 transition-all duration-200 font-mono shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm md:text-base font-bold mb-2 md:mb-3 text-gray-200 flex items-center gap-2 font-mono">
                        <Zap className="h-5 w-5 text-yellow-400 animate-bounce" />
                        ⚡ {userType === "student" ? "LOOT CATEGORY" : "SPONSOR TIER"}
                      </label>
                      <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger className="text-sm sm:text-base md:text-lg py-3 md:py-4 rounded-xl border-2 border-yellow-400/30 bg-black/60 text-gray-200 font-mono shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                          <SelectValue placeholder="🎯 Select your category..." />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-yellow-400/30">
                          {wishCategories.map((cat) => (
                            <SelectItem key={cat} value={cat} className="text-sm sm:text-base md:text-lg text-gray-200 font-mono hover:bg-yellow-400/10">
                              🎁 {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className={`w-full font-bold py-4 md:py-5 text-base sm:text-lg md:text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-mono ${
                        userType === "student"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white border border-purple-400/50 shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                      }`}
                      disabled={!wish.trim() || !category || !userType || !email.trim()}
                    >
                      <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 animate-bounce" />
                      {userType === "student" ? "🚀 LAUNCH WISH ROCKET" : "👑 ACTIVATE SPONSOR MODE"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8 md:py-12">
                    {/* Gaming-style success animation */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-3xl rounded-full animate-pulse" />
                      <div className="relative">
                        <Trophy className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto text-green-400 animate-bounce" />
                        <div className="absolute -top-2 -right-2">
                          <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
                        </div>
                        <div className="absolute -bottom-2 -left-2">
                          <Star className="h-6 w-6 text-cyan-400 animate-pulse" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-6 border border-green-400/40 mb-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-2 font-mono">
                        {userType === "student" ? (
                          <>
                            <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-400" />
                            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                              🎯 MISSION COMPLETE!
                            </span>
                          </>
                        ) : (
                          <>
                            <Crown className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                              👑 SPONSOR ACTIVATED!
                            </span>
                          </>
                        )}
                      </h3>
                      
                      <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-mono">
                        {userType === "student" 
                          ? "🚀 Your wish has been uploaded to the cosmic database! Your lantern will be prepped and ready for the epic launch sequence!"
                          : "💎 Your sponsorship application is now in the system! Our admin team will review and activate your wish-granting powers soon!"
                        }
                      </p>
                    </div>
                    
                    {/* Gaming achievement badge */}
                    <div className="inline-flex items-center gap-2 bg-black/60 rounded-full px-4 py-2 border border-yellow-400/40">
                      <Gem className="h-4 w-4 text-yellow-400 animate-pulse" />
                      <span className="text-yellow-400 font-mono text-sm">ACHIEVEMENT UNLOCKED</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {!showForm && (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-6 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                {/* Gaming-style waiting state */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-2xl rounded-full animate-pulse" />
                  <div className="relative flex justify-center">
                    <Gamepad2 className="h-16 w-16 md:h-20 md:w-20 text-cyan-400 animate-bounce" />
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className="h-6 w-6 text-purple-400 animate-spin" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-200 flex items-center justify-center gap-2 font-mono">
                    <Target className="h-6 w-6 text-cyan-400 animate-spin" />
                    🎮 SELECT YOUR CLASS
                  </h3>
                  <p className="text-gray-300 font-mono text-sm md:text-base">
                    Choose your role in the ultimate wish-granting adventure!
                  </p>
                  
                  {/* Gaming instruction */}
                  <div className="bg-black/60 rounded-lg p-3 border border-purple-400/30 mt-4">
                    <p className="text-purple-400 font-mono text-xs md:text-sm flex items-center justify-center gap-2">
                      <Rocket className="h-4 w-4 animate-bounce" />
                      AWAITING CLASS SELECTION...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
