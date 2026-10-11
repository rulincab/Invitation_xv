import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./rsvp.css";
import MusicPlayer from "./MusicPlayer";

import entrada from "./assets/01-entrada.jpg";
import apertura from "./assets/02-apertura.jpg";
import invitacion from "./assets/03-invitacion.jpg";
import evento from "./assets/04-evento.jpg";
import cuenta from "./assets/05-cuenta-regresiva.jpg";
import dress from "./assets/06-dress-code.jpg";
import confirma from "./assets/07-confirmacion.jpg";
import lluviaSobres from "./assets/08-lluvia-sobres.png";
import finalImg from "./assets/09-final.jpg";

const sections = [
  { id: "inicio", label: "Inicio", image: entrada },
  { id: "apertura", label: "La apertura", image: apertura },
  { id: "invitacion", label: "La invitación", image: invitacion },
  { id: "evento", label: "El evento", image: evento },
  { id: "cuenta", label: "Cuenta regresiva", image: cuenta },
  { id: "dress", label: "Dress code", image: dress },
  { id: "sobres", label: "Un pequeño detalle", image: lluviaSobres },
  { id: "final", label: "Detalles finales", image: finalImg },
  { id: "confirma", label: "Confirmación", image: confirma },
];

const target = new Date("2026-12-19T18:00:00-05:00");

const GOOGLE_FORM_URL =
  "https://script.google.com/macros/s/AKfycbzw3zXp5Z1v6xsfnEPxviws46BkdrrW85_renbKYzE9_F0AI1O_qy-8optFsXFC1Ob17Q/exec";

function useCountdown() {
  const get = () => {
    const ms = Math.max(0, target.getTime() - Date.now());
    const day = 86400000;
    const hour = 3600000;
    const minute = 60000;

    return {
      days: Math.floor(ms / day),
      hours: Math.floor((ms % day) / hour),
      minutes: Math.floor((ms % hour) / minute),
      seconds: Math.floor((ms % minute) / 1000),
    };
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    const timer = setInterval(() => setValue(get()), 1000);
    return () => clearInterval(timer);
  }, []);

  return value;
}

