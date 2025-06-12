import Image from "next/image";

const Banner = () => {
  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Expert Nutritionist Consultations */}
        <div className="md:col-span-1 bg-yellow-50 rounded-xl p-4 flex flex-col justify-between">
          <h3 className="font-semibold text-lg mb-2">
            Expert Nutritionist Consultations
          </h3>
          <p className="text-sm">
            Get expert advice for your child’s with consultations
          </p>
        </div>

        {/* Middle top image (dietician with screen) */}
        <div className="md:col-span-2">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/services/nutritionist.jpg"
              alt="Nutritionist Consultation"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Left bowl image */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/services/pasta.jpg"
            alt="Healthy Food"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Personalized Diet Plan */}
        <div className="bg-yellow-50 rounded-xl p-4">
          <h3 className="font-semibold text-lg mb-2">Personalized Diet Plan</h3>
          <p className="text-sm">
            Get a personalized diet plan for your child, tailored to their
            health needs and food preferences
          </p>
        </div>

        {/* Child Eating */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/services/happy-child.jpg"
            alt="Happy Child"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Fruits Image */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/services/fruits.jpg"
            alt="Fruits Basket"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Instant Ingredient Delivery */}
        <div className="bg-yellow-50 rounded-xl p-4 md:col-span-2">
          <h3 className="font-semibold text-lg mb-2">
            Instant Ingredient Delivery
          </h3>
          <p className="text-sm">
            Get essential ingredients delivered in 10 minutes with our KidSmart
            Service for stress free meal prep
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
