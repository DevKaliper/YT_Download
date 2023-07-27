const LoadingVideo = () => {
  return (
    <div className=" h-full mt-20 w-full flex flex-col gap-3 justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
      <h1 className="font-bold">Loading, please wait</h1>
    </div>
  );
};

export default LoadingVideo;
