import Image from "next/image";
import { PeriodicTable } from "@/components/sections2/PeriodicTable";
import BioHaloBackground from "@/assets/images/BioHalo-background-compressed.jpeg";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";



export function TransitionSectionOne({ className = "" }: { className?: string }) {
  return (
    <section className={`${className} overflow-visible`} >
      
      {/* Section closer / Transition */}
      <div className="w-full h-full absolute top-0 left-0 bg-green-500/0">
        <div className="w-full h-full relative top-0 left-0 flex flex-col">


           
              
              <div className="w-screen h-[1300px] relative overflow-y-hidden -translate-y-[100px]">
                        
                        {/* Background Circle */}
                        <div
                          className="absolute w-[2000px] md:w-[3000px] xl:w-[7000px] aspect-square  
                          top-0 -left-[600px] md:-left-[1000px] lg:left-[-700px]  xl:left-[-2000px]  translate-y-[200px]
                          bg-gradient-to-b from-black via-black/50 to-black/0 
                          rounded-full overflow-hidden border-2 border-gray-500 drop-shadow-xl">
                          <div
                                      className="absolute w-[160vw] h-[1600px] top-0 left-[50%] -translate-x-[73%]"
                                      /* style={{
                                        backgroundImage: `url(${BioHaloBackground.src})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                      }} */
                                    >

                                  <div
                                              className="opacity-1 absolute bottom-[500px] left-0 w-[160vw] h-[400px] 2xl:h-[300px] 
                                              bg-gradient-to-t from-black via-black/60 to-transparent"
                                            />

                                  {/* Circle 4 V2 */}
                                  <div className=" w-[1200px] h-[1200px] absolute top-[0%] right-[0%]
                                  -translate-x-[40%] -translate-y-[20%]">
                                        <div className="opacity-1 absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey/40 ">
                                          <Image
                                            src={WaterRepellantFabric}
                                            alt="WaterRepellantFabric"
                                            className="object-cover w-full h-full -translate-y-[20%] "
                                          />
                                          <div className="opacity-60 absolute h-full w-full rounded-full left-0 top-0 bg-gradient-to-tr from-tealAccent via-tealAccent to-mintAccent mix-blend-multiply"></div>
                                        </div>
                                        <div className="opacity-40 absolute h-full w-full rounded-full left-0 top-0 overflow-visible flex items-center justify-center">
                                          <EcoliTripletsSVG className="w-[100%] h-[100%] translate-x-[-3%] translate-y-[2%] opacity-40 mix-blend-screen" />
                                        </div>
                                      </div>


                                          </div>
                        </div>
              </div>
     
                        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black via-black to-tealAccent/0"></div>
        </div>
      </div>
    </section>
  );
}
