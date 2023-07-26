const fetchVideo = (url) => {
    return fetch('http://localhost:5000/infoVideo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
}

const downloadVideo = (url) => {
    return fetch('http://localhost:5000/download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})
    })
    
}

export default {fetchVideo, downloadVideo};