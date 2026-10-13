"use client";

import { Marquee } from "@/components/magicui/marquee";

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

export function Placement() {
  return (
    <section id="placement" className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A]">
            Placement Support
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Mock interviews, referrals, and recruiter connects across global technology employers.
          </p>
        </div>

        {/* Dual Moving Logo Marquee: Moving Left & Right */}
        <div className="relative w-full overflow-hidden space-y-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          {/* Row 1 moving left */}
          <Marquee
            reverse={false}
            pauseOnHover={true}
            duration="30s"
            gap="1.25rem"
            repeat={4}
          >
            {ROW_1_LOGOS.map((c) => (
              <div
                key={c.name}
                className="h-20 sm:h-24 w-40 sm:w-52 shrink-0 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0878E8] flex items-center justify-center p-4 sm:p-5 transition-all duration-300"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-8 sm:h-10 w-auto max-w-[120px] sm:max-w-[150px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>

          {/* Row 2 moving right */}
          <Marquee
            reverse={true}
            pauseOnHover={true}
            duration="30s"
            gap="1.25rem"
            repeat={4}
          >
            {ROW_2_LOGOS.map((c) => (
              <div
                key={c.name}
                className="h-20 sm:h-24 w-40 sm:w-52 shrink-0 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0878E8] flex items-center justify-center p-4 sm:p-5 transition-all duration-300"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-8 sm:h-10 w-auto max-w-[120px] sm:max-w-[150px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
