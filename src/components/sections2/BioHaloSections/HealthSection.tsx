import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { SimpleStatsBox, StatsBox } from "@/components/ui/StatsBox";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import Pharma from "@/assets/images/BluePrintSVG/Pharma.svg";
import MeshFabric from "@/assets/images/Mesh-fabric.png";
import Droplets1 from "@/assets/images/Droplets1.jpg";
import EcoliTripletsSVG from "../../ui/EcoliTripletsSVG";
import BGFabricTealPink from "@/assets/images/BGImagesTest/BGFabricTealPink.png";


interface HealthSectionProps {
  stats: any[];
  className?: string;
}
 
export function HealthSectionImgLeft({ stats, className = "" }: HealthSectionProps) {
  const ref4 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref4,
    offset: ["start end", "end start"],
  });

  return (
    <main
        className={`${className}`}
    >
      {/*Two Columns HEALTH */}
      <div className="flex justify-end w-full border-2 border-lightGrey/0">
        <h1
          className="w-full lg:w-[80%] text-right pb-2
          font-black font-arial text-6xl bg-gradient-to-tl from-tealAccent to-tealAccent/60 bg-clip-text text-transparent"
        >
          <span className="">
            And also public health <br className="block lg:hidden xl:block" /> is{" "}
            <br className="block lg:hidden" />
            the{" "}
            <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/30 bg-clip-text text-transparent">
              suffering
            </span>
          </span>
        </h1>
      </div>
      <div className="flex justify-end w-full border-2 border-lightGrey/0">
        
        {/* Left Column with Circle */}
        <div className="w-[600px] h-[600px] -translate-x-[10%] relative">
          <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey">
            <Image
              src={WaterRepellantFabric}
              alt="WaterRepellantFabric"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute h-full w-full rounded-full left-0 top-0 overflow-hidden flex items-center justify-center bg-gradient-to-tr from-black via-black/20 to-tealAccent/0">
            <Image
              src={Pharma}
              alt="BioHaloStep1"
              className="w-[90%] translate-x-0 -translate-y-[5%] bg-yellow-400/0"
            />
          </div>
          <div
            className="absolute h-[350px] w-[350px] rounded-full left-[64%] top-[60%] lg:top-[52%] overflow-hidden flex items-center justify-center bg-red-500/0"
            style={{
              backgroundImage: `url(${MeshFabric.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden
              bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
            />
            <motion.div
              ref={ref4}
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden
              bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
            />
            <StatsBox
              classNamesContainer="w-fit z-10 h-fit -mt-12"
              classNamesTitle="lg-9xl w-[800px] mt-5 text-center lg:text-9xl md:text-8xl 
              font-bold mb-6 bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
              classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold -mt-14 capitalize"
              key={3}
              stat={stats[3]}
              scrollYProgress={
                useScroll({
                  target: ref4,
                  offset: ["start end", "end start"],
                }).scrollYProgress
              }
              scrollEndThreshold={0.4}
              index={3}
              text=""
              ratchet={false}
            />
          </div>
        </div>
        {/* Right Column with Text */}
        <div className="space-y-12 mt-8 right-0">
          <div className="space-y-4">
            <h3 className="text-gray-800/80 text-4xl text-right">
              Persistent Pollutants <br /> with hidden health risks
            </h3>
            <p className="max-w-md text-gray-800/60 text-right">
              PFAS compounds, while boosting industrial performance, remain in
              our environment for decades. Their incredible durability has
              become a double-edged sword, as persistent exposure is now linked
              to hormonal imbalances, immune challenges, and even cancer.
              <span className="w-[55%] ml-auto hidden lg:block">
                <br />
                Emerging research underscores the importance of rethinking our
                use of these chemicals and implementing comprehensive strategies
                to monitor and mitigate their impact on public health.
                Addressing this silent crisis is essential for a healthier
                future.
              </span>
            </p>
            <p className="hidden text-md max-w-sm w-[65%] ml-auto pt-32 text-gray-800/60">
              Emerging research underscores the importance of rethinking our use
              of these chemicals and implementing comprehensive strategies to
              monitor and mitigate their impact on public health. Addressing
              this silent crisis is essential for a healthier future.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] bg-red-500/0"></div>

      {/* Paradox Section */}
      <section className="hidden bg-red-500/0 w-full">
      <div className=" w-full bg-red-500/0 mt-48 md:mt-32">
        <h2 className="text-2xl font-black font-arial bg-gradient-to-tl from-tealAccent to-tealAccent/45 bg-clip-text text-transparent">
          The Paradox of PFAS: Durability Meets Danger
        </h2>
      </div>
      <div className="mt-10 md:mt-12 flex flex-row gap-8">
        {/* left column */}
        <div className="w-1/2">
          <div className="space-y-4">
            <p className="text-base">
              PFAS (per- and polyfluoroalkyl substances) are celebrated for
              their exceptional durability—largely due to the strong
              carbon–fluorine bonds that make them almost impervious to natural
              degradation. This resilience is precisely what makes them so
              valuable across industries, powering everything from non-stick
              cookware and waterproof fabrics to essential firefighting foams.
            </p>
            <p className="text-sm">
              Emerging research underscores the importance of rethinking our use
              of these chemicals and implementing comprehensive strategies to
              monitor and mitigate their impact on public health. Addressing
              this silent crisis is essential for a healthier future.
            </p>
            <p className="text-base">
              However, this very durability turns PFAS into persistent
              pollutants. Once released into the environment, PFAS can remain
              for decades, "bioaccumulating" in water supplies and living
              organisms. This persistence not only challenges cleanup efforts
              but also raises serious health concerns, including hormone
              disruption, immune system effects, and even links to certain
              cancers. The striking dichotomy lies in the fact that the traits
              which lend PFAS their industrial utility also embed long-lasting
              risks to ecosystem and human health.
            </p>
          </div>
        </div>

        {/* right column */}
        <div className="w-1/2 bg-green-600/0 relative">
          <div className="w-[900px] h-[900px] relative ml-auto translate-y-[15%] translate-x-[5%] bg-green-500/0">
            <div className="opacity-1 absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey">
              <Image
                src={Droplets1}
                alt="Droplets1"
                className="object-cover w-full h-full"
              />
              <div className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 bg-tealAccent/40 mix-blend-color-multiply"></div>
            </div>
            <div className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 overflow-visible flex items-center justify-center">
              <EcoliTripletsSVG className="w-[100%] h-[100%] translate-x-[-3%] translate-y-[2%] opacity-70 invert mix-blend-color-burn" />
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}





export function HealthSectionImgRight({ stats, className = "" }: HealthSectionProps) {
  const ref4 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref4,
    offset: ["start end", "end start"],
  });

  return (
    <main className={`${className}`}>
      {/* Top Text */}
      <div className="flex justify-start  w-full border-2 border-lightGrey/0 relative">
      <h1
        className="absolute w-full lg:w-[80%] xl:pb-10 pb-2 font-black font-arial text-6xl text-center lg:text-left
        bg-gradient-to-tl from-tealAccent to-tealAccent/30 bg-clip-text text-transparent capitalize">
        <span className="">
        But these special properties <br />
         also make them <br /> hard to degrade and{" "}
            <span className="bg-gradient-to-t from-pinkAccent to-tealAccent/30 bg-clip-text text-transparent">
            <br/>highly toxic 
          </span>
        </span>
      </h1>
      <h1
        className="w-full lg:w-[80%] xl:pb-10 pb-2 font-black font-arial text-6xl text-center lg:text-left
        bg-gradient-to-tl from-tealAccent to-tealAccent/30 bg-clip-text text-transparent capitalize
        blur-[1px] opacity-70">
        <span className="">
        But these special properties <br />
         also make them <br /> hard to degrade and{" "}
            <span className="bg-gradient-to-t from-pinkAccent to-tealAccent/30 bg-clip-text text-transparent">
            <br/>highly toxic 
          </span>
        </span>
      </h1>
      </div>

{/*Two Columns HEALTH */}
      <div className="flex flex-col lg:flex-row-reverse justify-end w-full border-2 border-lightGrey/0 lg:pr-12 px-4">
        {/* Right Column with Circle */}
        <div className="hidden w-full max-w-[450px] lg:max-w-[600px] aspect-square lg:w-[600px] lg:h-[600px] 
            mx-auto lg:translate-x-[10%] relative lg:mt-0 mt-20">
          <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey">
            <Image
              src={WaterRepellantFabric}
              alt="WaterRepellantFabric"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute h-full w-full rounded-full left-0 top-0 overflow-hidden 
              flex items-center justify-center bg-gradient-to-tr from-black via-black/20 to-tealAccent/0">
            <Image
              src={Pharma}
              alt="BioHaloStep1"
              className="w-[90%] translate-x-0 -translate-y-[5%]"
            />
          </div>
          <div
            className="absolute w-[40%] aspect-square lg:h-[350px] lg:w-[350px] 
                rounded-full right-[64%] top-[60%] lg:top-[52%] 
                overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: `url(${MeshFabric.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden
              bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
            />
            <motion.div
              ref={ref4}
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden
              bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
            />
            <SimpleStatsBox
              classNamesContainer="w-fit z-10 h-fit -mt-10"
              classNamesTitle="w-[800px] mt-5 text-center text-7xl 
                font-bold mb-6 bg-gradient-to-tl from-tealAccent to-lightGrey 
                bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)]"
              classNamesSubTitle="text-center text-lightGrey/60 text-lg lg:text-2xl 
                font-bold -mt-4 lg:-mt-8 capitalize"
              stat={stats[3]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.4}
              index={3}
              text=""
              ratchet={false}
            />
          </div>
        </div>

         {/* Alt Right Column with Circle */}
         <div className="w-full max-w-[450px] lg:max-w-[600px] aspect-square lg:w-[600px] lg:h-[600px] 
            mx-auto lg:translate-x-[10%] relative lg:mt-0 mt-20">
                    {/* small circle */}
                      <div
                    className="absolute w-[40%] aspect-square lg:h-[350px] lg:w-[350px] 
                        rounded-full right-[64%] top-[30%] lg:top-[50%] 
                        lg:translate-y-[-50%]
                        overflow-hidden flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${BGFabricTealPink.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <div
                      className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                      bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
                    /> */}
                    
                  </div>
          <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey">
            <Image
              src={WaterRepellantFabric}
              alt="WaterRepellantFabric"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
          </div>
          
          <div className="absolute h-full w-full rounded-full left-0 top-0 overflow-hidden 
              flex flex-col items-center justify-center">
            <div className="relative w-[80%] h-[80%] flex items-center justify-center">
              <Image
                src={Pharma}
                alt="BioHaloStep1"
                className="w-full h-full object-contain -translate-y-[7%]"
              />
            </div>
            
            <motion.div
              ref={ref4}
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden 
                bg-gradient-to-t from-black via-black/10 to-transparent"
            />

            <div className="absolute top-[63%] -translate-y-[50%] w-full">
              <SimpleStatsBox
                classNamesContainer="w-fit mx-auto z-20"
                classNamesTitle="text-center text-6xl lg:text-9xl
                  font-bold mb-4 bg-gradient-to-tl from-tealAccent to-lightGrey 
                  bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)]"
                classNamesSubTitle="text-center text-lightGrey/80 text-lg lg:text-4xl
                  font-bold capitalize -mt-8"
                stat={stats[3]}
                scrollYProgress={scrollYProgress}
                scrollEndThreshold={0.4}
                index={3}
                text=""
                ratchet={false}
              />
            </div>
          </div>
          
          
        </div>





        {/* Left Column with Text */}
        <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12 mt-8 lg:mt-16">
          <div className="space-y-4">
            <h3 className="text-gray-800/80 text-3xl lg:text-4xl text-center lg:text-left">
              Persistent Pollutants <br /> with hidden health risks
            </h3>
            <p className="max-w-prose lg:max-w-sm text-gray-800/60 text-center lg:text-left 
                text-lg lg:text-xl mx-auto lg:mx-0">
              PFAS compounds, while boosting industrial performance, remain in
              our environment for decades. Their incredible durability has
              become a double-edged sword, as persistent exposure is now linked
              to hormonal imbalances, immune challenges, and even cancer.
              <span className="hidden lg:block mt-4">
                Emerging research underscores the importance of rethinking our
                use of these chemicals and implementing comprehensive strategies
                to monitor and mitigate their impact on public health.
                Addressing this silent crisis is essential for a healthier
                future.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] bg-red-500/0"></div>

      {/* Paradox Section */}
      <section className="hidden bg-red-500/0 w-full">
        <div className=" w-full bg-red-500/0 mt-48 md:mt-32">
          <h2 className="text-2xl font-black font-arial bg-gradient-to-tl from-tealAccent to-tealAccent/45 bg-clip-text text-transparent">
            The Paradox of PFAS: Durability Meets Danger
          </h2>
        </div>
        <div className="mt-10 md:mt-12 flex flex-row gap-8">
          {/* left column */}
          <div className="w-1/2">
            <div className="space-y-4">
              <p className="text-base">
                PFAS (per- and polyfluoroalkyl substances) are celebrated for
                their exceptional durability—largely due to the strong
                carbon–fluorine bonds that make them almost impervious to
                natural degradation. This resilience is precisely what makes
                them so valuable across industries, powering everything from
                non-stick cookware and waterproof fabrics to essential
                firefighting foams.
              </p>
              <p className="text-sm">
                Emerging research underscores the importance of rethinking our
                use of these chemicals and implementing comprehensive strategies
                to monitor and mitigate their impact on public health.
                Addressing this silent crisis is essential for a healthier
                future.
              </p>
              <p className="text-base">
                However, this very durability turns PFAS into persistent
                pollutants. Once released into the environment, PFAS can remain
                for decades, "bioaccumulating" in water supplies and living
                organisms. This persistence not only challenges cleanup efforts
                but also raises serious health concerns, including hormone
                disruption, immune system effects, and even links to certain
                cancers. The striking dichotomy lies in the fact that the traits
                which lend PFAS their industrial utility also embed long-lasting
                risks to ecosystem and human health.
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="w-1/2 bg-green-600/0 relative">
            <div className="w-[900px] h-[900px] relative ml-auto translate-y-[15%] translate-x-[5%] bg-green-500/0">
              <div className="opacity-1 absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey">
                <Image
                  src={Droplets1}
                  alt="Droplets1"
                  className="object-cover w-full h-full"
                />
                <div className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 bg-tealAccent/40 mix-blend-color-multiply"></div>
              </div>
              <div className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 overflow-visible flex items-center justify-center">
                <EcoliTripletsSVG className="w-[100%] h-[100%] translate-x-[-3%] translate-y-[2%] opacity-70 invert mix-blend-color-burn" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


