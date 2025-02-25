"use client";

import { ChromaticText } from "@/components/testbed/ChromaticText";
import { HaloComponent } from "@/components/testbed/HaloComponent";
import { HaloComponent2 } from "@/components/testbed/HaloComponent";
import { HaloComponent3 } from "@/components/testbed/HaloComponent";
import { BioHaloSection } from "@/components/testbed/BioHaloSection";
import { BlueprintSection } from "@/components/testbed/BlueprintSection";
import HeroSectionFloatingPlasmids from "../HeroSections/HeroSectionFloatingPlasmids";
import PfasMolecule from "@/components/ui/PfasMolecule";
import ClassicAlternatingLandingPage from "./ClassicAlternatingLandingPage";
import RotatingMaterials from "@/components/ui/RotatingMaterials";
import { motion } from "framer-motion";
import WaterColorReveal from "@/components/WaterColorReveal";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import { useRef } from "react";
import Image from "next/image";

export default function ComponentTestbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <main className="relative min-h-screen w-screen bg-lightGrey overflow-hidden">
      <section className="w-screen h-screen flex items-center justify-center bg-red-500/0">
        <div className="w-[600px] h-[600px] flex items-center justify-center bg-blue-500/0">
          <RotatingMaterials />
        </div>
      </section>

      <section
        ref={sectionRef}
        className="w-screen h-screen flex items-center justify-center bg-red-500/50"
      >
        <div
          className="w-[600px] h-[600px] flex items-center justify-center bg-blue-500/60"
          ref={containerRef}
        >
          <WaterColorReveal
            width={600}
            height={600}
            className="bg-yellow-500/60"
          >
            <div className="w-full h-full flex items-center justify-center bg-white">
              <Image
                src={WomanWhiteRainJacket.src}
                alt="Woman in white rain jacket"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </WaterColorReveal>
        </div>
      </section>

      <div className="w-screen h-screen flex items-center justify-center">
        {/* <HaloComponent /> */}
        {/* <HaloComponent2 /> */}
        {/* <HaloComponent3 className="blur-xl" count={35} baseDuration={34} radius={350} /> */}
      </div>

      {/* <HeroSectionFloatingPlasmids className="z-10 flex flex-col items-center justify-center" />
      <div className="one absolute top-0 left-0 w-full h-full bg-green-500/0">
        <div className="two flex flex-col w-full h-full items-center justify-center">
          <div className="three relative h-[1080px] w-[1920px] bg-yellow-500/0">
            <div className="four absolute top-0 left-0 w-full h-full bg-red-500/0 blur-md z-20">
              <PfasMolecule className="absolute top-0 left-[50%] w-[150vh] bg-yellow-500/0 opacity-40 rotate-[70deg]" />
              <PfasMolecule className="absolute top-0 right-50%] w-[150vh] bg-yellow-500/0 opacity-40 rotate-[70deg]" />
            </div>
          </div>
        </div>
      </div>

      <section className="w-screen h-[100vh] bg-blue-500/50">
        <div className="w-full h-full bg-black flex items-center justify-center mix-blend-normal">
          <ChromaticText text="Chromatic Aberration" />
        </div>
      </section>

      <BioHaloSection />
      <section className="min-w-screen min-h-screen w-full h-full bg-green-500/10 flex flex-col items-center justify-center">
        <ClassicAlternatingLandingPage />
      </section>

      <BlueprintSection /> */}
    </main>
  );
}
