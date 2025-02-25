"use client";

import { motion } from "framer-motion";
import { PeriodicTableNeoMorph } from "../../sections/PeriodicTableNeoMorph";
import Image from "next/image";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import EnzymeImage from "@/assets/images/enzymeImage.png";
import EnzymeImage2 from "@/assets/images/enzymeImage2.png";

export function BentoPeriodicTable({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-white shadow-lg ${className}`}
    >
      {/* <Image src={WaterRepellantFabric} alt="Water Repellant Fabric" className="w-full h-full object-cover absolute top-0 left-0" /> */}
      {/* <Image src={EnzymeImage} alt="Enzyme Image" className="w-full h-full object-cover absolute top-0 left-0" /> */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex items-center justify-center flex-col w-full h-full">
          {/* <h3 className="text-7xl font-semibold bg-gradient-to-br from-mintAccent to-teal-100/30 text-transparent bg-clip-text uppercase text-bold">Bio
          <span className='text-pinkAccent font-bold '>&lsaquo;F&rsaquo;</span>Polymers</h3> */}
          <h3 className="text-8xl  font-semibold bg-gradient-to-br from-tealAccent/70 to-tealAccent  text-transparent bg-clip-text text-bold text-center uppercase">
            Our Bio
            <span className="bg-gradient-to-bl from-pinkAccent via-pinkAccent to-red-800 text-transparent bg-clip-text font-bold ">
              F
            </span>
            <br />
            <br />
          </h3>
          <h3 className="text-8xl font-semibold bg-gradient-to-r from-tealAccent/70 to-slate-900/50 text-transparent bg-clip-text text-bold text-center uppercase">
            Platform
          </h3>
          {/* <h3 className='text-9xl font-semibold bg-gradient-to-tl from-mintAccent to-teal-100/60 text-transparent bg-clip-text capitalize text-bold text-center '>BioF<br/>Platform</h3> */}
        </div>
      </div>
      <Image
        src={EnzymeImage2}
        alt="Enzyme Image 2"
        className="w-full h-full scale-[0.7] object-cover absolute top-0 left-0 overflow-visible"
      />
    </motion.div>
  );
}
