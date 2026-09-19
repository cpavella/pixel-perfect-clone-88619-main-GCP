import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ChevronLeft, ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import catedral from "@/assets/gira-catedral.jpg";
import trapiche from "@/assets/gira-trapiche.jpg";
import cascada from "@/assets/gira-cascada.jpg";
import danza from "@/assets/gira-danza.jpg";

export const Route = createFileRoute("/inmobiliaria")({
  head: () => ({
    meta: [
      { title: "Turismo en Girardota — Sitios de interés y celebraciones" },
      {
        name: "description",
        content:
          "Sitios de interés de Girardota, Antioquia: Catedral Nuestra Señora del Rosario y el Señor Caído, trapiches paneleros, cascadas de El Salado y las fiestas del municipio.",
      },
      { property: "og:title", content: "Turismo en Girardota — Sitios de interés" },
      {
        property: "og:description",
        content:
          "Conozca la Catedral Nuestra Señora del Rosario, los trapiches paneleros, las cascadas de El Salado y las fiestas tradicionales de Girardota.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Turismo,
});

const NAV = ["Inicio", "Mi Municipio", "Trámites y servicios", "Turismo", "Contacto"];

const SITIOS = [
  {
    img: catedral,
    tag: "Religioso",
    title: "Catedral Nuestra Señora del Rosario",
    place: "Parque principal, Girardota",
    text: "Allí se venera la imagen del Señor Caído, traída desde Quito (Ecuador) por el presbítero Manuel Londoño y Molina. Representa a Cristo atado a la columna y desfallecido tras los flagelos.",
    detail: "Romería el primer sábado de cada mes",
  },
  {
    img: trapiche,
    tag: "Rural",
    title: "Trapiches paneleros",
    place: "Zona veredal",
    text: "La producción de panela hace parte de la tradición agrícola girardotana. Los trapiches muestran el proceso completo de la caña, desde la molienda hasta el empaque.",
    detail: "Visitas guiadas en las veredas",
  },
  {
    img: cascada,
    tag: "Naturaleza",
    title: "Cascadas de la quebrada El Salado",
    place: "Zona alta del municipio",
    text: "Un recorrido entre bosque andino y saltos de agua, uno de los planes de naturaleza más apreciados junto con la cuenca hidrográfica La Ortega.",
    detail: "Senderismo y ecoturismo",
  },
  {
    img: danza,
    tag: "Cultural",
    title: "Fiestas de la Danza y el Sainete",
    place: "Casco urbano",
    text: "La fiesta más reconocida del municipio: desfiles de comparsas, danzas tradicionales de la vereda San Andrés, sainetes, música y eventos deportivos.",
    detail: "Última semana de noviembre",
  },
];

function Turismo() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="bg-brand text-brand-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <strong>Conmutador:</strong> (+57) 604 322 4299
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              contactenos@girardota.gov.co
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            Lunes a jueves 7:30 a. m. – 5:30 p. m.
          </span>
        </div>
      </div>

      <header className="bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 md:flex-row md:justify-between">
          <div className="leading-none">
            <p className="text-xs font-semibold tracking-[0.3em] text-foreground">MUNICIPIO DE</p>
            <p className="text-3xl font-black tracking-tight text-brand">GIRARDOTA</p>
            <p className="text-[10px] italic text-muted-foreground">Antioquia, Colombia</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-7 text-[15px] text-foreground">
            {NAV.map((n) =>
              n === "Inicio" ? (
                <Link key={n} to="/" className="transition-colors hover:text-brand">
                  {n}
                </Link>
              ) : (
                <span key={n} className="cursor-default transition-colors hover:text-brand">
                  {n}
                </span>
              ),
            )}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-lg text-brand">
              <span className="h-2.5 w-2.5 rounded-full bg-brand" />
              Conozca nuestros
            </p>
            <h1 className="mt-1 text-4xl font-semibold normal-case tracking-tight text-foreground">
              Sitios de interés
            </h1>
          </div>
          <Link to="/" className="cursor-pointer bg-brand px-8 py-3 text-lg text-brand-foreground">
            Volver al inicio
          </Link>
        </div>

        <div className="relative mt-10">
          <ChevronLeft className="absolute -left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 text-brand xl:block" />
          <ChevronRight className="absolute -right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 text-brand xl:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SITIOS.map((p) => (
              <article key={p.title} className="flex flex-col bg-card shadow-md">
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 bg-brand px-4 py-1.5 text-sm text-brand-foreground">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h2 className="text-xl font-semibold normal-case leading-snug text-foreground">
                    {p.title}
                  </h2>
                  <p className="flex items-center gap-1.5 text-sm text-foreground">
                    <MapPin className="h-4 w-4 text-brand" />
                    {p.place}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
                <div className="border-t border-border p-5 text-sm text-foreground">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {p.detail}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 bg-card p-8 shadow-sm md:grid-cols-3">
          <div>
            <p className="font-bold text-foreground">Dirección</p>
            <p className="text-sm text-muted-foreground">
              Carrera 15 # 6-35, Girardota – Antioquia
              <br />
              Código postal 051030
            </p>
          </div>
          <div>
            <p className="font-bold text-foreground">Atención al público</p>
            <p className="text-sm text-muted-foreground">
              Lunes a jueves: 7:30 a. m. – 12:30 p. m. y 1:30 p. m. – 5:30 p. m.
              <br />
              Viernes: jornada de la tarde más corta
            </p>
          </div>
          <div>
            <p className="font-bold text-foreground">Contacto</p>
            <p className="text-sm text-muted-foreground">
              Conmutador (+57) 604 322 4299
              <br />
              contactenos@girardota.gov.co
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-card py-8 text-center text-xs text-muted-foreground">
        Municipio de Girardota — Antioquia, Colombia. Sitio informativo.
      </footer>
    </div>
  );
}
