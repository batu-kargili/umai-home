export interface PolicyItem {
  /** Stable policy code, e.g. "KVKK-01". */
  code: string;
  /** Short English title. */
  title: string;
  /** Plain-English description of what the policy does. */
  description: string;
  /** Policy mechanism, e.g. "Heuristic (DLP)" or "Context-Aware". */
  type: string;
  /** Runtime phase(s) the policy runs in. */
  phase: string;
  /** Decision action(s) the policy can return. */
  action: string;
  /** Regulatory or standard basis the policy maps to. */
  basis: string;
  /** Marks EU AI Act policies flagged as critical-infrastructure / high-risk. */
  highRisk?: boolean;
}

export interface PolicyFramework {
  /** URL slug used for the detail route. */
  slug: string;
  /** Short display name, e.g. "KVKK". */
  name: string;
  /** Full regulation name. */
  fullName: string;
  /** The instrument this maps to, e.g. "Law No. 6698". */
  regulation: string;
  /** Path to the framework logo in /public. */
  logo: string;
  /** Intrinsic logo width (for next/image). */
  logoWidth: number;
  /** Intrinsic logo height (for next/image). */
  logoHeight: number;
  /** Accent color used for the framework card and detail header. */
  accent: string;
  /** One-line summary shown on the library card. */
  summary: string;
  /** Longer description shown at the top of the detail page. */
  description: string;
  /** Bullet points describing the coverage focus. */
  highlights: string[];
  /** The policies in this framework. */
  policies: PolicyItem[];
}

/**
 * UMAI ready-made guardrail policy packages.
 *
 * Every policy below runs on the UMAI AI Engine and is expressed with the same
 * Heuristic and Context-Aware policy types operators author in Control Center.
 * Policies evaluate in two phases: PRE_LLM (before the user input reaches the
 * model) and POST_LLM (before the model output returns to the user). Every
 * decision is written to the hash-chained audit ledger and can be exported as
 * compliance evidence.
 */
