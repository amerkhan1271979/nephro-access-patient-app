"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Calendar, Bell, ChevronRight, ImageIcon } from "lucide-react"
import { useState } from "react"

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  const articles = [
    {
      id: 1,
      title: "Holiday Schedule Update",
      summary: "Modified hours during the holiday season. Please check your appointment times.",
      content:
        "Dear patients, we want to inform you about our modified schedule during the upcoming holiday season. Our center will operate with adjusted hours from December 24th to January 2nd. Please note that emergency services will remain available 24/7. We recommend checking your appointment confirmations and rescheduling if necessary. Our staff will be contacting patients with affected appointments. Thank you for your understanding.",
      date: "2 days ago",
      category: "Schedule",
      priority: "high",
      hasImage: false,
    },
    {
      id: 2,
      title: "New Loyalty Rewards Available",
      summary: "Check out our latest rewards including wellness packages and gift cards.",
      content:
        "We are excited to announce new additions to our loyalty rewards program! Starting this month, you can redeem your points for wellness packages, shopping gift cards, and exclusive health consultations. The wellness package includes a comprehensive health screening, nutritional consultation, and a care kit. Gift cards are available in denominations of ₱500, ₱1000, and ₱2000. Visit the loyalty section in your app to explore all available rewards.",
      date: "1 week ago",
      category: "Rewards",
      priority: "medium",
      hasImage: true,
    },
    {
      id: 3,
      title: "Flu Vaccination Drive",
      summary: "Free flu shots available for all dialysis patients this month.",
      content:
        "As part of our commitment to your health and safety, we are offering free flu vaccinations for all our dialysis patients throughout this month. The vaccination will be administered by our qualified nursing staff during your regular dialysis sessions. Please inform your nurse if you would like to receive the vaccination. This initiative is part of our preventive care program to help protect our patients during flu season.",
      date: "2 weeks ago",
      category: "Health",
      priority: "medium",
      hasImage: false,
    },
    {
      id: 4,
      title: "New Branch Opening Soon",
      summary: "Our newest location in Makati will open next month with state-of-the-art facilities.",
      content:
        "We are thrilled to announce the upcoming opening of our newest branch in Makati City! The new facility will feature 20 state-of-the-art dialysis stations, private consultation rooms, and a comfortable waiting area for families. The branch will be fully operational starting February 1st, 2025. Patients interested in transferring to this location can speak with our staff to arrange the transition. The new facility will offer the same high-quality care you expect from Nephro Access.",
      date: "3 weeks ago",
      category: "Facilities",
      priority: "low",
      hasImage: true,
    },
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">News & Announcements</h1>
      </header>

      <div className="flex-1 p-4 md:p-8 pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Latest Updates</h2>
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Notification Settings
            </Button>
          </div>

          <div className="grid gap-4">
            {articles.map((article) => (
              <Card
                key={article.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedArticle === article.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedArticle(selectedArticle === article.id ? null : article.id)}
              >
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{article.title}</h3>
                          <Badge
                            variant={
                              article.priority === "high"
                                ? "destructive"
                                : article.priority === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                            size="sm"
                          >
                            {article.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{article.summary}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </div>
                          {article.hasImage && (
                            <div className="flex items-center gap-1">
                              <ImageIcon className="h-4 w-4" />
                              Image
                            </div>
                          )}
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          selectedArticle === article.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    {selectedArticle === article.id && (
                      <div className="pt-4 border-t space-y-4">
                        {article.hasImage && (
                          <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                            <img
                              src="/placeholder.svg?height=200&width=400&text=News+Image"
                              alt="Article image"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        )}
                        <div className="prose prose-sm max-w-none">
                          <p className="text-sm leading-relaxed">{article.content}</p>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" variant="outline">
                            Share
                          </Button>
                          <Button size="sm" variant="outline">
                            Save
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
