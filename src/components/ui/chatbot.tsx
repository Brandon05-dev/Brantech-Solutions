import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Sparkles, 
  X, 
  Send, 
  Minimize2,
  Maximize2,
  Bot,
  Globe,
  UserRound
} from "lucide-react";
import { cn } from "@/lib/utils";

type Language = 'en' | 'fr' | 'es' | 'sw' | 'sg' | 'ki';

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isStreaming?: boolean;
}

const UI_TRANSLATIONS = {
  en: {
    title: "Temi - Customer Support",
    status: "Online • Ready to help",
    placeholder: "Ask Temi...",
    assistantFooter: "Customer Support • Brantech Solutions",
    floatingBtnTitle: "Ask Temi anything",
    floatingBtnSub: "Customer Support",
    suggestedPrompts: [
      "Detail your services",
      "Show me your portfolio",
      "Explain your pricing",
      "Tell me about the company"
    ]
  },
  fr: {
    title: "Temi - Support Client",
    status: "En ligne • Prêt à aider",
    placeholder: "Demandez à Temi...",
    assistantFooter: "Support Client • Brantech Solutions",
    floatingBtnTitle: "Demandez à Temi",
    floatingBtnSub: "Support Client",
    suggestedPrompts: [
      "Détaillez vos services",
      "Montrez-moi votre portfolio",
      "Expliquez vos prix",
      "Parlez-moi de l'entreprise"
    ]
  },
  es: {
    title: "Temi - Soporte",
    status: "En línea • Listo para ayudar",
    placeholder: "Pregunta a Temi...",
    assistantFooter: "Soporte al Cliente • Brantech Solutions",
    floatingBtnTitle: "Pregunta a Temi",
    floatingBtnSub: "Soporte al Cliente",
    suggestedPrompts: [
      "Detalle sus servicios",
      "Muéstrame tu portafolio",
      "Explique sus precios",
      "Cuéntame sobre la empresa"
    ]
  },
  sw: {
    title: "Temi - Msaada kwa Wateja",
    status: "Mondoni • Tayari kusaidia",
    placeholder: "Uliza Temi...",
    assistantFooter: "Msaada kwa Wateja • Brantech Solutions",
    floatingBtnTitle: "Uliza Temi chochote",
    floatingBtnSub: "Msaada kwa Wateja",
    suggestedPrompts: [
      "Fafanua huduma zenu",
      "Nionyeshe kazi zenu",
      "Eleza bei zenu",
      "Nieleze kuhusu kampuni"
    ]
  },
  sg: { // Sheng
    title: "Temi - Customer Support",
    status: "Niko area kusaidia",
    placeholder: "Uliza Temi...",
    assistantFooter: "Customer Support • Brantech Solutions",
    floatingBtnTitle: "Uliza Temi swali",
    floatingBtnSub: "Customer Support",
    suggestedPrompts: [
      "Mnado nini hapa?",
      "Nichekie works zenu",
      "Website ni how much?",
      "Nishow kuhusu Brantech"
    ]
  },
  ki: { // Kikuyu
    title: "Temi - Mũteithia wa Agũri",
    status: "Ndĩ Kũũ • Ndĩ Mũiguĩru",
    placeholder: "Kũria Temi...",
    assistantFooter: "Mũteithia wa Agũri • Brantech Solutions",
    floatingBtnTitle: "Kũria Temi kĩũndũ",
    floatingBtnSub: "Mũteithia wa Agũri",
    suggestedPrompts: [
      "Mũrutaga wĩra ũrĩkũ?",
      "Nyonya wĩra wanyu",
      "Gũthondeka nĩ mbeca cigana?",
      "Njĩra ũhoro wa Brantech"
    ]
  }
};

