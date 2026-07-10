import { Service, Book, FAQ, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "exec-coaching",
    title: "Executive & Personal Communication Coaching",
    shortDesc: "One-on-one coaching designed for executives, professionals, entrepreneurs, public figures, and emerging leaders.",
    fullDesc: "Our signature 1-on-1 private coaching. Designed for leaders who want to strengthen their communication, executive presence, media readiness, public speaking, and personal brand. We work directly with you over 8 custom sessions to refine your verbal patterns, pitch resonance, and staging posture, aligning your presence with highest tier expectations.",
    benefits: [
      "8 intensive 1-on-1 private video coaching sessions",
      "Custom speech architecture and pacing templates",
      "Vocal acoustics analysis and pitch training",
      "Executive posture, staging, and media-ready presence styling",
      "Lifetime access to exclusive V3 worksheet modules"
    ],
    pricing: "Contact for Pricing",
    iconName: "Mic"
  },
  {
    id: "corporate-training",
    title: "Corporate Training & Organizational Development",
    shortDesc: "Customized communication training for organizations to improve leadership, presentation, and workplace collaboration.",
    fullDesc: "Tailored corporate workshops designed to align leadership communication, optimize pitching power, elevate presentation skills, improve customer service, and strengthen internal collaboration. We audit your team's existing pitch decks and meeting habits, then install the V3 Method to project professional credibility.",
    benefits: [
      "Pre-training corporate communications audit",
      "Full-day or multi-day intensive team workshops",
      "Interactive speaking drills and feedback loops",
      "Data-to-storytelling translation frameworks",
      "Post-session progression audit and feedback report"
    ],
    pricing: "Contact for Pricing",
    iconName: "Users"
  },
  {
    id: "keynote-speaking",
    title: "Keynote Speaking & Conference Sessions",
    shortDesc: "Inspirational and practical keynote presentations, seminars, and panel discussions for your events.",
    fullDesc: "Invite Winfrey to deliver keynotes, facilitate panel discussions, or host seminars. She speaks on communication, leadership, personal development, public speaking, confidence, and influence, engaging audiences with practical takeaways that translate into immediately applicable professional skills.",
    benefits: [
      "High-impact, custom-themed keynote speech",
      "Interactive audience engagement exercises",
      "Actionable communication frameworks for attendees",
      "Live Q&A and panel moderation support",
      "Post-event resource sheets for your audience"
    ],
    pricing: "Contact for Pricing",
    iconName: "Presentation"
  },
  {
    id: "media-coaching",
    title: "Media & Presentation Coaching",
    shortDesc: "Specialized coaching for individuals preparing for TV, radio, podcasts, interviews, and public appearances.",
    fullDesc: "Prepare for high-stakes public appearances under pressure. Whether it is an upcoming broadcast interview, a podcast feature, a panel presentation, or a press conference, this coaching aligns your message delivery, vocal confidence, and body language to ensure you step out with absolute confidence.",
    benefits: [
      "Message framing and talking point architecture",
      "Media mock interviews and camera styling",
      "Body language congruence and expression control",
      "Vocal projection and microphone alignment",
      "Nervousness control and focus techniques"
    ],
    pricing: "Contact for Pricing",
    iconName: "Mic"
  },
  {
    id: "v3-workshop",
    title: "V3 Communications Workshop",
    shortDesc: "A practical, transformative communications training based on the proprietary V3 Method.",
    fullDesc: "A deep dive into the Verbal, Vocal, and Visual communications ecosystem. Equips individuals, professionals, leaders, entrepreneurs, and teams with the skills to communicate with clarity, confidence, credibility, and influence. Ideal for bootcamps, group intensives, or masterclasses.",
    benefits: [
      "Deep breakdown of Verbal, Vocal, and Visual pillars",
      "Interactive diagnostic assessments for participants",
      "Workbook modules and daily practice exercises",
      "Practical staging and group coaching drills",
      "Certificate of V3 Communications Completion"
    ],
    pricing: "Contact for Pricing",
    iconName: "Users"
  },
  {
    id: "speaking-bookings",
    title: "Speaking Engagement Bookings",
    shortDesc: "Invite Winfrey Agbelese to your organization, event, or conference as a speaker or facilitator.",
    fullDesc: "Book Winfrey for corporate events, summits, schools, and conferences. We tailor the session's themes and structure to align perfectly with your organizational goals, ensuring we address your specific audience demographics.",
    benefits: [
      "Bespoke training alignment consultations",
      "Flexible virtual or on-site delivery options",
      "Post-session engagement resources and guides",
      "Pre-event promotional support content",
      "Professional collaboration and coordination"
    ],
    pricing: "Contact for Pricing",
    iconName: "Presentation"
  },
  {
    id: "v3-community",
    title: "The V3 Learning Community",
    shortDesc: "Ongoing communication tips, mentorship opportunities, exclusive content, events, and resources.",
    fullDesc: "Join a high-value community committed to continuous personal and professional development. Gain access to weekly speaking tips, peer mastermind discussions, guest sessions, resources, and live monthly reviews led by Winfrey.",
    benefits: [
      "Live monthly group feedback and review audits",
      "Exclusive V3 video library and templates database",
      "Peer-to-peer mastermind networking groups",
      "Weekly audio tips and speaking challenges",
      "Priority access to new book updates and discounts"
    ],
    pricing: "Contact to Join",
    iconName: "Users"
  }
];

