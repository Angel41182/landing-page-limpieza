"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Star } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-card py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Servicios de Limpieza
                <span className="text-primary"> Profesional</span> en Canadá
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Transformamos tu hogar y oficina con nuestros servicios de limpieza de alta calidad. Confianza,
                profesionalismo y resultados excepcionales garantizados.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Personal certificado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Productos ecológicos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Seguro incluido</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Satisfacción garantizada</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                Cotización Gratuita
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Ver Servicios
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> basado en 200+ reseñas
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card">
              <img
                src="/professional-cleaning-team-in-modern-canadian-home.png"
                alt="Equipo profesional de limpieza en hogar canadiense"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-lg border border-border">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Hogares satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
