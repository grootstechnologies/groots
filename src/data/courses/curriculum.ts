/**
 * curriculum.ts — Course data for Greenroots' 3 high-demand tracks.
 *
 * Each course exposes a deep, structured curriculum: phases with modules,
 * tooling ecosystem, production artifacts, certifications, FAQs, target
 * audience, prerequisites, and a strategic headline / synopsis used on the
 * course detail page.
 *
 * Exports:
 *   - DEVOPS_COURSE
 *   - DATA_ANALYTICS_COURSE
 *   - DATA_SCIENCE_COURSE
 *   - NEW_COURSES (array)
 *   - COURSE_BY_SLUG (Record<slug, course>)
 */

export type CourseModule = { title: string; desc: string };
export type CoursePhase = {
  phase: string;
  title: string;
  summary: string;
  modules: CourseModule[];
};
export type CourseFaq = { q: string; a: string };
export type ToolingDomain = { domain: string; tools: string[] };

export type Course = {
  slug: string;
  code: string;
  name: string;
  category: string;
  duration: string;
  weeklyHours: string;
  learningMode: string;
  batchSize: string;
  primaryCareerPath: string;
  strategicHeadline: string;
  tagline: string;
  executiveSynopsis: string;
  targetAudience: string[];
  prerequisites: string[];
  targetOutcome: string;
  keyTakeaways: string[];
  toolingEcosystem: ToolingDomain[];
  productionArtifacts: { title: string; desc: string }[];
  certifications: { title: string; desc: string }[];
  phases: CoursePhase[];
  faqs: CourseFaq[];
  accentColor: string;
};

/* ---------------------------- DevSecOps ---------------------------- */