export const BOOKS: Book[] = [
  {
    id: "verbal-devotional",
    title: "The V3 Devotional: Verbal Communication",
    subtitle: "30 Days of Cognitive & Structural Speech Mastery",
    description: "Your daily guide to mastering speech architecture. Purge filler words, structure complex arguments in seconds, and learn to package your intellect into clear, powerful statements.",
    highlights: [
      "30 daily exercises to expand active vocabulary",
      "The 'Pyramid Principle' application for business reports",
      "5 frameworks to eliminate filler words (um, like, basically)",
      "Daily practice logs and conversational prompts"
    ],
    preorderPrice: 8000,
    normalPrice: 10000,
    paystackLink: "https://paystack.com/pay/v3-verbal",
    pillar: "Verbal",
    whatsappMessage: "Hi Winfrey! I would love to pre-order 'The V3 Devotional: Verbal Communication'. Please share the details for payment."
  },
  {
    id: "vocal-devotional",
    title: "The V3 Devotional: Vocal Communication",
    subtitle: "30 Days to Build a Resonant, Authoritative Speaking Voice",
    description: "The complete manual for the acoustics of speech. Cultivate diaphragmatic breathing, find your optimal vocal pitch, and use strategic pauses to command respect.",
    highlights: [
      "30 daily vocal acoustics drills and exercises",
      "Diaphragmatic breath control coaching for stamina",
      "Pacing guides and tone styling for executive presence",
      "Vocal hygiene advice to avoid hoarseness or strain"
    ],
    preorderPrice: 8000,
    normalPrice: 10000,
    paystackLink: "https://paystack.com/pay/v3-vocal",
    pillar: "Vocal",
    whatsappMessage: "Hi Winfrey! I would love to pre-order 'The V3 Devotional: Vocal Communication'. Please share the details for payment."
  },
  {
    id: "visual-devotional",
    title: "The V3 Devotional: Visual Communication",
    subtitle: "30 Days to Style Your Posture & Stage Presence",
    description: "Master the silent signals of communication. Align your body language, optimize your zoom setup, and curate a professional wardrobe that speaks before you do.",
    highlights: [
      "30 daily challenges for dynamic posture and gestures",
      "Camera framing, lighting, and visual backgrounds for virtual meetings",
      "Micro-expressions control and authentic smile anchoring",
      "Wardrobe, color, and fit principles for professional impact"
    ],
    preorderPrice: 8000,
    normalPrice: 10000,
    paystackLink: "https://paystack.com/pay/v3-visual",
    pillar: "Visual",
    whatsappMessage: "Hi Winfrey! I would love to pre-order 'The V3 Devotional: Visual Communication'. Please share the details for payment."
  },
  {
    id: "v3-bundle",
    title: "The Ultimate V3 Trilogy Bundle",
    subtitle: "The Complete Verbal, Vocal, and Visual System",
    description: "Get all three volumes of the V3 Devotional Series at an exclusive pre-order discount rate. Your 90-day comprehensive path to absolute communication supremacy.",
    highlights: [
      "All 3 complete volumes (Verbal, Vocal, and Visual)",
      "Exclusive access to the V3 Video Companion Library",
      "Printable progress tracking matrix and assessment rubric",
      "Priority invitation to Winfrey's live monthly group audits"
    ],
    preorderPrice: 20000,
    normalPrice: 25000,
    paystackLink: "https://paystack.com/pay/v3-trilogy-bundle",
    pillar: "Bundle",
    whatsappMessage: "Hi Winfrey! I would love to pre-order 'The Ultimate V3 Trilogy Bundle'. Please share the details for payment."
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What is the V3 Method of Communication?",
    answer: "The V3 Method is a proprietary communication framework created by Winfrey Agbelese. It breaks down effective speech into three essential components: Verbal (the cognitive structure and words you select), Vocal (the acoustics, breathing, pitch, and projection of your voice), and Visual (the physical presence, posture, attire, and non-verbal signals you display).",
    category: "V3 Method"
  },
  {
    question: "Are the V3 Devotional books physical copies or digital?",
    answer: "During the current pre-order phase, you are reserving the digital (PDF/ePub) versions of the devotions. This lets you access the files immediately upon release on any device. Physical formats will be made available for order later in the year.",
    category: "Pre-order"
  },
  {
    question: "How long does a typical 1-on-1 executive coaching program last?",
    answer: "Winfrey's private executive presence curriculum runs for 8 weeks (one intensive 90-minute session per week) with continuous WhatsApp voice note monitoring, posture reviews, and presentation editing throughout the program.",
    category: "Coaching"
  },
  {
    question: "How can I purchase with Paystack?",
    answer: "You can click on the 'Buy with Paystack' option on the book catalog. It will direct you to a secure checkout portal. Once the payment is verified, your order status is registered. If you prefer manual bank transfers, click 'Order on WhatsApp' to complete your order manually.",
    category: "Pre-order"
  },
  {
    question: "Who is Winfrey Agbelese (The V3 Fixer)?",
    answer: "Winfrey Agbelese is a premium communications architect, public speaking expert, and corporate facilitator. Popularly known as 'The V3 Fixer', she helps corporate executives, public figures, and industry leaders align their presentation styles with their professional ambitions.",
    category: "General"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Adebayo Alao",
    role: "Chief Medical Director",
    company: "Lagoon Health Services",
    text: "Working with Winfrey completely shifted how I present our healthcare initiatives to international donors. I used to rely on complex, jargon-heavy explanations. She helped me restructure my messaging (Verbal) and project confidence under pressure (Visual). She is indeed a fixer!",
    category: "Coaching",
    rating: 5
  },
  {
    name: "Funmi Oyelade",
    role: "VP of Product",
    company: "Vantage Fintech",
    text: "The V3 Method was exactly what our team needed before our Series A pitch. Winfrey restructured our visual slide cues and trained our engineers to explain technical solutions without losing the audience's attention. Our team's voice projection has completely transformed.",
    category: "Corporate",
    rating: 5
  },
  {
    name: "Emeka Nwosu",
    role: "Senior Partner",
    company: "Aegis Legal Chambers",
    text: "I booked the speech prep coaching for a critical international panel session. Winfrey's focus on vocal pacing and strategic silence was a game-changer. I felt in complete command of the room.",
    category: "Coaching",
    rating: 5
  }
];
