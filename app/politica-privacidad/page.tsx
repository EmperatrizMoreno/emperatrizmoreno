import SectionTitle from "@/components/section-title"

export default function PrivacyPolicyPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle className="text-white">Política de Privacidad</SectionTitle>

      <div className="max-w-4xl mx-auto mt-12 prose prose-lg prose-invert">
        <p className="text-gray-light">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Información que recopilamos</h2>
        <p className="text-gray-light mb-4">
          En el blog de Emperatriz Moreno, respetamos su privacidad y nos comprometemos a proteger sus datos personales.
          Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos su información cuando visita
          nuestro sitio web.
        </p>
        <p className="text-gray-light mb-4">
          Podemos recopilar cierta información automáticamente cuando visita nuestro sitio web, incluyendo:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-light">
          <li>Información técnica, como la dirección IP, tipo de navegador, proveedor de servicios de Internet.</li>
          <li>Información sobre su visita, como las páginas que visita, el tiempo que pasa en cada página.</li>
          <li>Información recopilada a través de cookies y tecnologías similares.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Cómo utilizamos su información</h2>
        <p className="text-gray-light mb-4">Utilizamos la información que recopilamos para:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-light">
          <li>Proporcionar, mantener y mejorar nuestro sitio web.</li>
          <li>Entender cómo los usuarios interactúan con nuestro sitio web.</li>
          <li>Detectar, prevenir y abordar problemas técnicos.</li>
          <li>Proteger la seguridad e integridad de nuestro sitio web.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Compartir su información</h2>
        <p className="text-gray-light mb-4">
          No vendemos, comercializamos ni transferimos su información personal a terceros, excepto en las siguientes
          circunstancias:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-light">
          <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio web.</li>
          <li>Para cumplir con obligaciones legales.</li>
          <li>Para proteger nuestros derechos, privacidad, seguridad o propiedad.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Sus derechos</h2>
        <p className="text-gray-light mb-4">
          Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, como:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-light">
          <li>Acceder a la información personal que tenemos sobre usted.</li>
          <li>Corregir información inexacta o incompleta.</li>
          <li>Solicitar la eliminación de su información personal.</li>
          <li>Oponerse al procesamiento de su información personal.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Cambios a esta política</h2>
        <p className="text-gray-light mb-4">
          Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio
          publicando la nueva Política de Privacidad en esta página.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Contacto</h2>
        <p className="text-gray-light mb-4">
          Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactar a Emperatriz Moreno a través de
          los canales oficiales.
        </p>
      </div>
    </section>
  )
}
