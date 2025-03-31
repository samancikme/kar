export type NewsArticle = {
  id: string
  title: {
    uz: string
    ru: string
    kaa: string
  }
  date: string
  excerpt: {
    uz: string
    ru: string
    kaa: string
  }
  content: {
    uz: string
    ru: string
    kaa: string
  }
  image: string
  category: string
  author: string
}

export const newsArticles: NewsArticle[] = [
  {
    id: "new-photoshop-course",
    title: {
      uz: "Yangi Photoshop kursi kelasi oyda boshlanadi",
      ru: "Новый курс Photoshop начинается в следующем месяце",
      kaa: "Jańa Photoshop kursi kelesi ayda baslanadı",
    },
    date: "2023-12-15",
    excerpt: {
      uz: "Biz 2024-yil yanvar oyida boshlanadigan yangi ilg'or Photoshop kursimizni e'lon qilishdan mamnunmiz.",
      ru: "Мы рады объявить о нашем новом продвинутом курсе Photoshop, который начнется в январе 2024 года.",
      kaa: "Biz 2024-jıl yanvar ayında baslanatug'ın jańa ilg'or Photoshop kursimizdi ja'riyalawdan quwanıshlımız.",
    },
    content: {
      uz: "Biz 2024-yil yanvar oyida boshlanadigan yangi ilg'or Photoshop kursimizni e'lon qilishdan mamnunmiz. Bu kurs tajribali dizaynerlarga mo'ljallangan bo'lib, ilg'or texnikalar, kompozitsiya va ranglar bilan ishlash, shuningdek, professional darajadagi retushlash va manipulyatsiya qilish usullarini o'z ichiga oladi. Kurs 8 hafta davom etadi va haftada 2 marta o'tkaziladi. Joylar cheklangan, shuning uchun bugun ro'yxatdan o'ting!",
      ru: "Мы рады объявить о нашем новом продвинутом курсе Photoshop, который начнется в январе 2024 года. Этот курс предназначен для опытных дизайнеров и включает в себя продвинутые техники, работу с композицией и цветом, а также профессиональные методы ретуши и манипуляции. Курс длится 8 недель и проводится 2 раза в неделю. Места ограничены, поэтому зарегистрируйтесь сегодня!",
      kaa: "Biz 2024-jıl yanvar ayında baslanatug'ın jańa ilg'or Photoshop kursimizdi ja'riyalawdan quwanıshlımız. Bul kurs ta'jiriybeli dizaynerlerge arnalg'an bolıp, ilg'or texnikalar, kompoziciya ha'm reńler menen islew, sonday-aq, ka'sipkoy da'rejedegi retushlaw ha'm manipulyaciya qılıw usılların o'z ishine aladı. Kurs 8 ha'pte dawam etedi ha'm ha'ptede 2 ma'rte o'tkeriledi. Orınlar sheklengen, sonlıqtan bu'gin dizimnen o'tiń!",
    },
    image: "/photoshop.webp?height=400&width=600",
    category: "courses",
    author: "Admin",
  },
  {
    id: "student-exhibition",
    title: {
      uz: "Talabalar ko'rgazmasi",
      ru: "Выставка работ студентов",
      kaa: "Studentler ko'rmesin",
    },
    date: "2023-12-10",
    excerpt: {
      uz: "Bizning talabalarimiz yillik raqamli san'at ko'rgazmasida o'zlarining ajoyib ishlarini namoyish etdilar.",
      ru: "Наши студенты представили свои удивительные работы на ежегодной выставке цифрового искусства.",
      kaa: "Bizdiń studentlerimiz jıllıq sanli ko'rkemoner ko'rmesinde o'zleriniń ajayıp jumısların ko'rsetip berdi.",
    },
    content: {
      uz: "Bizning talabalarimiz yillik raqamli san'at ko'rgazmasida o'zlarining ajoyib ishlarini namoyish etdilar. Ko'rgazmada 30 dan ortiq talabaning ishlari namoyish etildi, ular orasida grafik dizayn, 3D modellashtirish, animatsiya va raqamli rassomlik ishlari bor edi. Tadbirda 200 dan ortiq tashrif buyuruvchilar qatnashdi, shu jumladan mahalliy dizayn agentliklari va studiyalarining vakillari ham bor edi. Ko'plab talabalarimiz ish takliflari va amaliyot imkoniyatlarini oldilar. Biz barcha ishtirokchilarni tabriklaymiz va ularning kelajakdagi muvaffaqiyatlarini kutib qolamiz!",
      ru: "Наши студенты представили свои удивительные работы на ежегодной выставке цифрового искусства. На выставке были представлены работы более 30 студентов, включая графический дизайн, 3D-моделирование, анимацию и цифровую живопись. Мероприятие посетили более 200 гостей, в том числе представители местных дизайн-агентств и студий. Многие наши студенты получили предложения о работе и возможности стажировки. Мы поздравляем всех участников и ждем их будущих успехов!",
      kaa: "Bizdiń studentlerimiz jıllıq sanli ko'rkemoner ko'rmesinde o'zleriniń ajayıp jumısların ko'rsetip berdi. Ko'rmede 30 dan artıq studenttiń jumısları ko'rsetildi, olardıń arasında grafikalıq dizayn, 3D modellestiriw, animaciya ha'm sanli su'wretler bar edi. Ilajda 200 den artıq miymanlar qatnastı, sonıń ishinde jergilikli dizayn agentlikleri ha'm studiyalarınıń wa'killeri de bar edi. Ko'plegen studentlerimiz jumıs usınısların ha'm a'meliyat mu'mkinshiliklerin aldı. Biz barlıq qatnasıwshılardı qutlıqlaymız ha'm olardıń keleshektegi tabısların ku'temiz!",
    },
    image: "/talaba.png?height=400&width=600",
    category: "events",
    author: "Admin",
  },
  {
    id: "industry-partnership",
    title: {
      uz: "Sanoat hamkorligi e'loni",
      ru: "Объявление о партнерстве с индустрией",
      kaa: "Sanaat sheriklik ja'riyalanıwı",
    },
    date: "2023-12-05",
    excerpt: {
      uz: "Karpage yetakchi dizayn studiyalari bilan yangi hamkorlikni e'lon qilishdan faxrlanadi.",
      ru: "Karpage с гордостью объявляет о новом партнерстве с ведущими дизайн-студиями.",
      kaa: "Karpage jetekshi dizayn studiyaları menen jańa sheriklikti ja'riyalawdan maqtanadı.",
    },
    content: {
      uz: "Karpage yetakchi dizayn studiyalari bilan yangi hamkorlikni e'lon qilishdan faxrlanadi. Bu hamkorlik bizning talabalarimizga haqiqiy loyihalar ustida ishlash va sanoatning yetakchi mutaxassislaridan o'rganish imkoniyatini beradi. Hamkorlik doirasida biz birgalikda seminarlar, master-klasslar va amaliyot dasturlarini tashkil etamiz. Bu bizning talabalarimizga o'z kasbiy ko'nikmalarini oshirish va ish beruvchilar bilan aloqalarni o'rnatish uchun ajoyib imkoniyatdir. Biz ushbu hamkorlikni boshlashdan juda xursandmiz va u bizning talabalarimizga keltirishi mumkin bo'lgan barcha imkoniyatlarni kutib qolamiz.",
      ru: "Karpage с гордостью объявляет о новом партнерстве с ведущими дизайн-студиями. Это партнерство даст нашим студентам возможность работать над реальными проектами и учиться у ведущих специалистов отрасли. В рамках партнерства мы будем совместно организовывать семинары, мастер-классы и программы стажировок. Это отличная возможность для наших студентов повысить свои профессиональные навыки и установить связи с работодателями. Мы очень рады начать это партнерство и с нетерпением ждем всех возможностей, которые оно может принести нашим студентам.",
      kaa: "Karpage jetekshi dizayn studiyaları menen jańa sheriklikti ja'riyalawdan maqtanadı. Bul sheriklik bizdiń studentlerimizge haqıyqıy joybarlar u'stinde islew ha'm sanaattıń jetekshi qaniygeleri menen birge islew mu'mkinshiligin beredi. Sheriklik sheńberinde biz birgelikte seminarlar, master-klasslar ha'm a'meliyat bag'darlamaların sho'lkemlestirip baramız. Bul bizdiń studentlerimizge o'z ka'siplik ko'nlikpelerin asırıw ha'm jumıs beriwshiler menen baylanıslardı ornatıw ushın ajayıp mu'mkinshilik. Biz usı sheriklikti baslaw menen quwanıshlımız ha'm ol bizdiń studentlerimizge alıp keliwi mu'mkin bolg'an barlıq mu'mkinshiliklerin ku'tip qalamız.",
    },
    image: "/sanoat.png?height=400&width=600",
    category: "partnerships",
    author: "Admin",
  },
  {
    id: "new-3d-modeling-workshop",
    title: {
      uz: "Yangi 3D modellashtirish ustaxonasi",
      ru: "Новый семинар по 3D-моделированию",
      kaa: "Jańa 3D modellestiriw seminarı",
    },
    date: "2023-11-28",
    excerpt: {
      uz: "Biz yangi 3D modellashtirish ustaxonasini e'lon qilishdan mamnunmiz, u kelasi oyda boshlanadi.",
      ru: "Мы рады объявить о новом семинаре по 3D-моделированию, который начнется в следующем месяце.",
      kaa: "Biz jańa 3D modellestiriw seminarın ja'riyalawdan quwanıshlımız, ol kelesi ayda baslanadı.",
    },
    content: {
      uz: "Biz yangi 3D modellashtirish ustaxonasini e'lon qilishdan mamnunmiz, u kelasi oyda boshlanadi. Bu ustaxona 3D modellashtirish va vizualizatsiya sohasida o'z ko'nikmalarini oshirishni istagan har qanday darajadagi dizaynerlarga mo'ljallangan. Ustaxona davomida siz 3D modellashtirish asoslarini, teksturalash, yoritish va renderingni o'rganasiz. Ustaxona 4 hafta davom etadi va haftada bir marta o'tkaziladi. Joylar cheklangan, shuning uchun bugun ro'yxatdan o'ting!",
      ru: "Мы рады объявить о новом семинаре по 3D-моделированию, который начнется в следующем месяце. Этот семинар предназначен для дизайнеров любого уровня, которые хотят улучшить свои навыки в области 3D-моделирования и визуализации. В течение семинара вы изучите основы 3D-моделирования, текстурирования, освещения и рендеринга. Семинар длится 4 недели и проводится один раз в неделю. Места ограничены, поэтому зарегистрируйтесь сегодня!",
      kaa: "Biz jańa 3D modellestiriw seminarın ja'riyalawdan quwanıshlımız, ol kelesi ayda baslanadı. Bul seminar 3D modellestiriw ha'm vizualizaciya tarawında o'z ko'nlikpelerin asırıwdı qa'leytug'ın ha'r qanday da'rejedegi dizaynerlerge arnalg'an. Seminar dawamında siz 3D modellestiriw tiykarların, teksturalaw, jaqtılandırıw ha'm renderingti u'yrenesiz. Seminar 4 ha'pte dawam etedi ha'm ha'ptede bir ma'rte o'tkeriledi. Orınlar sheklengen, sonlıqtan bu'gin dizimnen o'tiń!",
    },
    image: "/3d.png",
    category: "workshops",
    author: "Admin",
  },
]

