import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./rsvp.css";

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
  { id: "confirma", label: "Confirmación", image: confirma },
  { id: "sobres", label: "Un pequeño detalle", image: lluviaSobres },
  { id: "final", label: "Detalles finales", image: finalImg },
];

const target = new Date("2026-12-19T18:00:00-05:00");

/*
 * GOOGLE FORM
 * Reemplaza esta URL por la URL pública de tu formulario.
 * Ejemplo:
 * https://docs.google.com/forms/d/e/XXXXXXXX/viewform
 */
const GOOGLE_FORM_URL =
  "https://script.google.com/macros/s/AKfycbxvNkEz7dyNxDlXUOiYdVoTMAtleBdiTIiIsSCieuaRJN20T3C39Gff_VY8AQdetIni-Q/exec";

const GOOGLE_FORM_EMBED_URL = `${GOOGLE_FORM_URL}?embedded=true`;

function useCountdown() {
  const get = () => {
    const ms = Math.max(0, target.getTime() - Date.now());
    const day = 86400000,
      hour = 3600000,
      minute = 60000;
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

function Section({ item, index, onNext }) {
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
              <div className="chapter-number">02</div>
              <h2>Una noche muy especial está por comenzar.</h2>
              <p>
                Quiero compartir contigo este momento tan importante para mí y
                celebrar juntos el comienzo de una nueva etapa.
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
                <span>CEREMONIA</span>
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

              <h1>Se reserva el color azul en todas sus gamas</h1>

              <p>
                Para acompañar esta noche especial, te invitamos a vestir de
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
              <div className="eyebrow">¿NOS ACOMPAÑAS?</div>
              <h2>Será un honor compartir esta noche contigo.</h2>
              <p>
                Confirma tu asistencia antes del 15 de Novimebre y 
                ayúdanos a preparar cada detalle de esta celebración.
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
                  <strong></strong>
                  <small>Formulario de confirmación</small>
                </span>
                <span className="rsvp-hero-arrow">→</span>
              </button>

              <div className="rsvp-note">
                <span>♥</span> Tu confirmación nos ayudará a preparar una noche
                inolvidable.
              </div>
            </>
          )}

          {index === 7 && (
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
                <strong>lluvia de sobres </strong>
                durante la celebración.
              </p>

              <div className="ornament">✦ ───── ◇ ───── ✦</div>

              <p className="thank-you-detail">
                Gracias por acompañarme en esta noche tan especial.
              </p>
            </>
          )}

          {index === 8 && (
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
              <button
                className="gold-button"
                onClick={() =>
                  document
                    .getElementById("inicio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                VOLVER AL INICIO
              </button>
            </>
          )}
        </div>
        {index < 8 && (
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
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = sections.findIndex((s) => s.id === entry.target.id);
            if (i >= 0) setActive(i);
          }
        }),
      { threshold: 0.55 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="topbar">
        <button className="brand" onClick={() => go("inicio")}>
          IS
        </button>
        <nav>
          <button onClick={() => go("inicio")}>Inicio</button>
          <button onClick={() => go("evento")}>Evento</button>
          <button onClick={() => go("dress")}>Dress code</button>
          <button onClick={() => go("confirma")}>Confirma</button>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        {menuOpen && (
          <div className="menu">
            {sections.map((s, i) => (
              <button
                key={s.id}
                className={active === i ? "selected" : ""}
                onClick={() => go(s.id)}
              >
                {i + 1}. {s.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <aside className="progress">
        {sections.map((s, i) => (
          <button
            key={s.id}
            className={active === i ? "on" : ""}
            onClick={() => go(s.id)}
            aria-label={s.label}
          />
        ))}
      </aside>

      <main>
        {sections.map((item, index) => (
          <Section
            key={item.id}
            item={item}
            index={index}
            onNext={() => sections[index + 1] && goTo(sections[index + 1].id)}
          />
        ))}
      </main>
    </div>
  );

  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

createRoot(document.getElementById("root")).render(<App />);