const BOT_RESPONSES = {
  greeting: {
    en: "Hello! I am Temi, your customer support assistant. I am equipped with comprehensive knowledge regarding Brantech Solutions' technical architecture, service methodologies, portfolio implementations, and corporate mission. How can I assist you today?",
    fr: "Bonjour ! Je suis Temi, votre assistante du support client. Je suis équipée d'une connaissance approfondie de l'architecture technique, des méthodologies de service et de la mission de Brantech Solutions. Comment puis-je vous aider aujourd'hui ?",
    es: "¡Hola! Soy Temi, su asistente de soporte al cliente. Estoy equipada con un conocimiento integral sobre la arquitectura técnica, las metodologías de servicio y la misión de Brantech Solutions. ¿Cómo puedo ayudarle hoy?",
    sw: "Hujambo! Mimi ni Temi, msaidizi wako wa huduma kwa wateja. Nina ujuzi kamili kuhusu usanifu wa kiufundi, mbinu za huduma, na dhamira ya Brantech Solutions. Naweza kukusaidia vipi leo?",
    sg: "Niaje. Mimi ni Temi, customer support wako. Nko na info yote kuhusu services, works na mission ya Brantech Solutions. Naeza kusaidia aje leo?",
    ki: "Wĩmwega. Nĩnĩ Temi, mũteithia waku wa agũri. Ndĩ na ũũgĩ wothe wĩgiĩ wĩra wa Brantech Solutions. Ingĩkũteithia atĩa ũmũthĩ?"
  },
  services: {
    en: "Brantech Solutions provides an elite, comprehensive suite of digital engineering services designed for scalability and enterprise performance:\n\n• **Custom Software Engineering:** We build full-stack web platforms and native mobile applications (iOS/Android) using modern frameworks like React, Node.js, and Flutter. We focus on scalable microservices and robust API integrations.\n• **Enterprise AI Solutions:** We integrate state-of-the-art Large Language Models (LLMs), intelligent customer support chatbots, workflow automation, and predictive data analytics tailored to your operational needs.\n• **Advanced Cybersecurity:** Our security protocols include deep-level penetration testing, continuous vulnerability assessments, secure cloud architecture design, and proactive 24/7 endpoint monitoring to ensure total data compliance.\n• **Digital Marketing & SEO:** We execute data-driven performance marketing and deep technical search engine optimization to maximize your global visibility.\n\nCould you specify which technical domain aligns with your current operational goals?",
    fr: "Brantech Solutions propose une suite complète de services d'ingénierie numérique conçus pour l'évolutivité et les performances de l'entreprise :\n\n• **Ingénierie logicielle sur mesure :** Nous créons des plateformes web full-stack et des applications mobiles natives.\n• **Solutions d'IA d'entreprise :** Nous intégrons des modèles de langage de pointe et une automatisation des flux de travail.\n• **Cybersécurité avancée :** Nos protocoles incluent des tests d'intrusion approfondis et une surveillance proactive 24/7.\n• **Marketing numérique et SEO :** Optimisation technique pour les moteurs de recherche.\n\nQuel domaine technique correspond à vos objectifs actuels ?",
    es: "Brantech Solutions ofrece un conjunto completo de servicios de ingeniería digital diseñados para la escalabilidad y el rendimiento empresarial:\n\n• **Ingeniería de software a medida:** Construimos plataformas web full-stack y aplicaciones móviles nativas.\n• **Soluciones de IA empresarial:** Integramos modelos de lenguaje de última generación y automatización de flujos de trabajo.\n• **Ciberseguridad avanzada:** Nuestros protocolos incluyen pruebas de penetración profundas y monitoreo proactivo 24/7.\n• **Marketing digital y SEO:** Optimización técnica de motores de búsqueda.\n\n¿Qué dominio técnico se alinea con sus objetivos actuales?",
    sw: "Brantech Solutions inatoa huduma mbalimbali za uhandisi wa kidijitali zilizoundwa kwa ajili ya utendaji wa juu wa biashara:\n\n• **Utengenezaji wa Programu:** Tunaunda mifumo ya wavuti na programu za simu kwa kutumia teknolojia za kisasa.\n• **Suluhisho za AI:** Tunaunganisha mifumo ya akili bandia (AI) na otomatiki wa kazi.\n• **Usalama wa Mtandao:** Huduma zetu zinajumuisha upimaji wa kina wa udhaifu na ufuatiliaji wa 24/7.\n• **Masoko ya Kidijitali & SEO:** Uboreshaji wa utafutaji wa kitaalamu.\n\nJe, ni eneo lipi la kiufundi linaloendana na malengo yako?",
    sg: "Brantech inapeana ma service moto za digital:\n\n• **Custom Software:** Tunaunda ma websites na ma mobile app kali.\n• **AI Solutions:** Tunasetup ma chatbot na automation.\n• **Cybersecurity:** Kulinda data yenu isiingiwe na ma hacker.\n• **Digital Marketing:** Kufanya brand yenu ijulikane online.\n\nNi area gani inakubamba zaidi?",
    ki: "Brantech Solutions nĩ ĩheanaga motungata ma digital ma gĩkĩro kĩa igũrũ:\n\n• **Gũthondeka Software:** Nĩ tũthondekaga website na application cia thimũ.\n• **Maũndũ ma AI:** Gũthondeka chatbot na kũhũthĩra mashini.\n• **Ũgitiri wa Mtandao:** Kũgitĩra data yanyu ĩtikonwo nĩ andũ athũku.\n• **Kũheana Ũhoro Online:** Kũmemerekia biashara yanyu mtandaoni.\n\nWĩnda tũwarĩrie ũndũ ũrĩkũ?"
  },
  ecommerce: {
    en: "Our e-commerce implementations are built for maximum conversion and security. The architecture includes:\n\n• **Secure Payment Routing:** Frictionless integration with localized and global gateways including M-Pesa API, Stripe, and PayPal.\n• **Dynamic Inventory Engines:** Real-time sync across multi-warehouse systems with automated restocking alerts.\n• **High-Performance UI:** Sub-second page load times using edge computing and headless commerce architectures.\n• **Analytics & Retargeting:** Integrated dashboards tracking user behavior, cart abandonment, and predictive LTV (Lifetime Value).\n\nAre you looking to migrate an existing store or build a custom platform from the ground up?",
    fr: "Nos implémentations de commerce électronique sont conçues pour une conversion et une sécurité maximales :\n\n• **Routage de paiement sécurisé :** M-Pesa, Stripe et PayPal.\n• **Moteurs d'inventaire dynamiques :** Synchronisation en temps réel.\n• **Interface utilisateur haute performance :** Architecture headless.\n\nCherchez-vous à migrer une boutique existante ou à en créer une nouvelle ?",
    es: "Nuestras implementaciones de comercio electrónico están diseñadas para la máxima conversión y seguridad:\n\n• **Enrutamiento de pago seguro:** M-Pesa, Stripe y PayPal.\n• **Motores de inventario dinámicos:** Sincronización en tiempo real.\n• **Interfaz de usuario de alto rendimiento:** Arquitectura headless.\n\n¿Busca migrar una tienda existente o crear una plataforma desde cero?",
    sw: "Mifumo yetu ya e-commerce inajengwa kwa ufanisi na usalama wa hali ya juu:\n\n• **Malipo Salama:** M-Pesa, Stripe, na PayPal.\n• **Usimamizi wa Hesabu:** Usawazishaji wa moja kwa moja.\n• **Utendaji wa Juu:** Kasi kubwa ya upakiaji kurasa.\n\nJe, unatafuta kuhamisha duka lako lililopo au kujenga jukwaa jipya?",
    sg: "Sisi ni wajanja wa kuunda online shops ziko na secure payments kama M-Pesa na Stripe. Tunamake sure shop yako iko fast na iko easy kutumia kwa simu. Unataka tuunde shop mpya ama tu-upgrade yenye uko nayo?",
    ki: "Nĩ tũrĩ na ũmenyeru wa gũthondeka nduka cia online irĩ na njĩra ngitĩre cia kũrĩha ta M-Pesa na Stripe. Wĩnda gũthondeka nduka njerũ kana gũthondekera ĩrĩa ũrĩ nayo?"
  },
  apps: {
    en: "Our mobile development process is rigorous and highly technical. We engineer cross-platform and native solutions utilizing React Native, Flutter, Swift, and Kotlin. Our focus is on:\n\n• Memory-efficient scalable architectures.\n• Offline-first capabilities for low-bandwidth environments.\n• Biometric security and encrypted local storage.\n• Seamless backend API synchronization.\n\nWhether it is a FinTech application, healthcare portal, or enterprise logistics tool, we deliver production-ready code.",
    fr: "Notre processus de développement mobile est rigoureux. Nous concevons des solutions natives et multiplateformes (React Native, Flutter, Swift). Notre objectif : architectures évolutives, capacités hors ligne et sécurité biométrique.",
    es: "Nuestro proceso de desarrollo móvil es riguroso. Diseñamos soluciones nativas y multiplataforma (React Native, Flutter, Swift). Nuestro enfoque: arquitecturas escalables, capacidades fuera de línea y seguridad biométrica.",
    sw: "Mchakato wetu wa utengenezaji wa programu za simu ni madhubuti sana. Tunatumia React Native, Flutter, na Swift kujenga programu zenye uwezo mkubwa wa kiufundi na usalama wa hali ya juu.",
    sg: "Team yetu inaunda ma mobile apps noma sana za iOS na Android. Tunatumia ma tools latest kama React Native na Flutter kumake sure app yako iko fast na haina ma lag.",
    ki: "Kĩkundi gitũ kĩthondekaga application cia thimũ cia iOS na Android irĩ na hinya na ihingagia wĩra wega. Tũhũthagĩra tekinorojĩ njerũ ta React Native na Flutter."
  },
  cybersecurity: {
    en: "Security is the foundational layer of every Brantech deployment. Our elite cybersecurity operations cover:\n\n• **Penetration Testing:** Ethical hacking to identify zero-day vulnerabilities in your network infrastructure.\n• **Compliance Auditing:** Ensuring your systems meet strict GDPR, HIPAA, or local data protection frameworks.\n• **Cryptographic Implementations:** End-to-end data encryption in transit and at rest.\n• **DDoS Mitigation:** Deploying edge-network shielding to prevent downtime during malicious traffic spikes.\n\nDo you require an immediate security audit for your infrastructure?",
    fr: "La sécurité est la couche fondamentale de tout déploiement Brantech. Nos opérations couvrent : les tests d'intrusion, l'audit de conformité, le cryptage des données et l'atténuation des attaques DDoS.",
    es: "La seguridad es la capa fundamental de toda implementación de Brantech. Nuestras operaciones cubren: pruebas de penetración, auditoría de cumplimiento, cifrado de datos y mitigación de ataques DDoS.",
    sw: "Usalama ni msingi wa kila mfumo wa Brantech. Huduma zetu zinajumuisha: upimaji wa kupenya, ukaguzi wa kufuata sheria za data, na kuzuia mashambulizi ya kimtandao (DDoS).",
    sg: "Security ni muhimu sana kwetu. Tunafanya penetration testing, ku-audit systems zenu, na kuweka encryption poa ndio data yenu ikue safe 24/7.",
    ki: "Ũgitiri nĩ ũndũ wa mbere kũrĩ ithuĩ. Nĩ tũthuthuragia mĩtambo yanyu gũtigĩrĩra hatirĩ na mĩanya ya aicĩ a mtandao na gũhitha data yanyu wega."
  },
  ai: {
    en: "We deploy enterprise Artificial Intelligence to drastically reduce operational overhead. Our deep tech AI capabilities include:\n\n• **Context-Aware LLM Integration:** Training sophisticated chatbots (like myself) on your proprietary company data to handle tier-1 customer support.\n• **Machine Learning Pipelines:** Predictive algorithms that analyze market trends and forecast inventory demands.\n• **Computer Vision:** Image recognition systems for industrial quality control or document parsing.\n• **Workflow Automation:** Replacing manual data entry with intelligent, autonomous RPA (Robotic Process Automation) scripts.",
    fr: "Nous déployons une intelligence artificielle d'entreprise pour réduire les frais généraux. Capacités : intégration LLM, pipelines d'apprentissage automatique, vision par ordinateur et automatisation des flux de travail.",
    es: "Desplegamos Inteligencia Artificial empresarial para reducir los gastos generales. Capacidades: integración de LLM, aprendizaje automático, visión por computadora y automatización de flujos de trabajo.",
    sw: "Tunasambaza Akili Bandia (AI) ya biashara ili kupunguza gharama za uendeshaji. Tunajumuisha Chatbots zenye akili, uchanganuzi wa data, na otomatiki wa kazi za kila siku.",
    sg: "Tunaweka AI kwa biashara yenu kupunguza kazi ya manual. Tunaweza set up ma chatbot, data analytics, na automation ndio mfocus na ku-grow biz.",
    ki: "Nĩ tũhũthagĩra AI (Akili Bandia) kũhũthia wĩra wa biashara yanyu. Nĩ tũthondekaga chatbot cia gũteithia agũri na kũrutithia wĩra na ihenya."
  },
  pricing: {
    en: "We believe in transparent, value-driven pricing structures based on precise technical scoping. While every project is unique, our general tiers are:\n\n• **Corporate Web Platforms:** Ranging from $500 to $2,500 depending on custom CMS and API needs.\n• **Advanced E-Commerce:** Starting at $1,500 to $5,000+ for large-scale, high-transaction volume stores.\n• **Custom Web/Mobile Applications:** Generally start at $4,000 and scale based on backend complexity and feature sets.\n• **Retainer Contracts:** We offer ongoing maintenance, security patching, and SEO retainers starting at $300/month.\n\nWe provide a completely free, 30-minute technical consultation to map your requirements and provide a binding quote.",
    fr: "Nous croyons en une tarification transparente. Plateformes web d'entreprise : 500 $ à 2 500 $. Commerce électronique avancé : 1 500 $ à 5 000 $+. Applications sur mesure : à partir de 4 000 $. Nous offrons des consultations gratuites.",
    es: "Creemos en precios transparentes. Plataformas web corporativas: $500 a $2,500. Comercio electrónico avanzado: $1,500 a $5,000+. Aplicaciones personalizadas: desde $4,000. Ofrecemos consultas gratuitas.",
    sw: "Tunaamini katika bei wazi kulingana na ukubwa wa kazi. Tovuti za kampuni: $500 - $2,500. E-Commerce: kuanzia $1,500. Programu maalum za simu: kuanzia $4,000. Tunatoa ushauri wa bure.",
    sg: "Bei zetu ziko fair na zinategemea kazi yenye unataka:\n\n• **Website ya kawaida:** Inaanzia $500\n• **Online Shop (E-commerce):** Inaanzia $1,500\n• **Custom Apps:** Inaanzia $4,000.\n\nTunapeananga consultation ya kwanza bure. Tuset up call?",
    ki: "Thogora witũ wĩyendeire na wĩra ũrĩa ũrenda:\n\n• **Website ya kĩwango kĩa thĩ:** Kwambĩrĩria $500\n• **Nduka ya online:** Kwambĩrĩria $1,500\n• **Application cia thimũ:** Kwambĩrĩria $4,000.\n\nNĩ tũheanaga ũtaaro wa mbere tũtarĩhĩtie. Wĩnda tũpangĩte mũcemanio?"
  },
  timeline: {
    en: "Our delivery methodologies utilize strict Agile/Scrum frameworks to guarantee speed without compromising code quality. Typical production timelines are:\n\n• **Corporate UI/UX & Web Presence:** 2 to 4 weeks, including QA testing.\n• **E-commerce Implementations:** 4 to 8 weeks, including payment gateway stress-testing.\n• **Complex Mobile/SaaS Applications:** 8 to 16+ weeks, delivered in two-week iterative sprints.\n\nYou will have continuous access to staging environments to monitor progress in real-time.",
    fr: "Nos délais de production typiques sont : Présence web (2-4 semaines), E-commerce (4-8 semaines), et Applications complexes (8-16+ semaines). Nous utilisons des méthodologies Agiles strictes.",
    es: "Nuestros plazos de producción típicos son: Presencia web (2-4 semanas), Comercio electrónico (4-8 semanas) y Aplicaciones complejas (8-16+ semanas). Utilizamos metodologías ágiles estrictas.",
    sw: "Muda wetu wa uzalishaji ni: Tovuti za kampuni (wiki 2-4), E-commerce (wiki 4-8), na Programu ngumu za simu/SaaS (wiki 8-16+). Tunatumia mbinu za Agile ili kuhakikisha ubora na kasi.",
    sg: "Tunapiganga kazi mbio sana:\n\n• **Websites:** Weeks 2 hadi 4\n• **E-commerce:** Weeks 4 hadi 8\n• **Apps kubwa:** Weeks 8 kuendelea\n\nUtakua ukiona progress kila wakati tuki-build.",
    ki: "Nĩ tũrutaga wĩra na ihenya:\n\n• **Websites:** Kiumia 2 nginya 4\n• **E-commerce:** Kiumia 4 nginya 8\n• **Application nene:** Kiumia 8 gũthiĩ na mbere."
  },
  contact: {
    en: "Our engineering and strategy teams are readily available to discuss your technical requirements. You can establish contact via:\n\n• **Direct Email:** brandonomutiti@gmail.com\n• **Priority WhatsApp/Call:** +254 790 889066\n• **Physical Office:** Nairobi, Kenya (Global Remote Operations available)\n\nAlternatively, utilize the 'Contact Us' form on this platform to securely transmit your project brief.",
    fr: "Nos équipes d'ingénierie sont disponibles. Contactez-nous par e-mail : brandonomutiti@gmail.com, WhatsApp : +254 790 889066, ou utilisez le formulaire 'Contactez-nous'.",
    es: "Nuestros equipos de ingeniería están disponibles. Contáctenos por correo electrónico: brandonomutiti@gmail.com, WhatsApp: +254 790 889066, o utilice el formulario de 'Contacto'.",
    sw: "Timu yetu ya uhandisi inapatikana. Wasiliana nasi kupitia barua pepe: brandonomutiti@gmail.com, WhatsApp/Simu: +254 790 889066, au tumia fomu ya 'Wasiliana Nasi'.",
    sg: "Kutushika ni easy:\n\n• **Email:** brandonomutiti@gmail.com\n• **WhatsApp/Call:** +254 790 889066\n• Ama utumie form ya 'Contact Us' hapa kwa site.",
    ki: "Kũtũgĩa nĩ hũthũ:\n\n• **Barũa-pepe:** brandonomutiti@gmail.com\n• **WhatsApp/Thimũ:** +254 790 889066\n• Kana ũhũthĩre fomu ya 'Contact Us' gĩtaratara-inĩ gĩkĩ."
  },
  portfolio: {
    en: "We have engineered transformative solutions for a diverse global clientele. Notable deployments include:\n\n• **Global Sustainable Development Africa (GSDA) Summit:** A massive, high-concurrency event portal featuring complex ticketing systems, speaker profile management, and global resource networking.\n• **Paychain Kenya:** A highly secure, low-latency financial technology platform built to process digital payments, mitigate inflation risks, and handle global bulk payouts.\n• **Water, Sanitation, and Health Group (WSHG):** A corporate agroforestry platform showcasing complex climate-smart agriculture methodologies with dynamic galleries.\n\nPlease visit our 'Projects' dashboard to review the complete technical case studies and architectural overviews.",
    fr: "Notre portfolio comprend des solutions transformatrices : la plateforme du Sommet GSDA (billetterie complexe), Paychain Kenya (FinTech hautement sécurisée) et WSHG (plateforme agroforestière d'entreprise).",
    es: "Nuestro portafolio incluye soluciones transformadoras: la plataforma de la Cumbre GSDA (venta de entradas compleja), Paychain Kenya (FinTech altamente segura) y WSHG (plataforma agroforestal corporativa).",
    sw: "Miradi yetu kuu inajumuisha: Jukwaa la Mkutano wa GSDA (mfumo tata wa tiketi), Paychain Kenya (jukwaa salama la malipo ya kifedha), na WSHG (jukwaa la kampuni la kilimo cha kisasa).",
    sg: "Tumefanyia ma client kibao kazi safi. Kama GSDA Summit, Paychain Kenya yenye ni Fintech noma, na WSHG. Cheki section yetu ya 'Projects' uone ma details zote.",
    ki: "Nĩ tũrutĩte wĩra mũnene na andũ aingĩ. Ta mũcemanio wa GSDA, Paychain Kenya ĩrĩa nĩ tekinorojĩ ya mbeca, na WSHG. Rora gĩcigo gitũ kĩa 'Projects' kwĩyonera wĩra witũ."
  },
  company: {
    en: "Brantech Solutions is a premier software engineering and digital strategy agency founded and led by Brandon Omutiti. Operating out of Nairobi, Kenya, we service a global portfolio of startups, SMEs, and enterprise corporations. \n\nOur foundational mission is to democratize elite technology—bridging the gap between highly complex software architectures (like AI and advanced cybersecurity) and tangible, measurable business growth. We do not just write code; we engineer scalable digital assets.",
    fr: "Brantech Solutions est une agence de stratégie numérique de premier plan dirigée par Brandon Omutiti. Notre mission est de démocratiser la technologie d'élite pour stimuler la croissance des entreprises mondiales.",
    es: "Brantech Solutions es una agencia de estrategia digital de primer nivel dirigida por Brandon Omutiti. Nuestra misión es democratizar la tecnología de élite para impulsar el crecimiento empresarial global.",
    sw: "Brantech Solutions ni kampuni kuu ya teknolojia inayoongozwa na Brandon Omutiti. Dhamira yetu ni kurahisisha teknolojia ngumu ili kuleta ukuaji wa kweli wa biashara ulimwenguni kote.",
    sg: "Brantech Solutions ni tech agency kali inaongozwa na Brandon Omutiti. Tuko based Nairobi, Kenya, na mission yetu ni kusaidia biashara ku-grow kutumia tech za kisasa kama AI.",
    ki: "Brantech Solutions nĩ kambi ĩnene ya tekinorojĩ ĩtongoragĩo nĩ Brandon Omutiti. Tũrĩ Nairobi, Kenya, na muoroto witũ nĩ kũteithia biashara gũkũra kũhũthĩra tekinorojĩ njerũ."
  },
  default: {
    en: "I am uniquely programmed to assist with Brantech Solutions' operations. I can provide highly detailed analyses of our service lines, breakdown our pricing structures, explain our technical methodologies, or detail our past enterprise deployments. What specific technical or business information do you require?",
    fr: "Je suis programmé pour fournir des analyses détaillées de nos services, de nos prix et de nos méthodologies techniques. De quelles informations spécifiques avez-vous besoin ?",
    es: "Estoy programado para proporcionar análisis detallados de nuestros servicios, precios y metodologías técnicas. ¿Qué información específica necesita?",
    sw: "Nimepangwa kutoa uchambuzi wa kina wa huduma zetu, bei, na mbinu za kiufundi. Unahitaji maelezo gani hasa?",
    sg: "Mimi nakaa na info yote ya Brantech Solutions. Naeza kukupea ma details za services zetu, bei, na ma projects tumedo. Unataka kujua nini haswa?",
    ki: "Ndĩ na ũhoro wothe wa Brantech Solutions. Ingĩkũhe ũhoro wa motungata maitũ, thogora, na miradi ĩrĩa tũrutĩte. Wĩnda kũmenya ũndũ ũrĩkũ kũna?"
  }
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length <= 1) {
      setMessages([
        {
          id: "welcome",
          text: BOT_RESPONSES.greeting[language],
          sender: "bot",
          timestamp: new Date()
        }
      ]);
    }
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage: string, lang: Language): string => {
    const message = userMessage.toLowerCase();
    
    // Expanded regex to catch local languages (Sheng/Swahili/Kikuyu) keywords alongside international ones
    if (message.match(/\b(hello|hi|hey|greetings|bonjour|salut|hola|hujambo|jambo|mambo|niaje|sasa|wimwega|wĩmwega|habari)\b/)) return BOT_RESPONSES.greeting[lang];
    if (message.match(/\b(service|services|offer|solutions|huduma|servicios|detail|wira|wĩra|rutaga|mnado|fanya)\b/)) return BOT_RESPONSES.services[lang];
    if (message.match(/\b(ecommerce|e-commerce|store|shop|boutique|tienda|duka|online)\b/)) return BOT_RESPONSES.ecommerce[lang];
    if (message.match(/\b(mobile|app|apps|application|ios|android|simu)\b/)) return BOT_RESPONSES.apps[lang];
    if (message.match(/\b(security|cyber|cybersecurity|protect|sécurité|seguridad|usalama|kulinda|ugitiri|ũgitiri)\b/)) return BOT_RESPONSES.cybersecurity[lang];
    if (message.match(/\b(ai|artificial intelligence|machine learning|bot|automation|ia|akili)\b/)) return BOT_RESPONSES.ai[lang];
    if (message.match(/\b(price|prices|pricing|cost|budget|prix|coût|precio|costo|bei|gharam|mbeca|pesa|thogora|how much)\b/)) return BOT_RESPONSES.pricing[lang];
    if (message.match(/\b(timeline|time|duration|weeks|months|temps|tiempo|muda|kiumia)\b/)) return BOT_RESPONSES.timeline[lang];
    if (message.match(/\b(contact|reach|email|phone|whatsapp|contacto|wasiliana|kutushika|kumpata|thimu|thimũ|namba)\b/)) return BOT_RESPONSES.contact[lang];
    if (message.match(/\b(portfolio|work|projects|project|examples|projets|proyectos|miradi|kazi|works)\b/)) return BOT_RESPONSES.portfolio[lang];
    if (message.match(/\b(about|company|brantech|team|founder|brandon|entreprise|empresa|kampuni|kambi)\b/)) return BOT_RESPONSES.company[lang];
    
    return BOT_RESPONSES.default[lang];
  };

  const simulateStreaming = (text: string, messageId: string) => {
    const words = text.split(" ");
    let currentText = "";
    let wordIndex = 0;

    const interval = setInterval(() => {
      if (wordIndex < words.length) {
        currentText += (wordIndex > 0 ? " " : "") + words[wordIndex];
        
        setMessages(prev => prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, text: currentText } 
            : msg
        ));
        
        wordIndex++;
      } else {
        clearInterval(interval);
        setMessages(prev => prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, isStreaming: false } 
            : msg
        ));
      }
    }, 30);
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMessageId = (Date.now() + 1).toString();
      const fullResponse = getBotResponse(text, language);
      
      const initialBotMessage: Message = {
        id: botMessageId,
        text: "",
        sender: "bot",
        timestamp: new Date(),
        isStreaming: true
      };
      
      setMessages(prev => [...prev, initialBotMessage]);
      simulateStreaming(fullResponse, botMessageId);
    }, 400);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const formattedLine = line.split(/(\*\*.*?\*\*)/).map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <span key={i} className="block min-h-[1.2em]">
          {formattedLine}
        </span>
      );
    });
  };

  const ui = UI_TRANSLATIONS[language];

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="h-10 sm:h-12 py-1 px-1 pr-3 sm:pr-4 rounded-full bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-700/50 flex items-center gap-2"
          >
            <div className="bg-white/20 p-1.5 sm:p-2 rounded-full border border-white/10 shadow-inner flex items-center justify-center">
              <UserRound className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-medium text-white text-xs sm:text-sm whitespace-nowrap">{ui.floatingBtnTitle}</span>
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <Card 
            className={cn(
              "bg-slate-950 border border-slate-800 shadow-2xl transition-all duration-500 overflow-hidden flex flex-col",
              isMinimized 
                ? "w-[calc(100vw-2rem)] sm:w-[340px] h-16 rounded-2xl" 
                : "w-[calc(100vw-2rem)] sm:w-[400px] h-[600px] max-h-[80vh] sm:h-[680px] sm:max-h-[85vh] rounded-2xl animate-in slide-in-fade-in-0"
            )}
          >
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shadow-sm border border-slate-700">
                    <UserRound className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{ui.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
                      <span>{ui.status}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="relative group mr-1">
                    <select 
                      value={language}
                      onChange={(e) => setLanguage(e.target.value as Language)}
                      className="appearance-none bg-transparent hover:bg-slate-800 text-slate-300 text-xs font-medium py-1.5 pl-7 pr-4 rounded-md cursor-pointer outline-none transition-colors border border-transparent hover:border-slate-700 shadow-sm"
                    >
                      <option value="en">EN</option>
                      <option value="sg">Sheng</option>
                      <option value="ki">Kikuyu</option>
                      <option value="sw">SW</option>
                      <option value="fr">FR</option>
                      <option value="es">ES</option>
                    </select>
                    <Globe className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-slate-600 transition-colors" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md shadow-sm"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md shadow-sm"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-hidden bg-slate-950">
                  <ScrollArea className="h-full p-5">
                    <div className="space-y-6">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={cn(
                            "flex gap-3",
                            message.sender === "user" ? "justify-end" : "justify-start"
                          )}
                        >
                          {message.sender === "bot" && (
                            <div className="w-7 h-7 bg-slate-900 rounded-md flex items-center justify-center flex-shrink-0 border border-slate-800 mt-1 shadow-sm">
                              <UserRound className="w-3.5 h-3.5 text-white" />
                            </div>
                          )}
                          
                          <div
                            className={cn(
                              "text-[14px] leading-relaxed",
                              message.sender === "user"
                                ? "max-w-[80%] bg-slate-800 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm border border-slate-700"
                                : "max-w-[90%] text-slate-300 pt-1"
                            )}
                          >
                            {message.sender === "bot" ? (
                              <>
                                {formatMessageText(message.text)}
                                {message.isStreaming && (
                                  <span className="inline-block w-1.5 h-4 bg-slate-400 animate-pulse ml-1 align-middle rounded-sm"></span>
                                )}
                              </>
                            ) : (
                              message.text
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex gap-3 justify-start">
                          <div className="w-7 h-7 bg-slate-900 rounded-md flex items-center justify-center flex-shrink-0 border border-slate-800 mt-1 shadow-sm">
                            <UserRound className="w-3.5 h-3.5 text-white animate-pulse" />
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} className="h-2" />
                    </div>
                  </ScrollArea>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-slate-900 border-t border-slate-800">
                  {/* Suggestion Chips */}
                  {messages.length === 1 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {ui.suggestedPrompts.map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(prompt)}
                          className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 px-3 py-1.5 rounded-full transition-colors text-left"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="relative flex items-center">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={ui.placeholder}
                      className="flex-1 bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-slate-600 rounded-xl h-12 pl-4 pr-12 shadow-sm"
                      disabled={isTyping || messages[messages.length - 1]?.isStreaming}
                    />
                    <Button
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim() || isTyping || messages[messages.length - 1]?.isStreaming}
                      className="absolute right-1.5 h-9 w-9 p-0 rounded-lg bg-white hover:bg-slate-200 text-slate-900 shadow-sm transition-all disabled:opacity-50"
                      size="sm"
                    >
                      <Send className="w-4 h-4 ml-0.5" />
                    </Button>
                  </div>
                  <div className="text-center mt-3">
                    <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">{ui.assistantFooter}</span>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
}