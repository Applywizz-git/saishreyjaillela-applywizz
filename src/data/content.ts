export const content = {
  // Basic identity
  name: "Sai Shreya Jillella",
  title: "Data Analyst & BI Engineer",
  location: "Syracuse, New York, USA",
  oneLiner: "I build reliable data pipelines and actionable BI that drive decisions fast.",
  email: "jsaishreya01@gmail.com",
  phone: "",

  // Socials (use only what exists; leave others empty)
  socials: {
    github: "https://github.com/Jshreya-12",
    linkedin: "https://www.linkedin.com/in/jillellasaishreya/",
    x: ""
  },

  // Hero/Brand
  profileImage: "/profileimage.jpeg",
  ctaPrimary: { label: "View Projects", href: "#projects" },
  // ctaSecondary: { label: "Get in Touch", href: "#contact" },

  // About (≈100 words)
  about: `Data Analyst with 2+ years of experience across Python, SQL, and modern BI stacks (Power BI, Tableau), focused on automated ETL, clean modeling, and KPI storytelling. I streamline messy data into consistent pipelines, ship dashboards that reduce manual reporting, and partner with stakeholders to expose the metrics that matter. Comfortable spanning Azure/AWS analytics, I care about accuracy, speed, and clarity—so leaders can act with confidence.`,

  // Experience (3–5 entries; include impact metrics)
  experience: [
    {
      company: "Reality AI",
      role: "Gen AI & Data Analytics Intern",
      start: "Feb 2025",
      end: "Present",
      location: "Remote",
      highlights: [
        "Built AI-powered Power BI dashboards with Python integration, improving student performance insights by 20%.",
        "Streamlined ETL using Python + SQL for training/inference datasets, cutting manual handling by 30%.",
        "Analyzed model outputs on large educational datasets, increasing prediction accuracy by 15%.",
        "Shipped KPI monitoring and feature-engineering workflows, accelerating model evaluation by 40% with ~99% data quality."
      ]
    },
    {
      company: "SUNY Polytechnic Institute",
      role: "Data Analyst Assistant",
      start: "Sep 2023",
      end: "Dec 2024",
      location: "Utica, NY",
      highlights: [
        "Curated/validated research datasets (Python, SQL), reducing reporting errors by 25%.",
        "Built interactive Power BI/Tableau dashboards, improving decision efficiency by 20%.",
        "Ran predictive/statistical analyses to surface trends that boosted engagement by 15%.",
        "Automated aggregation/reporting pipelines (Python, SQL, Excel Macros), cutting manual effort by 35%."
      ]
    },
    {
      company: "Hitachi",
      role: "Data Analyst",
      start: "May 2022",
      end: "Dec 2022",
      location: "New York, NY",
      highlights: [
        "Transformed large operational/financial datasets (SQL, Python), enhancing reporting accuracy by 30%.",
        "Delivered Power BI/Tableau dashboards to consolidate KPIs, shortening manual reporting time by 40%.",
        "Built variance forecasting in Excel/Python, reducing budget deviations by 15%.",
        "Engineered VBA/Macros workflows to eliminate recurring errors and speed delivery by 35%."
      ]
    }
  ],

  // Skills (group by category; include % for custom meters)
  skills: {
    frontend: [
      { name: "Power BI", percent: 90, meter: "honeycomb" },
      { name: "Tableau", percent: 85, meter: "shard" },
      { name: "Looker/Studio", percent: 70, meter: "glyph" }
    ],
    backend: [
      { name: "Python (Pandas/NumPy/Sklearn)", percent: 88, meter: "glyph" },
      { name: "SQL (Postgres/MySQL/Snowflake)", percent: 90, meter: "honeycomb" },
      { name: "R", percent: 60, meter: "shard" }
    ],
    cloud: [
      { name: "Azure Synapse", percent: 70, meter: "shard" },
      { name: "AWS Analytics (Redshift/Athena/QuickSight)", percent: 65, meter: "honeycomb" },
      { name: "Snowflake", percent: 70, meter: "glyph" },
      { name: "Databricks", percent: 60, meter: "honeycomb" }
    ],
    tools: [
      { name: "Excel (Power Query/Macros)", percent: 92, meter: "glyph" },
      { name: "Git/Jupyter", percent: 85, meter: "shard" }
    ]
  },

  // Projects (4–8 items; include impact metrics where present)
  projects: [
    {
      title: "AI Code Documentation Assistant",
      short_desc: "RAG-based chatbot to retrieve technical docs via natural language.",
      tech: ["Python", "NLP", "Neo4j"],
      link_demo: "",
      link_code: "",
      impact_metric: "Reduced manual doc lookup time by ~50%."
    },
    {
      title: "Software Cost Estimation",
      short_desc: "Random Forest forecasting tool to estimate project costs and risks.",
      tech: ["Python", "Excel Dashboards"],
      link_demo: "",
      link_code: "",
      impact_metric: "Increased cost prediction reliability by ~30%."
    },
    {
      title: "Model Comparison & Performance Review",
      short_desc: "Benchmarked YOLOv7 vs Faster R-CNN for real-time detection.",
      tech: ["Python", "Computer Vision"],
      link_demo: "",
      link_code: "",
      impact_metric: "Recommended YOLOv7 for balance of speed/accuracy; documented deployment guidance."
    }
  ],

  // Education
  // education: {
  //   degree: "M.S., Computer & Information Science",
  //   school: "SUNY Polytechnic Institute",
  //   years: "Jan 2023 – Dec 2024",
  //   brief: "Graduate focus on data analytics, modeling, and scalable pipelines."
  // },

  // In your content.ts file, update the education section:
education: [
  {
    degree: "M.S., Computer & Information Science",
    school: "SUNY Polytechnic Institute",
    years: "Jan 2023 – Dec 2024",
    brief: "Graduate focus on data analytics, modeling, and scalable pipelines."
  },
  {
    degree: "SRI INDU COLLEGE OF ENGINEERING & TECHNOLOGY",
    school: "Jawaharlal Nehru Technological University",
    years: " 2018 – 2022",
    brief: "Undergraduate studies focused on computer science fundamentals, algorithms, and software development."
  }
],
  

  // Certifications (subset of notable items)
  // certifications: [
  //   { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", year: "2024", credential_id: "" },
  //   { name: "Power BI (LUDIFU) - Business Analytics Certification", issuer: "LUDIFU", year: "2024", credential_id: "" },
  //   { name: "Accenture North America Data Analytics Simulation", issuer: "Forage", year: "2024", credential_id: "" }
  // ],

  certifications: [
  { name: "Accenture North America Data Analytics Simulation - Virtual Program", issuer: "Forage", year: "2024", credential_id: "" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", year: "2024", credential_id: "" },
  { name: "Power BI (LUDIFU) - Business Analytics Certification", issuer: "LUDIFU", year: "2024", credential_id: "" },
  { name: "Data Analytics - Simplilearn Online Program", issuer: "Simplilearn", year: "2024", credential_id: "" },
  { name: "Hackathon Participant - Data Science Society, SUNY Polytechnic", issuer: "SUNY Polytechnic", year: "2023", credential_id: "" },
  { name: "Volunteer - Techfest Hyderabad, organized student coding competitions", issuer: "Techfest Hyderabad", year: "2023", credential_id: "" },
  { name: "Completed 13 Salesforce Trailhead badges (3,350 points)", issuer: "Salesforce Trailhead", year: "2024", credential_id: "" }
]
,

  // Contact (form should submit here via lib/email.ts mock)
  contact: {
    email: "jsaishreya01@gmail.com",
    enablePhone: true
  }
};
