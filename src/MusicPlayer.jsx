import React, { useRef, useState } from "react";
import "./MusicPlayer.css";

/*
 * Audio esperado:
 * public/audio/xxx.mp3
 *
 * Vite public assets se sirven desde la raíz pública. BASE_URL permite
 * que la ruta también funcione al publicar el sitio en GitHub Pages.
 */

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const audioSrc = `${import.meta.env.BASE_URL}/audio/musica-isabella.mp3`;

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    setAudioError(false);

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);
      setPlaying(false);
      setAudioError(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        onPlay={() => {
          setPlaying(true);
          setAudioError(false);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => {
          const audio = audioRef.current;
          console.error("No se pudo cargar el archivo de audio.", {
            src: audio?.currentSrc || audioSrc,
            errorCode: audio?.error?.code,
            errorMessage: audio?.error?.message,
          });
          setPlaying(false);
          setAudioError(true);
        }}
      />

      <button
        type="button"
        className={`music-player${playing ? " is-playing" : ""}`}
        onClick={toggleMusic}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        aria-pressed={playing}
        title={playing ? "Pausar música" : "Reproducir música"}
      >
        <span aria-hidden="true">{playing ? "♫ Desactivar musica" : "♫ Activar Música"}</span>
      </button>

      {audioError && (
        <span className="music-player-error" role="status">
          No se pudo cargar la música. Comprueba el nombre y la ubicación del
          archivo de audio.
        </span>
      )}
    </>
  );
}
