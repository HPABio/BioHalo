"use client";

import { ChallengesSection } from "@/components/sections2/ChallengesSection";
import { SolutionSection } from "@/components/sections2/SolutionSection";
import { AchievementsSection } from "@/components/sections2/AchievementsSection";
import { ConferencesSection } from "@/components/sections2/ConferencesSection";
import { BentoSection } from "@/components/sections2/BentoSection";
import { HeroSection4 } from "@/components/HeroSections/HeroSection4";
import { ShowcaseNavbar } from "@/components/ShowcaseNavbar";
import { Showcase } from "@/components/Showcase";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-800 text-white">
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-800 w-full h-full">
        {/* <HeroSection4 /> */}
        <Showcase />
        {/* <StatsSection6 className="z-10  overflow-visible" />
        <StatsSection5 className="z-3" />
        
        <ChallengesSection className="bg-lightGrey relative" />
        <SolutionSection className="bg-white relative" />
        <BentoSection className="bg-lightGrey relative" />
        <AchievementsSection className="bg-white relative" />
        <ConferencesSection className="bg-white relative" /> */}
      </div>
    </main>
  );
}

/* 
background-image: linear-gradient(#8b9da9, #fff6e4);
box-shadow: inset 0 0 100px hsla(0,0%,0%,.3);
} */

/* "use client";


import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from "@/components/sections/StatsSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ConferencesSection } from "@/components/sections/ConferencesSection";
import { BentoSection } from "@/components/sections/BentoSection";
import { PfasProducts } from "@/components/sections/PfasProducts";
import { PfasPolution } from "@/components/sections/PfasPolution";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">

      <div className="relative z-40">
        <HeroSection />
      </div>
      <StatsSection />
      <PfasProducts />
      <PfasPolution />
      <ChallengesSection />
      <SolutionSection />
      <BentoSection />
      <AchievementsSection />
      <ConferencesSection />
    </main>
  );
}
 */
