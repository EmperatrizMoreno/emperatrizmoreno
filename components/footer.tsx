import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary-blue/30 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 justify-between">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Emperatriz Moreno</h3>
            <p className="text-gray-light mb-4">
              Descubre insights, reflexiones y herramientas para tu crecimiento personal y profesional.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="https://facebook.com" className="hover:text-accent-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-accent-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-accent-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-light hover:text-accent-blue transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="text-gray-light hover:text-accent-blue transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-light hover:text-accent-blue transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-privacidad" className="text-gray-light hover:text-accent-blue transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="text-gray-light hover:text-accent-blue transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-light hover:text-accent-blue transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-blue/30 pt-8 text-center text-gray-light">
          <p>&copy; {currentYear} Emperatriz Moreno. Todos los derechos reservados.</p>
          <p className="mt-2">
            Creado por:{" "}
            <a
              href="https://armnelljackson.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline"
            >
              Armnell Gómez.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