const DEVOPS_COURSE: Course = {
  slug: "devops",
  code: "GR-DEV-2026",
  name: "DevSecOps Mastery Track",
  category: "Cloud & Security",
  duration: "3 months",
  weeklyHours: "12–14 hrs/week",
  learningMode: "Live online + Cloud labs",
  batchSize: "12–18 students",
  primaryCareerPath: "DevSecOps Engineer · Cloud Engineer · Platform Engineer",
  strategicHeadline: "Ship secure software fast — own the entire delivery pipeline.",
  tagline: "16 modules · 25+ tools · production-grade cloud labs",
  executiveSynopsis:
    "A 3-month, project-led DevSecOps track that takes you from containers to a fully automated, security-scanned delivery pipeline on AWS. You build everything: Docker images, Kubernetes manifests, Terraform modules, GitHub Actions workflows, Vault-backed secrets, and SAST/DAST gates. By graduation you have a portfolio pipeline that scans, signs, deploys, and observes a multi-service app — exactly what hiring managers ask for.",
  targetAudience: [
    "IT pros with 1–3 years of dev, QA, sysadmin, or support experience looking to pivot into DevSecOps.",
    "Developers who want to own the full delivery loop — not just the code.",
    "Recent CS/IT grads who want a hard, hireable niche beyond generalist SDE roles.",
  ],
  prerequisites: [
    "Comfortable with the Linux command line (basic file ops, bash scripting).",
    "Working knowledge of Git (commit, branch, push, pull).",
    "Any one programming language (Python, Go, Java, JS/TS).",
    "Familiarity with HTTP, REST, and JSON.",
  ],
  targetOutcome:
    "By the end of the program you can architect, build, secure, and operate a multi-service application on AWS — from container build to production deploy with full CI/CD, secrets management, and security scanning baked in.",
  keyTakeaways: [
    "Build containerised apps with Docker and orchestrate them with Kubernetes (EKS-ready).",
    "Author production-grade Terraform modules — reusable, state-managed, cost-aware.",
    "Design GitHub Actions pipelines with parallel jobs, matrix builds, and artifact caching.",
    "Integrate SAST, dependency scanning, and secrets detection into every pipeline run.",
    "Operate with observability — Prometheus, Grafana, Loki, and tracing.",
  ],
  toolingEcosystem: [
    { domain: "Containers & Orchestration", tools: ["Docker", "Kubernetes", "Helm", "Podman"] },
    { domain: "Cloud & IaC", tools: ["AWS (EKS, IAM, S3)", "Terraform", "Pulumi"] },
    { domain: "CI/CD", tools: ["GitHub Actions", "Jenkins", "ArgoCD"] },
    { domain: "Security", tools: ["SonarQube", "Trivy", "Vault", "OWASP ZAP"] },
    { domain: "Observability", tools: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
    { domain: "Languages", tools: ["Python", "Bash", "Go (intro)"] },
    { domain: "Source & Workflow", tools: ["Git", "GitHub", "PR reviews", "Trunk-based dev"] },
  ],
  productionArtifacts: [
    {
      title: "Multi-Service Pipeline Project",
      desc: "A complete CI/CD pipeline for a 3-service app: build → scan → sign → deploy to EKS with ArgoCD, including canary rollout and rollback.",
    },
    {
      title: "Reusable Terraform Module Library",
      desc: "A versioned set of Terraform modules (VPC, EKS, IAM, RDS, S3) with tests and CI — portfolio-grade and reusable on day one of your job.",
    },
  ],
  certifications: [
    {
      title: "Greenroots DevSecOps Mastery Certificate",
      desc: "Issued on completion of all phases, projects, and the final panel review.",
    },
    {
      title: "Certified Kubernetes Administrator (CKA) — recommended",
      desc: "Curriculum covers 80%+ of CKA objectives; we provide a 4-week CKA prep sprint at the end of the program.",
    },
    {
      title: "AWS Solutions Architect Associate — recommended",
      desc: "All AWS modules align to SAA objectives; optional prep track included.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — Foundations",
      title: "Linux, Networking & Containers",
      summary:
        "Rebuild the foundations employers assume: process management, networking, and the container story from first principles.",
      modules: [
        { title: "Linux for DevOps", desc: "Process isolation, namespaces, cgroups, systemd, journaling." },
        { title: "Networking Essentials", desc: "TCP/IP, DNS, HTTP, TLS, load balancing." },
        { title: "Docker Deep Dive", desc: "Images, layers, multi-stage builds, BuildKit, registry." },
        { title: "Git & Collaboration", desc: "Branching strategies, PR workflow, code review, trunk-based." },
      ],
    },
    {
      phase: "Phase 2 — Kubernetes",
      title: "Kubernetes & Orchestration",
      summary:
        "Run workloads on Kubernetes the way production teams do — declarative, GitOps-driven, observable.",
      modules: [
        { title: "K8s Core Objects", desc: "Pods, deployments, services, configmaps, secrets." },
        { title: "Storage & Networking", desc: "PVs, PVCs, ingress, network policies, service mesh intro." },
        { title: "Helm & Package Mgmt", desc: "Charts, templating, releases, OCI registries." },
        { title: "EKS Provisioning", desc: "Cluster setup, node groups, IRSA, autoscaling." },
      ],
    },
    {
      phase: "Phase 3 — Infrastructure as Code",
      title: "Terraform, AWS & Pipelines",
      summary:
        "Provision cloud infra the right way — modular, stateful, reviewed — and ship it through GitHub Actions.",
      modules: [
        { title: "Terraform Foundations", desc: "State, modules, workspaces, lifecycle hooks." },
        { title: "AWS Core Services", desc: "IAM, VPC, S3, RDS, EKS, CloudWatch, costing." },
        { title: "GitHub Actions", desc: "Workflows, runners, matrix, reusable workflows, secrets." },
        { title: "Pipeline Patterns", desc: "Parallel jobs, caching, artifacts, deployment gates." },
      ],
    },
    {
      phase: "Phase 4 — Security",
      title: "DevSecOps: Shift Security Left",
      summary:
        "Make security a CI gate — not a quarterly audit. SAST, dependency scanning, secrets detection, and signed images.",
      modules: [
        { title: "SAST & Code Quality", desc: "SonarQube quality gates in CI, false-positive triage." },
        { title: "Container & Dependency Scanning", desc: "Trivy, Grype, SBOM generation, policy enforcement." },
        { title: "Secrets Management", desc: "HashiCorp Vault, dynamic secrets, IRSA on EKS." },
        { title: "DAST & Runtime", desc: "OWASP ZAP in CI, Falco runtime detection, OPA policies." },
      ],
    },
    {
      phase: "Phase 5 — Observability & Capstone",
      title: "Operate, Observe, Ship the Capstone",
      summary:
        "Instrument services for metrics, logs, traces — and present your capstone pipeline to a mock hiring panel.",
      modules: [
        { title: "Metrics & Dashboards", desc: "Prometheus, Grafana, alerting, SLOs." },
        { title: "Logs & Traces", desc: "Loki, OpenTelemetry, distributed tracing." },
        { title: "Capstone Build", desc: "Multi-service app, full pipeline, canary deploy." },
        { title: "Mock Panel & Review", desc: "Architecture defence, incident scenario, Q&A." },
      ],
    },
  ],
  faqs: [
    {
      q: "Is this course beginner-friendly?",
      a: "It is not a beginner course — you should have basic Linux, Git, and one programming language. If you are unsure, our free career audit will tell you whether this track or Data Analytics is the better fit.",
    },
    {
      q: "Do I get hands-on AWS access?",
      a: "Yes. We give you scoped AWS accounts for the duration of the program so you can provision real resources (within a budget). You also get access to a shared EKS cluster for K8s labs.",
    },
    {
      q: "What if I miss a live class?",
      a: "Every live session is recorded and uploaded within 24 hours. You keep access to the recordings, the labs, and the Discord mentor channel for 12 months after graduation.",
    },
    {
      q: "Is the CKA prep included?",
      a: "Yes — a 4-week CKA prep sprint is included at the end of the program. The course material covers 80%+ of CKA objectives; the prep sprint focuses on speed and the practical exam format.",
    },
    {
      q: "What does placement support look like?",
      a: "Resume rewrite, LinkedIn optimisation, weekly mock interviews, and active referrals to our hiring partners. Median time-to-offer for our graduates is around 10–12 weeks after completion.",
    },
    {
      q: "Can I pay in EMIs?",
      a: "Yes — 2- and 3-month EMI options are available. Talk to our counsellor for the current fee schedule and EMI plans.",
    },
    {
      q: "Will this help me switch cities — say from Hyderabad to Bengaluru?",
      a: "Yes. We actively place in both cities — our Hyderabad campus handles in-person interviews and our Bengaluru office runs remote panels. Your resume goes into both pools.",
    },
  ],
  accentColor: "#00AFA8",
};

/* ---------------------------- Data Analytics ---------------------------- */

const DATA_ANALYTICS_COURSE: Course = {
  slug: "data-analytics",
  code: "GR-DA-2026",
  name: "Data Analytics for Freshers",
  category: "Analytics & BI",
  duration: "10 weeks",
  weeklyHours: "10–12 hrs/week",
  learningMode: "Live + recorded",
  batchSize: "15–20 students",
  primaryCareerPath: "Data Analyst · BI Developer · MIS Analyst",
  strategicHeadline: "Land your first analytics role — with a portfolio employers respect.",
  tagline: "Excel → SQL → Python → Power BI → Tableau · 4 real projects",
  executiveSynopsis:
    "A 10-week, fresher-friendly track that takes you from Excel to a job-ready analytics portfolio. You learn SQL for querying, Python for wrangling, Power BI and Tableau for dashboards, and the storytelling that gets a CFO to act on your numbers. Four real-world projects (sales, marketing, operations, finance) give you the case studies you need to crack your first analyst interview.",
  targetAudience: [
    "Recent graduates (any stream) looking for their first analytics role.",
    "Working professionals in ops, sales, or MIS who want to formalise their analytics skills.",
    "Career returners re-entering IT — this track is gentle on prerequisites and strong on outcomes.",
  ],
  prerequisites: [
    "Comfort with Excel — pivot tables, basic formulas (we build from here).",
    "High-school level maths (averages, percentages, simple probability).",
    "A laptop with 8GB+ RAM. We help you install everything else.",
  ],
  targetOutcome:
    "By the end of the program you can ingest messy data, clean it in Python/SQL, model it in a star schema, build a Power BI dashboard, and present findings to a non-technical stakeholder.",
  keyTakeaways: [
    "Query production-style data with SQL — joins, window functions, CTEs.",
    "Wrangle data in pandas — clean, reshape, merge, and aggregate.",
    "Build a star-schema model in Power BI with DAX measures and time intelligence.",
    "Design dashboards in both Power BI and Tableau that pass a stakeholder review.",
    "Tell the story behind the numbers — KPI framing, narrative, and presentation.",
  ],
  toolingEcosystem: [
    { domain: "Spreadsheets", tools: ["Excel", "Google Sheets"] },
    { domain: "Databases & SQL", tools: ["PostgreSQL", "MySQL", "BigQuery (intro)"] },
    { domain: "Python Data Stack", tools: ["pandas", "NumPy", "Jupyter", "VS Code"] },
    { domain: "BI Tools", tools: ["Power BI Desktop & Service", "Power Query", "DAX"] },
    { domain: "Visualisation", tools: ["Tableau Public", "Matplotlib", "Seaborn"] },
    { domain: "Stats & Reporting", tools: ["Descriptive stats", "Hypothesis testing (intro)", "Storytelling"] },
    { domain: "Workflow", tools: ["Git basics", "Markdown", "Notion / Confluence for docs"] },
  ],
  productionArtifacts: [
    {
      title: "Sales Performance Dashboard (Power BI)",
      desc: "A live Power BI dashboard over a 5-year sales dataset — star-schema model, time-intelligence measures, RLS, mobile layout, and a one-page stakeholder narrative.",
    },
    {
      title: "Operations Analytics Notebook (Python + SQL)",
      desc: "An end-to-end Python notebook that pulls data from PostgreSQL, cleans and aggregates it, and exports both a Tableau dashboard and a 2-page executive summary.",
    },
  ],
  certifications: [
    {
      title: "Greenroots Data Analytics Certificate",
      desc: "Awarded on completion of all 4 projects and a final stakeholder review panel.",
    },
    {
      title: "Microsoft PL-300 (Power BI Data Analyst Associate) — recommended",
      desc: "Course covers 70%+ of PL-300 objectives; we include a 2-week PL-300 prep sprint.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — Foundations",
      title: "Excel & Statistics",
      summary:
        "Start where every analyst starts — spreadsheets and the questions they answer.",
      modules: [
        { title: "Excel for Analysts", desc: "Pivot tables, lookup family, XLOOKUP, power query intro." },
        { title: "Descriptive Stats", desc: "Mean, median, variance, distribution, outliers." },
        { title: "Storytelling with Numbers", desc: "KPI framing, narrative arcs, stakeholder-first design." },
        { title: "Working with Real Data", desc: "Messy CSVs, encoding, multi-sheet workbooks." },
      ],
    },
    {
      phase: "Phase 2 — SQL",
      title: "SQL for Analytics",
      summary:
        "The single most-tested skill in analyst interviews — taught to production depth.",
      modules: [
        { title: "Queries & Joins", desc: "SELECT, WHERE, JOINs, GROUP BY, HAVING." },
        { title: "Window Functions", desc: "ROW_NUMBER, RANK, LAG/LEAD, running totals." },
        { title: "CTEs & Subqueries", desc: "Reusable query structure, performance basics." },
        { title: "Data Modelling Intro", desc: "Fact vs dimension, star schema, granularity." },
      ],
    },
    {
      phase: "Phase 3 — Python",
      title: "Python with pandas",
      summary:
        "Add Python to your toolkit — for everything spreadsheets can't handle.",
      modules: [
        { title: "Python Foundations", desc: "Variables, types, lists, dicts, functions." },
        { title: "pandas Essentials", desc: "DataFrames, indexing, filtering, merge, groupby." },
        { title: "Cleaning & Reshaping", desc: "Missing data, dtype coercion, melt/pivot." },
        { title: "Light Visualisation", desc: "Matplotlib and Seaborn for quick explorations." },
      ],
    },
    {
      phase: "Phase 4 — BI",
      title: "Power BI & Tableau",
      summary:
        "Two tools, one mindset — design dashboards that survive a stakeholder review.",
      modules: [
        { title: "Power BI Desktop", desc: "Power Query ETL, modelling, relationships, DAX." },
        { title: "DAX Measures", desc: "Time intelligence, CALCULATE, filter context." },
        { title: "Tableau Fundamentals", desc: "Connections, calculated fields, dashboard layout." },
        { title: "Dashboard Design", desc: "Layout, contrast, mobile-first, RLS basics." },
      ],
    },
    {
      phase: "Phase 5 — Capstone",
      title: "Capstone Project & Panel",
      summary:
        "Pick a domain, ship a dashboard, defend it to a mock stakeholder panel.",
      modules: [
        { title: "Capstone Build", desc: "End-to-end dashboard with Python or SQL pipeline + Power BI/Tableau." },
        { title: "Documentation", desc: "One-pager, data dictionary, refresh plan." },
        { title: "Stakeholder Review", desc: "Mock panel with Greenroots mentors and industry guests." },
      ],
    },
  ],
  faqs: [
    {
      q: "I'm a complete beginner. Can I do this?",
      a: "Yes — this track is built for freshers. As long as you have basic Excel and high-school maths, we will take you from there. Our free career audit helps you confirm fit before you enrol.",
    },
    {
      q: "Do I need to know coding before joining?",
      a: "No. We teach Python from absolute zero. Most of our graduates had never written code before the program.",
    },
    {
      q: "Which tool should I specialise in — Power BI or Tableau?",
      a: "We teach both, then help you pick based on the market. Power BI has a larger fresher hiring footprint in India; Tableau is stronger in product companies and consulting.",
    },
    {
      q: "Will I get a real project or just toy exercises?",
      a: "You ship 4 real projects across sales, marketing, operations, and finance domains — using realistic datasets and stakeholder briefs. Your capstone is reviewed by industry mentors.",
    },
    {
      q: "What is the placement rate?",
      a: "Our placement track record is 100% for students who complete all projects and mock interviews — the median time to first offer is around 8–10 weeks after completion.",
    },
    {
      q: "Is this available in both Hyderabad and Bengaluru?",
      a: "Yes — classes are live online with weekly mentor sessions. You can attend in-person labs at our Hyderabad campus or our Bengaluru office (HSR Layout). Placements run in both cities.",
    },
    {
      q: "What if I miss a class?",
      a: "Every session is recorded and uploaded within 24 hours. You keep access for 12 months.",
    },
  ],
  accentColor: "#32D583",
};

/* ---------------------------- Data Science ---------------------------- */

const DATA_SCIENCE_COURSE: Course = {
  slug: "data-science",
  code: "GR-DS-2026",
  name: "Data Science & AI (DSP Track)",
  category: "Machine Learning & AI",
  duration: "3 months",
  weeklyHours: "14–16 hrs/week",
  learningMode: "Live + mentorship",
  batchSize: "10–14 students",
  primaryCareerPath: "Data Scientist · ML Engineer (Jr) · AI Analyst",
  strategicHeadline: "Go deep into ML, NLP, and deployment — with a portfolio that opens doors.",
  tagline: "Statistics → ML → Deep Learning → NLP → MLOps · capstone included",
  executiveSynopsis:
    "A 3-month, graduates-and-up track that takes you from statistics to end-to-end ML systems. You build supervised and unsupervised models, deep learning models with PyTorch, NLP pipelines with transformers, and a deployed capstone with a FastAPI service behind a Streamlit app. The program is intense — designed for graduates ready to commit to a serious career in data science and AI.",
  targetAudience: [
    "Graduates (B.E/B.Tech, B.Sc, B.Stat, M.Sc, MBA) with a quantitative bent.",
    "Working analysts or engineers who want to move into data science and ML.",
    "Career switchers with a strong maths/coding base who want a deep, hireable ML portfolio.",
  ],
  prerequisites: [
    "Solid Python — functions, classes, pandas, NumPy basics.",
    "Undergrad-level maths — calculus, linear algebra, probability.",
    "Some exposure to SQL and basic stats (we offer a 1-week primer if needed).",
    "8+ hours/week of focused study time outside live classes.",
  ],
  targetOutcome:
    "By the end of the program you can frame a real ML problem, build and tune models, evaluate them honestly, and ship a deployed inference service behind a small web app.",
  keyTakeaways: [
    "Frame ML problems — supervised vs unsupervised, regression vs classification, baselines first.",
    "Build supervised models with scikit-learn — linear/logistic, trees, boosting, ensembles.",
    "Train deep learning models in PyTorch — feed-forward, CNNs, RNNs/transformers.",
    "Run NLP pipelines with Hugging Face transformers — embeddings, classification, generation.",
    "Deploy an inference service with FastAPI + Streamlit and version it with MLflow.",
  ],
  toolingEcosystem: [
    { domain: "Python Data Stack", tools: ["Python", "pandas", "NumPy", "scikit-learn"] },
    { domain: "Deep Learning", tools: ["PyTorch", "Lightning (intro)", "Hugging Face Transformers"] },
    { domain: "NLP", tools: ["transformers", "datasets", "tokenizers", "spaCy"] },
    { domain: "Stats & Math", tools: ["SciPy", "statsmodels", "sympy (intro)"] },
    { domain: "Visualisation", tools: ["Matplotlib", "Seaborn", "Plotly"] },
    { domain: "MLOps", tools: ["MLflow", "FastAPI", "Streamlit", "Docker (intro)"] },
    { domain: "Workflow", tools: ["Jupyter", "VS Code", "Git", "Weights & Biases (intro)"] },
  ],
  productionArtifacts: [
    {
      title: "End-to-End ML Capstone (Deployed)",
      desc: "Frame → train → evaluate → deploy a model behind a FastAPI service with a Streamlit front-end, all versioned in MLflow and containerised for repeatable deploys.",
    },
    {
      title: "NLP Project (Transformers)",
      desc: "A transformer-based project — classification, named entity recognition, or summarisation — using Hugging Face, with a written technical blog post and a reproducible notebook.",
    },
  ],
  certifications: [
    {
      title: "Greenroots Data Science & AI Certificate",
      desc: "Awarded on completion of the capstone, the NLP project, and a final mock DS interview panel.",
    },
    {
      title: "Cloud ML Certification (AWS/Azure/GCP) — recommended",
      desc: "Curriculum aligns with the AWS ML Specialty and Azure DP-100; optional prep sprint included.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — Foundations",
      title: "Stats, Maths & EDA",
      summary:
        "Sharpen the maths every data scientist leans on — and the EDA discipline that makes models trustworthy.",
      modules: [
        { title: "Probability & Stats", desc: "Distributions, sampling, confidence intervals, hypothesis tests." },
        { title: "Linear Algebra", desc: "Vectors, matrices, eigenvalues, projections for ML." },
        { title: "Calculus Refresher", desc: "Gradients, optimisation intuition, partial derivatives." },
        { title: "EDA with pandas", desc: "Cleaning, profiling, correlation, outlier handling." },
      ],
    },
    {
      phase: "Phase 2 — Supervised ML",
      title: "Supervised Machine Learning",
      summary:
        "Train, tune, and evaluate supervised models the way a practitioner does — baselines first, then trees, then ensembles.",
      modules: [
        { title: "Linear & Logistic Regression", desc: "Loss functions, regularisation, interpretation." },
        { title: "Trees & Ensembles", desc: "Decision trees, random forests, gradient boosting." },
        { title: "Model Evaluation", desc: "CV, ROC/PR, calibration, leakage, baselines." },
        { title: "Feature Engineering", desc: "Encoding, scaling, target encoding, leakage prevention." },
      ],
    },
    {
      phase: "Phase 3 — Unsupervised & Deep Learning",
      title: "Unsupervised Learning & Neural Nets",
      summary:
        "Cluster, reduce, and then go deep — build neural networks from scratch in PyTorch.",
      modules: [
        { title: "Clustering & Dim Reduction", desc: "k-means, DBSCAN, PCA, t-SNE, UMAP." },
        { title: "Neural Networks", desc: "Forward/back prop, activations, PyTorch tensors & autograd." },
        { title: "CNNs", desc: "Convolutions, pooling, transfer learning for vision." },
        { title: "RNNs & Sequence Models", desc: "RNNs, LSTMs, attention intro, sequence tasks." },
      ],
    },
    {
      phase: "Phase 4 — NLP & Transformers",
      title: "NLP with Transformers",
      summary:
        "Modern NLP — embeddings, fine-tuning, and generation with Hugging Face transformers.",
      modules: [
        { title: "Text Preprocessing", desc: "Tokenisation, vocab, BPE, embeddings (word2vec to BERT)." },
        { title: "Transformers", desc: "Self-attention, encoder/decoder, BERT, GPT family." },
        { title: "Fine-tuning", desc: "Hugging Face Trainer, datasets, evaluation, ROUGE/BLEU." },
        { title: "Generative NLP", desc: "Prompting, RAG basics, small LLM fine-tune." },
      ],
    },
    {
      phase: "Phase 5 — MLOps & Capstone",
      title: "Deploy, Serve, Defend the Capstone",
      summary:
        "Ship a model behind a service, version it with MLflow, and present your capstone to a mock DS panel.",
      modules: [
        { title: "Model Serving", desc: "FastAPI inference, request validation, latency basics." },
        { title: "MLOps Basics", desc: "MLflow tracking, model registry, reproducible runs." },
        { title: "Capstone Build", desc: "End-to-end ML pipeline with deployment + Streamlit UI." },
        { title: "Mock DS Panel", desc: "Case framing, model defence, A/B testing scenarios." },
      ],
    },
  ],
  faqs: [
    {
      q: "Is this course for freshers?",
      a: "This is a graduates-and-up track. You need solid Python, undergrad maths, and 8+ hours/week of focused study time. If you are a fresher looking for your first IT role, our Data Analytics for Freshers track is the better fit.",
    },
    {
      q: "Do I need a GPU?",
      a: "No. We use Google Colab and Kaggle GPU kernels for the deep learning modules — both free. We also show you how to set up a small GPU instance on AWS if you want to go further.",
    },
    {
      q: "What capstone options do I have?",
      a: "You can choose from a curated list (churn prediction, demand forecasting, NLP classification, RAG over a knowledge base, computer vision) or propose your own. The capstone is reviewed by industry mentors.",
    },
    {
      q: "How much maths do I really need?",
      a: "Undergrad-level calculus, linear algebra, and probability. We run a 1-week primer before the program starts for anyone who needs a refresher.",
    },
    {
      q: "Will this help me crack data science interviews?",
      a: "Yes. The final two weeks include mock DS interview rounds — case framing, model defence, SQL/Python coding rounds, and a stats & ML fundamentals drill. Our mentors are working data scientists.",
    },
    {
      q: "Do you cover GenAI and LLMs?",
      a: "Yes — Phase 4 includes transformers, fine-tuning, prompt engineering, and an intro to RAG. We focus on the foundations that survive tool churn, not on chasing the latest library.",
    },
    {
      q: "Can I attend from Bengaluru or Hyderabad?",
      a: "Yes — classes are live online. In-person mentor sessions are available at our Hyderabad campus (Kukatpally) and our Bengaluru office (HSR Layout). Placement referrals run in both cities.",
    },
  ],
  accentColor: "#0878E8",
};

export const NEW_COURSES: Course[] = [
  DEVOPS_COURSE,
  DATA_ANALYTICS_COURSE,
  DATA_SCIENCE_COURSE,
];

export const COURSE_BY_SLUG: Record<string, Course> = Object.fromEntries(
  NEW_COURSES.map((c) => [c.slug, c])
);
