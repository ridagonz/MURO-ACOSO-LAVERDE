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
      "Captura aportada de una consulta de estado jurídico de inmuebles, conservada con el aviso de confidencialidad incluido en el archivo original.",
  },
];

const heroImages = [
  "/campana/contralor-laverde-1.jpeg",
  "/campana/contralor-laverde-2.jpeg",
  "/x/medallo-mor-media.jpg",
  "/x/vanessa-la-buena-media.jpg",
  "/laverde/laverde-3.jpg",
  "/instagram/jorge-laverde-maria-camila.jpg",
  "/laverde/laverde-5.jpeg",
  "/instagram/maria-camila-familia.jpg",
];

const medalloPost = [
  'Cuando uno creía que el país ya había visto todo con el cartel de las "marionetas", empiezan a circular versiones que vuelven a encender las alarmas alrededor de la elección del próximo Contralor General.',
  "Se habla de presuntos negocios, de contratos multimillonarios que podrían desprenderse de futuras auditorías y de supuestos compromisos para conseguir votos.",
  "¿Es cierto? No lo sé. Precisamente por eso hay que exigir transparencia total. Porque si todo es falso, que lo desmientan con documentos y de frente. Pero si hay algo de cierto, Colombia no puede permitir que el órgano encargado de vigilar los recursos públicos nazca bajo la sombra de semejantes dudas.",
  "La pregunta sigue siendo la misma: ¿quién estaría financiando esos presuntos compromisos y por qué tanto interés en controlar la Contraloría?",
  "Los colombianos merecemos respuestas. La confianza en las instituciones no se construye con rumores, sino con transparencia.",
];

