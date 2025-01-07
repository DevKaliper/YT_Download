const fetchVideo = async (url) => {
  let response = await fetch("https://yt-downloader-backend-x7xx.onrender.com/infoVideo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })

  let data = await response.json();

  
  return data;


}

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
