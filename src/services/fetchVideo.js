const fetchVideo = (url) => {
  return fetch("https://yt-downloader-backend-x7xx.onrender.com/infoVideo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })
    .then((res) => {
      if (res.ok) {
    
          return res.json();
  
      } else {
        

          throw new Error("No proporcionaste una URL válida.");

      }
    })
    
    
};

const downloadVideo = (url) => {
  return fetch("https://yt-downloader-backend-x7xx.onrender.com/download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
};

export default { fetchVideo, downloadVideo };
