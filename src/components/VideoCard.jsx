import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

function VideoCard({ data }) {
  const handleDownload = () => {
    // FUNCION QUE MANEJA CUANDO SE SOLICITA LA DESCARGA
    const datas = {
      // DATOS QUE SE ENVIAN A LA API
      url: data?.video_url,
      fileName: "video_descargado", // NOMBRE DEL ARCHIVO (POR DEFECTO) DESPUES AGREGARÉ LA OPCIÓN PARA QUE EL USUARIO PUEDA CAMBIARLO
    };

    fetch("https://yt-downloader-backend-x7xx.onrender.com/download", {
      // PETICIÓN A LA API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((response) => {
        // RESPUESTA DE LA API
        // // CERRAR LA NOTIFICACIÓN

        // GENERAR EL ARCHIVO Y DESCARGARLO EN EL NAVEGADOR
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement("a");
          a.href = url;
          a.download = `${data?.title}.mp4`; // NOMBRE DEL ARCHIVO (TITULO DEL VIDEO)
          a.click();
        });
      })
      .catch((error) => {
        // ERROR AL DESCARGAR EL VIDEO
        console.error("Error al realizar la solicitud:", error); // IMPRIMIR EL ERROR EN CONSOLA
      });
  };
  return (
    <div className="min-w-screen my-5 grid min-h-[70vh]  place-items-center ">
      <Card className="bg-[#2A323C] text-white shadow-2xl shadow-purple-400 p-4 border-none flex justify-center items-center flex-col">
        <CardHeader>
          <CardTitle>{data?.title}</CardTitle>
          <CardDescription>by {data?.author?.user}</CardDescription>
        </CardHeader>
        <CardContent>
        <figure className="my-5 self-center ">
          <img
            className="rounded-xl border border-white"
            src={data?.thumbnails[0]?.url}
            width={250}
            alt="video thumbnail"
          />
        </figure>
          <h2 className="card-title  text-purple-200">
          <Badge className="bg-purple-400">Category: {data?.category}</Badge>
          <Badge className="bg-red-400">Likes: {data?.likes}</Badge>
          </h2>
        </CardContent>
        <CardFooter>
        <div className="card-actions justify-end">
            <button
              className="btn my-5 hover:bg-purple-700 flex bg-base gap-3 justify-center items-center shadow-lg shadow-gray-700"
              onClick={handleDownload}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>

              <span>Download with highest quality</span>
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default VideoCard;
