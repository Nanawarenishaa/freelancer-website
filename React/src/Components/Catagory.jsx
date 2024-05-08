const Catagory = () => {
  return (
    <div className="w-full m-h-[100vh] flex flex-col items-center mt-10 mb-20  justify-center  ">
      <div className=" m-h-[70%] w-full  bg-teal-500">
        <h2 className="text-white text-3xl font-bold text-center underline decoration-2 mt-10 tracking-widest">
          CATAGORY
        </h2>
        <div className="container grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-16 mt-10 w-[70%] place-content-center mx-auto mb-10">
          <div className="w-fit p-2 flex flex-col gap-4 mx-auto  ">
            <img src="c1.png" alt="" className="px-2" />
            <span className="text-white text-xl  ">Design & Art </span>
          </div>
          <div className="w-fit flex flex-col gap-2 justify-center mx-auto">
            <img src="c2.png" alt="" className="sm:px-8 px-6 pt-2" />
            <span className="text-white text-xl ">Web Development </span>
          </div>
          <div className="w-fit p-2 flex flex-col gap-2 mx-auto">
            <img src="c3.png" alt="" className="pt-6" />
            <span className="text-white text-xl ">SEO Marketing </span>
          </div>
          <div className="w-fit p-2 flex flex-col gap-2 mx-auto">
            <img src="c4.png" alt="" className="px-2 pt-2" />
            <span className="text-white text-xl ">Video Editing </span>
          </div>
          <div className="w-fit p-2 flex flex-col gap-2 mx-auto">
            <img src="c5.png" alt="" className="px-6 pt-2" />
            <span className="text-white text-xl ">Logo Design </span>
          </div>
          <div className="w-fit p-2 flex flex-col gap-2 mx-auto ">
            <img src="c6.png" alt="" className=" pt-2" />
            <span className="text-white text-xl ">Game Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
