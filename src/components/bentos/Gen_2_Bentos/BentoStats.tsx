"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../../ui/AnimatedCounter";
import Image from "next/image";
import EnzymeImage from "@/assets/images/enzymeImage.png";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";

export function BentoStats({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-white shadow-lg ${className}`}
    >
      {/* <Image src={EnzymeImage} alt="Enzyme Image" className="w-full h-full object-cover absolute top-0 left-0" /> */}
      <Image
        src={WaterRepellantFabric}
        alt="Water Repellant Fabric"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-transparent "></div>
      <div className="p-6 absolute top-0 left-0 w-full h-full">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-lightGrey">
            Impact Numbers
          </h3>
          <div className="pt-7 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-300">Cost Reduction</p>
              <div className="text-2xl font-bold text-mintAccent">
                <AnimatedCounter value="40%" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-300">Efficiency Gain</p>
              <div className="text-2xl font-bold text-mintAccent">
                <AnimatedCounter value="85%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
