import { useState } from "react";
import service from "../services/fetchVideo";


const MoukUp = () => {
  const [url, setUrl] = useState("");
  const handleChange = (e, setSomething) => {
    setSomething(e.target.value);
    
  }
  const handleSubmit = (url) => {
    service.fetchVideo(url).then(res => console.log(res.videoDetails.title))
  }
  return (
    <div className="mockup-code relative mt-[5rem] w-full shadow-2xl shadow-purple-500 lg:w-1/2 overflow-visible">
      <pre data-prefix="$">
        <code>Paste your link down below</code>
      </pre>
      <pre
        data-prefix=">"
        className="mb-2 text-warning">
        <code>We aceppt youtube and tiktok videos</code>
      </pre>
      <pre
        data-prefix=">"
        className="text-success">
        <input
          type="text"
          value={url}
          onChange={(e) => handleChange(e, setUrl)}
          placeholder="Put the video's link here..."
          className="input input-bordered w-full max-w-xs"
        />
      </pre>
      <button onClick={()=>handleSubmit(url)} className="btn flex flex-row gap-2 justify-center items-center shadow-xl shadow-purple-800 absolute right-0 -bottom-8 md:-bottom-5 " >
        <div>
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
          
        </div><span>Download</span>
      </button>
    </div>
  );
};

export default MoukUp;
