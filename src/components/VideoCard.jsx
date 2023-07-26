import React from 'react'

function VideoCard() {
  return (
    <div className="min-w-screen grid min-h-screen place-items-center ">
    <div className="card mx-auto h-[50vh] w-96 bg-base-100 shadow-xl">
      <figure className="mt-5 ">
        <img
          className="rounded-xl"
          src="https://via.placeholder.com/150"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VideoCard