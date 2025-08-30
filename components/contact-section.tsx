"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Contáctanos
            <span className="text-primary"> Hoy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Obtén tu cotización gratuita y descubre por qué somos la empresa de limpieza más confiable en Canadá.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Solicita tu Cotización Gratuita</CardTitle>
              <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">¡Mensaje Enviado!</h3>
                  <p className="text-muted-foreground">Gracias por contactarnos. Te responderemos pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Tipo de servicio</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Limpieza Residencial</SelectItem>
                        <SelectItem value="commercial">Limpieza Comercial</SelectItem>
                        <SelectItem value="deep">Limpieza Profunda</SelectItem>
                        <SelectItem value="regular">Servicio Regular</SelectItem>
                        <SelectItem value="post-construction">Post-Construcción</SelectItem>
                        <SelectItem value="eco">Limpieza Ecológica</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu proyecto de limpieza..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Solicitud
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Dirección</h4>
                    <p className="text-muted-foreground">
                      123 Main Street
                      <br />
                      Toronto, ON M5V 3A8
                      <br />
                      Canadá
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Teléfono</h4>
                    <p className="text-muted-foreground">+1 (416) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@cleanprocanada.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Horarios</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábado: 9:00 AM - 4:00 PM</p>
                      <p>Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Áreas de Servicio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Brindamos servicios en las siguientes ciudades de Ontario:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">• Toronto</div>
                  <div className="text-muted-foreground">• Mississauga</div>
                  <div className="text-muted-foreground">• Brampton</div>
                  <div className="text-muted-foreground">• Markham</div>
                  <div className="text-muted-foreground">• Richmond Hill</div>
                  <div className="text-muted-foreground">• Vaughan</div>
                  <div className="text-muted-foreground">• Oakville</div>
                  <div className="text-muted-foreground">• Burlington</div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-foreground">¿Necesitas limpieza urgente?</h4>
                  <p className="text-sm text-muted-foreground">Servicio de emergencia disponible 24/7</p>
                  <Button variant="outline" size="sm">
                    Llamar Ahora: +1 (416) 555-0199
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
