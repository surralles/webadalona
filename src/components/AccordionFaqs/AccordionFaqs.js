import React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown"
import { ContentFeatures } from "../Material/IndexFeatures.styles"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "../Material/MaterialTheme"

const AccordionFaqs = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <ContentFeatures>
      <ThemeProvider theme={theme}>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>1.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Qué necesitamos para hacer un presupuesto?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Necesitaré cierta información tanto para conocer el tamaño del
                proyecto web, competencia del sector y el alcance territorial
                del negocio. Una web siempre la planteo como un elemento
                dinámico dentro de la empresa para sacarle el máximo
                rendimiento. Así que se hace una presupuesto base para conseguir
                los principales objetivos y quedar lista con una estructura
                escalable para ir mejorando el proyecto al ritmo de la empresa
                cliente.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>2.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Debes proporcionar los textos para el sitio web?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Los textos de una web deberían estar enfocados a cumplir unos
                objetivos tanto de posicionamiento como de conseguir
                interacciones del visitante a la web. A partir de aquí ofrecemos
                dos posibilidades. Confeccionar nosotros los textos con
                profesionales especializados a partir de toda la información
                disponible de la empresa con apoyo técnico de la empresa cliente
                o, en caso contrario daremos unas directrices básicas para que
                podáis optimizar el SEO en vuestros textos.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>3.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Debo proporcionar las imágenes para el sitio web?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Reúne todas imágenes, gráficos, videos y materiales de marca
                (logotipo, fuentes, colores) y haremos un control de calidad. Si
                las imágenes que tienes son adecuadas para el nuevo diseño a
                partir de se podrá decidir si hacer uso de nuestro colaboradores
                profesionales en audiovisuales en relación con el
                coste/beneficio.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>4.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Creamos sitios personalizados o usamos plantillas?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Nuestra filosófía de hoy día va más allà de la idea de usar una
                plantilla, sí que se utilizan componentes que son pequeños
                módulos de programación que nosotros mismos customizados y nos
                dan la velocidad para construir y abaratar costes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>5.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Seguimos las mejores prácticas de SEO al crear el sitio?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Incluimos siempre en todos nuestros desarrollos la optimización
                SEO para los motores de búsqueda, como es su estructura,
                rendimiento/velocidad, la optimización de imágenes, el
                etiquetado alternativo o la compatibilidad con dispositivos
                móviles.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>6.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Cuántas rondas de revisiones incluimos?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Establecemos puntos de control a lo largo del proyecto para que
                puedas revisar y aprobar el trabajo cuando llegue el momento.
                Estamos abiertos constantemente a comentarios constructivos con
                el fin que te encuentres completamente cómodo con el diseño a la
                par del presupuesto y los objetivos de marketing.
                <br />
                Dependiendo del proyecto ofrecemos un pack de mantenimiento y
                soporte que lo consideramos imprescindible en cualquier proyecto
                que se quiera considerar de largo recorrido. La infraestructura
                tecnológica construida depende de éste.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>7.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Soy el propietario del sitio y de los contenidos del sitio
                después de su publicación?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Totalmente y sin contratos de permanencia. Puedes abandonarnos
                en cualquier momento, y contratar cualquier otra empresa de
                desarrollo web. Ajustamos los términos de pago a las necesidades
                del cliente. En el caso de una sitio Jamstack has de tener en
                cuenta que cada proveedor especializado, como Shopìfy por
                ejemplo (al contrario de WooCommerce), es una SaaS (Software as
                a service). Son plataforma de alojamiento con servicios
                completos que poseen y administran tu infraestructura y que se
                accede a ellos mediante suscripción.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>8.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Cuál es mi proceso de diseño?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Guiamos a nuestros clientes dentro del proceso y desarrollo web
                de principio a fin como un profesional más del proyecto porque
                la balanza del resultado final ha de conseguir ser perfecta
                entre objetivos de negocio y satisfacción del cliente en
                términos de diseño.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>9.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Cómo será el contacto con Webadalona o cómo serán los tiempos
                de respuesta?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Este es un punto básico que ofrezco y diferencio claramente. Al
                tomar un proyecto la inmersión por parte mía dentro del negocio
                del cliente es absoluta, conocer sus necesidades y sus
                inquietudes. Sabemos que que nosotros necesitamos dar una
                comunicación 24/7 porque si tenemos negocios tenemos urgencias.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>10.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Podéis diseñar un sitio web que se ajuste a mi presupuesto?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Siempre es bueno comunicar claramente tu presupuesto antes de
                comenzar cualquier proyecto. Enumeramos los precios en 3
                paquetes de servicios que te ha de ser útil como purtode partida
                y tengas una referencia clara desde una perspectiva de negocio.
                Pero que me tomaré el tiempo necesario para ajustar necesidades
                más imprescindibles para cada caso para ajustar al máximo el
                precio teniendo en cuenta el momento actual donde se encuentre
                el negocio.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>11.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Ofrecemos servicios integrales?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Sí, compartiré el trabajo con expertos colaboradores con los que
                he trabajado durante muchos años y de plena confianza
                profesional para todo lo que necesite el proyecto sobre diseño
                gráfico, redacción de los contenidos, logotipos, edición de
                vídeo u optimización de la web para motores de búsqueda (SEO), y
                campañas de marketing digital (SEM).Todo queda debidamente
                explícito en los presupuestos.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon color="primary" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "10%", flexShrink: 0 }}>12.</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                ¿Que necesito saber de tu negocio?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "left" }}>
                Un buen desarrollo y diseño del sitio web requiere que sepa de
                tu negocio e industria y cuales son los objetivos y prioridades
                de tus servicios o productos para diseñar una buena estrategia y
                ser útil comercialmente. Necesito comprender cual es tu cliente
                ideal.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </ThemeProvider>
    </ContentFeatures>
  )
}

export default AccordionFaqs
