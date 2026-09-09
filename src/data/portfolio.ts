export const profile = {
  name: "Tommaso Calviello",
  status: "Incoming Ph.D. Student @ Johns Hopkins BME",
  photo: "profile.png",
  email: "calviet@rose-hulman.edu",
  phone: "+1 (812) 223-2449",
  github: "https://github.com/tommasocalviello",
  linkedin: "https://www.linkedin.com/in/tommasocalviello",
  cv: "#",
  bioLead:
    "Biomedical engineer and data scientist building clinical AI systems that reach the bedside.",
  bio: "Double major in Biomedical Engineering & Data Science with a 4.0 GPA from Rose-Hulman Institute of Technology, and an incoming BME Ph.D. student at Johns Hopkins. My work sits at the intersection of AI in Medicine, Medical Imaging, and AI-driven clinical systems — from tumor segmentation to cuffless blood-pressure estimation and autonomous navigation.",
}

export const stack: string[] = [
  "PyTorch",
  "Transformers",
  "U-Net",
  "Medical Imaging · DICOM/NIfTI",
  "Biosignal Processing",
  "Embedded Systems",
  "CNNs",
  "Sensor Fusion",
  "Gradient Boosting",
  "Stereo Vision",
]

export type Milestone = {
  year: string
  title: string
  detail: string
  tag: string
}

export const milestones: Milestone[] = [
  {
    year: "Fall 2026",
    title: "Starting Ph.D. at Johns Hopkins University",
    detail: "Biomedical Engineering — AI in Medicine & Clinical Systems.",
    tag: "Ph.D.",
  },
  {
    year: "2026",
    title: "1st Place National Champions",
    detail: "NCAA Final Four Analytics Challenge.",
    tag: "Champion",
  },
  {
    year: "2026",
    title: "Mira Awards Finalist",
    detail: "Recognized for Resper Care — cuffless blood pressure estimation.",
    tag: "Finalist",
  },
  {
    year: "2025",
    title: "Top 3 National Finalist (BMES × Medtronic)",
    detail: "NeuroScan.AI — multi-modal brain tumor segmentation.",
    tag: "Top 3",
  },
  {
    year: "2025",
    title: "Top 8 National Finalist (NASA)",
    detail: "Lunar Autonomy Challenge — ML hazard avoidance.",
    tag: "Top 8",
  },
  {
    year: "2024",
    title: "Society for Neuroscience (SfN)",
    detail: "BCI-SSVEP research presentation.",
    tag: "Presentation",
  },
]

export type Metric = { label: string; value: string }
export type Project = {
  name: string
  category: string
  problem: string
  solution: string
  metrics: Metric[]
  badges: string[]
}

export const projects: Project[] = [
  {
    name: "NeuroScan.AI",
    category: "Medical Imaging",
    problem:
      "Manual brain tumor delineation across MRI modalities is slow, subjective, and hard to reproduce.",
    solution:
      "Multi-modal U-Net & CNN segmentation pipeline fusing structural MRI sequences for automated, reproducible tumor boundaries.",
    metrics: [
      { label: "Accuracy", value: "93%" },
      { label: "Dice Score", value: "0.86" },
    ],
    badges: ["U-Net", "CNN", "Multi-modal", "PyTorch"],
  },
  {
    name: "Resper Care",
    category: "Biosignal Processing",
    problem:
      "Continuous blood pressure monitoring typically requires cuffs — uncomfortable and impractical for daily use.",
    solution:
      "Multi-head transformer architecture for cuffless blood pressure estimation from PPG signals with sensor fusion.",
    metrics: [
      { label: "Signal", value: "PPG" },
      { label: "Arch", value: "Transformer" },
    ],
    badges: ["Transformer", "Sensor Fusion", "PPG", "Wearables"],
  },
  {
    name: "NCAA Tournament Analytics Engine",
    category: "Applied ML",
    problem:
      "Predicting tournament outcomes demands modeling non-linear team dynamics under high variance.",
    solution:
      "Multi-stage Gradient Boosting Machine with a custom 65% correlation \u201cChampionship Caliber\u201d metric driving bracket selection.",
    metrics: [
      { label: "Correlation", value: "65%" },
      { label: "Result", value: "1st Place" },
    ],
    badges: ["GBM", "Feature Eng.", "Sports Analytics"],
  },
  {
    name: "NASA Lunar Autonomy Challenge",
    category: "Autonomy & Robotics",
    problem:
      "Unstructured lunar terrain offers no GPS and unreliable landmarks for safe rover navigation.",
    solution:
      "Stereo-vision ML hazard avoidance system for real-time terrain assessment and path planning in unstructured environments.",
    metrics: [
      { label: "Vision", value: "Stereo" },
      { label: "Result", value: "Top 8" },
    ],
    badges: ["Stereo Vision", "Path Planning", "Perception"],
  },
]

export type Research = {
  lab: string
  role: string
  focus: string
  tags: string[]
}

export const research: Research[] = [
  {
    lab: "Dr. Chiu BCI Lab",
    role: "Brain–Computer Interfaces",
    focus:
      "SSVEP-based BCI decoding and signal classification for real-time neural control.",
    tags: ["CCA / TRCA", "SSVEP", "EEG"],
  },
  {
    lab: "Dr. Izquierdo Lab",
    role: "Adaptive Neural Networks",
    focus:
      "Evolutionary and meta-learning approaches to adaptive network architectures.",
    tags: ["Evolutionary Algorithms", "Meta-Learning"],
  },
  {
    lab: "Thalasso Therapeutics",
    role: "3D Reconstruction",
    focus:
      "3D reconstruction pipelines for medical devices under regulated design controls.",
    tags: ["3D Reconstruction", "ISO 13485", "FDA 510(k)"],
  },
]

export type Presentation = {
  venue: string
  title: string
  year: string
}

export const presentations: Presentation[] = [
  {
    venue: "Society for Neuroscience (SfN)",
    title: "BCI-SSVEP decoding for neural interfaces",
    year: "2024",
  },
  {
    venue: "BMES × Medtronic",
    title: "NeuroScan.AI — multi-modal tumor segmentation",
    year: "2025",
  },
  {
    venue: "Rocky Mountain Bioengineering Symposium (60th)",
    title: "MATLAB interactive learning tool for K–12 BME education",
    year: "2024",
  },
]

export type Award = {
  year: string
  name: string
  detail: string
}

export const awards: Award[] = [
  {
    year: "2026",
    name: "CSC Academic All-American — Second Team",
    detail: "National recognition for combined athletic and academic excellence.",
  },
  {
    year: "2026",
    name: "Samuel F. Hulbert Outstanding BME Graduate Award",
    detail: "Top graduating biomedical engineer, Rose-Hulman.",
  },
  {
    year: "2025",
    name: "Carl Wischmeyer Medal",
    detail: "Awarded for outstanding academic achievement.",
  },
  {
    year: "2024",
    name: "Paul N. Bogart Prize",
    detail: "Recognizing excellence in engineering coursework.",
  },
  {
    year: "2023",
    name: "Heminway Bronze Medal",
    detail: "Awarded to the top-ranked student in the class.",
  },
]

export type Involvement = {
  role: string
  org: string
}

export const involvement: Involvement[] = [
  { role: "Vice President", org: "Tau Beta Pi Engineering Honor Society" },
  { role: "Executive Board", org: "Alpha Tau Omega" },
  { role: "Team Captain", org: "Rose-Hulman Varsity Swimming & Diving" },
  { role: "Teaching Assistant", org: "Deep Learning · Database Systems · Diff. Eq." },
]
