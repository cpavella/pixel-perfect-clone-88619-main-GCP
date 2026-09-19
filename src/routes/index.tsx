import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-girardota.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Municipio de Girardota — Trámites, servicios y contacto" },
      {
        name: "description",
        content:
          "Portal informativo del Municipio de Girardota, Antioquia: horarios de atención, trámites y servicios, fiestas y celebraciones, y datos de contacto de la Alcaldía.",
      },
      {
        property: "og:title",
        content: "Municipio de Girardota — Trámites, servicios y contacto",
      },
      {
        property: "og:description",
        content:
          "Horarios de atención, trámites y servicios, eventos y contacto de la Alcaldía Municipal de Girardota, Antioquia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Inicio", "Mi Municipio", "Trámites y servicios", "Turismo", "Eventos", "Contacto"];

const CARDS = [
  {
    title: "Horarios de atención",
    text: "Lunes a jueves de 7:30 a. m. a 12:30 p. m. y de 1:30 p. m. a 5:30 p. m. Los viernes la jornada termina más temprano; confírmelo en la línea de atención.",
  },
  {
    title: "Trámites y servicios",
    text: "Portal tributario, pagos en línea (predial e industria y comercio), PQRSD, certificados y radicación de documentos, sin filas.",
  },
  {
    title: "Eventos y fiestas",
    text: "Fiestas del Señor Caído en enero, Semana Santa, Día del Campesino a mitad de año y las Fiestas de la Danza y el Sainete en noviembre.",
  },
  {
    title: "Contacto",
    text: "Carrera 15 # 6-35, Girardota (Antioquia). Conmutador (+57) 604 322 4299. Correo: contactenos@girardota.gov.co",
  },
];

const LINKS = [
  "Trámites y servicios",
  "Portal tributario",
  "Pagos en línea",
  "PQRSD",
  "Datos abiertos",
  "Normatividad",
  "Plan de Desarrollo Territorial 2024–2027",
  "Directorio telefónico",
  "Nuestros funcionarios",
];

