"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, Plus, MapPin } from "lucide-react"
import { useState } from "react"

export default function Appointments() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const upcomingAppointments = [
    {
      id: 1,
      date: "Tomorrow",
      time: "10:00 AM",
      type: "Dialysis Session",
      status: "Confirmed",
      location: "Main Center - Room 3",
      duration: "4 hours",
    },
    {
      id: 2,
      date: "Dec 28, 2024",
      time: "2:00 PM",
      type: "Follow-up Consultation",
      status: "Scheduled",
      location: "Main Center - Dr. Santos Office",
      duration: "30 minutes",
    },
  ]

  const pastAppointments = [
    {
      id: 3,
      date: "Dec 20, 2024",
      time: "10:00 AM",
      type: "Dialysis Session",
      status: "Completed",
      location: "Main Center - Room 2",
      duration: "4 hours",
      preWeight: "72.5 kg",
      postWeight: "70.2 kg",
      bloodPressure: "140/90 mmHg",
      nurseNotes: "Patient tolerated session well. No complications noted.",
    },
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">Appointments</h1>
        <div className="ml-auto">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </header>

      <div className="flex-1 p-4 md:p-8 pt-6">
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Appointments</TabsTrigger>
            <TabsTrigger value="book">Book New</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{appointment.type}</h3>
                          <Badge variant={appointment.status === "Confirmed" ? "default" : "secondary"}>
                            {appointment.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {appointment.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {appointment.location}
                          </div>
                        </div>
                        <p className="text-sm">Duration: {appointment.duration}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            <div className="grid gap-4">
              {pastAppointments.map((appointment) => (
                <Card key={appointment.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{appointment.type}</h3>
                            <Badge variant="outline">{appointment.status}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              {appointment.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {appointment.time}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Full Report
                        </Button>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3 pt-4 border-t">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Weight Change</p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.preWeight} → {appointment.postWeight}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Blood Pressure</p>
                          <p className="text-sm text-muted-foreground">{appointment.bloodPressure}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Duration</p>
                          <p className="text-sm text-muted-foreground">{appointment.duration}</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-medium">Nurse Notes</p>
                        <p className="text-sm text-muted-foreground">{appointment.nurseNotes}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="book" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available Time Slots</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Clock className="mr-2 h-4 w-4" />
                    6:00 AM - 10:00 AM
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Clock className="mr-2 h-4 w-4" />
                    10:00 AM - 2:00 PM
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Clock className="mr-2 h-4 w-4" />
                    3:00 PM - 7:00 PM
                  </Button>

                  <div className="pt-4">
                    <Button className="w-full">Book Selected Slot</Button>
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
