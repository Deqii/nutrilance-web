import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-between items-center bg-green-200">
      <div className="px-24 mt-20">
        <h1 className="text-6xl font-bold max-w-3/4 leading-snug">
          Smart Nutrition for Growing Minds
        </h1>
        <p className="text-2xl max-w-1/2 mt-8">
          Good Nutrition & a balanced diet are the cornerstone of a healthy
          lifestyle.
        </p>
        <Image
          className="mt-20"
          src="/picture1.png"
          alt="hero"
          width={600}
          height={600}
        ></Image>
      </div>
      <div className=" mt-28 flex items-center ">
        <Image
          className="h-[700px] w-[900px]"
          src="/picture2.png"
          alt="hero"
          width={600}
          height={600}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
