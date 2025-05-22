import SectionTitle from "@/components/section-title"

export default function TermsAndConditionsPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle className="text-white">Términos y Condiciones</SectionTitle>

      <div className="max-w-4xl mx-auto mt-12 prose prose-lg prose-invert">
        <p className="text-gray-light">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Aceptación de los términos</h2>
        <p className="text-gray-light mb-4">
          Al acceder y utilizar el blog de Emperatriz Moreno, usted acepta estar sujeto a estos Términos y Condiciones.
          Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al sitio web.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Propiedad intelectual</h2>
        <p className="text-gray-light mb-4">
          Todo el contenido publicado en este blog, incluyendo textos, gráficos, logotipos, iconos, imágenes, clips de
          audio, descargas digitales y compilaciones de datos, es propiedad de Emperatriz Moreno o de sus proveedores de
          contenido y está protegido por las leyes internacionales de derechos de autor.
        </p>
        <p className="text-gray-light mb-4">
          Queda estrictamente prohibida la reproducción, distribución, modificación, exhibición pública o cualquier otro
          uso del contenido sin el consentimiento previo por escrito de Emperatriz Moreno.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Uso del sitio</h2>
        <p className="text-gray-light mb-4">
          Usted se compromete a utilizar este sitio web únicamente para fines legales y de manera que no infrinja los
          derechos de otros usuarios o restrinja su uso y disfrute del sitio.
        </p>
        <p className="text-gray-light mb-4">No está permitido:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-light">
          <li>Utilizar este sitio de cualquier manera que pueda dañar, deshabilitar o sobrecargar el sitio.</li>
          <li>
            Obtener acceso no autorizado a cualquier parte del sitio, a otros sistemas o redes conectadas al sitio.
          </li>
          <li>Recopilar o recolectar información de otros usuarios sin su consentimiento.</li>
          <li>Publicar contenido difamatorio, obsceno, ofensivo o ilegal.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Exención de responsabilidad</h2>
        <p className="text-gray-light mb-4">
          La información proporcionada en este blog se ofrece únicamente con fines informativos y educativos. Emperatriz
          Moreno no garantiza la exactitud, integridad o actualidad de la información proporcionada.
        </p>
        <p className="text-gray-light mb-4">
          El uso de cualquier información o material en este sitio web es bajo su propia responsabilidad. Es su
          responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio
          web cumpla con sus requisitos específicos.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Enlaces a terceros</h2>
        <p className="text-gray-light mb-4">
          Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces son proporcionados únicamente
          para su conveniencia. No tenemos control sobre el contenido de esos sitios y no asumimos ninguna
          responsabilidad por ellos o por cualquier pérdida o daño que pueda surgir de su uso.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Modificaciones</h2>
        <p className="text-gray-light mb-4">
          Emperatriz Moreno se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las
          modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. Su uso continuado
          del sitio después de cualquier cambio constituye su aceptación de los nuevos términos.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. Ley aplicable</h2>
        <p className="text-gray-light mb-4">
          Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes vigentes, sin tener en cuenta
          sus disposiciones sobre conflictos de leyes.
        </p>
      </div>
    </section>
  )
}
