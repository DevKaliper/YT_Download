import React from "react";
import { closeSnackbar, enqueueSnackbar } from "notistack";
function VideoCard({ data }) {
  const handleDownload = () => {
    const datas = {
      url: data?.video_url,
      fileName: "video_descargado",
    };
    enqueueSnackbar("Intentando descargar el video...", {
      persist: true,
      variant: "success",
    });

    fetch("http://localhost:5000/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((response) => {
        closeSnackbar();
        console.log(response.blob);

        // Generar la descarga en el navegador
        response.blob().then((blob) => {
          console.log(blob);
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement("a");
          a.href = url;
          a.download = `${data?.title}.mp4`;
          a.click();
        });
      })
      .catch((error) => {
        enqueueSnackbar(`Error al descargar el video: ${error.message}`, {
          autoHideDuration: 3000,
          variant: "error",
        });
        console.error("Error al realizar la solicitud:", error);
      });
  };
  return (
    <div className="min-w-screen my-5 grid min-h-[70vh]  place-items-center ">
      <div className="card mx-auto h-auto w-96  bg-opacity-75 shadow-2xl hover:scale-105 duration-200 ease-in-out shadow-purple-800">
        <figure className="mt-5 ">
          <img
            className="rounded-xl shadow-lg shadow-white"
            src={data?.thumbnails[0]?.url}
            width={250}
            alt="video thumbnail"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title  text-purple-200">
            {data?.title}
            <div className="badge badge-secondary">{data?.category}</div>
          </h2>
          <p className="overflow-hidden">
            {" "}
            <strong className="text-lg  text-purple-400">Description: </strong>
            {data?.description}
          </p>
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
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
