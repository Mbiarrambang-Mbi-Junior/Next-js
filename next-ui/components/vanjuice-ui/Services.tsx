"use client"
import data from "@/utils/vanjuiceData.json";
import { BsTruck, BsHeart, BsGift, BsCupStraw, BsArrowRight } from "react-icons/bs";

function Services({id, colors}: {id: string, colors: any}) {
  const icons: Record<string, React.ReactNode> = {
    truck: <BsTruck />, heart: <BsHeart />, gift: <BsGift />, cup: <BsCupStraw />,
  };

  const isDark = colors.primary === "#101828";

  return (
   <section
      id={id}
      style={{ backgroundColor: colors.service }}
      className="min-h-screen py-24 px-4 flex flex-col items-center transition-colors duration-500"
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 text-white">
          <h2 className="text-5xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full"></div>
          <p className="text-lg mt-4 max-w-2xl mx-auto">{data.servicesContent.serviceContent.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.servicesContent.services.map((service) => (
            <div
              key={service.id}
              className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group`}
            >
              <div style={{ color: colors.service }} className="bg-gray-50 p-4 rounded-full mb-6">
                {icons[service.iconName]}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className={isDark ? "text-gray-400 text-sm" : "text-gray-600 text-sm"}>{service.description}</p>
              <button style={{ color: colors.service }} className="mt-auto font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-wide">
                Learn More <BsArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;