"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Sparkles, Calendar, Shield, Leaf } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Limpieza Residencial",
    description: "Servicio completo para tu hogar incluyendo cocinas, baños, dormitorios y áreas comunes.",
    features: ["Limpieza profunda", "Mantenimiento regular", "Productos seguros"],
    price: "Desde $80 CAD",
  },
  {
    icon: Building2,
    title: "Limpieza Comercial",
    description: "Soluciones profesionales para oficinas, tiendas y espacios comerciales.",
    features: ["Horarios flexibles", "Equipos especializados", "Contratos personalizados"],
    price: "Desde $120 CAD",
  },
  {
    icon: Sparkles,
    title: "Limpieza Profunda",
    description: "Servicio intensivo ideal para mudanzas, renovaciones o limpieza estacional.",
    features: ["Limpieza detallada", "Electrodomésticos", "Ventanas incluidas"],
    price: "Desde $200 CAD",
  },
  {
    icon: Calendar,
    title: "Servicio Regular",
    description: "Programa de limpieza semanal, quincenal o mensual adaptado a tus necesidades.",
    features: ["Horarios fijos", "Mismo equipo", "Descuentos por frecuencia"],
    price: "Desde $60 CAD",
  },
  {
    icon: Shield,
    title: "Limpieza Post-Construcción",
    description: "Especialistas en limpieza después de renovaciones y construcciones.",
    features: ["Remoción de polvo", "Limpieza de residuos", "Acabado profesional"],
    price: "Cotización personalizada",
  },
  {
    icon: Leaf,
    title: "Limpieza Ecológica",
    description: "Servicios 100% ecológicos con productos biodegradables y seguros.",
    features: ["Productos naturales", "Sin químicos tóxicos", "Certificación verde"],
    price: "Desde $90 CAD",
  },
]

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Nuestros Servicios de
            <span className="text-primary"> Limpieza</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos una amplia gama de servicios de limpieza profesional adaptados a las necesidades de hogares y
            empresas en Canadá.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm" onClick={scrollToContact}>
                        Cotizar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ofrecemos servicios personalizados para satisfacer tus necesidades específicas. Contáctanos para una
            cotización personalizada.
          </p>
          <Button size="lg" onClick={scrollToContact}>
            Solicitar Cotización Personalizada
          </Button>
        </div>
      </div>
    </section>
  )
}
