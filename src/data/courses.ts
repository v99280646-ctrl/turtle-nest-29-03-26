export interface CoursePackage {
  name: string;
  price: string;
  tag?: string;
  features: string[];
}

export interface CourseStructureStep {
  title: string;
  description: string;
  details?: string[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  price: string;
  description: string;
  longDescription: string;
  includes: string[];
  prerequisites: string[];
  courseStructure: CourseStructureStep[];
  durationNote: string;
  pricingNote?: string;
  image: string;
  packages: CoursePackage[];
}

export const courses: Course[] = [
  {
    id: "padi-scuba-diver",
    title: "PADI Scuba Diver",
    duration: "3 Days",
    level: "Beginner",
    price: "INR 22,000",
    description:
      "An entry-level certification for those who want to experience scuba diving. Qualifies you to dive under professional supervision to 12 metres.",
    longDescription:
      "The PADI Scuba Diver course is an entry level certification for those who want to experience scuba diving but may not have the time to complete the full Open Water Diver certification. It qualifies you to dive under professional supervision to a depth of 12 meters (40 feet), making it ideal for vacation divers or those wanting a quick start.",
    includes: [
      "PADI eLearning access",
      "Knowledge development sessions",
      "Confined water dives",
      "2 open water dives",
      "All equipment rental",
      "PADI Scuba Diver certification card",
    ],
    prerequisites: [
      "Minimum age: 10 years (Junior Scuba Diver), 15 years (full certification)",
      "Basic swimming ability required",
      "PADI Medical Statement must be completed",
      // "Physician clearance if any medical conditions",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description:
          "Learn the fundamentals of scuba diving, such as equipment use, dive planning, and underwater communication.",
      },
      {
        title: "Confined Water Dives",
        description:
          "Practice basic scuba skills in a pool or confined water setting.",
        details: [
          "Mask clearing",
          "Regulator recovery",
          "Buoyancy control",
          "Emergency procedures",
        ],
      },
      {
        title: "Open Water Dives",
        description:
          "Complete two open water dives under the supervision of a PADI Professional to apply your skills in real-world conditions. Dives are conducted in a lake, ocean, or similar open water environment.",
      },
    ],
    durationNote:
      "Typically takes 2–3 days. PADI eLearning allows you to complete the theory portion online before arriving at the dive center, saving time on-site.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-scuba-diver",
    packages: [
      {
        name: "Standard Package",
        price: "INR 22,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Complimentary fun dive at one of Lakshadweep’s pristine reef sites upon successful completion of the course.",
          "Equipment & Boat rental",
          "Lakshadweep permit",
          "Airport Pick and Drop",
          "Excludes",
          "Air tickets",
          "Accommodation",
          "Personal expenses",
        ],
      },
    ],
  },
  {
    id: "padi-open-water",
    title: "PADI Open Water Diver",
    duration: "4 Days",
    level: "Beginner",
    price: "INR 30,000",
    description:
      "The world's most popular scuba diving certification. Dive independently with a buddy to a maximum depth of 18 metres anywhere in the world.",
    longDescription:
      "The PADI Open Water Diver Course is the world's most popular scuba diving certification course. It teaches you the basic knowledge and skills needed to dive safely. Upon completion, you'll be certified to dive independently with a buddy to a maximum depth of 18 meters (60 feet).",
    includes: [
      "PADI eLearning access",
      "Knowledge development sessions",
      "Confined water dives",
      "4 open water dives",
      "All equipment rental",
      "PADI Open Water Diver certification card",
    ],
    prerequisites: [
      "Minimum age: 10 years (Junior OWD), 15 years (full certification)",
      "Swim 200m or 300m with mask, fins & snorkel",
      "Tread water for 10 minutes",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description:
          "Complete the theory portion via PADI eLearning or in-person sessions covering dive safety, equipment, and basic diving principles.",
      },
      {
        title: "Confined Water Dives",
        description:
          "Practice essential skills in a controlled environment, such as mask clearing and regulator recovery.",
      },
      {
        title: "Open Water Dives",
        description:
          "Perform four dives in open water to apply your skills under the supervision of a PADI Instructor.",
      },
    ],
    durationNote:
      "Typically takes 3–4 days. Completing the theory portion via PADI eLearning allows for faster progression in the practical segments.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-zero-to-hero",
    packages: [
      {
        name: "Course only",
        price: "INR 31,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Complimentary fun dive at one of Lakshadweep’s pristine reef sites upon successful completion of the course.",
          "Equipment & Boat rental",
          "Airport Pick and Drop",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Accommodation",
          "Personal expense",
          "Lakshadweep permit",
        ],
      },
      {
        name: "Course + Homestay",
        price: "INR 42,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Complimentary fun dive at one of Lakshadweep’s pristine reef sites upon successful completion of the course.",
          "Equipment & Boat rental",
          "Airport Pick and Drop",
          "Cozy AC Homestay double occupancy room",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Personal expense",
          "Lakshadweep permit",
        ],
      },
      {
        name: "Course + Resort Stay",
        price: "INR 47,000",
        tag: "Best Value",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Complimentary fun dive at one of Lakshadweep’s pristine reef sites upon successful completion of the course.",
          "Equipment & Boat rental",
          "Airport Pick and Drop",
          "Beachside resort AC deluxe double occupancy room",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Personal expense",
          "Lakshadweep permit",
        ],
      },
    ],
  },
  {
    id: "padi-advanced-open-water",
    title: "PADI Advanced Open Water Diver",
    duration: "2 Days",
    level: "Intermediate",
    price: "INR 27,000",
    description:
      "Enhance your diving skills and confidence with five adventure dives including mandatory Deep Diving and Underwater Navigation.",
    longDescription:
      "The PADI Advanced Open Water Diver Course enhances your diving skills and confidence by introducing you to new types of diving. This course focuses on practical experience and includes five adventure dives, two of which are mandatory: Deep Diving and Underwater Navigation.",
    includes: [
      "Boat dive (elective)",
      "Peak performance buoyancy (elective)",
      "Drift dive  (elective)",
      "Underwater Naturalist (elective)",
      "⁠Underwater Photography (elective)",
      "Dive against Debris (elective)",
      "Search and Recovery (elective)",
      "Shark conservation (AWARE) (elective)",
    ],
    prerequisites: [
      "Minimum age: 12 years (Junior AOWD), 15 years (full certification)",
      "Certified PADI Open Water Diver (or equivalent)",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description:
          "Study materials accessed through PADI eLearning or in-person sessions, covering dive planning, navigation, and deeper dives.",
      },
      {
        title: "Adventure Dives",
        description:
          "Complete five dives including the mandatory Deep Dive (depth as 30 meters) and Underwater Navigation Dive, plus three elective dives.",
        details: [
          "Deep Dive (depth as 30 meters) (mandatory)",
          "Navigation Dive (mandatory)",
          "Night Diving (elective)",
          "Wreck Diving (elective)",
          "Boat dive (elective)",
          "Peak performance buoyancy (elective)",
          "Drift dive  (elective)",
          "Underwater Naturalist (elective)",
          "⁠Underwater Photography (elective)",
          "Dive against Debris (elective)",
          "Search and Recovery (elective)",
          "Shark conservation (AWARE) (elective)",
        ],
      },
    ],
    durationNote:
      "Typically 2 days, with PADI eLearning facilitating quicker theory completion.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-advanced",
    packages: [
      {
        name: "Course only",
        price: "INR 27,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Complimentary fun dive at one of Lakshadweep’s pristine reef sites upon successful completion of the course.",
          "Equipment & Boat rental",
          "Airport Pick and Drop",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Accommodation",
          "Personal expense",
          "Lakshadweep permit",
        ],
      },
      {
        name: "Course + Homestay",
        price: "INR 37,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Complimentary fun dive at one of Lakshadweep’s pristine reef sites upon successful completion of the course.",
          "Equipment & Boat rental",
          "Airport Pick and Drop",
          "Cozy AC Homestay double occupancy room",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Personal expense",
          "Lakshadweep permit",
        ],
      },
      {
        name: "Course + Premium stay",
        price: "INR 43,000",
        tag: "Best Value",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Complimentary fun dive at one of Lakshadweep’s pristine reef sites upon successful completion of the course.",
          "Equipment & Boat rental",
          "Airport Pick and Drop",
          "Beachside resort AC deluxe double occupancy room",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Personal expense",
          "Lakshadweep permit",
        ],
      },
    ],
  },
  {
    id: "emergency-first-responder",
    title: "Emergency First Responder (EFR)",
    duration: "1 Day",
    level: "All Levels",
    price: "INR 10,000",
    description:
      "Learn to respond to medical emergencies with CPR and First Aid training. Essential for divers and non-divers alike.",
    longDescription:
      "The EFR course is designed to teach participants how to respond to medical emergencies and perform CPR and First Aid. This course is essential for divers and non-divers alike and is a prerequisite for the PADI Rescue Diver course.",
    includes: [
      "Primary care (CPR) training",
      "Secondary care (First Aid) training",
      "Rescue breathing techniques",
      "Hands-on practical skills",
      "EFR certification card",
      "EFR manual",
    ],
    prerequisites: [
      "No age or diving prerequisites",
      "Open to everyone, including non-divers",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description:
          "Theory completed via PADI eLearning, covering CPR, first aid, and emergency response techniques.",
      },
      {
        title: "Practical Skills",
        description:
          "Hands-on practice of CPR, rescue breathing, and first aid techniques in realistic scenarios.",
      },
    ],
    durationNote:
      "Typically completed in one day, with PADI eLearning allowing flexibility for theory study.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-efr",
    packages: [
      {
        name: "Standard Package",
        price: "INR 10,000",
        features: [
          "Includes",
          "CPR training",
          "First Aid training",
          "Rescue breathing",
          "EFR certification card",
          "EFR manual",
          "Hands-on practical sessions",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Accommodation",
          "Personal expense",
        ],
      },
    ],
  },
  {
    id: "rescue-diver",
    title: "PADI Rescue Diver",
    duration: "2 Days",
    level: "Intermediate",
    price: "INR 27,000",
    description:
      "Learn to recognise and manage diving emergencies. Focuses on self-rescue skills and assisting others in distress.",
    longDescription:
      "The Rescue Diver Course teaches divers how to recognise and manage diving emergencies. It focuses on self-rescue skills and assisting others in distress, making it vital for any serious diver.",
    includes: [
      "Self-rescue techniques",
      "Recognising diver stress",
      "Emergency management training",
      "Confined water training",
      "Open water rescue scenarios",
      "PADI Rescue Diver certification card",
    ],
    prerequisites: [
      "Minimum age: 12 years (Junior), 15 years (full certification)",
      "Certified PADI Advanced Open Water Diver (or equivalent)",
      "EFR certification within the last 24 months",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description:
          "Theory completed via PADI eLearning or in-person, covering dive safety, emergency procedures, and rescue techniques.",
      },
      {
        title: "Practical Exercises",
        description:
          "Participate in confined water training and open water rescue scenarios, including assisting distressed divers and managing emergencies.",
      },
    ],
    durationNote:
      "Typically 3–4 days, with PADI eLearning available to expedite the theoretical portion.",
    pricingNote: "Prices mentioned are without 18% GST.",
    image: "course-rescue",
    packages: [
      {
        name: "Course only",
        price: "INR 27,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Equipment & Boat rental",
          "Lakshadweep permit",
          "Airport Pick and Drop",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Accommodation",
          "Personal expense",
        ],
      },
      {
        name: "Course + Homestay",
        price: "INR 31,000",
        tag: "Popular",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Equipment & Boat rental",
          "Lakshadweep permit",
          "Airport Pick and Drop",
          "Cozy AC Homestay double occupancy room",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Personal expense",
        ],
      },
      {
        name: "Course + Premium stay",
        price: "INR 43,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives",
          "Equipment & Boat rental",
          "Lakshadweep permit",
          "Airport Pick and Drop",
          "Beachside resort AC deluxe double occupancy room",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Personal expense",
        ],
      },
    ],
  },
  {
    id: "divemaster",
    title: "PADI Divemaster",
    duration: "4-6 Weeks",
    level: "Professional",
    price: "INR 70,000",
    description:
      "The first professional level in scuba diving. Train to lead dives, assist instructors, and supervise dive activities.",
    longDescription:
      "The PADI Divemaster Course is the first professional level in scuba diving. It trains divers to lead dives, assist instructors, and supervise dive activities, focusing on leadership and dive management skills.",
    includes: [
      "Comprehensive dive theory",
      "Water skills assessments",
      "Practical training scenarios",
      "Assisting instructor experience",
      "Leading dives training",
      "PADI Divemaster certification",
    ],
    prerequisites: [
      "Minimum age: 18 years old",
      "Certified PADI Rescue Diver (or equivalent)",
      "EFR certification within the last 24 months",
      "At least 40 logged dives to start, 60 to complete",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Knowledge Development",
        description:
          "Theory completed via PADI eLearning or in-person sessions, covering dive theory, leadership skills, and dive management.",
      },
      {
        title: "Practical Application",
        description:
          "Involves assisting instructors, leading dives, and managing dive activities in real-world scenarios.",
      },
    ],
    durationNote:
      "Typically takes 4–6 weeks, with PADI eLearning available to streamline the theory portion. Divemaster internship also available — contact us for details.",
    pricingNote:
      "Price excludes Divemaster course material, Crew pack, and PADI exam fees — all payable directly to PADI. Prices mentioned are without 18% GST.",
    image: "course-divemaster",
    packages: [
      {
        name: "Course only",
        price: "INR 70,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives & Training",
          "Equipment & Boat rental",
          "Lakshadweep permit",
          "Airport Pick and Drop",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Accommodation",
          "Personal expense",
        ],
      },
    ],
  },
  {
    id: "zero-to-hero",
    title: "PADI Zero to Hero Program",
    duration: "8-12 Weeks",
    level: "Beginner to Professional",
    price: "INR 1,65,000",
    description:
      "A comprehensive program from complete beginner to PADI Divemaster. Combines all certifications into one continuous training journey.",
    longDescription:
      "The PADI Zero to Hero Course is a comprehensive program that prepares participants for a career in diving. It combines multiple PADI certifications — from Open Water to Divemaster — into one continuous training program.",
    includes: [
      "Open Water Diver certification",
      "Advanced Open Water Diver certification",
      "Emergency First Responder certification",
      "Rescue Diver certification",
      "Divemaster certification",
      "PADI eLearning for all courses",
      "All equipment rental",
    ],
    prerequisites: [
      "Minimum age: 18 years old",
      "Good health and physical fitness for diving",
      "PADI Medical Statement must be completed",
      "PADI Liability Release Form must be signed",
    ],
    courseStructure: [
      {
        title: "Open Water Diver",
        description:
          "Learn fundamental diving skills and earn your first certification to dive to 18 metres.",
      },
      {
        title: "Advanced Open Water Diver",
        description:
          "Expand your skills with five adventure dives including deep diving and navigation.",
      },
      {
        title: "Emergency First Responder",
        description:
          "Learn critical CPR and first aid skills essential for rescue training.",
      },
      {
        title: "Rescue Diver",
        description:
          "Master self-rescue and learn to manage diving emergencies.",
      },
      {
        title: "Divemaster",
        description:
          "Complete professional-level training to lead dives and assist instructors.",
      },
    ],
    durationNote:
      "Typically takes 8-12 weeks, depending on the training schedule. Divemaster internship also available — contact us for details.",
    pricingNote:
      "Price excludes Divemaster course material, Crew pack, and PADI exam fees — all payable directly to PADI. Prices mentioned are without 18% GST.",
    image: "course-zero-to-hero",
    packages: [
      {
        name: "Course only",
        price: "INR 1,65,000",
        features: [
          "Includes",
          "PADI E-learning",
          "All Course Dives & Training",
          "Equipment & Boat rental",
          "Lakshadweep permit",
          "Airport Pick and Drop",
          "Perquisites 40 logged dives to start Divemaster course",
          "Excludes",
          "Air tickets",
          "Bike rental",
          "Accommodation",
          "Personal expense",
        ],
      },
    ],
  },
];