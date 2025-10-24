"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Phone, Edit, Save, QrCode } from "lucide-react"
import { useState } from "react"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Doe",
    dateOfBirth: "1975-03-15",
    email: "john.doe@email.com",
    address: "123 Main Street, Pasig City, Metro Manila",
    contactNo: "+63 912 345 6789",
    emergencyContact: "+63 917 987 6543",
    attendingNephrologist: "Dr. Maria Santos",
  })

  const handleSave = () => {
    setIsEditing(false)
    // Save logic here
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">My Profile</h1>
      </header>

      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Personal Information</CardTitle>
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
              >
                {isEditing ? <Save className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
                {isEditing ? "Save" : "Edit"}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{profile.name}</h3>
                  <Badge variant="secondary">Patient ID: NP-2024-001</Badge>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={profile.dateOfBirth}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input
                    id="contact"
                    value={profile.contactNo}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({ ...profile, contactNo: e.target.value })}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={profile.address}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergency">Emergency Contact</Label>
                  <div className="flex gap-2">
                    <Input
                      id="emergency"
                      value={profile.emergencyContact}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                      className="flex-1"
                    />
                    <Button size="icon" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nephrologist">Attending Nephrologist</Label>
                  <Input
                    id="nephrologist"
                    value={profile.attendingNephrologist}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({ ...profile, attendingNephrologist: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5" />
                Patient QR Code
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=180&width=180&text=QR+Code"
                  alt="Patient QR Code"
                  className="w-44 h-44"
                />
              </div>
              <div className="text-center">
                <p className="font-medium">{profile.name}</p>
                <p className="text-sm text-muted-foreground">Patient ID: NP-2024-001</p>
              </div>
              <Button variant="outline" size="sm">
                Download QR Code
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
