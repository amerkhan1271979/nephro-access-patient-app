"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Calendar, Gift, Droplets, Lightbulb, Plus, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </header>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, John!</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Quick Actions
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Tomorrow</div>
              <p className="text-xs text-muted-foreground">10:00 AM - Session #127</p>
              <Button size="sm" className="mt-2" asChild>
                <Link href="/appointments">View Details</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loyalty Points</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+25 from last session</p>
              <Button size="sm" className="mt-2" asChild>
                <Link href="/loyalty">Redeem Rewards</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fluid Intake Today</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">850ml</div>
              <Progress value={68} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">68% of daily limit (1250ml)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Health Trend</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Good</div>
              <Badge variant="secondary" className="mt-2">
                Stable
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">BP and weight within range</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Dialysis Session</p>
                  <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</p>
                </div>
                <Badge>Confirmed</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Follow-up Consultation</p>
                  <p className="text-sm text-muted-foreground">Dec 28, 2:00 PM</p>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/appointments">View All Appointments</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Diet Tip of the Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  <strong>Limit Phosphorus:</strong> Choose fresh fruits and vegetables over processed foods. Fresh
                  apples, berries, and cauliflower are excellent low-phosphorus options.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/health">View Diet Guide</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent News & Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium">Holiday Schedule Update</p>
                  <p className="text-sm text-muted-foreground">
                    Modified hours during the holiday season. Please check your appointment times.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium">New Loyalty Rewards Available</p>
                  <p className="text-sm text-muted-foreground">
                    Check out our latest rewards including wellness packages and gift cards.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent" asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
