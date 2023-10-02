import { useEffect, React } from "react";
import axios from "axios";
import img1 from "../../assets/imgwatermark.jpg";
import img2 from "../../assets/img3.jpg";
export default function PlaceToGo() {
  useEffect(() =>{
    (async() => {
    try{
      const result = await axios.get('https://stage.strapi.rupp.support/api/home?populate= Bannerr.Img')
      console.log(result)
    }catch(error){
      console.log(error)
    }
  })()
})
  return (
    <main className="xl:mx-[5%] lg:mx-[4%]">
      <div className="bg-hero h-[90vh] bg-cover bg-no-repeat">
        <div className="bg-sky-950/30 h-full backdrop-brightness-75">
          <div className="flex flex-col justify-center justify-items-center h-full w-1/3 ml-[5%]">
            <h1 className="text-white xl:text-4xl lg:text-3xl font-bold xl:mb-10 lg:mb-5">
              Traveling in Cambodia with DERLENG
            </h1>
            <h2 className="text-white xl:text-2xl lg:text-xl font-bold xl:mb-10 lg:mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium praesentium ipsum delectus corrupti mollitia ullam
            </h2>
            <button className="text-white border-2 rounded-2xl w-fit px-2 py-1 self-end">
              Let's discover together
            </button>
          </div>
        </div>
      </div>

      <section className="h-screen lg:mt-[5%]">
        <div className="flex justify-between items-center h-full">
          <div className="">
            <div className="xl:mb-[12%] lg:mb-[6%]">
          <h1 className="xl:text-3xl font-semibold">Most Popular Places</h1>
        <h4 className="text-xl">These are the places that have most visitor in Cambodia</h4> 
            </div>
        <img
              src={img1}
              alt=""
              className="w-[800px] h-[450px] object-cover"
            />
          </div>
          <div className="mt-[3%]">
            <img src={img2} alt="" className="w-[600px] h-[350px]" />
            <img src="./aboutus2.jpg" alt="" className="mt-[6%] w-[600px] h-[350px]" />
          </div>
        </div>
      </section>

      <section className="h-screen">

      </section>
    </main>
  );
}
