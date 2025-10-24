"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Droplets, Plus, TrendingUp, Apple, BarChart3, List } from "lucide-react"
import { useState } from "react"

export default function Health() {
  const [fluidIntake, setFluidIntake] = useState(850)
  const [fluidLimit] = useState(1250)
  const [viewMode, setViewMode] = useState<"chart" | "list">("chart")

  const healthParams = [
    { name: "Weight (Pre-HD)", value: "72.5 kg", trend: "stable", color: "blue" },
    { name: "Weight (Post-HD)", value: "70.2 kg", trend: "down", color: "green" },
    { name: "Blood Pressure", value: "140/90", trend: "up", color: "yellow" },
    { name: "Blood Sugar", value: "95 mg/dL", trend: "stable", color: "blue" },
    { name: "Hemoglobin", value: "11.2 g/dL", trend: "up", color: "green" },
  ]

  const fluidEntries = [
    { time: "8:00 AM", amount: 200, type: "Water" },
    { time: "10:30 AM", amount: 150, type: "Coffee" },
    { time: "12:00 PM", amount: 300, type: "Soup" },
    { time: "3:00 PM", amount: 200, type: "Water" },
  ]

  const addFluid = (amount: number) => {
    if (fluidIntake + amount <= fluidLimit) {
      setFluidIntake((prev) => prev + amount)
    }
  }

  const fluidPercentage = (fluidIntake / fluidLimit) * 100

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">MyHealth</h1>
      </header>

      <div className="flex-1 p-4 md:p-8 pt-6">
        <Tabs defaultValue="parameters" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="parameters">Health Parameters</TabsTrigger>
            <TabsTrigger value="fluid">Fluid Intake</TabsTrigger>
            <TabsTrigger value="diet">Diet Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="parameters" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Health Parameters</h2>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "chart" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("chart")}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Chart
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="mr-2 h-4 w-4" />
                  List
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Entry
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {healthParams.map((param, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{param.name}</p>
                        <Badge
                          variant="outline"
                          className={`
                            ${param.trend === "up" ? "border-red-200 text-red-700" : ""}
                            ${param.trend === "down" ? "border-green-200 text-green-700" : ""}
                            ${param.trend === "stable" ? "border-blue-200 text-blue-700" : ""}
                          `}
                        >
                          <TrendingUp className="mr-1 h-3 w-3" />
                          {param.trend}
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold">{param.value}</p>
                      <p className="text-xs text-muted-foreground">Last updated: Today</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {viewMode === "chart" && (
              <Card>
                <CardHeader>
                  <CardTitle>Trends Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                    <p className="text-muted-foreground">Interactive chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="fluid" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5" />
                    Daily Fluid Intake
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={fluidPercentage > 80 ? "#ef4444" : fluidPercentage > 60 ? "#f59e0b" : "#3b82f6"}
                          strokeWidth="2"
                          strokeDasharray={`${fluidPercentage}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg font-bold">{fluidIntake}ml</div>
                          <div className="text-xs text-muted-foreground">of {fluidLimit}ml</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Progress value={fluidPercentage} className={`h-2 ${fluidPercentage > 80 ? "bg-red-100" : ""}`} />
                    <div className="flex justify-between text-sm">
                      <span>Current: {fluidIntake}ml</span>
                      <span className={fluidPercentage > 80 ? "text-red-600 font-medium" : ""}>
                        {Math.round(fluidPercentage)}%
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Add Fluid Intake</Label>
                    <div className="flex gap-2">
                      <Input placeholder="Amount (ml)" className="flex-1" />
                      <Button size="sm">Add</Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => addFluid(50)}>
                        +50ml
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => addFluid(100)}>
                        +100ml
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => addFluid(200)}>
                        +200ml
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Today's Fluid Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {fluidEntries.map((entry, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{entry.type}</p>
                          <p className="text-sm text-muted-foreground">{entry.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{entry.amount}ml</p>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View Full History
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="diet" className="space-y-4">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Apple className="h-5 w-5" />
                    Diet & Nutrition Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-green-700">Foods to Include</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Fresh fruits (apples, berries, grapes)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Low-phosphorus vegetables (cauliflower, cabbage)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          High-quality proteins (fish, egg whites)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Healthy fats (olive oil, avocado)
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-red-700">Foods to Limit</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          High-sodium foods (processed meats, canned foods)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          High-phosphorus foods (dairy, nuts)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          High-potassium foods (bananas, oranges)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Excessive fluids
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3">Sample Meal Plan</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">Breakfast</h4>
                          <ul className="text-sm space-y-1">
                            <li>• 2 egg whites scrambled</li>
                            <li>• 1 slice white bread</li>
                            <li>• 1/2 cup berries</li>
                            <li>• 1 tsp olive oil</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">Lunch</h4>
                          <ul className="text-sm space-y-1">
                            <li>• 3 oz grilled fish</li>
                            <li>• 1/2 cup white rice</li>
                            <li>• Steamed cauliflower</li>
                            <li>• Small apple</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">Dinner</h4>
                          <ul className="text-sm space-y-1">
                            <li>• 3 oz lean chicken</li>
                            <li>• 1/2 cup pasta</li>
                            <li>• Green beans</li>
                            <li>• 1/2 cup grapes</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