export function HealthSectionBACKUP({ stats, className = "" }: HealthSectionProps) {
  const ref4 = useRef(null);

  return (
    <main
        className={`${className}`}
    >
      {/*Two Columns HEALTH */}
      <div className="flex justify-end w-full border-2 border-lightGrey/0">
        <h1
          className="w-full lg:w-[80%] text-right pb-2
          font-black font-arial text-6xl bg-gradient-to-tl from-tealAccent to-tealAccent/60 bg-clip-text text-transparent"
        >
          <span className="">
            And also public health <br className="block lg:hidden xl:block" /> is{" "}
            <br className="block lg:hidden" />
            the{" "}
            <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/30 bg-clip-text text-transparent">
              suffering
            </span>
          </span>
        </h1>
      </div>
      <div className="flex justify-end w-full border-2 border-lightGrey/0">
        
        {/* Left Column with Circle */}
        <div className="w-[600px] h-[600px] -translate-x-[10%] relative">
          <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey">
            <Image
              src={WaterRepellantFabric}
              alt="WaterRepellantFabric"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute h-full w-full rounded-full left-0 top-0 overflow-hidden flex items-center justify-center bg-gradient-to-tr from-black via-black/20 to-tealAccent/0">
            <Image
              src={Pharma}
              alt="BioHaloStep1"
              className="w-[90%] translate-x-0 -translate-y-[5%] bg-yellow-400/0"
            />
          </div>
          <div
            className="absolute h-[350px] w-[350px] rounded-full left-[64%] top-[60%] lg:top-[52%] overflow-hidden flex items-center justify-center bg-red-500/0"
            style={{
              backgroundImage: `url(${MeshFabric.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden
              bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
            />
            <motion.div
              ref={ref4}
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden
              bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
            />
            <StatsBox
              classNamesContainer="w-fit z-10 h-fit -mt-12"
              classNamesTitle="lg-9xl w-[800px] mt-5 scale-[0.6] text-center lg:text-9xl md:text-8xl 
              font-bold mb-6 bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
              classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold -mt-14 capitalize"
              stat={stats[3]}
              scrollYProgress={
                useScroll({
                  target: ref4,
                  offset: ["start end", "end start"],
                }).scrollYProgress
              }
              scrollEndThreshold={0.4}
              index={3}
              text=""
              ratchet={false}
            />
          </div>
        </div>
        {/* Right Column with Text */}
        <div className="space-y-12 mt-8 right-0">
          <div className="space-y-4">
            <h3 className="text-gray-800/80 text-4xl text-right">
              Persistent Pollutants <br /> with hidden health risks
            </h3>
            <p className="max-w-md text-gray-800/60 text-right">
              PFAS compounds, while boosting industrial performance, remain in
              our environment for decades. Their incredible durability has
              become a double-edged sword, as persistent exposure is now linked
              to hormonal imbalances, immune challenges, and even cancer.
              <span className="w-[55%] ml-auto hidden lg:block">
                <br />
                Emerging research underscores the importance of rethinking our
                use of these chemicals and implementing comprehensive strategies
                to monitor and mitigate their impact on public health.
                Addressing this silent crisis is essential for a healthier
                future.
              </span>
            </p>
            <p className="hidden text-md max-w-sm w-[65%] ml-auto pt-32 text-gray-800/60">
              Emerging research underscores the importance of rethinking our use
              of these chemicals and implementing comprehensive strategies to
              monitor and mitigate their impact on public health. Addressing
              this silent crisis is essential for a healthier future.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] bg-red-500/0"></div>

      {/* Paradox Section */}
      <section className="hidden bg-red-500/0 w-full">
      <div className=" w-full bg-red-500/0 mt-48 md:mt-32">
        <h2 className="text-2xl font-black font-arial bg-gradient-to-tl from-tealAccent to-tealAccent/45 bg-clip-text text-transparent">
          The Paradox of PFAS: Durability Meets Danger
        </h2>
      </div>
      <div className="mt-10 md:mt-12 flex flex-row gap-8">
        {/* left column */}
        <div className="w-1/2">
          <div className="space-y-4">
            <p className="text-base">
              PFAS (per- and polyfluoroalkyl substances) are celebrated for
              their exceptional durability—largely due to the strong
              carbon–fluorine bonds that make them almost impervious to natural
              degradation. This resilience is precisely what makes them so
              valuable across industries, powering everything from non-stick
              cookware and waterproof fabrics to essential firefighting foams.
            </p>
            <p className="text-sm">
              Emerging research underscores the importance of rethinking our use
              of these chemicals and implementing comprehensive strategies to
              monitor and mitigate their impact on public health. Addressing
              this silent crisis is essential for a healthier future.
            </p>
            <p className="text-base">
              However, this very durability turns PFAS into persistent
              pollutants. Once released into the environment, PFAS can remain
              for decades, "bioaccumulating" in water supplies and living
              organisms. This persistence not only challenges cleanup efforts
              but also raises serious health concerns, including hormone
              disruption, immune system effects, and even links to certain
              cancers. The striking dichotomy lies in the fact that the traits
              which lend PFAS their industrial utility also embed long-lasting
              risks to ecosystem and human health.
            </p>
          </div>
        </div>

        {/* right column */}
        <div className="w-1/2 bg-green-600/0 relative">
          <div className="w-[900px] h-[900px] relative ml-auto translate-y-[15%] translate-x-[5%] bg-green-500/0">
            <div className="opacity-1 absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey">
              <Image
                src={Droplets1}
                alt="Droplets1"
                className="object-cover w-full h-full"
              />
              <div className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 bg-tealAccent/40 mix-blend-color-multiply"></div>
            </div>
            <div className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 overflow-visible flex items-center justify-center">
              <EcoliTripletsSVG className="w-[100%] h-[100%] translate-x-[-3%] translate-y-[2%] opacity-70 invert mix-blend-color-burn" />
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
