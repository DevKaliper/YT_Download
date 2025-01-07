const fetchVideo = async (url) => {
  let response = await fetch("http://localhost:5000/infoVideo", {
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
  return fetch("http://localhost:5000/download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
};

export default { fetchVideo, downloadVideo };
