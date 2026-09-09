export const profile = {
  name: "Tommaso Calviello",
  status: "BME Ph.D. Student @ Johns Hopkins",
  photo: "profile.png",
  email: "calviet@rose-hulman.edu",
  phone: "+1 (812) 223-2449",
  github: "https://github.com/tommasocalviello",
  linkedin: "https://www.linkedin.com/in/tommasocalviello",
  cv: "#",
  bioLead:
    "ML researcher",
  bio: "PhD student at the Johns Hopkins University School of Medicine researching trustworthy machine learning for clinical settings. Previously a software engineer at Thalasso Therapeutics, where I spent over a year developing 3D reconstruction pipelines for medical devices under regulated design controls.",
}

export const stack: string[] = [
  "3D Computer Vision & Reconstruction",
  "Medical Image Segmentation (U-Net)",
  "Medical Imaging (DICOM / NIfTI)",
  "Biosignal Processing (EEG / PPG)",
  "Trustworthy ML & Calibration",
  "Sensor Fusion & Transformers",
  "Design Controls & V&V (IEC 62304 / ISO 13485)",
  "Python & C++",
  "Stereo Vision & Perception",
]

export type Milestone = {
  year: string
  title: string
  detail: string
  tag: string
}

export const milestones: Milestone[] = [
  {
    year: "August 2026",
    title: "Starting Ph.D. at Johns Hopkins University",
    detail: "Biomedical Engineering — AI in Medicine & Clinical Systems.",
    tag: "Academia",
  },
  {
    year: "May 2026",
    title: "Graduated from Rose-Hulman Institute of Technology",
    detail: "Graduated with a Double Major in Biomedical Engineering and Data Science and Artificial Intelligence ",
    tag: "Academia",
  },
  {
    year: "March 2026",
    title: "1st Place National Champions",
    detail: "NCAA Final Four Analytics Challenge.",
    tag: "Project",
  },
  {
    year: "October 2025",
    title: "Top 3 National Finalist (BMES × Medtronic)",
    detail: "NeuroScan.AI — multi-modal brain tumor segmentation.",
    tag: "Project",
  },
  {
    year: "February 2025",
    title: "Software Engineer at Thalasso Therapeutics",
    detail: "Working on 3D reconstruction pipelines for medical imaging",
    tag: "Industry",
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
  }
]

export type Presentation = {
  venue: string
  title: string
  year: string
  type: "Poster" | "Oral" | "Competition" | "Design Pitch"
}

export const presentations: Presentation[] = [
  {
    venue: "Society for Neuroscience (SfN)",
    title: "Machine Learning Strategies to Reduce the Effects of Auditory and Visual Distractors on a Steady-State Visual Evoked Potential Brain-Computer Interface Application",
    year: "2024",
    type: "Poster",
  },
  {
    venue: "BMES × Medtronic Design Competition",
    title: "NeuroScan.AI — multi-modal tumor segmentation",
    year: "2025",
    type: "Competition", // or "Oral"
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