const vanessaPost = [
  "Candidatos a Contralor como Jorge Eliezer Laverde me generan profunda desconfianza.",
  "Ostenta un Rolex de 162 millones de pesos.",
  "¿Cómo sostiene ese nivel de vida con un salario público?",
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
          "/instagram/jorge-laverde-maria-camila.jpg",
          "/x/medallo-mor-media.jpg",
          "/instagram/maria-camila-familia.jpg",
        ].map((src, index) => (
          <div className={`background-tile background-tile-${index + 1}`} key={src}>
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
          <a href="#inicio">Inicio</a>
          <a href="#fuentes">Publicaciones en X</a>
          <a href="#investigacion">Investigación</a>
          <a href="#amistades">Amistades</a>
          <a href="#muro">El muro</a>
        </nav>
        <a className="header-cta" href="#fuentes">
          Ver publicaciones <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-collage hero-collage-mosaic" aria-hidden="true">
          {heroImages.map((src, index) => (
            <div className={`hero-photo hero-photo-${index + 1}`} key={src}>
              <img src={src} alt="" loading="eager" />
            </div>
          ))}
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
            <span>6</span>
            <p>publicaciones en X</p>
          </div>
          <div className="hero-index">
            <span>8</span>
            <p>piezas visuales enlazadas</p>
          </div>
          <p className="hero-disclaimer">
            Este sitio recopila expresiones de terceros y no reemplaza una decisión
            judicial ni disciplinaria. Consulte siempre la fuente original.
          </p>
        </div>
      </section>

      <div className="ticker" aria-label="Archivo de publicaciones y denuncias">
        <div className="ticker-track">
          <span>INVESTIGACIÓN PERIODÍSTICA</span><i>✦</i><span>FUENTES ENLAZADAS</span><i>✦</i>
          <span>EVIDENCIAS VISUALES</span><i>✦</i><span>MEMORIA DIGITAL</span><i>✦</i>
          <span aria-hidden="true">INVESTIGACIÓN PERIODÍSTICA</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">FUENTES ENLAZADAS</span><i aria-hidden="true">✦</i>
        </div>
      </div>

      <section className="central-story" id="fuentes">
        <div className="central-story-inner section-shell">
          <div className="featured-posts">
            <div className="featured-posts-heading">
              <p>Publicaciones en X</p>
              <span>Haga clic en cada ficha para abrir la fuente original ↗</span>
            </div>

            <div className="featured-post-grid">
              <a
                className="x-post-card x-post-card-wide"
                href="https://x.com/Paisa_Antiuribe/status/2085160382478565576?s=20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir publicación de De Medallo Mor en X"
              >
                <article>
                  <header className="x-post-header">
                    <span className="x-avatar x-avatar-medallo">DM</span>
                    <span className="x-identity">
                      <strong>De Medallo Mor❤ <i>✓</i></strong>
                      <small>@Paisa_Antiuribe</small>
                    </span>
                    <span className="x-logo" aria-hidden="true">X</span>
                  </header>
                  <div className="x-post-text">
                    {medalloPost.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <div className="x-post-media x-post-media-single">
                    <img
                      src="/x/medallo-mor-media.jpg"
                      alt="Imagen incluida en la publicación de De Medallo Mor: composición de Jorge Laverde en un despacho"
                      loading="eager"
                    />
                  </div>
                  <footer className="x-post-footer">
                    <span>Publicación enlazada</span>
                    <strong>Ver en X ↗</strong>
                  </footer>
                </article>
              </a>

              <a
                className="x-post-card"
                href="https://x.com/SaVanessCa/status/2084743546133696830"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir publicación de Vanessa la buena en X"
              >
                <article>
                  <header className="x-post-header">
                    <span className="x-avatar x-avatar-vanessa">V</span>
                    <span className="x-identity">
                      <strong>Vanessa la buena 🐈‍⬛🐈🐈‍⬛🐾 <i>✓</i></strong>
                      <small>@SaVanessCa</small>
                    </span>
                    <span className="x-logo" aria-hidden="true">X</span>
                  </header>
                  <h2 className="x-post-feature-title">Una vida ostentosa de dudosa procedencia</h2>
                  <div className="x-post-text x-post-text-large">
                    {vanessaPost.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <div className="x-post-media x-post-media-pair">
                    <img
                      src="/x/vanessa-la-buena-media.jpg"
                      alt="Jorge Laverde con un reloj visible en su muñeca"
                      loading="eager"
                    />
                    <img
                      src="/x/vanessa-la-buena-rolex.jpg"
                      alt="Imagen de un reloj y un precio de referencia incluida en la publicación"
                      loading="eager"
                    />
                  </div>
                  <div className="quoted-context">
                    <strong>Publicación relacionada</strong>
                    <p>
                      La ficha enlazada incorpora una respuesta de María Jimena Duzán
                      sobre la trayectoria política de Jorge Eliécer Laverde.
                    </p>
                  </div>
                  <footer className="x-post-footer">
                    <span>Publicación enlazada</span>
                    <strong>Ver en X ↗</strong>
                  </footer>
                </article>
              </a>
            </div>
          </div>

          <div className="central-context">
            <div className="central-copy">
              <p className="kicker"><span /> El interrogante alrededor de la elección</p>
              <p className="central-rubric">Al mejor estilo de Mario Castaño</p>
              <h2>
                <span>Jorge Laverde, candidato a Contralor General,</span>
                estaría ofreciendo negocios a los congresistas derivados de las
                auditorías que tendría que adelantar la entidad en su ejercicio de
                control fiscal.
              </h2>
              <div className="central-summary">
                <p>
                  Se ha llegado a hablar de cifras exorbitantes, contratos de 500 mil
                  millones de pesos y cuantiosas sumas de dinero a cambio de votos.
                </p>
                <p>
                  ¿Quiénes son los financiadores de estos compromisos? Ese es el gran
                  interrogante. Algunas versiones hablan de empresarios y otras de
                  personas de no muy buena reputación.
                </p>
              </div>
              <p className="central-disclaimer">
                Este bloque recoge versiones y señalamientos difundidos por terceros.
                No presenta esas afirmaciones como hechos probados; las publicaciones
                están enlazadas para consultar su fuente y contexto originales.
              </p>
            </div>

            <div className="central-visual-grid" aria-label="Imágenes de contexto">
              <figure className="central-visual central-visual-main">
                <img src="/x/medallo-mor-media.jpg" alt="Composición incluida en una publicación enlazada sobre Jorge Laverde" loading="lazy" />
                <figcaption>Publicación enlazada en X</figcaption>
              </figure>
              <figure className="central-visual">
                <img src="/campana/contralor-laverde-1.jpeg" alt="Pieza gráfica sobre la candidatura de Jorge Laverde" loading="lazy" />
              </figure>
              <figure className="central-visual">
                <img src="/laverde/laverde-1.jpg" alt="Fotografía de Jorge Laverde" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="report-section" id="investigacion">
        <a
          className="voragine-feature section-shell"
          href="https://voragine.co/bajo-reserva/la-congresista-que-fue-formula-de-mario-castano-y-gerente-de-telecafe/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leer la investigación de Vorágine"
        >
          <div className="voragine-feature-copy">
            <p className="eyebrow">01 — Investigación periodística · Vorágine</p>
            <h2>La congresista que fue fórmula de Mario Castaño y gerente de Telecafé</h2>
            <p>
              La investigación relaciona contratos de Telecafé y Eje 360 Producciones
              con el entorno político de Mario Castaño y menciona los vínculos de
              Nicolás Cifuentes con Jorge Eliécer Laverde.
            </p>
            <span>Leer el artículo completo en Vorágine ↗</span>
          </div>
          <div className="voragine-feature-media">
            <img src="/laverde/laverde-5.jpeg" alt="Jorge Eliécer Laverde en una imagen de contexto" loading="lazy" />
          </div>
        </a>

        <div className="report-chapters section-shell">
          <article className="report-card report-card-lead">
            <span className="report-number">01</span>
            <p className="report-label">Trayectoria y Comisión Sexta</p>
            <h3>Una permanencia prolongada bajo escrutinio público</h3>
            <p>
              Jorge Eliécer Laverde ha permanecido durante años en la Secretaría de la
              Comisión Sexta del Senado. Cuestionamientos periodísticos han puesto el
              foco en un resultado de 100/100 en pruebas de conocimiento, la falta de
              rotación en el cargo y su capacidad de mediación entre congresistas y
              sectores regulados por esa comisión.
            </p>
            <p>
              También se ha señalado una cercanía personal y política con Lidio García,
              relación que merece examen frente al proceso de elección del Contralor
              General.
            </p>
          </article>

          <article className="report-card">
            <span className="report-number">02</span>
            <p className="report-label">Relaciones y posibles conflictos</p>
            <h3>Los vínculos señalados públicamente</h3>
            <p>
              Vorágine publicó que Laverde era cercano a Mario Castaño, relación que
              Laverde negó. La investigación también señaló posibles conflictos de
              interés alrededor de contratos y nombramientos asociados a Nicolás
              Cifuentes y Olga Lucía Ríos Gaitán.
            </p>
            <p>
              Estas afirmaciones deben contrastarse con los expedientes, respuestas y
              fuentes periodísticas enlazadas.
            </p>
          </article>

          <article className="report-card">
            <span className="report-number">03</span>
            <p className="report-label">Denuncia pública y respuesta</p>
            <h3>Un señalamiento que el propio Laverde rechazó</h3>
            <p>
              Una denuncia anónima por presunto acoso sexual y laboral fue divulgada
              públicamente por la senadora María José Pizarro. Laverde rechazó la
              acusación, pidió la intervención de las autoridades y afirmó no haber
              incurrido en una conducta inapropiada.
            </p>
          </article>

          <article className="report-card report-card-assets">
            <span className="report-number">04</span>
            <p className="report-label">Entorno familiar y patrimonio</p>
            <h3>Una vida ostentosa de dudosa procedencia</h3>
            <p>
              Publicaciones enlazadas formulan preguntas sobre el valor de un reloj que
              porta Laverde y sobre dos inmuebles atribuidos a su entorno familiar: un
              lote en La Dorada y un apartamento en Bogotá.
            </p>
            <p>
              Los señalamientos se presentan con atribución y deben ser contrastados con
              registros oficiales y las respuestas de las personas mencionadas.
            </p>
          </article>
        </div>

        <div className="report-sources section-shell">
          <div>
            <p className="eyebrow light">Fuentes abiertas</p>
            <h3>Consulte las referencias originales</h3>
          </div>
          <div className="report-source-links">
            <a
              href="https://voragine.co/bajo-reserva/la-congresista-que-fue-formula-de-mario-castano-y-gerente-de-telecafe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>01</span> Vorágine — La congresista que fue fórmula de Mario Castaño y gerente de Telecafé <b>↗</b>
            </a>
            <a
              href="https://www.eltiempo.com/politica/congreso/jorge-eliecer-laverde-secretario-de-comision-vi-rechaza-acusacion-de-acoso-800610"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>02</span> El Tiempo — respuesta de Jorge Laverde <b>↗</b>
            </a>
            <a
              href="https://www.infobae.com/colombia/2023/08/28/secretario-de-la-comision-sexta-del-senado-responde-a-las-acusaciones-de-acoso-en-su-contra-que-dijo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>03</span> Infobae — cobertura de la denuncia y la respuesta <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      <section className="instagram-section" id="amistades">
        <div className="instagram-heading section-shell">
          <div>
            <p className="eyebrow">02 — Evidencias de sus amistades</p>
            <h2>Amistad con el corrupto Mario Castaño</h2>
          </div>
          <p>
            La misma investigación señaló posibles conflictos de interés: un amigo
            cercano de Laverde, Nicolás Cifuentes, obtuvo contrato en la Comisión Sexta
            y Laverde fue supervisor; además, su esposa Olga Lucía Ríos Gaitán fue
            contratada como asesora en MinTIC durante la gestión de Karen Abudinen, y
            fue ratificada por el ex director del DAPRE Mauricio Lizcano, mientras la
            Comisión Sexta tenía control político sobre temas TIC, incluido el caso
            Centros Poblados.
          </p>
        </div>

        <div className="instagram-grid section-shell">
          <a
            className="instagram-card instagram-card-portrait"
            href="http://instagram.com/p/DX78WT0jY1Q/?igsh=MTRzMjJjaWE4YmwzYw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir publicación familiar reciente en Instagram"
          >
            <div className="instagram-media">
              <img
                src="/instagram/maria-camila-laverde-1.jpg"
                alt="María Camila Laverde y Juan Pablo Ríos en una fotografía publicada en Instagram"
                loading="lazy"
              />
              <span>Instagram ↗</span>
            </div>
            <div className="instagram-caption">
              <small>Publicación enlazada · 2026</small>
              <h3>Relaciones personales señaladas públicamente</h3>
              <p>Fotografía recuperada de la publicación original compartida.</p>
            </div>
          </a>

          <a
            className="instagram-card instagram-card-gallery"
            href="https://www.instagram.com/p/C8yNfEptQM_/?img_index=6&igsh=ZWhlMnZidW1hbGdl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir carrusel familiar de María Camila Laverde en Instagram"
          >
            <div className="instagram-media instagram-media-grid">
              <img
                src="/instagram/jorge-laverde-maria-camila.jpg"
                alt="Jorge Laverde y María Camila Laverde en una celebración familiar"
                loading="lazy"
              />
              <img
                src="/instagram/maria-camila-familia.jpg"
                alt="María Camila Laverde con una familiar en la misma celebración"
                loading="lazy"
              />
              <span>Ver carrusel en Instagram ↗</span>
            </div>
            <div className="instagram-caption">
              <small>Carrusel enlazado · 2024</small>
              <h3>Evidencias de sus amistades</h3>
              <p>Incluye las dos imágenes adjuntas y abre el carrusel original.</p>
            </div>
          </a>
        </div>
      </section>

      <section className="wall-section" id="muro">
        <div className="wall-title section-shell">
          <div>
            <p className="eyebrow light">03 — Publicaciones y registro visual</p>
            <h2>El muro de la infamia de Laverde</h2>
          </div>
          <p>
            Publicaciones y capturas aportadas para preservar una muestra de la
            conversación pública. Cada pieza conserva el enlace o la imagen disponible
            y el contenido pertenece a sus respectivos autores.
          </p>
        </div>

        <div className="wall-publications section-shell">
          <div className="wall-subheading">
            <p>Publicaciones enlazadas en X</p>
            <span>Abra cada ficha para consultar la fuente original ↗</span>
          </div>
          <div className="source-list wall-source-list">
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
        </div>

        <div className="evidence-divider section-shell">
          <p>Capturas y evidencias visuales</p>
          <span>Abra cada imagen para verla en tamaño completo ↗</span>
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
                <span>Evidencia 0{index + 1}</span>
                <h3>{shot.title}</h3>
                <p>{shot.description}</p>
              </div>
            </article>
          ))}
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