export const POLICY_FRAMEWORKS: PolicyFramework[] = [
  {
    slug: "kvkk",
    name: "KVKK",
    fullName: "Turkish Personal Data Protection Law",
    regulation: "Law No. 6698 (amended by Law No. 7499)",
    logo: "/assets/kvkk-logo.png",
    logoWidth: 1486,
    logoHeight: 400,
    accent: "#FB7185",
    summary:
      "Protects personal data and special-category data in AI interactions under Türkiye's KVKK regime, including the 2024 Law No. 7499 amendments and the Board's AI-specific guidance.",
    description:
      "Under Law No. 6698 and its secondary legislation, these policies keep personal data and special-category personal data safe across AI interactions. Coverage reflects the 2024 Law No. 7499 amendments (special-category grounds, cross-border transfer, the administrative-fine regime) and the Board's AI guidance: the AI Recommendations (2025), the Generative AI Guide (Nov 2025), the workplace generative-AI announcement (Mar 2026) and the Agentic AI document (2026).",
    highlights: [
      "Turkish identifiers: TCKN, IBAN, phone, email, address with validation and masking.",
      "Full special-category coverage under Art. 6 (health, biometric, belief, and more).",
      "Cross-border transfer, standard-contract and no-training routing controls.",
      "72-hour breach notification, retention/erasure, and audit-trail evidence.",
    ],
    policies: [
      {
        code: "KVKK-01",
        title: "Turkish National ID (TCKN) Protection",
        description:
          "Detects the 11-digit Turkish national ID (TCKN) pattern in prompts and model outputs using algorithmic validation. A checksum verification avoids collisions with random 11-digit numbers; single detections are masked, bulk detections are blocked.",
        type: "Heuristic (DLP)",
        phase: "PRE_LLM + POST_LLM",
        action: "Redaction / BLOCK",
        basis: "KVKK Art. 4, Art. 12",
      },
      {
        code: "KVKK-02",
        title: "Full Name Detection",
        description:
          "Uses Turkish named-entity recognition (NER) to detect real persons' full names in a context-aware way. Public figures are distinguished from data-subject individuals; customer and employee names are masked before being sent to external models.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "Redaction / FLAG",
        basis: "KVKK Art. 3, Art. 4",
      },
      {
        code: "KVKK-03",
        title: "Phone Number Masking",
        description:
          "Detects and masks phone numbers in +90, 05xx and international formats. Corporate switchboard numbers can be whitelisted.",
        type: "Heuristic (DLP)",
        phase: "PRE_LLM + POST_LLM",
        action: "Redaction",
        basis: "KVKK Art. 4",
      },
      {
        code: "KVKK-04",
        title: "Email Address Masking",
        description:
          "Detects and masks personal email addresses. Corporate domains are managed with an exception list; personal domains such as gmail and hotmail are masked by default.",
        type: "Heuristic (DLP)",
        phase: "PRE_LLM + POST_LLM",
        action: "Redaction",
        basis: "KVKK Art. 4",
      },
      {
        code: "KVKK-05",
        title: "Physical Address & Location Data",
        description:
          "Detects residential addresses, neighborhood/street/door-number combinations and sensitive location data belonging to real persons. Corporate locations such as facility addresses are excluded.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "Redaction / FLAG",
        basis: "KVKK Art. 4",
      },
      {
        code: "KVKK-06",
        title: "Identifier Combination Risk",
        description:
          "Detects cases where individually anonymous-looking data (e.g. birth date + province + occupation) combine to make a person identifiable. Raises a warning when the combination threshold is exceeded, applying the re-identification-risk guidance from the KVKK AI Recommendations at runtime.",
        type: "Context-Aware",
        phase: "PRE_LLM",
        action: "ALLOW_WITH_WARNINGS / FLAG",
        basis: "KVKK Art. 3 (identifiability); KVKK AI Recommendations",
      },
      {
        code: "KVKK-07",
        title: "Health Data Protection (Special Category)",
        description:
          "Detects health data such as diagnoses, medication, reports, hospital records and disability status. As special-category data the default action is block. After Law No. 7499, explicit consent is no longer the sole legal ground under Art. 6/3; exceptions for legal obligations in employment, occupational health & safety and social security open only through a justify workflow in authorized HR/OHS projects, and each exception logs the Art. 6/3 clause relied upon.",
        type: "Context-Aware + Heuristic",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 6 (amended by Law 7499)",
      },
      {
        code: "KVKK-08",
        title: "Religion, Sect & Belief Data",
        description:
          "Detects and blocks data on individuals' religion, sect or other beliefs. General religious and cultural topics are allowed; belief data attributed to a specific person is blocked.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 6",
      },
      {
        code: "KVKK-09",
        title: "Political Opinion & Philosophical Belief",
        description:
          "Detects and blocks political views, party membership or philosophical belief data attributed to a specific person.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 6",
      },
      {
        code: "KVKK-10",
        title: "Association, Foundation & Union Membership",
        description:
          "Blocks processing of association, foundation or trade-union membership data of employees or third parties in AI systems. Anonymized use for collective-labor-law advisory scenarios is allowed.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK / Redaction",
        basis: "KVKK Art. 6",
      },
      {
        code: "KVKK-11",
        title: "Biometric & Genetic Data",
        description:
          "Detects and blocks references to fingerprints, face-recognition templates, retina, voice biometrics and genetic data. Pasting biometric configurations from facility security systems into prompts is also caught.",
        type: "Context-Aware + Heuristic",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 6",
      },
      {
        code: "KVKK-12",
        title: "Criminal Convictions & Security Measures",
        description:
          "Blocks processing of individuals' criminal records, convictions and security-measure information. Entering criminal-record checks into AI tools during recruitment is a typical violation scenario.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 6",
      },
      {
        code: "KVKK-13",
        title: "Race & Ethnic Origin Data",
        description:
          "Detects and blocks race and ethnic-origin data attributed to specific individuals.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 6",
      },
      {
        code: "KVKK-14",
        title: "Appearance & Sex-Life Data",
        description:
          "Prevents special-category data on appearance/dress and sex life (listed in KVKK Art. 6) from appearing in AI interactions.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 6",
      },
      {
        code: "KVKK-15",
        title: "Financial Identity Data (IBAN, Card, Account)",
        description:
          "Detects TR IBAN, credit-card (Luhn-validated), account-number and tax-ID patterns. Card numbers are blocked in all cases; IBANs may pass masked in corporate payment scenarios.",
        type: "Heuristic (DLP)",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK / Redaction",
        basis: "KVKK Art. 4, Art. 12",
      },
      {
        code: "KVKK-16",
        title: "Employee (Personnel) Data Protection",
        description:
          "Detects personnel data such as registry numbers, social-security numbers, payroll, salary, performance notes and disciplinary records. Entering this data into AI tools outside authorized HR projects is blocked; processing relying on the Art. 6/3 employment exception is logged with a justification.",
        type: "Heuristic (DLP) + Context-Aware",
        phase: "PRE_LLM",
        action: "BLOCK / FLAG",
        basis: "KVKK Art. 4, Art. 6 (amended by Law 7499), Art. 12",
      },
      {
        code: "KVKK-17",
        title: "Bulk Personal Data Leak Prevention",
        description:
          "Blocks when records of more than one person (customer lists, Excel pastes, CSV dumps) are detected in a single prompt or output. The threshold is configurable; the default blocks above 3 records.",
        type: "Heuristic (DLP) + Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 12",
      },
      {
        code: "KVKK-18",
        title: "Cross-Border Data Transfer Control",
        description:
          "Blocks — or passes only in masked form — requests containing personal data that would be routed to model endpoints hosted abroad. Under the post-7499 Art. 9 regime, any personal data sent to an external model endpoint counts as a cross-border transfer and must rely on a transfer mechanism (adequacy decision, standard contract, binding corporate rules or an undertaking); endpoints without a defined mechanism are locked by default (see KVKK-23).",
        type: "Heuristic + Routing rule",
        phase: "PRE_LLM",
        action: "BLOCK / Route",
        basis: "KVKK Art. 9 (amended by Law 7499); Transfer Regulation of 10.07.2024",
      },
      {
        code: "KVKK-19",
        title: "Purpose Limitation & Data Minimization",
        description:
          "Detects use of personal data outside the processing purpose defined for the project — for example processing personal data for marketing segmentation inside a customer-support project. Applies the KVKK AI Recommendations' principle that if a result can be reached without processing personal data, personal data must not be processed.",
        type: "Context-Aware",
        phase: "PRE_LLM",
        action: "ALLOW_WITH_WARNINGS / FLAG",
        basis: "KVKK Art. 4; KVKK AI Recommendations",
      },
      {
        code: "KVKK-20",
        title: "Data Subject Rights Request Routing",
        description:
          "Detects Art. 11 applications (erasure, rectification, information requests) in chatbot interactions and routes them to the official application channel. The AI is prevented from answering these requests on its own; person-level erasure is supported via the audit ledger, and an incident record tracks the 30-day response window under Art. 13.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "FLAG + Routing",
        basis: "KVKK Art. 7, Art. 11, Art. 13",
      },
      {
        code: "KVKK-21",
        title: "Children's Personal Data",
        description:
          "Detects and blocks content indicating that personal data of persons under 18 is being processed. In all scenarios where parental or guardian consent cannot be verified, the default action is block.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "KVKK Art. 4, Art. 5",
      },
      {
        code: "KVKK-22",
        title: "Disclosure & Audit-Trail Obligation",
        description:
          "Records every AI interaction containing personal data in the hash-chained audit ledger and reports which data category was processed in which project in a format comparable with the VERBIS declaration. Exported as an evidence pack during a KVKK inspection.",
        type: "Platform policy (audit)",
        phase: "All phases",
        action: "FLAG + Record",
        basis: "KVKK Art. 10, Art. 12, Art. 16",
      },
      {
        code: "KVKK-23",
        title: "Transfer Mechanism Verification (Standard Contract / BCR)",
        description:
          "Each external model endpoint and third-party service is mapped in Control Center to a defined Art. 9 transfer mechanism (adequacy decision, the standard contract published by Board decision 2024/959, approved binding corporate rules, or a Board-authorized undertaking). Personal-data traffic to endpoints whose mechanism is missing, expired, or not registered as notified to the Board within 5 business days is blocked; the notification date is kept as mandatory metadata.",
        type: "Platform policy + Routing rule",
        phase: "PRE_LLM",
        action: "BLOCK / FLAG",
        basis: "KVKK Art. 9, Art. 18/1-d; Board decision 2024/959; Transfer Regulation of 10.07.2024",
      },
      {
        code: "KVKK-24",
        title: "Data Breach Detection & 72-Hour Notification Support",
        description:
          "When it detects personal-data breaches through AI interactions (prompt-injection-driven disclosure, bulk leak, unauthorized-access pattern), it opens a high-priority incident record and compiles the fields required by the KVKK breach-notification form. The 72-hour timer starts from the moment the breach is learned, an instant notification is sent to the CISO, and the moment of detection is stamped provably in the hash-chained ledger.",
        type: "Platform policy (anomaly + audit)",
        phase: "All phases",
        action: "Alarm + Incident record + Report",
        basis: "KVKK Art. 12/5; Board decision 2019/10 (72 hours); Board decision 2025/2451",
      },
      {
        code: "KVKK-25",
        title: "Preventing Prompt Data Use in Model Training",
        description:
          "Allows personal-data traffic only to model endpoints that contractually commit that inputs will not be used in training (zero data retention / no-training). Cuts off — at the source — the risk highlighted in the Board's Generative AI Guide of user inputs leaking into model training; personal data can reach endpoints without such a commitment only after full redaction.",
        type: "Routing rule + Heuristic (DLP)",
        phase: "PRE_LLM",
        action: "BLOCK / Redaction + Route",
        basis: "KVKK Art. 4, Art. 12; Generative AI Guide (Nov 2025)",
      },
      {
        code: "KVKK-26",
        title: "Corporate Data Control on Public Generative AI Tools",
        description:
          "Inspects employees' entry of personal and corporate data into public generative-AI tools such as ChatGPT, Gemini and Claude at the browser layer through the UMAI Extension. Use of individual or free accounts outside the approved corporate subscription is detected, and inputs containing personal data are masked or blocked — directly addressing the Board's 05.03.2026 workplace generative-AI announcement.",
        type: "Heuristic (DLP) + Context-Aware (browser layer)",
        phase: "PRE_LLM",
        action: "BLOCK / Redaction / FLAG",
        basis: "KVKK Art. 4, Art. 12; Board announcement 05.03.2026",
      },
      {
        code: "KVKK-27",
        title: "Personal Data Control in Agentic AI",
        description:
          "Inspects personal-data flow in autonomous agent systems' tool calls, memory writes and agent-to-agent messaging. The scope of personal data an agent can access is defined per project; out-of-scope access attempts, writing personal data to agent memory and sharing personal data between agents are logged as separate events, covering the risks flagged in the Board's 2026 Agentic AI document.",
        type: "Agent rule + Context-Aware",
        phase: "PRE_LLM + POST_LLM + Tool call",
        action: "BLOCK / FLAG",
        basis: "KVKK Art. 4, Art. 12; Agentic AI document (2026)",
      },
      {
        code: "KVKK-28",
        title: "Retention Period & Destruction Compliance",
        description:
          "Assigns project-based retention periods to personal data in AI interaction logs; records whose period expires are deleted, destroyed or anonymized in a periodic destruction cycle, with the destruction written to the audit ledger as evidence. Person-level erasure requests (Art. 7) are applied on the ledger so data whose purpose has ended does not persist through logs.",
        type: "Platform policy (retention)",
        phase: "All phases",
        action: "Automatic destruction + Record",
        basis: "KVKK Art. 7, Art. 12; Erasure, Destruction & Anonymization Regulation",
      },
      {
        code: "KVKK-29",
        title: "Automated Decision Objection-Right Protection",
        description:
          "Detects outputs based solely on automated analysis that produce adverse consequences for a person. Such outputs require mandatory human review, and the decision rationale and input scope are recorded so the data subject can exercise their objection right under Art. 11/1-g. HR pre-screening, supplier evaluation and customer scoring projects bind to this policy by default.",
        type: "Context-Aware + Approval workflow",
        phase: "POST_LLM",
        action: "ALLOW_WITH_WARNINGS + Approval",
        basis: "KVKK Art. 11/1-g",
      },
      {
        code: "KVKK-30",
        title: "Privacy Impact Assessment Input",
        description:
          "Continuously measures the data categories, processing volume, special-category-data contact rate and high-risk indicators of every AI project that processes personal data, producing structured input for the privacy impact assessment the KVKK AI Recommendations prescribe for high-risk processing. A re-assessment alarm triggers when a project's risk profile changes, and it feeds the KVKK component of the Governance Health Score.",
        type: "Platform policy (audit + evaluation)",
        phase: "Continuous",
        action: "Evidence report + Alarm",
        basis: "KVKK AI Recommendations (Apr 2025); Generative AI Guide (Nov 2025)",
      },
    ],
  },
  {
    slug: "gdpr",
    name: "GDPR",
    fullName: "EU General Data Protection Regulation",
    regulation: "Regulation (EU) 2016/679",
    logo: "/assets/gdpr-logo.png",
    logoWidth: 900,
    logoHeight: 500,
    accent: "#38BDF8",
    summary:
      "Protects EU data subjects and EU-facing activity in AI interactions — special categories, minimization, data-subject rights, cross-border transfer, and processor controls.",
    description:
      "Under the EU General Data Protection Regulation (2016/679), these policies protect the personal data of EU data subjects and any EU-facing activity that flows through AI interactions — including data exchange with EU subsidiaries, suppliers and trading partners. Coverage spans Article 9 special categories, the core principles, data-subject rights, cross-border transfer and processor governance.",
    highlights: [
      "EU identifier detection across German, French, Italian and Romanian formats.",
      "Complete Article 9 special-category coverage.",
      "Data-subject rights: erasure, access (DSAR), and automated-decision limits.",
      "Chapter V transfer control, ROPA evidence, and privacy-by-design proof.",
    ],
    policies: [
      {
        code: "GDPR-01",
        title: "EU Citizen Personal Data Detection",
        description:
          "Detects national-ID numbers, passport formats, phone and address patterns of EU member states. German, French, Italian and Romanian formats are configured with priority.",
        type: "Heuristic (DLP)",
        phase: "PRE_LLM + POST_LLM",
        action: "Redaction / BLOCK",
        basis: "GDPR Art. 4",
      },
      {
        code: "GDPR-02",
        title: "Special Category: Health Data",
        description:
          "Blocks processing of health data of EU data subjects. Unless explicit consent or a legal exception under Article 9 is proven, the default action is block.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 9",
      },
      {
        code: "GDPR-03",
        title: "Special Category: Race & Ethnic Origin",
        description:
          "Detects and blocks race and ethnic-origin data attributed to specific individuals.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 9",
      },
      {
        code: "GDPR-04",
        title: "Special Category: Political Opinion",
        description:
          "Blocks political-opinion and party-affiliation data attributed to individuals.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 9",
      },
      {
        code: "GDPR-05",
        title: "Special Category: Religious & Philosophical Belief",
        description:
          "Blocks religious or philosophical belief data attributed to individuals.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 9",
      },
      {
        code: "GDPR-06",
        title: "Special Category: Trade-Union Membership",
        description:
          "Blocks trade-union membership data attributed to individuals; anonymized aggregate statistics are allowed.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK / Redaction",
        basis: "GDPR Art. 9",
      },
      {
        code: "GDPR-07",
        title: "Special Category: Genetic Data",
        description:
          "Detects and blocks genetic test results and genetic-profile data.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 9",
      },
      {
        code: "GDPR-08",
        title: "Special Category: Biometric Data",
        description:
          "Blocks biometric templates and data processed for identification purposes.",
        type: "Context-Aware + Heuristic",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 9",
      },
      {
        code: "GDPR-09",
        title: "Special Category: Sex Life & Orientation",
        description:
          "Blocks sex-life and sexual-orientation data attributed to individuals.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 9",
      },
      {
        code: "GDPR-10",
        title: "Data Minimization",
        description:
          "Detects entry of more personal data than necessary for the processing purpose into AI systems. Personal-data redaction is applied before writing to logs, so the minimization principle is enforced at the platform level too.",
        type: "Context-Aware + Platform",
        phase: "PRE_LLM",
        action: "ALLOW_WITH_WARNINGS / Redaction",
        basis: "GDPR Art. 5(1)(c)",
      },
      {
        code: "GDPR-11",
        title: "Purpose Limitation",
        description:
          "Detects processing of personal data outside the legal basis and purpose defined for the project. Use that does not match the project-based lawful-basis selector raises a warning.",
        type: "Context-Aware",
        phase: "PRE_LLM",
        action: "ALLOW_WITH_WARNINGS / FLAG",
        basis: "GDPR Art. 5(1)(b), Art. 6",
      },
      {
        code: "GDPR-12",
        title: "Right to Erasure Support",
        description:
          "Enables person-level erasure of an EU data subject's personal data from AI interaction logs when an erasure request is received. Re-use of an erased person's data in later interactions is monitored with FLAG.",
        type: "Platform policy + Context-Aware",
        phase: "All phases",
        action: "Erasure API + FLAG",
        basis: "GDPR Art. 17",
      },
      {
        code: "GDPR-13",
        title: "Automated Decision-Making Restriction",
        description:
          "Prevents decisions producing legal effects about individuals (credit, hiring, contract termination) from being made fully automatically. Human approval (human-in-the-loop) is mandatory in these scenarios.",
        type: "Context-Aware + Agent rule",
        phase: "POST_LLM",
        action: "BLOCK / Approval workflow",
        basis: "GDPR Art. 22",
      },
      {
        code: "GDPR-14",
        title: "Consent Verification",
        description:
          "Blocks processing of personal data in consent-based scenarios before the consent record is verified. A processing-basis declaration is obtained from the user through the justify workflow and logged.",
        type: "Platform policy",
        phase: "PRE_LLM",
        action: "Justification requirement / BLOCK",
        basis: "GDPR Art. 6, Art. 7",
      },
      {
        code: "GDPR-15",
        title: "Cross-Border Transfer Control",
        description:
          "Blocks transfer of EU personal data to model endpoints in countries without an adequacy decision. Region-locked model routing sends EU data only to EEA-internal or on-prem endpoints.",
        type: "Heuristic + Routing rule",
        phase: "PRE_LLM",
        action: "BLOCK / Route",
        basis: "GDPR Chapter V (Art. 44-49)",
      },
      {
        code: "GDPR-16",
        title: "Access Request (DSAR) Detection & Routing",
        description:
          "Detects data-subject access requests in chatbot interactions, routes them to the official DSAR process and prevents the AI from making unauthorized data dumps.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "FLAG + Routing",
        basis: "GDPR Art. 15",
      },
      {
        code: "GDPR-17",
        title: "Pseudonymization Requirement",
        description:
          "Allows personal data in analytics and reporting projects to be processed only in pseudonymized form. If a raw identifier is detected, automatic redaction is applied.",
        type: "Heuristic (DLP)",
        phase: "PRE_LLM",
        action: "Redaction",
        basis: "GDPR Art. 25, Art. 32",
      },
      {
        code: "GDPR-18",
        title: "Child Data Protection",
        description:
          "Blocks processing of data of subjects under 16 (13-16 depending on member-state rule) without verified parental consent.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 8",
      },
      {
        code: "GDPR-19",
        title: "Data Breach Detection & Notification Support",
        description:
          "When bulk personal-data leakage or an abnormal data-access pattern is detected, opens a high-priority incident record and sends an instant notification to the CISO. For the 72-hour notification obligation, the incident timestamp and impact scope are reported automatically.",
        type: "Platform policy (anomaly)",
        phase: "All phases",
        action: "BLOCK + Alarm",
        basis: "GDPR Art. 33, Art. 34",
      },
      {
        code: "GDPR-20",
        title: "Records of Processing Activities (ROPA) Evidence",
        description:
          "Automatically records all personal-data processing activities that occur through AI by category, purpose and project. Produces a structured report that feeds directly into the ROPA document.",
        type: "Platform policy (audit)",
        phase: "All phases",
        action: "Record + Report",
        basis: "GDPR Art. 30",
      },
      {
        code: "GDPR-21",
        title: "Third-Party Processor Control",
        description:
          "Allows personal-data traffic only to model providers on the approved processor list with a signed DPA. Use of unapproved endpoints is blocked.",
        type: "Routing rule",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "GDPR Art. 28",
      },
      {
        code: "GDPR-22",
        title: "Privacy by Design Evidence",
        description:
          "Produces an evidence pack documenting that personal-data policies are active by default (default-deny), that data does not leave the organization in on-prem deployments, and that all configuration changes are versioned. Feeds DPIA processes directly.",
        type: "Platform policy (audit)",
        phase: "All phases",
        action: "Evidence report",
        basis: "GDPR Art. 25, Art. 35",
      },
    ],
  },
  {
    slug: "eu-ai-act",
    name: "EU AI Act",
    fullName: "EU Artificial Intelligence Act",
    regulation: "Regulation (EU) 2024/1689",
    logo: "/assets/EU_AI_Act_logo.png",
    logoWidth: 846,
    logoHeight: 215,
    accent: "#FBBF24",
    summary:
      "Enforces prohibited-practice bans, high-risk system obligations and transparency duties at runtime — with critical-infrastructure controls marked for energy and utility operators.",
    description:
      "Under the EU Artificial Intelligence Act (2024/1689), these policies enforce prohibited practices, high-risk system obligations and transparency requirements at runtime. Sectors classified as critical infrastructure under Annex III — such as energy and utilities — carry high-risk obligations; policies marked with an asterisk (*) target those critical-infrastructure and high-risk scenarios directly.",
    highlights: [
      "Article 5 prohibited-practice barriers (manipulation, social scoring, and more).",
      "High-risk classification with automatic control escalation.",
      "Critical-infrastructure and human-oversight controls (marked *).",
      "Transparency, record-keeping, bias detection, and FRIA / risk-management evidence.",
    ],
    policies: [
      {
        code: "AIACT-01",
        title: "Subliminal Manipulation Barrier",
        description:
          "Blocks generation of manipulative content that distorts a person's behavior beyond their conscious awareness. As a prohibited practice, BLOCK is applied without exception.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "EU AI Act Art. 5(1)(a)",
      },
      {
        code: "AIACT-02",
        title: "Vulnerability Exploitation Barrier",
        description:
          "Blocks content and decision-making that exploit vulnerabilities arising from age, disability or socioeconomic situation.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "EU AI Act Art. 5(1)(b)",
      },
      {
        code: "AIACT-03",
        title: "Social Scoring Barrier",
        description:
          "Detects and blocks general-purpose scoring requests based on individuals' social behavior or personality traits. Prompts aimed at behavioral profiling of employees or customers are caught here.",
        type: "Context-Aware",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "EU AI Act Art. 5(1)(c)",
      },
      {
        code: "AIACT-04",
        title: "Workplace Emotion Recognition Barrier",
        description:
          "Blocks use cases aimed at analyzing employees' emotional states with AI (except safety and medical exceptions). Emotion-analysis requests over meeting recordings and correspondence are a typical violation pattern.",
        type: "Context-Aware",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "EU AI Act Art. 5(1)(f)",
      },
      {
        code: "AIACT-05",
        title: "Biometric Categorization Barrier",
        description:
          "Blocks inference of race, political opinion, union membership, belief or sexual orientation from biometric data.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "EU AI Act Art. 5(1)(g)",
      },
      {
        code: "AIACT-06",
        title: "High-Risk Use Detection & Classification",
        description:
          "Detects high-risk use scenarios (employment decision, critical-infrastructure operation, credit evaluation) from prompt content and automatically classifies the interaction as high-risk. A class change triggers additional controls such as human oversight and enhanced logging.",
        type: "Context-Aware",
        phase: "PRE_LLM",
        action: "FLAG + Class assignment",
        basis: "EU AI Act Art. 6, Annex III",
        highRisk: true,
      },
      {
        code: "AIACT-07",
        title: "Employment Decisions Guardrail",
        description:
          "Prevents AI output from being used as the final decision on CV screening, promotion, performance evaluation and termination; human approval is mandatory and the decision rationale is logged.",
        type: "Context-Aware + Approval workflow",
        phase: "POST_LLM",
        action: "ALLOW_WITH_WARNINGS + Approval",
        basis: "EU AI Act Annex III/4, Art. 14",
      },
      {
        code: "AIACT-08",
        title: "Credit & Essential Service Decisions",
        description:
          "Blocks fully automated AI use in creditworthiness evaluation and decisions on access to essential services. Supplier financial-evaluation scenarios are bound to this policy.",
        type: "Context-Aware",
        phase: "POST_LLM",
        action: "BLOCK / Approval",
        basis: "EU AI Act Annex III/5",
      },
      {
        code: "AIACT-09",
        title: "Critical Infrastructure Operation Control",
        description:
          "Requires human oversight for AI-assisted decisions on energy generation, transmission and distribution operations (load forecasting, maintenance prioritization, field instructions) and restricts agent systems' authority to write directly to operational systems. The most critical policy of the package for a critical-infrastructure operator.",
        type: "Context-Aware + Agent rule",
        phase: "PRE_LLM + POST_LLM",
        action: "Approval workflow / BLOCK",
        basis: "EU AI Act Annex III/2, Art. 14",
        highRisk: true,
      },
      {
        code: "AIACT-10",
        title: "Education & Exam Evaluation Control",
        description:
          "Prevents AI output from solely determining outcomes in internal training and certification evaluations; requires evaluator approval.",
        type: "Context-Aware",
        phase: "POST_LLM",
        action: "ALLOW_WITH_WARNINGS + Approval",
        basis: "EU AI Act Annex III/3",
      },
      {
        code: "AIACT-11",
        title: "AI Transparency Notice",
        description:
          "Requires chatbots interacting with customers and employees to clearly disclose that they are AI. Chatbot responses that do not contain the disclosure statement are caught in the POST_LLM phase and passed with the disclosure added.",
        type: "Heuristic + Context-Aware",
        phase: "POST_LLM",
        action: "Correction / FLAG",
        basis: "EU AI Act Art. 50(1)",
      },
      {
        code: "AIACT-12",
        title: "Synthetic Content & Deepfake Labeling",
        description:
          "Blocks AI-generated image, audio and video content from being published without labeling. If synthetic content is detected in corporate communications materials, a labeling requirement is enforced.",
        type: "Context-Aware",
        phase: "POST_LLM",
        action: "FLAG + Labeling requirement",
        basis: "EU AI Act Art. 50(2), Art. 50(4)",
      },
      {
        code: "AIACT-13",
        title: "Human Oversight Requirement",
        description:
          "Prevents an AI agent from proceeding without human approval on high-impact actions (data deletion, system configuration, financial transaction, field operation). Approval and rejection decisions are written to the audit ledger.",
        type: "Agent rule",
        phase: "POST_LLM / Tool call",
        action: "Approval workflow",
        basis: "EU AI Act Art. 14",
        highRisk: true,
      },
      {
        code: "AIACT-14",
        title: "Accuracy & Robustness Monitoring",
        description:
          "Continuously measures guardrails' precision/recall metrics against benchmark datasets and raises an alarm on performance drops. In high-risk projects, model accuracy metrics are reported periodically.",
        type: "Platform policy (evaluation)",
        phase: "Continuous",
        action: "Alarm + Report",
        basis: "EU AI Act Art. 15",
      },
      {
        code: "AIACT-15",
        title: "Risk Management System Evidence",
        description:
          "Continuously records each project's risk class, active guardrail configuration and Governance Health Score trend, producing automatic documentation that proves to an auditor that risk management is a living process.",
        type: "Platform policy (audit)",
        phase: "Continuous",
        action: "Evidence report",
        basis: "EU AI Act Art. 9",
      },
      {
        code: "AIACT-16",
        title: "Data Governance Controls",
        description:
          "Requires RAG sources and fine-tuning data to come from approved, high-quality and representative datasets. Connecting an unapproved data source to the system is blocked.",
        type: "Platform policy + Routing",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "EU AI Act Art. 10",
      },
      {
        code: "AIACT-17",
        title: "Record-Keeping & Traceability",
        description:
          "Keeps automatic event logs of all AI interactions in high-risk systems in the hash-chained ledger. Log immutability is cryptographically provable, directly meeting Art. 12 and Art. 19 obligations.",
        type: "Platform policy (audit)",
        phase: "All phases",
        action: "Record",
        basis: "EU AI Act Art. 12, Art. 19",
        highRisk: true,
      },
      {
        code: "AIACT-18",
        title: "General-Purpose AI Model Inventory",
        description:
          "Inventories all GPAI models used in the organization (GPT, Claude, Gemini, open-source models) per project and detects and blocks use of unapproved models.",
        type: "Routing rule + Platform",
        phase: "PRE_LLM",
        action: "BLOCK / FLAG",
        basis: "EU AI Act Art. 53",
      },
      {
        code: "AIACT-19",
        title: "Systemic-Risk Model Monitoring",
        description:
          "Requires enhanced monitoring, incident reporting and an additional guardrail layer in projects using frontier models in the systemic-risk class.",
        type: "Platform policy",
        phase: "Continuous",
        action: "Enhanced monitoring",
        basis: "EU AI Act Art. 55",
      },
      {
        code: "AIACT-20",
        title: "Bias Detection",
        description:
          "Detects AI outputs that show systematic differences by protected attributes (gender, age, ethnic origin). In HR and customer-decision scenarios, outputs are run through bias scoring.",
        type: "Context-Aware",
        phase: "POST_LLM",
        action: "FLAG / ALLOW_WITH_WARNINGS",
        basis: "EU AI Act Art. 10, Art. 15",
      },
      {
        code: "AIACT-21",
        title: "Serious Incident Reporting",
        description:
          "Detects serious AI incidents affecting fundamental rights or safety, opens an incident record and starts notification-deadline tracking. An incident impact report is prepared automatically.",
        type: "Platform policy (anomaly)",
        phase: "All phases",
        action: "Alarm + Incident record",
        basis: "EU AI Act Art. 73",
      },
      {
        code: "AIACT-22",
        title: "Fundamental Rights Impact Assessment (FRIA) Evidence",
        description:
          "Automatically collects the data points needed for a fundamental-rights impact assessment in high-risk projects (affected population groups, decision types, human-oversight rate) and feeds the FRIA document.",
        type: "Platform policy (audit)",
        phase: "Continuous",
        action: "Evidence report",
        basis: "EU AI Act Art. 27",
      },
    ],
  },
  {
    slug: "owasp",
    name: "OWASP LLM Top 10",
    fullName: "OWASP Top 10 for LLM Applications",
    regulation: "OWASP Top 10 for LLM Applications (2025)",
    logo: "/assets/owasp_logo.png",
    logoWidth: 1380,
    logoHeight: 465,
    accent: "#A78BFA",
    summary:
      "Runtime protection against the OWASP LLM Top 10 attack vectors — prompt injection, sensitive-data leakage, insecure output, excessive agency, and supply-chain risk.",
    description:
      "Aligned to the OWASP Top 10 for LLM Applications (2025), these policies provide runtime protection against the framework's attack vectors. Each policy is mapped to its OWASP category (LLM01-LLM10), covering prompt injection, sensitive-information disclosure, insecure output handling, excessive agency, supply-chain integrity and unbounded consumption.",
    highlights: [
      "Direct, indirect, encoded and multilingual prompt-injection defense.",
      "Credential, corporate-secret and personal-data leak prevention.",
      "Insecure-output sanitization for code, links and markdown.",
      "Agent tool whitelisting, action-scope limits, and human approval gates.",
    ],
    policies: [
      {
        code: "OWASP-01",
        title: "Direct Prompt Injection Detection",
        description:
          "Detects and blocks user inputs aimed at overriding system instructions ('ignore previous instructions', instruction injection, role-switch commands). Known patterns are caught in under 1 ms by a heuristic pre-check; semantic variants are caught in the context-aware layer.",
        type: "Heuristic + Context-Aware",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "LLM01",
      },
      {
        code: "OWASP-02",
        title: "Indirect Prompt Injection (RAG & Document-Sourced)",
        description:
          "Detects hidden instructions embedded in external sources such as RAG documents, emails and web content. Context sent to the model is scanned like user input; in agent systems, tool outputs also pass through this policy.",
        type: "Context-Aware",
        phase: "PRE_LLM (context scan)",
        action: "BLOCK / FLAG",
        basis: "LLM01",
      },
      {
        code: "OWASP-03",
        title: "Jailbreak & Role-Play Attacks",
        description:
          "Detects jailbreak attempts based on DAN, persona switching, hypothetical scenarios and gradual manipulation. Runs on a context-aware model benchmarked against a known jailbreak library.",
        type: "Context-Aware",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "LLM01",
      },
      {
        code: "OWASP-04",
        title: "Encoding & Obfuscation Attacks",
        description:
          "Detects filter-bypass attempts using obfuscation techniques such as Base64, hex, unicode character manipulation, leetspeak and reversed text. Policy evaluation is repeated after the input is normalized.",
        type: "Heuristic + Context-Aware",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "LLM01",
      },
      {
        code: "OWASP-05",
        title: "Multilingual Attack Detection",
        description:
          "Detects prompt-injection and jailbreak attempts in Turkish, Arabic, German and French using native language models. Bypassing English-focused security filters via language switching is a known attack vector; this policy uses UMAI's multilingual guardrail engine.",
        type: "Context-Aware (multilingual)",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "LLM01",
      },
      {
        code: "OWASP-06",
        title: "System Prompt Leakage Prevention",
        description:
          "Blocks inputs aimed at disclosing the system prompt, its instructions or its configuration in the PRE_LLM phase, and outputs containing system-prompt fragments in the POST_LLM phase. Output matching is done via a system-prompt fingerprint.",
        type: "Heuristic + Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "LLM07",
      },
      {
        code: "OWASP-07",
        title: "Credential & API Key Leakage",
        description:
          "Detects API keys, SSH keys, tokens, passwords and connection strings in both input and output. Employees pasting secret keys into AI tools during debugging is the most common leakage scenario.",
        type: "Heuristic (DLP)",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "LLM02",
      },
      {
        code: "OWASP-08",
        title: "Corporate Confidential Information Leakage",
        description:
          "Detects sharing of trade secrets, contract details, pricing, production data and classified project names in AI interactions. An organization-specific confidential-term glossary is defined with an Exact Match policy.",
        type: "Heuristic (Exact Match) + Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK / FLAG",
        basis: "LLM02",
      },
      {
        code: "OWASP-09",
        title: "Personal Data Filtering in Output",
        description:
          "Catches and masks personal-data disclosure originating from the model's training data or context in the POST_LLM phase. The security-layer counterpart of the KVKK/GDPR policies.",
        type: "Heuristic (DLP) + Context-Aware",
        phase: "POST_LLM",
        action: "Redaction / BLOCK",
        basis: "LLM02",
      },
      {
        code: "OWASP-10",
        title: "Insecure Output: Code Injection",
        description:
          "Detects XSS, SQL injection, command injection and malicious script patterns in model output. Sanitization is applied against the risk of the output being executed in downstream systems (web UI, database, terminal).",
        type: "Heuristic + Context-Aware",
        phase: "POST_LLM",
        action: "BLOCK / Sanitization",
        basis: "LLM05",
      },
      {
        code: "OWASP-11",
        title: "Insecure Output: Malicious Links & Markdown",
        description:
          "Detects phishing links, malicious URLs, hidden markdown images and data-exfiltration link patterns in output. Links to unknown domains are marked with FLAG.",
        type: "Heuristic + Context-Aware",
        phase: "POST_LLM",
        action: "BLOCK / FLAG",
        basis: "LLM05",
      },
      {
        code: "OWASP-12",
        title: "Excessive Agency: Tool Whitelist",
        description:
          "Allows AI agents to call only the tools on the project-defined whitelist. Calls to tools outside the list and access to MCP servers are blocked.",
        type: "Agent rule (tool whitelist)",
        phase: "Tool call",
        action: "BLOCK",
        basis: "LLM06",
      },
      {
        code: "OWASP-13",
        title: "Excessive Agency: Action Scope Limitation",
        description:
          "Limits action scope even for permitted tools: an agent with read permission cannot write, and an agent with single-record permission cannot perform bulk operations. Scope-violation attempts are logged as privilege-escalation attempts.",
        type: "Agent rule (action scope)",
        phase: "Tool call",
        action: "BLOCK + FLAG",
        basis: "LLM06",
      },
      {
        code: "OWASP-14",
        title: "Human Approval for High-Impact Actions",
        description:
          "Requires an agent to obtain human approval before proceeding on irreversible or high-impact actions (deletion, sending, payment, configuration change).",
        type: "Agent rule + Approval workflow",
        phase: "Tool call",
        action: "Approval requirement",
        basis: "LLM06",
      },
      {
        code: "OWASP-15",
        title: "Vector & Embedding Access Control",
        description:
          "Applies project- and permission-based access isolation in RAG vector databases. Pulling context from document sources the user is not authorized for is blocked, and cross-project data leakage is prevented.",
        type: "Platform policy + Routing",
        phase: "PRE_LLM (context)",
        action: "BLOCK",
        basis: "LLM08",
      },
      {
        code: "OWASP-16",
        title: "RAG Poisoning Detection",
        description:
          "Scans documents added to the knowledge base for hidden instructions, manipulative content and anomaly patterns. When a poisoned document is detected, the source is quarantined and an alarm is raised.",
        type: "Context-Aware",
        phase: "Ingestion + PRE_LLM",
        action: "Quarantine + Alarm",
        basis: "LLM04, LLM08",
      },
      {
        code: "OWASP-17",
        title: "Model & Plugin Supply-Chain Verification",
        description:
          "Allows only approved models, plugins and MCP servers from the model registry. Components that fail integrity checks or come from unapproved sources are blocked.",
        type: "Platform policy (registry)",
        phase: "PRE_LLM",
        action: "BLOCK",
        basis: "LLM03",
      },
      {
        code: "OWASP-18",
        title: "Misinformation & Hallucination Flagging",
        description:
          "Flags outputs on high-risk topics (regulation, technical procedures, financial data) that cannot cite a source or have low confidence. Grounding requirements can be enforced in critical projects.",
        type: "Context-Aware",
        phase: "POST_LLM",
        action: "ALLOW_WITH_WARNINGS / FLAG",
        basis: "LLM09",
      },
      {
        code: "OWASP-19",
        title: "Token & Rate Limits",
        description:
          "Applies request-rate, token-budget and maximum-input-length limits per user, project and API key. Prevents resource-exhaustion attacks and cost blow-ups (denial of wallet).",
        type: "Heuristic (Max Length) + Platform",
        phase: "PRE_LLM",
        action: "BLOCK (limit exceeded)",
        basis: "LLM10",
      },
      {
        code: "OWASP-20",
        title: "Resource-Consumption Anomaly Detection",
        description:
          "Detects unusual request volumes, repetitive automated query patterns and systematic querying indicative of model extraction. On anomaly, the relevant key is temporarily throttled.",
        type: "Platform policy (anomaly)",
        phase: "Continuous",
        action: "Throttle + Alarm",
        basis: "LLM10",
      },
      {
        code: "OWASP-21",
        title: "Harmful Content Filtering",
        description:
          "Blocks generation of violence, hate speech, illegal-activity instructions and NSFW content in both input and output phases. Evaluated with a multilingual content-safety model including Turkish.",
        type: "Context-Aware",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK",
        basis: "LLM01, LLM05 (content safety)",
      },
      {
        code: "OWASP-22",
        title: "Topic Boundary & Scope Drift Control",
        description:
          "Prevents each AI application from drifting outside its defined purpose (a customer chatbot giving legal opinions, recommending competitor products, or making statements that damage corporate reputation). Topic-boundary violations are evaluated together with the brand-safety policy.",
        type: "Context-Aware + Exact Match",
        phase: "PRE_LLM + POST_LLM",
        action: "BLOCK / FLAG",
        basis: "LLM01, LLM06 (scope control)",
      },
    ],
  },
];

export function getPolicyFramework(slug: string): PolicyFramework | undefined {
  return POLICY_FRAMEWORKS.find((framework) => framework.slug === slug);
}

export const POLICY_LIBRARY_TOTAL = POLICY_FRAMEWORKS.reduce(
  (total, framework) => total + framework.policies.length,
  0,
);
