export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  color: string;
  category: string;
  detailedDescription: string;
  howItWorks: string[];
  whoItsFor: string[];
  benefits: string[];
}

export const serviceCategories = [
  {
    id: 'general',
    name: 'General Mental Health Services',
    description: 'Comprehensive support for common mental health concerns',
  },
  {
    id: 'relationships',
    name: 'Relationship Services',
    description: 'Strengthen bonds and improve communication in relationships',
  },
  {
    id: 'specialized',
    name: 'Specialized Support',
    description: 'Targeted counseling for unique life challenges',
  },
  {
    id: 'youth',
    name: 'Child & Adolescent Services',
    description: 'Age-appropriate mental health support for young people',
  },
];

export const servicesData: Service[] = [
  // General Mental Health Services
  {
    id: '1',
    slug: 'mental-health-counseling',
    title: 'Mental Health Counseling',
    shortDescription: 'Professional support for a wide range of mental health concerns including stress, anxiety, and depression.',
    iconName: 'Brain',
    color: 'from-blue-500 to-blue-600',
    category: 'general',
    detailedDescription: 'Our Mental Health Counseling services provide comprehensive support for individuals experiencing various psychological challenges. We use evidence-based therapeutic approaches to help you understand your thoughts, feelings, and behaviors. Whether you\'re dealing with stress, mood disorders, or simply seeking personal growth, our experienced therapists create a safe, non-judgmental space for healing and self-discovery.',
    howItWorks: [
      'Initial Assessment: We begin with a thorough evaluation to understand your unique situation, history, and goals.',
      'Personalized Treatment Plan: Together, we develop a customized therapeutic approach tailored to your needs.',
      'Regular Sessions: Weekly or bi-weekly sessions using evidence-based techniques like CBT, DBT, or psychodynamic therapy.',
      'Progress Monitoring: Continuous evaluation of your progress with adjustments to treatment as needed.',
      'Skill Building: Learn practical coping strategies and tools for long-term mental wellness.',
    ],
    whoItsFor: [
      'Adults experiencing depression, anxiety, or mood disorders',
      'Individuals dealing with life transitions or major stressors',
      'People seeking personal growth and self-improvement',
      'Those struggling with self-esteem or relationship issues',
      'Anyone looking for professional mental health support',
    ],
    benefits: [
      'Improved emotional regulation and coping skills',
      'Better understanding of thoughts and behavior patterns',
      'Reduced symptoms of anxiety and depression',
      'Enhanced self-awareness and personal insight',
      'Stronger relationships and communication skills',
      'Increased resilience and life satisfaction',
    ],
  },
  {
    id: '2',
    slug: 'anxiety-management',
    title: 'Anxiety Management',
    shortDescription: 'Evidence-based strategies to reduce anxiety symptoms and develop lasting coping mechanisms.',
    iconName: 'Lightbulb',
    color: 'from-yellow-500 to-orange-600',
    category: 'general',
    detailedDescription: 'Anxiety can be overwhelming and interfere with daily life. Our Anxiety Management program combines cognitive-behavioral techniques, mindfulness practices, and relaxation strategies to help you regain control. We address various forms of anxiety including generalized anxiety disorder, social anxiety, panic attacks, and phobias. Our approach is practical, empowering you with tools to manage anxiety in real-world situations.',
    howItWorks: [
      'Anxiety Assessment: Identify triggers, patterns, and the specific type of anxiety you experience.',
      'Cognitive Restructuring: Learn to recognize and challenge anxiety-provoking thoughts.',
      'Exposure Therapy: Gradual, controlled exposure to feared situations in a safe environment.',
      'Relaxation Techniques: Practice breathing exercises, progressive muscle relaxation, and mindfulness.',
      'Lifestyle Modifications: Develop healthy habits that support anxiety reduction.',
    ],
    whoItsFor: [
      'Individuals with generalized anxiety disorder or excessive worry',
      'People experiencing panic attacks or agoraphobia',
      'Those with social anxiety or performance fears',
      'Anyone dealing with specific phobias',
      'Individuals seeking to manage stress-related anxiety',
    ],
    benefits: [
      'Significant reduction in anxiety symptoms',
      'Practical tools for managing panic and worry',
      'Improved confidence in social and challenging situations',
      'Better sleep and physical health',
      'Enhanced ability to focus and make decisions',
      'Greater sense of control over your life',
    ],
  },
  {
    id: '3',
    slug: 'emotional-resilience-training',
    title: 'Emotional Resilience Training',
    shortDescription: 'Build mental toughness and adaptability to bounce back from life\'s challenges stronger than before.',
    iconName: 'Shield',
    color: 'from-green-500 to-emerald-600',
    category: 'general',
    detailedDescription: 'Emotional Resilience Training helps you develop the psychological strength to navigate adversity, adapt to change, and thrive under pressure. This proactive approach focuses on building mental fortitude before crises occur. You\'ll learn to regulate emotions effectively, maintain perspective during difficulties, and cultivate a growth mindset that transforms challenges into opportunities for development.',
    howItWorks: [
      'Resilience Assessment: Evaluate your current coping strategies and resilience factors.',
      'Strength Identification: Discover and leverage your personal strengths and resources.',
      'Cognitive Flexibility Training: Develop the ability to reframe situations and find solutions.',
      'Stress Inoculation: Practice managing increasingly challenging scenarios in a controlled setting.',
      'Building Support Systems: Strengthen relationships and create networks for difficult times.',
    ],
    whoItsFor: [
      'Professionals in high-stress careers',
      'Individuals preparing for major life changes',
      'People recovering from recent setbacks or trauma',
      'Anyone seeking to improve their mental toughness',
      'Those wanting to perform better under pressure',
    ],
    benefits: [
      'Enhanced ability to bounce back from setbacks',
      'Improved emotional regulation under stress',
      'Greater adaptability to change and uncertainty',
      'Increased confidence in handling challenges',
      'Better work-life balance and stress management',
      'More positive outlook and mental flexibility',
    ],
  },

  // Relationship Services
  {
    id: '4',
    slug: 'couples-therapy',
    title: 'Couples Therapy',
    shortDescription: 'Strengthen your relationship through improved communication, conflict resolution, and emotional connection.',
    iconName: 'Users',
    color: 'from-violet-700 to-indigo-800',
    category: 'relationships',
    detailedDescription: 'Our Couples Therapy helps partners navigate relationship challenges, improve communication, and deepen emotional intimacy. Whether you\'re facing conflicts, trust issues, or simply want to strengthen your bond, we provide a neutral, supportive environment. Using evidence-based approaches like Emotionally Focused Therapy (EFT) and the Gottman Method, we help couples understand patterns, heal wounds, and build lasting connection.',
    howItWorks: [
      'Initial Joint Session: Both partners meet with the therapist to discuss concerns and goals.',
      'Individual Sessions: Separate meetings to understand each partner\'s perspective.',
      'Pattern Identification: Recognize recurring conflict cycles and communication breakdowns.',
      'Skills Training: Learn active listening, empathy, and constructive conflict resolution.',
      'Relationship Strengthening: Build intimacy, trust, and positive interaction patterns.',
    ],
    whoItsFor: [
      'Couples experiencing frequent conflicts or communication problems',
      'Partners dealing with trust issues or infidelity recovery',
      'Relationships facing major life transitions',
      'Couples wanting to strengthen their bond',
      'Partners considering separation seeking clarity',
    ],
    benefits: [
      'Improved communication and understanding',
      'Effective conflict resolution skills',
      'Deeper emotional connection and intimacy',
      'Renewed trust and commitment',
      'Better problem-solving as a team',
      'Greater relationship satisfaction and stability',
    ],
  },
  {
    id: '5',
    slug: 'pre-post-marital-counseling',
    title: 'Pre/Post-Marital Counseling',
    shortDescription: 'Prepare for marriage or strengthen your early marriage with professional guidance and tools.',
    iconName: 'Heart',
    color: 'from-red-500 to-pink-600',
    category: 'relationships',
    detailedDescription: 'Pre-Marital Counseling prepares couples for a strong, healthy marriage by addressing important topics before tying the knot. Post-Marital Counseling helps newlyweds navigate the transition and challenges of married life. We discuss finances, family planning, conflict resolution, roles, and expectations, providing tools to build a solid foundation for your lifelong partnership.',
    howItWorks: [
      'Relationship Assessment: Evaluate compatibility, strengths, and potential areas of growth.',
      'Topic Exploration: Discuss finances, children, in-laws, intimacy, and life goals.',
      'Communication Skills: Practice expressing needs, active listening, and healthy conflict.',
      'Expectation Alignment: Ensure both partners share compatible visions for marriage.',
      'Creating Rituals: Establish positive patterns and traditions for your marriage.',
    ],
    whoItsFor: [
      'Engaged couples preparing for marriage',
      'Newlyweds in their first years of marriage',
      'Couples wanting to strengthen their foundation',
      'Partners blending families or navigating complex situations',
      'Those entering remarriage after divorce',
    ],
    benefits: [
      'Clearer understanding of each other\'s expectations',
      'Effective communication patterns from the start',
      'Proactive conflict resolution skills',
      'Aligned life goals and values',
      'Stronger foundation for lifelong partnership',
      'Reduced risk of future marital problems',
    ],
  },

  // Specialized Support
  {
    id: '6',
    slug: 'grief-loss-support',
    title: 'Grief & Loss Support',
    shortDescription: 'Compassionate counseling to help you process grief and find meaning after loss.',
    iconName: 'Flower2',
    color: 'from-purple-500 to-indigo-600',
    category: 'specialized',
    detailedDescription: 'Grief is a natural response to loss, but it can feel overwhelming and isolating. Our Grief & Loss Support provides a compassionate space to process your emotions, honor your loved one, and gradually heal. We understand that grief is unique to each person and doesn\'t follow a linear path. Whether you\'re grieving a death, divorce, job loss, or other significant change, we\'ll support you through each stage with empathy and expertise.',
    howItWorks: [
      'Safe Expression: Create a judgment-free space to express all emotions related to your loss.',
      'Grief Processing: Work through the stages of grief at your own pace.',
      'Meaning-Making: Find ways to honor memories and integrate loss into your life story.',
      'Coping Strategies: Develop healthy ways to manage grief triggers and difficult moments.',
      'Moving Forward: Build a new sense of normalcy while maintaining connection to what was lost.',
    ],
    whoItsFor: [
      'Individuals mourning the death of a loved one',
      'People processing divorce or relationship endings',
      'Those dealing with job loss or career changes',
      'Anyone experiencing anticipatory grief with terminal illness',
      'Individuals struggling with complicated or prolonged grief',
    ],
    benefits: [
      'Reduced feelings of isolation and loneliness',
      'Healthy processing of complex emotions',
      'Better understanding of the grief journey',
      'Practical coping tools for difficult days',
      'Renewed sense of purpose and hope',
      'Ability to honor the past while moving forward',
    ],
  },
  {
    id: '7',
    slug: 'fertility-counseling',
    title: 'Fertility Counseling',
    shortDescription: 'Emotional support and coping strategies for individuals and couples navigating fertility challenges.',
    iconName: 'Baby',
    color: 'from-cyan-500 to-blue-600',
    category: 'specialized',
    detailedDescription: 'Fertility challenges can be emotionally exhausting, bringing stress, grief, and strain on relationships. Our Fertility Counseling provides specialized support for individuals and couples dealing with infertility, pregnancy loss, IVF treatments, or adoption processes. We create a safe space to process the emotional toll, manage medical stress, and maintain hope while navigating this difficult journey.',
    howItWorks: [
      'Emotional Support: Process feelings of loss, frustration, anxiety, and grief related to fertility.',
      'Stress Management: Learn techniques to cope with the uncertainty and medical procedures.',
      'Relationship Care: Maintain connection and communication with your partner through challenges.',
      'Decision Support: Navigate difficult choices about treatments, adoption, or alternative paths.',
      'Self-Compassion: Develop kindness toward yourself amidst societal and self-imposed pressures.',
    ],
    whoItsFor: [
      'Couples experiencing infertility or recurrent pregnancy loss',
      'Individuals undergoing IVF or fertility treatments',
      'Those considering adoption or surrogacy',
      'People dealing with the stress of medical interventions',
      'Anyone struggling emotionally with family planning challenges',
    ],
    benefits: [
      'Reduced anxiety and depression related to fertility',
      'Improved communication with partners',
      'Better stress management during treatments',
      'Emotional resilience throughout the journey',
      'Clarity in decision-making about family building',
      'Supportive space to process loss and grief',
    ],
  },
  {
    id: '8',
    slug: 'oncology-counseling',
    title: 'Oncology Counseling',
    shortDescription: 'Specialized psychological support for individuals and families facing cancer diagnosis and treatment.',
    iconName: 'HeartPulse',
    color: 'from-teal-500 to-green-600',
    category: 'specialized',
    detailedDescription: 'A cancer diagnosis brings profound emotional, psychological, and practical challenges. Our Oncology Counseling provides specialized support to help patients and families cope with diagnosis, navigate treatment, manage fear and uncertainty, and maintain quality of life. We address the unique psychological needs that arise at every stage of the cancer journey, from initial diagnosis through treatment, recovery, or end-of-life care.',
    howItWorks: [
      'Emotional Processing: Work through shock, fear, anger, and grief related to diagnosis.',
      'Coping Strategies: Develop tools to manage treatment side effects and medical stress.',
      'Existential Support: Address questions of meaning, mortality, and life priorities.',
      'Family Communication: Help loved ones understand and support you effectively.',
      'Quality of Life: Focus on maintaining joy, purpose, and connection during treatment.',
    ],
    whoItsFor: [
      'Individuals recently diagnosed with cancer',
      'Patients undergoing active cancer treatment',
      'Cancer survivors dealing with post-treatment adjustment',
      'Family members and caregivers of cancer patients',
      'Those facing recurrence or advanced cancer',
    ],
    benefits: [
      'Reduced anxiety and depression during treatment',
      'Better emotional coping with medical procedures',
      'Improved communication with medical team and family',
      'Enhanced sense of control and empowerment',
      'Greater quality of life during difficult times',
      'Supportive space to process existential concerns',
    ],
  },

  // Child & Adolescent Services
  {
    id: '9',
    slug: 'child-counseling',
    title: 'Child Counseling',
    shortDescription: 'Age-appropriate therapy to help children process emotions, build resilience, and thrive.',
    iconName: 'SmilePlus',
    color: 'from-amber-500 to-yellow-600',
    category: 'youth',
    detailedDescription: 'Children face unique developmental and emotional challenges that they may not have the words to express. Our Child Counseling uses play therapy, art, and age-appropriate techniques to help children process emotions, build coping skills, and develop healthy self-esteem. We work closely with parents to support the whole family system and ensure consistent progress both in session and at home.',
    howItWorks: [
      'Parent Consultation: Understand concerns, developmental history, and family dynamics.',
      'Child Assessment: Use play and conversation to understand the child\'s perspective.',
      'Play-Based Therapy: Utilize toys, games, and creative activities as therapeutic tools.',
      'Skill Building: Teach emotional regulation, social skills, and problem-solving.',
      'Parent Guidance: Provide strategies for supporting your child\'s progress at home.',
    ],
    whoItsFor: [
      'Children experiencing behavioral problems or tantrums',
      'Kids dealing with anxiety, fears, or separation issues',
      'Children processing family changes like divorce',
      'Those struggling with school or social difficulties',
      'Children who have experienced trauma or loss',
    ],
    benefits: [
      'Improved emotional expression and regulation',
      'Better behavior and reduced tantrums',
      'Enhanced self-esteem and confidence',
      'Stronger social and friendship skills',
      'Healthier family relationships',
      'Resilience and coping strategies for challenges',
    ],
  },
  {
    id: '10',
    slug: 'adolescent-counseling',
    title: 'Adolescent Counseling',
    shortDescription: 'Teen-focused therapy addressing identity, peer pressure, mental health, and life transitions.',
    iconName: 'Sparkles',
    color: 'from-violet-500 to-purple-600',
    category: 'youth',
    detailedDescription: 'Adolescence is a time of profound change, identity development, and increasing pressures. Our Adolescent Counseling provides a confidential, non-judgmental space for teens to explore their feelings, navigate social challenges, and develop healthy coping mechanisms. We address common teen issues like academic stress, peer relationships, family conflict, identity questions, and mental health concerns while respecting their growing independence.',
    howItWorks: [
      'Building Trust: Create a safe, confidential space where teens feel heard and respected.',
      'Identifying Issues: Collaboratively explore challenges in school, relationships, and self-image.',
      'Developing Skills: Teach coping strategies, emotion regulation, and healthy communication.',
      'Family Support: Involve parents appropriately while respecting teen privacy and autonomy.',
      'Future Planning: Build confidence and tools for transitioning to adulthood.',
    ],
    whoItsFor: [
      'Teenagers experiencing anxiety or depression',
      'Adolescents struggling with peer pressure or bullying',
      'Teens dealing with identity and self-esteem issues',
      'Young people facing academic or social stress',
      'Adolescents navigating family conflict or major transitions',
    ],
    benefits: [
      'Improved mental health and reduced anxiety/depression',
      'Better communication with family and peers',
      'Enhanced self-awareness and confidence',
      'Effective stress management and coping skills',
      'Healthier relationships and boundaries',
      'Greater resilience and life skills for adulthood',
    ],
  },
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find(service => service.slug === slug);
}

export function getServicesByCategory(categoryId: string): Service[] {
  return servicesData.filter(service => service.category === categoryId);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}
