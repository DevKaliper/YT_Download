"use client";
import Features from "@/components/Features";
import LoadingVideo from "@/components/LoadingVideo";
import MoukUp from "@/components/MoukUp";
import VideoCard from "@/components/VideoCard";
import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Home() {
  const [data, setData] = useState(""); // ESTADO QUE GUARDA LA DATA DE LA API
  const [loading, setLoading] = useState(false); // ESTADO QUE GUARDA EL LOADING DE LA API
  useEffect(() => {
    setData("");
  }, []); // LIMPIA EL ESTADO DE LA DATA CUANDO SE CARGA LA PAGINA

  return (
    <main className="">
      <section>
        <div className="flex flex-col items-center min-h-full py-2 px-2 overflow-hidden">
          <h1 className=" text-4xl md:text-6xl 2xl:text-7xl font-bold text-center text-white mt-10 md:mt-20">
            Welcome to the{" "}
            <a
              className="bg-clip-text bg-gradient-to-r from-white to-purple-800 text-transparent"
              href="#">
              Free YT Downloader
            </a>
          </h1>
          <p className="text-white text-center mt-4 text-lg italic 2xl:text-2xl">
            You can download any video from YouTube for free and 100% safe. With
            no ads.
          </p>
          <Alert className="w-1/5 mt-5 bg-yellow-400 border-none">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              Temporary disabled due to maintenance, we will be back soon.
            </AlertDescription>
          </Alert>

          <MoukUp
            setData={setData}
            setLoading={setLoading}
          />

          {
            loading && <LoadingVideo /> // SI ESTA CARGANDO MUESTRA EL LOADING
          }

          {
            data && loading == false ? <VideoCard data={data} /> : <Features /> // SI HAY DATA Y NO ESTA CARGANDO MUESTRA EL VIDEOCARD, SI NO MUESTRA EL Features
          }
        </div>
      </section>
    </main>
  );
}
