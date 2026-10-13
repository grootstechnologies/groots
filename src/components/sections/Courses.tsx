import { ArrowRight, Clock, Users, MonitorPlay } from "lucide-react";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import Link from "next/link";

type Course = {
  title: string;
  tag: string;
  accent: string;
  desc: string;
  duration: string;
  level: string;
  mode: string;
  topics: string[];
  tools: string[];
};

const COURSES: Course[] = [
  {
    title: "Power BI 60-Day Mastery Track",
    tag: "High Demand",
    accent: "#32D583",
    desc: "From SQL foundations to advanced DAX and live dashboards — the complete, project-led path into a Data Analyst role.",
    duration: "60 days",
    level: "Beginner-friendly",
    mode: "Live + recorded",
    topics: [
      "Data modelling & star-schema relationships",
      "DAX measures, time-intelligence & calculated columns",
      "Power Query ETL & data cleaning",
      "Dashboards, row-level security & publishing to the Service",
    ],
    tools: ["Power BI Desktop", "Power Query"],
  },
  {
    title: "Senior Business Analyst Program",
    tag: "Top Earner",
    accent: "#0878E8",
    desc: "Requirements engineering, process modelling, Agile delivery and stakeholder management — the full BA toolkit, end to end.",
    duration: "~10 weeks",
    level: "All levels",
    mode: "Live online",
    topics: [
      "Requirement elicitation, BRD/FRD & user stories",
      "Process modelling with BPMN & workflow mapping",
      "Agile/Scrum delivery, backlog grooming & Jira",
      "SQL for analysis, wireframing & UAT",
    ],
    tools: ["BPMN", "Agile/Scrum", "Jira", "Wireframing", "User Stories"],
  },
  {
    title: "Full-Stack Software Testing",
    tag: "QA Track",
    accent: "#071D3A",
    desc: "Modern QA built for current hiring — Playwright over legacy Selenium, plus API testing and real test strategy.",
    duration: "90 hours",
    level: "Beginner-friendly",
    mode: "Live + labs",
    topics: [
      "Manual testing, STLC & the defect lifecycle",
      "UI automation with Playwright (JS/TS)",
      "API testing with Postman & REST validation",
      "Test reporting & CI integration basics",
    ],
    tools: ["Playwright", "Postman", "Jira", "STLC", "API Testing"],
  },
  {
    title: "AI-Powered Product Management",
    tag: "AI Track",
    accent: "#d97706",
    desc: "Product thinking supercharged by AI — from discovery to roadmap, using GPT tools, analytics and Agile delivery.",
    duration: "16 weeks",
    level: "Mid–senior",
    mode: "Live + mentorship",
    topics: [
      "Product discovery, problem framing & PRDs",
      "Prioritisation & roadmapping (RICE, MoSCoW)",
      "Using AI tools for research, specs & analysis",
      "Metrics, experimentation & stakeholder comms",
    ],
    tools: ["Product Strategy", "AI Tools", "Roadmapping", "Agile", "Analytics"],
  },
  {
    title: "Tricentis Tosca Automation",
    tag: "Automation",
    accent: "#00AFA8",
    desc: "Enterprise model-based test automation — CI/CD integration, API automation and real project practice with Tosca.",
    duration: "7 weeks",
    level: "QA background",
    mode: "Live + labs",
    topics: [
      "Model-based test design & reusable modules",
      "Test-case design, recovery & maintenance",
      "API & data-driven testing",
      "CI/CD integration & execution reporting",
    ],
    tools: ["Tosca", "CI/CD", "Model-Based Testing", "API Automation"],
  },
  {
    title: "DevSecOps Mastery Track",
    tag: "Cloud + Security",
    accent: "#00AFA8",
    desc: "16 modules and 25+ tools — Docker to Kubernetes, Terraform to AWS — building a full, secure delivery pipeline.",
    duration: "3 months",
    level: "Some IT exp.",
    mode: "Cloud labs",
    topics: [
      "Containers & orchestration (Docker, Kubernetes)",
      "Infrastructure as Code with Terraform",
      "CI/CD pipelines with GitHub Actions",
      "Security scanning, secrets (Vault) & AWS",
    ],
    tools: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "SonarQube"],
  },
  {
    title: "Data Analytics for Freshers",
    tag: "Analytics",
    accent: "#32D583",
    desc: "A complete entry-level analytics stack — Python, SQL, Excel, Power BI and Tableau — with live projects from week one.",
    duration: "10 weeks",
    level: "Freshers welcome",
    mode: "Live + recorded",
    topics: [
      "Excel & statistics foundations",
      "SQL querying & data wrangling",
      "Python with Pandas for analysis",
      "Dashboards in Power BI & Tableau",
    ],
    tools: ["Python", "Power BI", "Tableau", "Excel"],
  },
  {
    title: "Data Science & AI (DSP Track)",
    tag: "Advanced",
    accent: "#e74c8c",
    desc: "Machine learning, deep learning and NLP with portfolio-grade capstone projects — for graduates ready to go deep.",
    duration: "3 months",
    level: "Graduates+",
    mode: "Live + mentorship",
    topics: [
      "Python, statistics & feature engineering",
      "Supervised & unsupervised ML (scikit-learn)",
      "Deep learning & NLP fundamentals",
      "End-to-end capstone & model deployment",
    ],
    tools: ["Python", "Deep Learning", "scikit-learn"],
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-24 bg-gray-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A]">
            All 8 High-Demand Tech Programs
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            From Power BI to DevSecOps, Business Analysis to Data Science — pick the track that fits your career goal. Each program is industry-mapped, project-led, and built for placement outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSES.map((course, idx) => (
            <TiltCard
              key={course.title}
              maxTilt={6}
              scale={1.015}
              glare={true}
              glareOpacity={0.12}
              className="h-full rounded-2xl"
            >
              <div
                className="h-full bg-white rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border-t-4 relative overflow-hidden"
                style={{ borderTopColor: course.accent }}
              >
                {idx === 0 && (
                  <BorderBeam
                    colorFrom={course.accent}
                    colorTo="#00B8E6"
                    duration={6}
                    size={90}
                    borderWidth={1.5}
                    radius={16}
                  />
                )}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-[#071D3A] leading-snug">
                    {course.title}
                  </h3>
                  <span
                    className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      backgroundColor: `${course.accent}20`,
                      color: course.accent,
                    }}
                  >
                    {course.tag}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {course.desc}
                </p>

                {/* Meta row */}
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {course.level}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MonitorPlay className="h-3.5 w-3.5" />
                    {course.mode}
                  </span>
                </div>

                {/* Topics list */}
                <ul className="mt-5 space-y-2 flex-1">
                  {course.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: course.accent }}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Tools covered
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-md bg-gray-100 text-[11px] font-medium text-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact/"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
                  style={{ color: course.accent }}
                >
                  Book Free Counselling
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which course is right for you? Book a free career audit session.
          </p>
          <MagneticButton asChild strength={18}>
            <Link
              href="/contact/"
              className="px-8 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] shadow-lg shadow-[#32D583]/25 transition-all inline-block"
            >
              Book a Free Career Audit →
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
