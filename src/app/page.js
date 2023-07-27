
"use client"
import ContactMe from "@/components/ContactMe";
import LoadingVideo from "@/components/LoadingVideo";
import MoukUp from "@/components/MoukUp";
import VideoCard from "@/components/VideoCard";
import { SnackbarProvider } from "notistack";
import { useState, useEffect } from "react";


export default function Home() {
  const [data, setData] = useState(""); // ESTADO QUE GUARDA LA DATA DE LA API
  const [loading, setLoading] = useState(false); // ESTADO QUE GUARDA EL LOADING DE LA API
  useEffect(() =>{
    setData("")
  }, []) // USEEFFECT QUE SE EJECUTA CUANDO EL ESTADO DATA CAMBIA (CUANDO SE GUARDA LA DATA DE LA API 

  return (
    <SnackbarProvider maxSnack={3}>
    <main className="" >
<section>
  <div className="flex flex-col items-center min-h-full py-2 px-2 overflow-hidden">
    <h1 className=" text-4xl md:text-6xl 2xl:text-7xl font-bold text-center text-white mt-10 md:mt-20">
      Welcome to the <a className="bg-clip-text bg-gradient-to-r from-white to-purple-800 text-transparent" href="#">Free YT Downloader</a>
    </h1>
    <p className="text-white text-center mt-4 text-lg italic 2xl:text-2xl">
      You can download any video from YouTube for free and 100% safe. With no ads. 
    </p>
    <MoukUp setData={setData} setLoading={setLoading}/>

    {
      loading ? <LoadingVideo/> : ""
    }

    {
      
      data && loading==false ?  <VideoCard data={data}/> : <ContactMe />
     
    }
   



  



      
    
    
    

    
    </div>



</section>
    </main>
    </SnackbarProvider>
  )
}
