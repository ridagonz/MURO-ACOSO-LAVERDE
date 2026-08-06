import { ImageUploader } from "./components/ImageUploader";

const sources = [
  {
    number: "01",
    account: "María José Pizarro",
    handle: "@pizarromariajo",
    url: "https://x.com/pizarromariajo/status/1696257570892071049?s=48",
    image: "/x/maria-jose-pizarro.png",
  },
  {
    number: "02",
    account: "María Jimena Duzán",
    handle: "@MJDuzan",
    url: "https://x.com/MJDuzan/status/2084259418225398207",
    image: "/x/maria-jimena-duzan.png",
  },
  {
    number: "03",
    account: "Ricardo Ospina",
    handle: "@ricarospina",
    url: "https://x.com/ricarospina/status/2082611087132758499",
    image: "/x/ricardo-ospina.png",
  },
  {
    number: "04",
    account: "Radar Contralor",
    handle: "@radarcontralor",
    url: "https://x.com/radarcontralor/status/2084313574835442096",
    image: "/x/radar-contralor.png",
  },
];

const screenshots = [
  {
    src: "/evidencias/captura-1.png",
    title: "Voces sobre transparencia y respeto",
    description:
      "Captura aportada con reacciones y señalamientos publicados por distintas cuentas.",
  },
  {
    src: "/evidencias/captura-2.png",
    title: "Hilo de opinión pública",
    description:
      "Captura aportada de un hilo sobre el proceso político alrededor de la Contraloría.",
  },
  {
    src: "/evidencias/captura-3.png",
    title: "Reacciones ciudadanas",
    description:
      "Captura aportada con comentarios de usuarios sobre la aspiración a la Contraloría.",
  },
  {
    src: "/documentos/consulta-general-inmuebles.jpeg",
    title: "Consulta general de inmuebles",
    description:
      "Captura aportada de una consulta de estado jurídico de inmuebles. Se conserva con el aviso de confidencialidad incluido en el archivo original.",
  },
];

const documents = [
  {
    number: "01",
    title: "Informe documental 139719766",
    pages: "6 páginas · PDF",
    href: "/documentos/139719766-139721531-WPADDPHOJVQXGBTJREJI139721531.pdf",
  },
  {
    number: "02",
    title: "Informe documental 139719765",
    pages: "5 páginas · PDF",
    href: "/documentos/139719765-139721530-VAGIWOXIDZATNRZCCQAY139721530.pdf",
  },
];

