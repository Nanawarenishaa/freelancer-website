import Button from "./Button"


const Footer = () => {
  return (
    <div className="w-full m-h-[80vh] bg-slate-900 place-content-center">
   <div className="conatiner w-[80%] mt-20 sm:mt-10 mx-auto">         
 <div className="flex items-center gap-2 justify-between mb-20 ">
 <div className="flex gap-2">
<img src="logo.png"  className="h-8 sm:h-12" />
<h2 className="text-2xl sm:text-3xl font-bold text-white">Spering</h2>
    </div>
    <div className=" flex gap-2 sm:gap-4 ">
    <img src="fb.png" className="h-5 sm:h-6 " />
    <img src="twitter.png"  className="h-5 sm:h-6" />
    <img src="linkedin.png"  className="h-5 sm:h-6" />
    <img src="instagram.png"  className="h-5 sm:h-6" />
    <img src="youtube.png"  className="h-5 sm:h-6" />
    </div>
 </div>
<div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-4 lg:grid-cols-4 ">
<div className="flex flex-col gap-1 text-white">
  <h3 className="font-bold text-xl mb-4">USEFUL LINKS</h3>
  <a href="/" >Home </a>
  <a href="/">About </a>
  <a href="/">Catagory </a>
  <a href="/">Work </a> 
</div>
<div className="flex flex-col gap-2 text-white">
  <h3 className="font-bold text-xl mb-4"> OFFICES</h3>
  <p>Readable content of page when looking at its layout Readable content of page when looking at its layout.</p>
</div>
<div className="flex flex-col gap-2 text-white">
  <h3 className="font-bold text-xl mb-4"> INFORMATION</h3>
  <p>Readable content of page when looking at its layout Readable content of page when looking at its layout.</p>
</div>
<div className="flex flex-col gap-2 ">
  <h2 className="font-bold text-xl mb-4 text-white">NEWSLETTER</h2>
<input type="email" placeholder="Email" className="pl-4 rounded-sm py-2" />
<Button text={'SUBSCRIBE'} />
</div>
</div>
          </div>
 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-32 w-[80%] sm:mb-10 mb-20 mx-auto">
<div className="text-white flex gap-6 place-content-center">
  <img src="location.png" alt="" />
  <h3 className="text-xl">Location</h3>
</div>
<div className="text-white flex gap-6 place-content-center">
  <img src="mail.png" alt="" />
  <h3 className="text-xl">Demo@gmail.com</h3>
</div>
<div className="text-white  flex gap-6 place-content-center">
  <img src="call.png" alt="" />
  <h3 className="text-xl">call +01 123567890</h3>
</div>

</div>
    </div>
  )
}

export default Footer