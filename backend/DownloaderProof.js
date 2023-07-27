
"use client"
import React, { useState } from 'react';
import ytdl from 'ytdl-core';

const YouTubeDownloader = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleDownload = () => {
    setStatus('Descargando...');

    ytdl.getInfo(url, (err, info) => {
      if (err) {
        setStatus('Error al obtener información del video.');
        console.error(err);
        return;
      }

      const formato = ytdl.chooseFormat(info.formats, { quality: 'highest' });
      if (!formato) {
        setStatus('No se encontró un formato adecuado para descargar.');
        return;
      }

      ytdl(url, { format: formato })
        .pipe(fs.createWriteStream('video_descargado.mp4'))
        .on('finish', () => {
          setStatus('Descarga completada!');
        })
        .on('error', (err) => {
          setStatus('Error durante la descarga.');
          console.error(err);
        });
    });
  };

  return (
    <div>
      <h1>Descargador de Videos de YouTube</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Ingresa la URL del video de YouTube"
      />
      <button onClick={handleDownload}>Descargar</button>
      <p>{status}</p>
    </div>
  );
};

export default YouTubeDownloader;
