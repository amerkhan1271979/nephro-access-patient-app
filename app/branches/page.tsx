"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { MapPin, Phone, Clock, Navigation, Star } from "lucide-react"

export default function Branches() {
  const branches = [
    {
      id: 1,
      name: "Nephro Access - Main Center",
      address: "3/F Annex Building, Luckygold Plaza Ortigas Avenue Extension, Pasig City, Metro Manila",
      phone: "02 7005 4248",
      hours: "Mon-Sat: 6:00 AM - 10:00 PM, Sun: 8:00 AM - 6:00 PM",
      services: ["Hemodialysis", "Consultation", "Laboratory"],
      rating: 4.8,
      isMain: true,
    },
    {
      id: 2,
      name: "Nephro Access - Makati Branch",
      address: "2nd Floor, Medical Plaza Building, Ayala Avenue, Makati City",
      phone: "02 8123 4567",
      hours: "Mon-Fri: 7:00 AM - 9:00 PM, Sat-Sun: 8:00 AM - 6:00 PM",
      services: ["Hemodialysis", "Consultation"],
      rating: 4.7,
      isMain: false,
    },
    {
      id: 3,
      name: "Nephro Access - Quezon City",
      address: "Ground Floor, Health Center Complex, Commonwealth Avenue, Quezon City",
      phone: "02 8987 6543",
      hours: "Mon-Sat: 6:30 AM - 9:30 PM, Sun: 9:00 AM - 5:00 PM",
      services: ["Hemodialysis", "Consultation", "Emergency Care"],
      rating: 4.6,
      isMain: false,
    },
  ]

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">Branch Locations</h1>
      </header>

      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Locations</h2>
          <p className="text-muted-foreground">
            Find the nearest Nephro Access center for your dialysis treatments and consultations.
          </p>
        </div>

        <div className="grid gap-6">
          {branches.map((branch) => (
            <Card key={branch.id} className={branch.isMain ? "ring-2 ring-blue-200" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      {branch.name}
                      {branch.isMain && <Badge>Main Center</Badge>}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{branch.rating}</span>
                      <span className="text-sm text-muted-foreground">rating</span>
                    </div>
                  </div>
                  <Button size="sm">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">{branch.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">{branch.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-sm text-muted-foreground">{branch.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="font-medium mb-2">Available Services</p>
                      <div className="flex flex-wrap gap-2">
                        {branch.services.map((service, index) => (
                          <Badge key={index} variant="secondary">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Need Help Finding Us?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our patient support team is available to help you find the most convenient location and assist with
              appointment scheduling.
            </p>
            <div className="flex gap-2">
              <Button>
                <Phone className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button variant="outline">Live Chat</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
