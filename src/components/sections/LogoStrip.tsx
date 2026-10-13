"use client";

import InfiniteSlider from "@/components/smoothui/infinite-slider";

const ROW_1_LOGOS = [
  { name: "TCS", logo: "/logos/companies/tcs.svg" },
  { name: "Infosys", logo: "/logos/companies/infosys.svg" },
  { name: "Accenture", logo: "/logos/companies/accenture.svg" },
  { name: "Wipro", logo: "/logos/companies/wipro.svg" },
  { name: "Cognizant", logo: "/logos/companies/cognizant.svg" },
  { name: "Capgemini", logo: "/logos/companies/capgemini.svg" },
];

const ROW_2_LOGOS = [
  { name: "Deloitte", logo: "/logos/companies/deloitte.svg" },
  { name: "HCL Technologies", logo: "/logos/companies/hcltech.svg" },
  { name: "Tech Mahindra", logo: "/logos/companies/techmahindra.svg" },
  { name: "LTIMindtree", logo: "/logos/companies/ltimindtree.svg" },
  { name: "Mphasis", logo: "/logos/companies/mphasis.svg" },
  { name: "Hexaware", logo: "/logos/companies/hexaware.svg" },
];

export function LogoStrip() {
  return (
    <section className="py-10 sm:py-14 bg-white overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Hiring Partners & Alumni Recruiters
        </p>
        <div className="relative w-full overflow-hidden space-y-4 [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          {/* Row 1 moving forward */}
          <InfiniteSlider speed={45} speedOnHover={15} gap={20}>
            {ROW_1_LOGOS.map((c) => (
              <div
                key={c.name}
                className="logo-card h-16 sm:h-20 w-36 sm:w-48 shrink-0 rounded-2xl bg-white/90 hover:bg-white border border-gray-200/70 hover:border-[#0878E8]/40 hover:-translate-y-0.5 flex items-center justify-center p-3.5 sm:p-4.5 transition-all duration-300 group"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-7 sm:h-8 w-auto max-w-[110px] sm:max-w-[130px] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>

          {/* Row 2 moving reverse */}
          <InfiniteSlider speed={40} speedOnHover={15} reverse gap={20}>
            {ROW_2_LOGOS.map((c) => (
              <div
                key={c.name}
                className="logo-card h-16 sm:h-20 w-36 sm:w-48 shrink-0 rounded-2xl bg-white/90 hover:bg-white border border-gray-200/70 hover:border-[#0878E8]/40 hover:-translate-y-0.5 flex items-center justify-center p-3.5 sm:p-4.5 transition-all duration-300 group"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-7 sm:h-8 w-auto max-w-[110px] sm:max-w-[130px] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
