import SectionTitle from "@/components/section-title"

export default function CookiesPolicyPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle className="text-white">Política de Cookies</SectionTitle>

      <div className="max-w-4xl mx-auto mt-12 prose prose-lg prose-invert">
        <p className="text-gray-light">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. ¿Qué son las cookies?</h2>
        <p className="text-gray-light mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, teléfono
          móvil) cuando visita un sitio web. Las cookies se utilizan ampliamente para hacer que los sitios web funcionen
          de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Cómo utilizamos las cookies</h2>
        <p className="text-gray-light mb-4">
          El blog de Emperatriz Moreno utiliza cookies para mejorar su experiencia de navegación, analizar el tráfico
          del sitio y comprender de dónde vienen nuestros visitantes. Las cookies nos ayudan a:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-light">
          <li>Hacer que nuestro sitio web funcione como usted espera.</li>
          <li>Recordar sus configuraciones durante y entre visitas.</li>
          <li>Mejorar la velocidad y seguridad del sitio.</li>
          <li>Permitirnos compartir contenido con redes sociales como Facebook y Twitter.</li>
          <li>Mejorar continuamente nuestro sitio web para usted.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Tipos de cookies que utilizamos</h2>
        <p className="text-gray-light mb-4">
          <strong>Cookies estrictamente necesarias:</strong> Estas cookies son esenciales para que pueda navegar por el
          sitio web y utilizar sus funciones.
        </p>
        <p className="text-gray-light mb-4">
          <strong>Cookies de rendimiento:</strong> Estas cookies recopilan información sobre cómo utiliza nuestro sitio
          web, por ejemplo, qué páginas visita con más frecuencia.
        </p>
        <p className="text-gray-light mb-4">
          <strong>Cookies de funcionalidad:</strong> Estas cookies permiten que el sitio web recuerde las elecciones que
          hace (como su nombre de usuario, idioma o región) y proporcione funciones mejoradas y más personales.
        </p>
        <p className="text-gray-light mb-4">
          <strong>Cookies de publicidad y terceros:</strong> Estas cookies se utilizan para mostrar anuncios que son
          relevantes y atractivos para el usuario individual.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Control de cookies</h2>
        <p className="text-gray-light mb-4">
          Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su
          dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si hace
          esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y algunas
          funciones pueden no funcionar correctamente.
        </p>
        <p className="text-gray-light mb-4">
          Para obtener más información sobre cómo administrar las cookies, visite{" "}
          <a
            href="https://www.aboutcookies.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline"
          >
            aboutcookies.org
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Cookies de terceros</h2>
        <p className="text-gray-light mb-4">
          En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. La siguiente
          sección detalla qué cookies de terceros puede encontrar a través de este sitio.
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-light">
          <li>
            Este sitio utiliza Google Analytics, una de las soluciones de análisis más extendidas y confiables en la
            web, para ayudarnos a entender cómo usa el sitio y las formas en que podemos mejorar su experiencia.
          </li>
          <li>
            También podemos utilizar botones de redes sociales y/o plugins que le permiten conectarse con su red social
            de varias maneras. Para que estos funcionen, los sitios de redes sociales establecerán cookies a través de
            nuestro sitio.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Más información</h2>
        <p className="text-gray-light mb-4">
          Esperamos que esto haya aclarado las cosas para usted. Como se mencionó anteriormente, si hay algo que no está
          seguro de si necesita o no, generalmente es más seguro dejar las cookies habilitadas en caso de que
          interactúen con una de las funciones que utiliza en nuestro sitio.
        </p>
        <p className="text-gray-light mb-4">
          Sin embargo, si todavía está buscando más información, puede contactar a Emperatriz Moreno a través de los
          canales oficiales.
        </p>
      </div>
    </section>
  )
}
