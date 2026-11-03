import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, InstagramLogo, List, MapPin, Phone, Star, WhatsappLogo, X } from '@phosphor-icons/react';
import { Brand } from './components/Brand';
import { WhatsAppLink } from './components/WhatsAppLink';
import { SectionHeading } from './components/SectionHeading';
import { MediaCarousel } from './components/MediaCarousel';
import { business } from './content';

const nav = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#clases', label: 'Clases' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
];

const disciplines = [
  { number: '01', title: 'LabCircuit', tag: 'FUNCIONAL / 45 MIN', description: 'Un circuito funcional de 45 minutos para entrenar con intención y mantenerte en movimiento.' },
  { number: '02', title: 'Box', tag: 'TÉCNICA / ENERGÍA', description: 'Un espacio para descubrir el box y trabajar tu técnica a tu propio ritmo.' },
  { number: '03', title: 'Muay Thai', tag: 'DISCIPLINA / MOVIMIENTO', description: 'Entrena Muay Thai dentro de una comunidad que comparte el gusto por superarse.' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header" onKeyDown={(event) => { if (event.key === 'Escape') setMenuOpen(false); }}>
      <div className="container header-inner">
        <Brand />
        <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegación principal">
          {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="mobile-nav-contact" href={business.whatsapp} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <ArrowUpRight size={17} /></a>
        </nav>
        <WhatsAppLink variant="outline" className="header-cta">WhatsApp</WhatsAppLink>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <List size={26} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-image" role="img" aria-label="Entrenamiento de box en HitLab" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-kicker"><span className="kicker-square" /> FITNESS &amp; FIGHT STUDIO · ZAPOPAN</span>
        <h1>ENTRENA<br /><em>CON FUERZA.</em><br />CRECE EN<br />COMUNIDAD.</h1>
        <p>Box, fitness y movimiento en un espacio donde cada entrenamiento suma.</p>
        <div className="hero-actions">
          <WhatsAppLink>Pedir informes por WhatsApp</WhatsAppLink>
          <a className="text-link text-link-light" href="#galeria">Explora el estudio <ArrowUpRight size={18} weight="bold" /></a>
        </div>
        <p className="hero-trial-note">Pregunta por tu clase de prueba gratis.</p>
        <a className="hero-scroll" href="#nosotros" aria-label="Descubre más sobre HitLab"><ArrowDown size={20} /> <span>DESLIZA PARA DESCUBRIR</span></a>
      </div>
      <div className="hero-side-label">HITLAB / ENTRENA A TU RITMO</div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="nosotros">
      <div className="container about-grid">
        <div className="about-heading">
          <SectionHeading eyebrow="01 / SOBRE HITLAB" title={<>MÁS QUE<br /><span>ENTRENAR.</span></>} />
        </div>
        <div className="about-copy">
          <p className="lead">Aquí el movimiento se vive en comunidad.</p>
          <p>HitLab reúne box, entrenamiento funcional y disciplinas de combate en un ambiente profesional y cercano. Un lugar para llegar como eres, entrenar con intención y compartir el proceso.</p>
          <a className="text-link" href="#clases">Conoce las disciplinas <ArrowRight size={19} weight="bold" /></a>
        </div>
        <div className="about-note"><span className="note-star">✳</span><span>UN ESPACIO PARA<br /><strong>MOVERTE Y CONECTAR</strong></span></div>
      </div>
    </section>
  );
}

function Classes() {
  return (
    <section className="section classes" id="clases">
      <div className="container">
        <div className="section-topline">
          <SectionHeading eyebrow="02 / DISCIPLINAS" title={<>ENCUENTRA TU<br /><span>FORMA DE MOVERTE.</span></>} description="Distintas maneras de entrenar. Una misma energía." light />
          <span className="section-index">HITLAB / 2026</span>
        </div>
        <div className="discipline-grid">
          {disciplines.map((item) => (
            <article className="discipline-card" key={item.title}>
              <div className="discipline-card-top"><span>{item.number} / DISCIPLINA</span><ArrowUpRight size={24} weight="light" aria-hidden="true" /></div>
              <div><span className="discipline-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
        <div className="coming-soon"><span className="soon-dot" /><span>PRÓXIMAMENTE</span><strong>Pilates · Sculpt · Barre</strong><ArrowUpRight size={21} aria-hidden="true" /></div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <div className="container">
        <div className="gallery-intro">
          <SectionHeading eyebrow="03 / LA EXPERIENCIA" title={<>ASÍ SE VIVE<br /><span>HITLAB.</span></>} description="Un vistazo al espacio y a la comunidad que lo hace suyo." />
        </div>
        <MediaCarousel kind="photos" />
        <div className="video-heading"><span className="eyebrow"><span className="eyebrow-line" />EN MOVIMIENTO</span><h3>LA ENERGÍA <span>EN ACCIÓN.</span></h3><p>Dale play para conocer un poco más de lo que pasa dentro de HitLab.</p></div>
        <MediaCarousel kind="videos" />
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section reviews" id="resenas">
      <div className="container reviews-grid">
        <SectionHeading eyebrow="04 / LO QUE SE DICE" title={<>EL AMBIENTE<br /><span>SE NOTA.</span></>} description="En las opiniones sobre HitLab se repiten estas ideas." light />
        <div className="reviews-content">
          <p>La comunidad destaca el buen ambiente, la atención de coaches y staff, las rutinas y el cuidado del espacio. Box y funcional aparecen entre las experiencias que más disfrutan.</p>
          <div className="review-tags"><span>BUEN AMBIENTE</span><span>COACHES Y STAFF</span><span>BOX + FUNCIONAL</span><span>ESPACIO CUIDADO</span></div>
          <small>Resumen de temas mencionados en reseñas positivas; no son citas textuales.</small>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="section location" id="ubicacion">
      <div className="container location-grid">
        <div className="location-copy">
          <SectionHeading eyebrow="05 / ENCUÉNTRANOS" title={<>TU PRÓXIMO<br /><span>ENTRENAMIENTO</span><br />EMPIEZA AQUÍ.</>} />
          <div className="address-block"><MapPin size={27} weight="light" aria-hidden="true" /><div><span>ZAPOPAN, JALISCO</span><strong>{business.address}</strong></div></div>
          <a className="button button-dark" href={business.maps} target="_blank" rel="noopener noreferrer">Abrir en Google Maps <ArrowUpRight size={19} weight="bold" /></a>
        </div>
        <div className="map-card"><iframe title="Mapa de HitLab en Zapopan" src={business.mapEmbed} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div><span className="eyebrow"><span className="eyebrow-line" />EL SIGUIENTE PASO</span><h2>HABLEMOS DE TU<br /><em>PRÓXIMA CLASE.</em></h2><p>Escríbenos para pedir informes o preguntar por tu clase de prueba gratis.</p></div>
        <WhatsAppLink variant="light" className="final-button">Pedir informes por WhatsApp</WhatsAppLink>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main"><div><Brand /><p>Muévete con intención. Entrena en comunidad.</p></div><div className="footer-links"><a href={business.phoneLink}><Phone size={17} />{business.phoneDisplay}</a><a href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={17} />@hitlab.mx</a><a href={business.maps} target="_blank" rel="noopener noreferrer"><MapPin size={17} />{business.address}</a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} HITLAB FITNESS AND FIGHT STUDIO</span><span>Desarrollado por DATARYA</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido"><Hero /><About /><Classes /><Gallery /><Reviews /><Location /><FinalCTA /></main>
      <Footer />
      <nav className="floating-actions" aria-label="Acciones rápidas">
        <a className="floating-review" href="https://search.google.com/local/writereview?placeid=ChIJGbPgIACtKIQRbX7Uc2LAjzc" target="_blank" rel="noopener noreferrer" aria-label="Dejar una reseña en Google (se abre en una nueva pestaña)" title="Dejar una reseña en Google"><Star size={20} weight="fill" aria-hidden="true" /><span>Dejar una reseña</span></a>
        <a className="floating-whatsapp" href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar a HitLab por WhatsApp"><WhatsappLogo size={27} weight="fill" aria-hidden="true" /></a>
      </nav>
    </>
  );
}
