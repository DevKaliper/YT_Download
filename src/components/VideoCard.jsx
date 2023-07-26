import React from "react";
import service from "../services/fetchVideo";
function VideoCard({ data }) {
  // const handleGetVideo = () => {
  //   // FUNCION QUE ENVIA EL LINK A LA API PARA QUE SE DESCARGUE EL VIDEO
  //   const url = data?.video_url;
  //   service
  //     .downloadVideo(url)
  //     .then((res) => {
  //       console.log("video descargado");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


  const handleDownload = () => {
    const datas = {
      url: data?.video_url,
      fileName:'video_descargado',
    };

    fetch('http://localhost:5000/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datas),
    })
      .then((response) => {
        console.log(response.blob)
        // Generar la descarga en el navegador
        response.blob().then((blob) => {
          console.log(blob)
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement('a');
          a.href = url;
          a.download = `hola1.mp4`;
          a.click();
        });
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error);
      });
  };
  return (
    <div className="min-w-screen my-5 grid min-h-[70vh]  place-items-center ">
      <div className="card mx-auto h-auto w-96 bg-base-100 shadow-xl">
        <figure className="mt-5 ">
          <img
            className="rounded-xl"
            src={data?.thumbnails[0]?.url}
            width={250}
            alt="video thumbnail"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data?.title}
            <div className="badge badge-secondary">{data?.category}</div>
          </h2>
          <p className="overflow-hidden">
            {" "}
            <strong className="text-lg underline">Description: </strong>
            {data?.description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn my-5 " onClick={ handleDownload}>Download with highest quality</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
