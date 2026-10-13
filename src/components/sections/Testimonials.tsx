import { AnimatedTestimonials } from "@/components/aceternity/animated-testimonials";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The Power BI track was exactly what I needed. Rushi's training style is very practical — we worked on real dashboards from week one. Got placed at Deloitte within 2 months of completing the program.",
    name: "Sai Krishna",
    designation: "Power BI Track · Placed at Deloitte",
  },
  {
    quote:
      "I came in as a fresher with zero IT knowledge. The career audit helped me find the BA path and the training was incredibly structured. Cleared my first interview at Infosys in the third month.",
    name: "Priyanka M.",
    designation: "Business Analyst Track · Placed at Infosys",
  },
  {
    quote:
      "DevSecOps is a niche skill and Greenroots covers it in incredible depth. Docker, Kubernetes, Terraform — all covered with live cloud labs. The content is premium and the support doesn't stop after training.",
    name: "Venkatesh R.",
    designation: "DevSecOps Track · Placed at Capgemini",
  },
  {
    quote:
      "After 2 years of a gap, I was nervous to re-enter IT. Greenroots made it stress-free — the resume rebuild and LinkedIn profile update alone got me 4 interview calls in the first week after posting.",
    name: "Sneha K.",
    designation: "Software Testing · Career Gap to IT",
  },
  {
    quote:
      "Tosca training here is unlike anything on YouTube. They use actual enterprise project structures, not toy examples. The mock interviews were harder than the real ones — which is exactly what you need.",
    name: "Mohammed Adil",
    designation: "Tricentis Tosca Automation · Placed",
  },
  {
    quote:
      "The AI Product Management track is genuinely ahead of the market. I got an offer as an Associate PM within 3 weeks of finishing — and the interviewers were impressed by the AI tool fluency they hadn't seen before.",
    name: "Rahul Verma",
    designation: "AI Product Management Track · Associate PM",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-12 sm:py-20 lg:py-24 overflow-hidden relative bg-gradient-to-b from-[#03101F] via-[#03101F] to-[#03101F] scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[45rem] rounded-full bg-[#32D583]/8 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7FE5F2] backdrop-blur sm:text-[11px]">
            <Star className="h-3 w-3 fill-[#FBBF24] text-[#FBBF24]" aria-hidden="true" />
            Student Stories
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            What Our Graduates Say
          </h2>
          <p className="mt-3.5 sm:mt-4 text-emerald-100/80 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Real students. Real companies. Real salaries. Here&apos;s what Greenroots has delivered.
          </p>
        </div>
        <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay />
      </div>
    </section>
  );
}