function Section({ item, index, onNext, goTo }) {
  const countdown = useCountdown();

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Club%20Egresados%20Unilibre%2C%20Av.%2070%20%2352-30%2C%20Bogot%C3%A1%2C%20Colombia";

  return (
    <section id={item.id} className={`chapter chapter-${index + 1}`}>
      <div className="art">
        <img className="art-bg" src={item.image} alt="" aria-hidden="true" />

        <div className="art-shade" />

        <div className="content">
          {index === 0 && (
            <>
              <div className="eyebrow">UNA NOCHE PARA RECORDAR</div>
              <h1>Isabella</h1>
              <div className="sub">MIS XV AÑOS</div>
              <div className="ornament">✦ ───── ◇ ───── ✦</div>
              <div className="date">19 · 12 · 2026</div>

              <button className="gold-button" onClick={onNext}>
                DESCUBRIR INVITACIÓN
              </button>
            </>
          )}

          {index === 1 && (
            <>
              <div className="chapter-number"></div>
              <div className="eyebrow">UNA PEQUEÑA INVITACIÓN</div>

              <h2>
                Hay noches que se convierten en recuerdos para toda la vida.
              </h2>

              <p>
                Con mucha ilusión quiero invitarte a celebrar conmigo el
                comienzo de una nueva etapa.
              </p>

              <p>
                Será una noche para compartir, celebrar y crear recuerdos que
                permanecerán para siempre.
              </p>

              <div className="signature">Isabella Salguero Rincón</div>

              <button className="text-button" onClick={onNext}>
                Continuar hacia la celebración →
              </button>
            </>
          )}

          {index === 2 && (
            <>
              <div className="chapter-number"></div>

              <h2>Una noche muy especial está por comenzar.</h2>

              <p>
                "Será un privilegio para mí, contar con tu presencia en este paso
                tan único. Tu compañía hará aún más memorable el inicio de esta
                nueva etapa de mi vida"
              </p>

              <div className="date large">19</div>
              <div className="sub">DE DICIEMBRE · 2026</div>
            </>
          )}

          {index === 3 && (
            <>
              <div className="eyebrow">UNA NOCHE ESPECIAL</div>

              <h2>
                19 DE DICIEMBRE
                <br />
                DE 2026
              </h2>

              <div className="detail-block">
                <span>CEREMONIA RELIGIOSA</span>
                <b>6:00 PM</b>
              </div>

              <div className="detail-block">
                <span>CELEBRACIÓN</span>
                <b>
                  A CONTINUACIÓN
                  <br />
                  DE LA CEREMONIA
                </b>
              </div>

              <div className="detail-block">
                <span>CLUB EGRESADOS UNILIBRE</span>
                <b>
                  Avenida 70 # 52-30
                  <br />
                  Bogotá, Colombia
                </b>
              </div>

              <a
                className="gold-button link-button"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                VER UBICACIÓN
              </a>
            </>
          )}

          {index === 4 && (
            <>
              <div className="eyebrow">EL MOMENTO SE ACERCA</div>
              <h2>CUENTA REGRESIVA</h2>

              <div className="countdown">
                <div>
                  <strong>{String(countdown.days).padStart(3, "0")}</strong>
                  <span>DÍAS</span>
                </div>

                <div>
                  <strong>{String(countdown.hours).padStart(2, "0")}</strong>
                  <span>HORAS</span>
                </div>

                <div>
                  <strong>{String(countdown.minutes).padStart(2, "0")}</strong>
                  <span>MINUTOS</span>
                </div>

                <div>
                  <strong>{String(countdown.seconds).padStart(2, "0")}</strong>
                  <span>SEGUNDOS</span>
                </div>
              </div>
            </>
          )}

          {index === 5 && (
            <>
              <div className="chapter-number"></div>
              <div className="eyebrow">DRESS CODE</div>

              <h2>Hombres: Formal · Mujeres: Preferiblemente traje largo</h2>

              <div className="ornament">✦ ───── ◇ ───── ✦</div>

              <h1>Se reserva el color azul en todas sus gamas (Damas)</h1>

              <p>
                Para acompañar esta noche espectacular, te invitamos a vestir de
                manera elegante y acorde al evento.
              </p>

              <div className="important">
                <b>IMPORTANTE</b>
                <br />
                Por favor, evita el color <strong>azul</strong>.
              </div>
            </>
          )}

          {index === 6 && (
            <>
              <div className="eyebrow">UN PEQUEÑO DETALLE</div>

              <div className="envelope-card">
                <div className="envelope-glow"></div>
                <div className="envelope-icon">✦</div>
              </div>

              <h2>
                Tu presencia será
                <br />
                el regalo más especial.
              </h2>

              <p className="envelope-message">
                Si deseas tener un detalle adicional, tendremos{" "}
                <strong>lluvia de sobres</strong> durante la celebración.
              </p>

              <div className="ornament">✦ ───── ◇ ───── ✦</div>

              <p className="thank-you-detail">
                Gracias por acompañarme en esta noche maravillosa.
              </p>
            </>
          )}

          {index === 7 && (
            <>
              <div className="eyebrow">GRACIAS POR SER PARTE</div>

              <h2>
                Gracias por ser parte de este momento tan importante para mí.
              </h2>

              <div className="ornament">✦ ───── ◇ ───── ✦</div>

              <div className="final-message">
                ¿NOS VEMOS EN
                <br />
                UNA NOCHE MÁGICA?
              </div>
            </>
          )}

          {index === 8 && (
            <>
              <div className="eyebrow">¿NOS ACOMPAÑAS?</div>

              <h2>Será un honor compartir esta noche contigo.</h2>

              <p>
                Confirma tu asistencia antes del 15 de noviembre y ayúdanos a
                preparar cada detalle de esta celebración.
              </p>

              <button
                className="rsvp-hero-button"
                type="button"
                onClick={() => {
                  window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
                }}
                aria-label="Abrir formulario de confirmación"
              >
                <span className="rsvp-hero-icon">✦</span>

                <span className="rsvp-hero-copy">
                  <strong>CONFIRMAR MI ASISTENCIA</strong>
                  <small>Formulario de confirmación</small>
                </span>

                <span className="rsvp-hero-arrow">→</span>
              </button>

              <div className="rsvp-note">
                <span>♥</span> Tu confirmación nos ayudará a preparar una noche
                inolvidable.
              </div>

              <button
                className="gold-buttons"
                type="button"
                onClick={() => goTo("inicio")}
              >
                VOLVER AL INICIO
              </button>
            </>
          )}
        </div>

        {index < sections.length - 1 && (
          <button
            className="scroll-next"
            onClick={onNext}
            aria-label="Continuar"
          >
            ↓
          </button>
        )}
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = sections.findIndex(
              (section) => section.id === entry.target.id,
            );

            if (i >= 0) {
              setActive(i);
            }
          }
        });
      },
      { threshold: 0.55 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="topbar">
        <button
          className="brand"
          onClick={() => goTo("inicio")}
          aria-label="Volver al inicio"
        >
          IS
        </button>

        <nav>
          <button onClick={() => goTo("inicio")}>Inicio</button>
          <button onClick={() => goTo("evento")}>Evento</button>
          <button onClick={() => goTo("dress")}>Dress code</button>
          <button onClick={() => goTo("confirma")}>Confirma</button>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="menu">
            {sections.map((section, i) => (
              <button
                key={section.id}
                className={active === i ? "selected" : ""}
                onClick={() => goTo(section.id)}
              >
                {i + 1}. {section.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <aside className="progress">
        {sections.map((section, i) => (
          <button
            key={section.id}
            className={active === i ? "on" : ""}
            onClick={() => goTo(section.id)}
            aria-label={section.label}
            aria-current={active === i ? "step" : undefined}
          />
        ))}
      </aside>

      <main>
        {sections.map((item, index) => (
          <Section
            key={item.id}
            item={item}
            index={index}
            goTo={goTo}
            onNext={() => {
              const nextSection = sections[index + 1];
              if (nextSection) goTo(nextSection.id);
            }}
          />
        ))}
      </main>

      {/* El reproductor permanece disponible en todas las secciones */}
      <MusicPlayer />
    </div>
  );
}

const container = document.getElementById("root");

if (!container) {
  throw new Error("No se encontró el elemento #root en index.html");
}

if (!window.__isabellaReactRoot) {
  window.__isabellaReactRoot = createRoot(container);
}

window.__isabellaReactRoot.render(<App />);
