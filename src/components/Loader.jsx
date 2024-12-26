const Loader = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ball text-blue-400 loading-xs"></span>
        <span className="loading loading-ball text-blue-500 loading-sm"></span>
        <span className="loading loading-ball text-blue-700 loading-md"></span>
        <span className="loading loading-ball text-blue-900 loading-lg"></span>
      </div>
    </div>
  );
};

export default Loader;
