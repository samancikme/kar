export type Course = {
  id: string
  title: {
    uz: string
    ru: string
    kaa: string
  }
  icon: string
  description: {
    uz: string
    ru: string
    kaa: string
  }
  intro: {
    uz: string
    ru: string
    kaa: string
  }
  features: {
    uz: string[]
    ru: string[]
    kaa: string[]
  }
  duration: string
  lessons: number
  certificate: string
  price: string
  cta: {
    uz: string
    ru: string
    kaa: string
  }
  image: string
  color: string
  bgPattern: string
}

export const courses: Course[] = [
  {
    id: "photoshop",
    title: {
      uz: "Photoshop kursi",
      ru: "Курс Photoshop",
      kaa: "Photoshop kursı",
    },
    icon: "🎨",
    description: {
      uz: "Grafik dizayn va rasmga ishlov berish bo'yicha professional bo'ling!",
      ru: "Станьте профессионалом в области графического дизайна и обработки изображений!",
      kaa: "Grafikalıq dizayn hám súwretke islew beriwde kásipkoy bolıń!",
    },
    intro: {
      uz: "Photoshop kursimiz sizga tasvir tahrirlash, kreativ dizayn yaratish va vizual kontent bilan ishlashni o'rgatadi.",
      ru: "Наш курс Photoshop научит вас редактировать изображения, создавать креативный дизайн и работать с визуальным контентом.",
      kaa: "Photoshop kursımız sizge súwret táriyplew, kreativ dizayn jaratıw hám vizual kontent penen islewdi úyretedi.",
    },
    features: {
      uz: [
        "Photoshop interfeysi va asosiy vositalar",
        "Sifatli banner, poster va logo tayyorlash",
        "Rasm tahrirlash va rang korreksiyasi",
        "Marketing va ijtimoiy tarmoqlar uchun dizayn yaratish",
      ],
      ru: [
        "Интерфейс Photoshop и основные инструменты",
        "Подготовка качественных баннеров, постеров и логотипов",
        "Редактирование изображений и цветокоррекция",
        "Создание дизайна для маркетинга и социальных сетей",
      ],
      kaa: [
        "Photoshop interfeysi hám tiykarǵı qurallar",
        "Sapali banner, poster hám logo tayarlaw",
        "Súwret táriyplew hám reń korrekciyası",
        "Marketing hám sociallıq tarmaqlar ushın dizayn jaratıw",
      ],
    },
    duration: "2 oy",
    lessons: 24,
    certificate: "Ha, kurs yakunida beriladi",
    price: "500,000 so'm",
    cta: {
      uz: "Bugun ro'yxatdan o'ting va professional dizayner bo'ling!",
      ru: "Зарегистрируйтесь сегодня и станьте профессиональным дизайнером!",
      kaa: "Búgin dizimnen ótiń hám kásipkoy dizayner bolıń!",
    },
    image: "/photoshop.webp?height=400&width=600",
    color: "from-[#1E3A5F] to-[#3D8EB9]",
    bgPattern: "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(61,142,185,0.1) 100%)",
  },
  {
    id: "coreldraw",
    title: {
      uz: "CorelDRAW kursi",
      ru: "Курс CorelDRAW",
      kaa: "CorelDRAW kursı",
    },
    icon: "🖌️",
    description: {
      uz: "Vektor grafikasi va logotip dizayni bo'yicha bilimga ega bo'ling!",
      ru: "Получите знания в области векторной графики и дизайна логотипов!",
      kaa: "Vektor grafikası hám logotip dizaynı boyınsha bilimge iye bolıń!",
    },
    intro: {
      uz: "CorelDRAW kursida logotip, banner, vektor grafikalar va bosma dizaynlar yaratishni o'rganasiz.",
      ru: "На курсе CorelDRAW вы научитесь создавать логотипы, баннеры, векторную графику и печатный дизайн.",
      kaa: "CorelDRAW kursında logotip, banner, vektor grafikalar hám baspa dizaynlar jaratıwdı úyrenesiz.",
    },
    features: {
      uz: [
        "Vektor grafikasining asosiy tushunchalari",
        "Logotip va brend identifikatsiyasi dizayni",
        "Vizitka, flyer va boshqa poligrafiya dizaynlari",
        "Tayyor dizaynlarni bosmaxona uchun tayyorlash",
      ],
      ru: [
        "Основные понятия векторной графики",
        "Дизайн логотипов и идентификации бренда",
        "Дизайн визиток, флаеров и другой полиграфии",
        "Подготовка готовых дизайнов для типографии",
      ],
      kaa: [
        "Vektor grafikasınıń tiykarǵı túsinikleri",
        "Logotip hám brend identifikaciyası dizaynı",
        "Vizitka, flyer hám basqa poligrafiya dizaynları",
        "Tayar dizaynlardı baspa ushın tayarlaw",
      ],
    },
    duration: "1 oy",
    lessons: 12,
    certificate: "Ha",
    price: "400,000 so'm",
    cta: {
      uz: "Kreativ dizayn olamiga qadam qo'ying – hoziroq yoziling!",
      ru: "Сделайте шаг в мир креативного дизайна – запишитесь сейчас!",
      kaa: "Kreativ dizayn álemine qadam qoyıń – házir jazılıń!",
    },
    image: "/coreldraw.jpeg?height=500&width=700",
    color: "from-[#2D6187] to-[#5A8CAA]",
    bgPattern:
      "repeating-linear-gradient(45deg, rgba(30,58,95,0.03) 0px, rgba(30,58,95,0.03) 1px, transparent 1px, transparent 10px)",
  },
  {
    id: "autocad",
    title: {
      uz: "AutoCAD kursi",
      ru: "Курс AutoCAD",
      kaa: "AutoCAD kursı",
    },
    icon: "📐",
    description: {
      uz: "Muhandislik chizmalari va loyiha yaratishni o'rganing!",
      ru: "Изучите создание инженерных чертежей и проектов!",
      kaa: "Injenerlik sızbaları hám joybar jaratıwdı úyreniń!",
    },
    intro: {
      uz: "AutoCAD kursimiz yordamida professional muhandislik chizmalari va reja-loyihalarni yaratish sirlarini o'rganasiz.",
      ru: "С помощью нашего курса AutoCAD вы изучите секреты создания профессиональных инженерных чертежей и планов-проектов.",
      kaa: "AutoCAD kursımız járdeminde kásipkoy injenerlik sızbaları hám reja-joybarlardı jaratıw sırların úyrenesiz.",
    },
    features: {
      uz: [
        "2D va 3D muhandislik chizmalari yaratish",
        "Qurilish va arxitektura uchun chizma tayyorlash",
        "O'lcham va masshtablash bo'yicha texnik bilimlar",
        "AutoCAD vositalari va tez ishlash usullari",
      ],
      ru: [
        "Создание 2D и 3D инженерных чертежей",
        "Подготовка чертежей для строительства и архитектуры",
        "Технические знания по размерам и масштабированию",
        "Инструменты AutoCAD и методы быстрой работы",
      ],
      kaa: [
        "2D hám 3D injenerlik sızbaların jaratıw",
        "Qurılıs hám arxitektura ushın sızba tayarlaw",
        "Ólshem hám masshtablaw boyınsha texnikalıq bilimler",
        "AutoCAD quralları hám tez islew usılları",
      ],
    },
    duration: "1 oy",
    lessons: 12,
    certificate: "Ha",
    price: "400,000 so'm",
    cta: {
      uz: "Professional muhandis bo'lishni xohlaysizmi? Hoziroq kursga yoziling!",
      ru: "Хотите стать профессиональным инженером? Запишитесь на курс сейчас!",
      kaa: "Kásipkoy injener bolıwdı qáleysiz be? Házir kursqa jazılıń!",
    },
    image: "/autocad.jpg?height=300&width=600",
    color: "from-[#34495E] to-[#587A99]",
    bgPattern:
      "linear-gradient(0deg, rgba(30,58,95,0.03) 2px, transparent 2px), linear-gradient(90deg, rgba(30,58,95,0.03) 2px, transparent 2px), linear-gradient(rgba(30,58,95,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.03) 1px, transparent 1px)",
  },
  {
    id: "3dsmax",
    title: {
      uz: "3ds Max kursi",
      ru: "Курс 3ds Max",
      kaa: "3ds Max kursı",
    },
    icon: "🏗",
    description: {
      uz: "3D modellashtirish va vizualizatsiya bo'yicha mutaxassis bo'ling!",
      ru: "Станьте специалистом по 3D моделированию и визуализации!",
      kaa: "3D modellestiriw hám vizualizaciya boyınsha qániyge bolıń!",
    },
    intro: {
      uz: "3ds Max kursi interyer dizaynerlari va arxitektorlar uchun eng kerakli bilimlarni taqdim etadi.",
      ru: "Курс 3ds Max предоставляет самые необходимые знания для дизайнеров интерьера и архитекторов.",
      kaa: "3ds Max kursı interyer dizaynerleri hám arxitektorlar ushın eń kerekli bilimlerdi usınadı.",
    },
    features: {
      uz: [
        "3D modellashtirish va vizualizatsiya asoslari",
        "Ichki va tashqi interyerlarni yaratish",
        "Material va yorug'lik sozlamalari",
        "Haqiqiy render olish texnikalari",
      ],
      ru: [
        "Основы 3D моделирования и визуализации",
        "Создание внутренних и внешних интерьеров",
        "Настройки материалов и освещения",
        "Техники получения реалистичного рендера",
      ],
      kaa: [
        "3D modellestiriw hám vizualizaciya tiykarları",
        "Ishki hám sırtqı interyerlardı jaratıw",
        "Material hám jaqtılandırıw sazlawları",
        "Haqıyqıy render alıw texnikaları",
      ],
    },
    duration: "3 oy",
    lessons: 36,
    certificate: "Ha",
    price: "400,000 so'm",
    cta: {
      uz: "Professional 3D dizayner bo'lish uchun hoziroq ro'yxatdan o'ting!",
      ru: "Зарегистрируйтесь сейчас, чтобы стать профессиональным 3D дизайнером!",
      kaa: "Kásipkoy 3D dizayner bolıw ushın házir dizimnen ótiń!",
    },
    image: "/3dmax.png?height=400&width=600",
    color: "from-[#1E3A5F] to-[#2D6187]",
    bgPattern: "radial-gradient(circle at 10% 20%, rgba(61,142,185,0.05) 0%, rgba(61,142,185,0) 20%)",
  },
  {
    id: "computer-literacy",
    title: {
      uz: "Kompyuter savodxonligi kursi",
      ru: "Курс компьютерной грамотности",
      kaa: "Kompyuter sawatxonlıǵı kursı",
    },
    icon: "💻",
    description: {
      uz: "Ofis dasturlari va kompyuter bilan ishlashni o'rganing!",
      ru: "Изучите работу с офисными программами и компьютером!",
      kaa: "Ofis baǵdarlamaları hám kompyuter menen islewdi úyreniń!",
    },
    intro: {
      uz: "Kompyuter savodxonligi kursimiz sizga Microsoft Office dasturlari (Word, Excel, PowerPoint) va kompyuterdan samarali foydalanishni o'rgatadi.",
      ru: "Наш курс компьютерной грамотности научит вас эффективно использовать программы Microsoft Office (Word, Excel, PowerPoint) и компьютер.",
      kaa: "Kompyuter sawatxonlıǵı kursımız sizge Microsoft Office baǵdarlamaları (Word, Excel, PowerPoint) hám kompyuterden nátiyjeli paydalanıwdı úyretedi.",
    },
    features: {
      uz: [
        "Microsoft Word - hujjatlar bilan ishlash",
        "Microsoft Excel - jadvallar va hisobotlar",
        "Microsoft PowerPoint - taqdimotlar yaratish",
        "Internet va elektron pochta bilan ishlash",
      ],
      ru: [
        "Microsoft Word - работа с документами",
        "Microsoft Excel - таблицы и отчеты",
        "Microsoft PowerPoint - создание презентаций",
        "Работа с интернетом и электронной почтой",
      ],
      kaa: [
        "Microsoft Word - hújjetler menen islew",
        "Microsoft Excel - kesteler hám esabatlar",
        "Microsoft PowerPoint - prezentaciyalar jaratıw",
        "Internet hám elektron pochta menen islew",
      ],
    },
    duration: "1 oy",
    lessons: 12,
    certificate: "Ha",
    price: "500,000 so'm",
    cta: {
      uz: "Zamonaviy ofis dasturlarini o'rganish uchun bugun ro'yxatdan o'ting!",
      ru: "Зарегистрируйтесь сегодня, чтобы изучить современные офисные программы!",
      kaa: "Házirgi zaman ofis baǵdarlamalarıń úyreniw ushın búgin dizimnen ótiń!",
    },
    image: "/kompyutersavod.jpg?height=400&width=600",
    color: "from-[#4B6584] to-[#778CA3]",
    bgPattern:
      "linear-gradient(45deg, rgba(75,101,132,0.05) 25%, transparent 25%, transparent 75%, rgba(75,101,132,0.05) 75%, rgba(75,101,132,0.05))",
  },
]