export default function Home() {
  return (
    <main>
      <div className="global-photo-collage" aria-hidden="true">
        {[
          "/laverde/laverde-1.jpg",
          "/laverde/laverde-3.jpg",
          "/laverde/laverde-4.jpeg",
          "/laverde/laverde-5.jpeg",
          "/laverde/laverde-6.png",
          "/laverde/laverde-3.jpg",
          "/laverde/laverde-1.jpg",
          "/laverde/laverde-5.jpeg",
        ].map((src, index) => (
          <div className={`background-tile background-tile-${index + 1}`} key={`${src}-${index}`}>
            <img src={src} alt="" loading="eager" />
          </div>
        ))}
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">#</span>
          <span>Contra el acoso</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#fuentes">Fuentes</a>
          <a href="#muro">Muro</a>
          <a href="#documentos">Documentos</a>
          <a href="#aportes">Cargar imágenes</a>
        </nav>
        <a className="header-cta" href="#fuentes">
          Ver publicaciones <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-collage" aria-hidden="true">
          <div className="campaign-poster campaign-poster-a">
            <img
              src="/campana/contralor-laverde-1.jpeg"
              alt=""
              loading="eager"
            />
          </div>
          <div className="campaign-poster campaign-poster-b">
            <img
              src="/campana/contralor-laverde-2.jpeg"
              alt=""
              loading="eager"
            />
          </div>
        </div>

        <div className="hero-topline">
          <span>No podemos premiar el acoso</span>
          <span>Colombia está en alerta</span>
        </div>

        <div className="hero-copy">
          <p className="kicker"><span /> #ContralorLaverde · Archivo ciudadano</p>
          <h1>
            Muro de <em>Acoso</em>
            <br />
            de Jorge Eliécer Laverde
          </h1>
          <p className="hero-description">
            Un archivo visual que reúne publicaciones, capturas y enlaces de interés
            público alrededor de su aspiración a la Contraloría General.
          </p>
        </div>

        <div className="hero-footer">
          <div className="hero-index">
            <span>4</span>
            <p>publicaciones enlazadas</p>
          </div>
          <div className="hero-index">
            <span>6</span>
            <p>archivos documentales</p>
          </div>
          <p className="hero-disclaimer">
            Este sitio recopila expresiones de terceros y no reemplaza una decisión
            judicial ni disciplinaria. Consulte siempre la fuente original.
          </p>
        </div>
      </section>

      <div className="ticker" aria-label="Archivo de publicaciones y denuncias">
        <div className="ticker-track">
          <span>ARCHIVO ABIERTO</span><i>✦</i><span>VOCES PÚBLICAS</span><i>✦</i>
          <span>MEMORIA DIGITAL</span><i>✦</i><span>FUENTES DIRECTAS</span><i>✦</i>
          <span aria-hidden="true">ARCHIVO ABIERTO</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">VOCES PÚBLICAS</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">MEMORIA DIGITAL</span><i aria-hidden="true">✦</i>
        </div>
      </div>

      <section className="sources section-shell" id="fuentes">
        <div className="section-heading">
          <p className="eyebrow">01 — En primera línea</p>
          <h2>Publicaciones<br />en X</h2>
          <p className="section-intro">
            Los enlaces solicitados aparecen primero. Cada ficha conduce a la
            publicación original para consultar su contexto completo.
          </p>
        </div>

        <div className="source-list">
          {sources.map((source) => (
            <a
              className="source-card"
              href={source.url}
              key={source.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir publicación de ${source.account} en X`}
            >
              <div className="source-meta">
                <div className="source-number">{source.number}</div>
                <div className="x-mark">X</div>
                <div className="source-copy">
                  <p>Publicación enlazada</p>
                  <h3>{source.account}</h3>
                  <span>{source.handle}</span>
                </div>
                <span className="source-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="source-preview">
                <img
                  src={source.image}
                  alt={`Captura de la publicación de ${source.account} en X`}
                  loading="lazy"
                />
                <span>Ver publicación en X ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="wall-section" id="muro">
        <div className="wall-title section-shell">
          <div>
            <p className="eyebrow light">02 — Registro visual</p>
            <h2>El muro<br />documental</h2>
          </div>
          <p>
            Capturas aportadas para preservar una muestra de la conversación pública.
            El contenido pertenece a sus respectivos autores.
          </p>
        </div>

        <div className="evidence-grid section-shell">
          {screenshots.map((shot, index) => (
            <article className={`evidence-card evidence-${index + 1}`} key={shot.src}>
              <a href={shot.src} target="_blank" rel="noopener noreferrer">
                <div className="evidence-image">
                  <img
                    src={shot.src}
                    alt={`${shot.title}. ${shot.description}`}
                    loading="lazy"
                  />
                  <span className="zoom-label">Abrir captura ↗</span>
                </div>
              </a>
              <div className="evidence-caption">
                <span>Documento 0{index + 1}</span>
                <h3>{shot.title}</h3>
                <p>{shot.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="document-library section-shell" id="documentos">
          <div className="document-library-heading">
            <p className="eyebrow light">03 — Archivos aportados</p>
            <h2>Documentos<br />en PDF</h2>
            <p>
              Los archivos se publican sin modificaciones. Ábralos en una pestaña
              nueva para consultar todas sus páginas.
            </p>
          </div>
          <div className="document-list">
            {documents.map((document) => (
              <a
                className="document-card"
                href={document.href}
                key={document.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${document.title}`}
              >
                <span className="document-number">{document.number}</span>
                <span className="pdf-badge">PDF</span>
                <span className="document-copy">
                  <strong>{document.title}</strong>
                  <small>{document.pages}</small>
                </span>
                <span className="document-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ImageUploader />

      <footer className="site-footer">
        <div>
          <span className="footer-mark">#</span>
          <p>Muro de Acoso de Jorge Eliécer Laverde</p>
        </div>
        <p>
          Archivo ciudadano · Contenido atribuido a terceros · Consulte las fuentes originales
        </p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
