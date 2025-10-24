"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Progress } from "@/components/ui/progress"
import { Gift, Star, Trophy, QrCode, History, ShoppingCart } from "lucide-react"

export default function Loyalty() {
  const rewards = [
    {
      id: 1,
      name: "Wellness Package",
      points: 500,
      description: "Complete health check-up package",
      available: true,
    },
    {
      id: 2,
      name: "Gift Card - ₱1000",
      points: 800,
      description: "Shopping gift card",
      available: true,
    },
    {
      id: 3,
      name: "Free Consultation",
      points: 300,
      description: "One-on-one consultation with nutritionist",
      available: true,
    },
    {
      id: 4,
      name: "Premium Care Kit",
      points: 1200,
      description: "Complete care package with supplements",
      available: false,
    },
  ]

  const transactions = [
    {
      id: 1,
      date: "Dec 20, 2024",
      type: "Earned",
      points: 25,
      description: "Dialysis session completed",
    },
    {
      id: 2,
      date: "Dec 18, 2024",
      type: "Earned",
      points: 25,
      description: "Dialysis session completed",
    },
    {
      id: 3,
      date: "Dec 15, 2024",
      type: "Redeemed",
      points: -300,
      description: "Free Consultation",
    },
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">Loyalty Program</h1>
      </header>

      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Your Points Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">1,247</div>
                  <p className="text-muted-foreground">Total Points</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to next reward tier</span>
                    <span>1,247 / 1,500</span>
                  </div>
                  <Progress value={83} className="h-2" />
                  <p className="text-xs text-muted-foreground">253 more points to reach Gold tier</p>
                </div>

                <div className="flex items-center justify-center gap-2 pt-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    Silver Member
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5" />
                Loyalty QR Code
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=120&width=120&text=Loyalty+QR"
                  alt="Loyalty QR Code"
                  className="w-28 h-28"
                />
              </div>
              <div className="text-center">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">1,247 Points</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Available Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {rewards.map((reward) => (
                <Card key={reward.id} className={!reward.available ? "opacity-50" : ""}>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold">{reward.name}</h3>
                        <Badge variant={reward.available ? "default" : "secondary"}>{reward.points} pts</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{reward.description}</p>
                      <Button size="sm" className="w-full" disabled={!reward.available || reward.points > 1247}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {reward.available ? "Redeem" : "Not Available"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${transaction.type === "Earned" ? "text-green-600" : "text-red-600"}`}>
                      {transaction.type === "Earned" ? "+" : ""}
                      {transaction.points} pts
                    </p>
                    <Badge variant="outline" size="sm">
                      {transaction.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Transactions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