const EVENTS = [
  {
    name: "Fiestas del Señor Caído",
    when: "Principios de enero",
    text: "Celebración religiosa con procesiones y misas especiales para los peregrinos que llegan a la Catedral Nuestra Señora del Rosario.",
  },
  {
    name: "Semana Santa",
    when: "Marzo o abril, según el calendario litúrgico",
    text: "Habitantes y peregrinos de distintos lugares acompañan la Semana Mayor en la Catedral y en las demás parroquias del municipio.",
  },
  {
    name: "Día del Campesino",
    when: "Junio o julio",
    text: "Homenaje a las familias campesinas de las veredas, con muestras agrícolas y actividades culturales.",
  },
  {
    name: "Fiestas de la Danza y el Sainete",
    when: "Última semana de noviembre",
    text: "La fiesta más reconocida del municipio: desfiles de comparsas, danzas tradicionales, sainetes, grupos musicales y eventos deportivos.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 md:flex-row md:justify-between">
          <div>
            <p className="text-4xl font-black leading-none tracking-tight text-foreground">
              Municipio de Girardota
            </p>
            <p className="text-sm font-bold text-foreground">Información &amp; consulta</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
              Alcaldía Municipal de Girardota — Antioquia
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold uppercase tracking-wide">
            {NAV.map((item, i) => (
              <span
                key={item}
                className={
                  i === 0
                    ? "cursor-default text-link"
                    : "cursor-default text-foreground transition-colors hover:text-link"
                }
              >
                {item}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative">
        <img
          src={heroImg}
          alt="Vista panorámica del municipio de Girardota en el Valle de Aburrá"
          width={1920}
          height={900}
          className="h-[520px] w-full object-cover"
        />
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-1 md:absolute md:inset-x-0 md:bottom-0 md:mx-auto md:max-w-6xl md:translate-y-16 md:grid-cols-4 md:px-4">
            {CARDS.map((card) => (
              <article
                key={card.title}
                className="card-gradient flex flex-col gap-5 p-7 text-primary-foreground"
              >
                <h2 className="text-center text-2xl font-bold leading-tight">{card.title}</h2>
                <p className="text-sm leading-relaxed opacity-95">{card.text}</p>
                <span className="mx-auto mt-auto cursor-default border border-primary-foreground/70 px-4 py-1.5 text-xs">
                  Leer más
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:mt-16 md:grid-cols-[1fr_320px]">
        <article className="space-y-4 text-[15px] leading-7 text-foreground">
          <h1 className="text-3xl font-bold">Sobre la Alcaldía Municipal de Girardota</h1>
          <p>
            La <span className="text-link">Alcaldía Municipal de Girardota</span> tiene su sede en la
            Carrera 15 # 6-35, Girardota – Antioquia, Colombia (código postal 051030). El conmutador
            es el <span className="text-link">(+57) 604 322 4299</span> y el correo de atención es{" "}
            <span className="text-link">contactenos@girardota.gov.co</span>.
          </p>
          <p>
            El horario de atención al público es de lunes a jueves de 7:30 a. m. a 12:30 p. m. y de
            1:30 p. m. a 5:30 p. m.; los viernes la jornada de la tarde termina más temprano. En la
            sede funcionan el Despacho del Alcalde y las secretarías, donde el ciudadano puede
            adelantar trámites como el pago del impuesto predial y de industria y comercio, la
            radicación de PQRSD, la expedición de certificados y la consulta de procesos.
          </p>
          <p>
            Girardota fue fundada el 21 de septiembre de 1833 por Juan de Dios Aránzazu. Tiene una
            temperatura promedio de 22 °C, una altura de 1.425 metros sobre el nivel del mar y un
            área aproximada de 82 km². Está ubicada al norte del Valle de Aburrá, a unos 26
            kilómetros de Medellín (cerca de 30 minutos), y limita al norte con Barbosa, al oriente
            con Guarne y San Vicente, al occidente con San Pedro y Donmatías, y al sur con
            Copacabana.
          </p>
          <p>
            Sus principales fuentes de ingreso son los sectores agrícola e industrial y el turismo
            recreativo y religioso. Entre sus sitios de interés están la Catedral Nuestra Señora del
            Rosario —donde se venera la imagen del Señor Caído—, la Parroquia de San Esteban, los
            trapiches paneleros y las cascadas de la quebrada El Salado.{" "}
            <Link to="/inmobiliaria" className="text-link">
              Conozca los sitios de interés
            </Link>
            .
          </p>

          <h2 className="pt-4 text-2xl font-bold">Eventos y celebraciones</h2>
          <ul className="space-y-4">
            {EVENTS.map((e) => (
              <li key={e.name} className="border-l-4 border-bullet pl-4">
                <p className="font-bold">{e.name}</p>
                <p className="text-sm text-muted-foreground">{e.when}</p>
                <p>{e.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <aside className="h-fit border border-border p-5">
          <div className="flex">
            <input
              type="text"
              disabled
              placeholder="🔍"
              className="w-full border border-border px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-2 bg-secondary-foreground py-2 text-center text-sm font-semibold text-primary-foreground">
            Buscar
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {LINKS.map((l) => (
              <li key={l} className="flex gap-2">
                <span className="text-bullet">✤</span>
                <span className="cursor-default text-foreground hover:text-link">{l}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-1 border-t border-border pt-5 text-sm">
            <p className="font-bold">Contacto</p>
            <p>Carrera 15 # 6-35, Girardota (Antioquia)</p>
            <p>Conmutador: (+57) 604 322 4299</p>
            <p>contactenos@girardota.gov.co</p>
            <p>Código postal: 051030</p>
          </div>
        </aside>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        Municipio de Girardota — sitio meramente informativo. Información tomada del portal oficial
        girardota.gov.co
      </footer>
    </div>
  );
}
