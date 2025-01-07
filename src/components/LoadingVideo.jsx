const LoadingVideo = () => {
  return (
    <div className=" h-full mt-20 w-full flex flex-col gap-3 justify-center items-center">
      <span className="loading loading-spinner loading-lg text-white"></span>
      <h1 className="font-bold text-white">Loading, please wait</h1>
    </div>
  );
};

export default LoadingVideo;
