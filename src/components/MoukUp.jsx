import { useState } from "react";
import service from "../services/fetchVideo";
import { useToast } from "@/hooks/use-toast";

const MoukUp = ({ setData, setLoading }) => {
  const { toast } = useToast();

  const [url, setUrl] = useState(""); // ESTADO QUE GUARDA EL LINK

  const handleChange = (e, setSomething) => {
    // FUNCION QUE CAMBIA EL ESTADO DEL LINK
    setSomething(e.target.value);
  };

  const handleSubmit = (url) => {
    // FUNCION QUE ENVIA EL LINK A LA API
    if (!url) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Please paste a link",
      });
      return;
    }

    setLoading(true);
    service
      .fetchVideo(url)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Error",
          variant: "destructive",
          description: err.message,
        });
      });
  };
  return (
    <div className="mockup-code relative mt-[5rem] w-full overflow-visible shadow-2xl shadow-purple-500 lg:w-1/2">
      <pre data-prefix="$">
        <code>Paste your link down below</code>
      </pre>
      <pre
        data-prefix=">"
        className="mb-2 text-warning">
        <code>We accept all types of videos</code>
      </pre>
      <pre
        data-prefix=">"
        className="text-success">
        <input
          type="text"
          value={url}
          onChange={(e) => handleChange(e, setUrl)}
          placeholder="Paste the link here..."
          className="input input-bordered w-full max-w-xs"
        />
      </pre>
      <button
        onClick={() => handleSubmit(url)}
        className="btn absolute -bottom-8 right-0 flex flex-row items-center justify-center gap-2 shadow-xl shadow-purple-800 md:-bottom-5 ">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <span>Search</span>
      </button>
    </div>
  );
};

export default MoukUp;
