/*
 * ملف JavaScript الرئيسي لموقع دليل فعاليات المدينة
 * يحتوي على وظائف الساليدر، الفلترة، والتحقق من النماذج
 */

/*
 * بيانات الفعاليات
 */
const eventsData = {
  1: {
    title: "مسرحية \"الحلم الكبير\"",
    category: "ثقافة",
    categoryClass: "bg-warning",
    description: "عرض مسرحي درامي مميز يحكي قصة ملهمة عن الطموح والأمل",
    fullDescription: "تقدم لكم فرقة المسرح الوطني عرضاً استثنائياً لمسرحية \"الحلم الكبير\"، وهي قصة درامية تدور حول مجموعة من الشباب الذين يسعون لتحقيق أحلامهم رغم كل التحديات.\n\nالعرض من إخراج المخرج المبدعة رؤى الشليان، ويضم نخبة من أفضل الممثلين السوريين. تتميز المسرحية بحبكة درامية قوية، ديكورات مبهرة، وإضاءة احترافية تنقلك إلى عالم آخر.\n\nمدة العرض: ساعتين ونصف مع استراحة قصيرة. مناسب للعائلات والشباب. الدخول من عمر 12 سنة فما فوق",
    image: "https://images.pexels.com/photos/3689547/pexels-photo-3689547.jpeg?_gl=1*l5bb0r*_ga*MTYyNTA5MDE1MC4xNzU5OTI1MTEw*_ga_8JE65Q40S6*czE3NTk5MjUxMDkkbzEkZzEkdDE3NTk5MjYzNDMkajMzJGwwJGgw",
    date: "📅 15 أكتوبر 2025",
    time: "الساعة 7:00 مساءً",
    location: "المسرح الوطني",
    price: "<strong>500 ل.س</strong> - عادي<br><strong>800 ل.س</strong> - VIP",
    organizer: "فرقة المسرح الوطني",
    phone: "+963-11-1234567",
    team: [
      { role: "الإخراج", name: "شهد عمّار ونّوس " },
      { role: "التأليف", name: "رغد العزي" },
      { role: "البطولة", name: "محمد نور كباريتي، علي فهد ابراهيم، رؤى الشليان" },
      { role: "الديكور", name: "فريق الإنتاج الفني" }
    ],
    gallery: [
      "https://images.pexels.com/photos/7991153/pexels-photo-7991153.jpeg",
      "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg"
    ]
  },
  2: {
    title: "ماراثون المدينة",
    category: "رياضة",
    categoryClass: "bg-danger",
    description: "سباق رياضي لكل الأعمار مسافة 5 و10 كيلومتر",
    fullDescription: "انضم إلى آلاف المشاركين في ماراثون المدينة السنوي. اختَر مسار 5 كيلومترات للمبتدئين أو 10 كيلومترات للمتسابقين المحترفين.\n\nالسباق يمر بأجمل معالم المدينة ويوفر جوائز قيمة للفائزين في كل فئة. نشاط مثالي للعائلات والأفراد المهتمين باللياقة البدنية.\n\nيتم توفير قمصان مشاركة، مياه، ووجبات خفيفة لجميع المشاركين. كما تتوفر خدمة التوقيت الإلكتروني.",
    image: "https://images.pexels.com/photos/2402734/pexels-photo-2402734.jpeg",
    date: "📅 20 أكتوبر 2025",
    time: "الساعة 7:00 صباحاً",
    location: "شارع الجمهورية",
    price: "<strong>مجاني</strong> - للمشاركة",
    organizer: "الاتحاد الرياضي",
    phone: "+963-11-2345678",
    team: [
      { role: "المنظم", name: "الاتحاد الرياضي" },
      { role: "الراعي", name: "بلدية المدينة" }
    ],
    gallery: [
      "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg",
      "https://images.pexels.com/photos/1578384/pexels-photo-1578384.jpeg",
      "https://images.pexels.com/photos/2168291/pexels-photo-2168291.jpeg"
    ]
  },
  3: {
    title: "مهرجان الطعام الدولي",
    category: "طعام",
    categoryClass: "bg-primary",
    description: "تذوق أشهى الأطباق من مختلف دول العالم",
    fullDescription: "استمتع برحلة طعام حول العالم في مهرجان الطعام الدولي. يضم المهرجان أكثر من 50 مطعماً وطاهياً محلياً وعالمياً يقدمون أشهى الأطباق من المطبخ السوري، الإيطالي، المكسيكي، الهندي، والياباني.\n\nتضمن لك هذه التجربة الفريدة تذوق نكهات متنوعة في مكان واحد. كما تتوفر ورش عمل للطهي وعروض حية من الطهاة المحترفين.\n\nالمهرجان مناسب للعائلات والأطفال، ويوفر منطقة ألعاب للأطفال.",
    image: "https://images.pexels.com/photos/32351726/pexels-photo-32351726.jpeg?_gl=1*e8yz5i*_ga*MTYyNTA5MDE1MC4xNzU5OTI1MTEw*_ga_8JE65Q40S6*czE3NTk5MjUxMDkkbzEkZzEkdDE3NTk5MjgzMjckajU3JGwwJGgw",
    date: "📅 25 أكتوبر 2025",
    time: "من الساعة 12:00 ظهراً حتى 10:00 مساءً",
    location: "ساحة المدينة",
    price: "<strong>دخول مجاني</strong><br>الأسعار تختلف حسب المطعم",
    organizer: "بلدية المدينة",
    phone: "+963-11-3456789",
    team: [
      { role: "المنظم", name: "بلدية المدينة" },
      { role: "المشاركون", name: "أكثر من 50 مطعماً وطاهياً" }
    ],
    gallery: [
      "https://images.pexels.com/photos/1629859/pexels-photo-1629859.jpeg",
      "https://images.pexels.com/photos/3523068/pexels-photo-3523068.jpeg",
      "https://images.pexels.com/photos/916416/pexels-photo-916416.jpeg"
    ]
  },
  4: {
    title: "ورشة رسم للأطفال",
    category: "عائلي",
    categoryClass: "bg-success",
    description: "نشاط فني للأطفال من 5-12 سنة مع فنانين محترفين",
    fullDescription: "ورشة فنية ممتعة ومفيدة للأطفال من عمر 5 إلى 12 سنة. يتعلم الأطفال تقنيات الرسم الأساسية باستخدام الألوان المائية، الأكريليك، والأقلام.\n\nتساعد الورشة في تنمية الإبداع والخيال لدى الأطفال، ويشرف عليها فنانين محترفين متخصصين في تعليم الفن للأطفال.\n\nجميع المواد الفنية مقدمة، ويحصل كل طفل على شهادة مشاركة في نهاية الورشة.",
    image: "https://images.pexels.com/photos/7026051/pexels-photo-7026051.jpeg",
    date: "📅 28 أكتوبر 2025",
    time: "الساعة 10:00 صباحاً",
    location: "مركز الفنون",
    price: "<strong>2000 ل.س</strong> - للطفل الواحد<br>يشمل جميع المواد",
    organizer: "مركز الفنون",
    phone: "+963-11-4567890",
    team: [
      { role: "المشرفون", name: "فريق مركز الفنون" },
      { role: "الفنانون", name: "فنانين متخصصين في تعليم الأطفال" }
    ],
    gallery: [
      "https://images.pexels.com/photos/7026052/pexels-photo-7026052.jpeg",
      "https://images.pexels.com/photos/7026053/pexels-photo-7026053.jpeg",
      "https://images.pexels.com/photos/7026054/pexels-photo-7026054.jpeg"
    ]
  },
  5: {
    title: "ليلة الجاز",
    category: "موسيقى",
    categoryClass: "bg-info",
    description: "أمسية موسيقية رائعة مع فرقة جاز عالمية",
    fullDescription: "أمسية موسيقية استثنائية مع فرقة الجاز العالمية \"Midnight Groove\" الحائزة على عدة جوائز. تقدم الفرقة باقة مختارة من أجمل مقطوعات الجاز الكلاسيكي والمعاصر.\n\nالأمسية مناسبة لعشاق الموسيقى الهادئة والطابع الرومانسي. القاعة مجهزة بأفضل أنظمة الصوت والإضاءة لتجربة موسيقية فريدة.\n\nيتوفر بار يقدم المشروبات والوجبات الخفيفة طوال فترة الحفل.",
    image: "https://images.pexels.com/photos/9001963/pexels-photo-9001963.jpeg",
    date: "📅 30 أكتوبر 2025",
    time: "الساعة 8:00 مساءً",
    location: "نادي الموسيقى",
    price: "<strong>1000 ل.س</strong> - مقاعد عادية<br><strong>1500 ل.س</strong> - مقاعد أمامية",
    organizer: "نادي الموسيقى",
    phone: "+963-11-5678901",
    team: [
      { role: "الفرقة", name: "Midnight Groove" },
      { role: "الإدارة", name: "نادي الموسيقى" }
    ],
    gallery: [
      "https://images.pexels.com/photos/9001964/pexels-photo-9001964.jpeg",
      "https://images.pexels.com/photos/9001965/pexels-photo-9001965.jpeg",
      "https://images.pexels.com/photos/9001966/pexels-photo-9001966.jpeg"
    ]
  },
  6: {
    title: "معرض الكتاب السنوي",
    category: "ثقافة",
    categoryClass: "bg-warning",
    description: "أكبر معرض للكتب في المنطقة بمشاركة 200 دار نشر",
    fullDescription: "معرض الكتاب السنوي هو الحدث الثقافي الأكبر في المنطقة، بمشاركة أكثر من 200 دار نشر محلية وعربية وعالمية. يضم المعرض آلاف العناوين في مختلف المجالات: الأدب، العلوم، التاريخ، الفلسفة، والفنون.\n\nيتضمن المعرض فعاليات مصاحبة مثل جلسات توقيع كتب، ندوات ثقافية، وورش عمل للكتابة الإبداعية. كما يوفر منطقة مخصصة للأطفال مع أنشطة ترفيهية وتعليمية.\n\nالدخول مجاني للجميع، وتتوفر خصومات خاصة على الكتب طوال فترة المعرض.",
    image: "https://images.pexels.com/photos/33588634/pexels-photo-33588634.jpeg",
    date: "📅 5 نوفمبر 2025",
    time: "من الساعة 9:00 صباحاً حتى 9:00 مساءً",
    location: "قصر المعارض",
    price: "<strong>دخول مجاني</strong>",
    organizer: "اتحاد الناشرين السوريين",
    phone: "+963-11-6789012",
    team: [
      { role: "المنظم", name: "اتحاد الناشرين السوريين" },
      { role: "المشاركون", name: "200 دار نشر" }
    ],
    gallery: [
      "https://images.pexels.com/photos/32517434/pexels-photo-32517434.jpeg",
      "https://images.pexels.com/photos/13617521/pexels-photo-13617521.jpeg",
      "https://images.pexels.com/photos/13103829/pexels-photo-13103829.jpeg"
    ]
  },
  7: {
    title: "حفل الأوركسترا السيمفونية",
    category: "موسيقى",
    categoryClass: "bg-info",
    description: "عزف سيمفوني لأشهر المقطوعات العالمية",
    fullDescription: "تقدم لكم أوركسترا المدينة السيمفونية بقيادة المايسترو العالمي حفلاً استثنائياً يضم أجمل المقطوعات الكلاسيكية من تأليف بيتهوفن، موزارت، وتشايكوفسكي.\n\nيضم الحفل مجموعة من المقطوعات الشهيرة مثل السمفونية الخامسة لبيتهوفن، افتتاحية ويليام تل لروسيني، وروميو وجولييت لتشايكوفسكي.\n\nالحفل يستمر لمدة ساعتين مع استراحة، ويقدم في قاعة دار الأوبرا المجهزة بأفضل أنظمة الصوت.",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    date: "📅 10 نوفمبر 2025",
    time: "الساعة 8:00 مساءً",
    location: "دار الأوبرا",
    price: "<strong>1500 ل.س</strong> - مقاعد عادية<br><strong>2500 ل.س</strong> - مقاعد خاصة",
    organizer: "أوركسترا المدينة السيمفونية",
    phone: "+963-11-7890123",
    team: [
      { role: "قائد الأوركسترا", name: "المايسترو أحمد الخوري" },
      { role: "العازفون", name: "أوركسترا المدينة السيمفونية" },
      { role: "الإدارة", name: "دار الأوبرا" }
    ],
    gallery: [
        "https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg",
    "https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg",
      "https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg"
    ]
  },
  8: {
    title: "بطولة كرة السلة",
    category: "رياضة",
    categoryClass: "bg-danger",
    description: "نهائي بطولة كرة السلة للمحترفين",
    fullDescription: "يشهد ملعب المدينة الرياضي نهائي بطولة كرة السلة للمحترفين بين فريق النجمة والطيران.\n\nهذا اللقاء المنتظر يجمع بين أقوى فريقين في البطولة هذا الموسم، ويتوقع أن يكون مليئاً بالإثارة والتشويق.\n\nالبطولة تنظم بالتعاون مع الاتحاد الرياضي وتذاع مباشرة على القنوات الرياضية المحلية.",
    image: "https://images.pexels.com/photos/34197294/pexels-photo-34197294.jpeg",
    date: "📅 15 نوفمبر 2025",
    time: "الساعة 6:00 مساءً",
    location: "الصالة الرياضية المغطاة",
    price: "<strong>1000 ل.س</strong> - المدرجات<br><strong>2000 ل.س</strong> - المقاعد الأمامية",
    organizer: "الاتحاد الرياضي",
    phone: "+963-11-8901234",
    team: [
      { role: "الفريق الأول", name: "فريق النجمة" },
      { role: "الفريق الثاني", name: "فريق الطيران" },
      { role: "المنظم", name: "الاتحاد الرياضي" }
    ],
    gallery: [
      "https://images.pexels.com/photos/34197295/pexels-photo-34197295.jpeg",
      "https://images.pexels.com/photos/34197296/pexels-photo-34197296.jpeg",
      "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg"
    ]
  },
  9: {
    title: "مهرجان الشتاء العائلي",
    category: "عائلي",
    categoryClass: "bg-success",
    description: "احتفالية شتوية مع ألعاب وأنشطة للأطفال",
    fullDescription: "انضم إلينا في أجواء شتوية دافئة في مهرجان الشتاء العائلي السنوي. يضم المهرجان مجموعة متنوعة من الأنشطة الترفيهية والتعليمية للأطفال والعائلات.\n\nيتضمن المهرجان ألعاباً ترفيهية، ورش عمل فنية، عروض مسرحية للأطفال، وأكشاك طعام شتوية تقدم المشروبات الساخنة والأطعمة الشتوية.\n\nكما يتضمن المهرجان منطقة تزلج اصطناعية ومنطقة لألعاب الثلج الاصطناعي لتجربة شتوية فريدة.",
    image: "https://images.pexels.com/photos/5775053/pexels-photo-5775053.jpeg",
    date: "📅 20 ديسمبر 2025",
    time: "من الساعة 10:00 صباحاً حتى 8:00 مساءً",
    location: "الحديقة العامة",
    price: "<strong>دخول مجاني</strong><br>الأنشطة تختلف أسعارها",
    organizer: "بلدية المدينة",
    phone: "+963-11-9012345",
    team: [
      { role: "المنظم", name: "بلدية المدينة" },
      { role: "المشاركون", name: "مراكز ترفيهية وتعليمية" }
    ],
    gallery: [
      "https://images.pexels.com/photos/5775054/pexels-photo-5775054.jpeg",
      "https://images.pexels.com/photos/5775055/pexels-photo-5775055.jpeg",
      "https://images.pexels.com/photos/5775056/pexels-photo-5775056.jpeg"
    ]
  },
  10: {
    title: "مهرجان المتة الترفيهي",
  category: "ترفيه",
  categoryClass: "bg-warning",
  description: "احتفالية ترفيهية بين أحضان الطبيعة في وادي العيون بمصياف",
  fullDescription: "انضم إلينا في مهرجان المتة الترفيهي الأول في واحة الطبيعة الساحرة بوادي العيون بمصياف، حيث نجمع بين الأصالة والتراث والطبيعة في تجربة فريدة.\n\n• مسابقات تحضير أفضل كأس متة في الهواء الطلق\n• ورش عمل عن تاريخ وتقاليد المتة بين أحضان الطبيعة\n• عروض موسيقية تراثية مصاحبة مع أصوات الطيور\n• أسواق شعبية لأنواع المتة والإضافات في أجواء ريفية\n• ركن للتصوير بالأزياء التراثية مع خلفية طبيعية ساحرة\n\nهذه الفعالية تهدف للحفاظ على التراث الثقافي لمشروب المتة في إطار طبيعي خلاب، مما يجمع بين متعة المذاق الأصيل وجمال الطبيعة في مصياف.",
    image:         "assets/js/متة2.jpeg",

    date: "📅 12 نوفمبر 2025",
    time: "من الساعة 4:00 عصراً حتى 10:00 مساءً",
   location: "وادي العيون - مصياف",
    price: "<strong>دخول مجاني</strong><br>المشاركة في المسابقات: 1000 ل.س",
    organizer: "جمعية التراث الشعبي",
    phone: "+963-11-7654321",
    team: [
      { role: "المنظم", name: "جمعية التراث الشعبي" },
      { role: "راعي الفعالية", name: "شركة المتة الخضراء " },
      { role: "الشيف المختص", name: "الشيف: تحسين  محسن" },
      { role: "المشرف", name: "م.شهد ونوس" }
    ],
    gallery:    ["//th.bing.com/th/id/OIP.IiLXNF9gHvYvVcNl0eSkDAHaFO?w=250&h=184&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",

      "https://th.bing.com/th/id/OIP.yKZ_z5Kt2UiwR2j2hCmJSwHaEF?w=326&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
      "https://www.bing.com/th/id/OIP.rUmo9ogvDNOBc3NuZg1hVgHaE7?w=221&h=211&c=8&rs=1&qlt=90&o=6&cb=12&pid=3.1&rm=2"
  ]},
  
};

// Slider Functionality - وظيفة الساليدر للفعاليات البارزة
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  // إخفاء جميع الشرائح
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // التأكد من أن الرقم ضمن النطاق
  if (n >= slides.length) {
    currentSlide = 0;
  }
  if (n < 0) {
    currentSlide = slides.length - 1;
  }

  // إظهار الشريحة الحالية
  if (slides[currentSlide]) {
    slides[currentSlide].classList.add("active");
  }
}

function changeSlide(direction) {
  currentSlide += direction;
  showSlide(currentSlide);
}

// تشغيل الساليدر تلقائياً كل 5 ثواني
function autoSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  setInterval(autoSlide, 5000);
}

// Filter Categories - فلترة حسب التصنيف
function filterCategory(category) {
  alert(`جاري تحميل فعاليات ${getCategoryName(category)}...`);
  // هنا يمكن إضافة كود الفلترة الفعلي
  window.location.href = `events.html?category=${category}`;
}

function getCategoryName(category) {
  const categories = {
    culture: "الثقافة",
    sports: "الرياضة",
    music: "الموسيقى",
    family: "العائلية",
    food: "الطعام",
  };
  return categories[category] || category;
}

// Contact Form Validation - التحقق من نموذج الاتصال
function validateContactForm(event) {
  event.preventDefault();

  // الحصول على قيم الحقول
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const alertDiv = document.getElementById("formAlert");

  // مسح الرسائل السابقة
  alertDiv.innerHTML = "";

  // التحقق من الحقول
  let errors = [];

  if (!name || name.value.trim() === "") {
    errors.push("الرجاء إدخال الاسم");
  }

  if (!email || email.value.trim() === "") {
    errors.push("الرجاء إدخال البريد الإلكتروني");
  } else if (!isValidEmail(email.value)) {
    errors.push("الرجاء إدخال بريد إلكتروني صحيح");
  }

  if (!message || message.value.trim() === "") {
    errors.push("الرجاء إدخال الرسالة");
  }

  // عرض الأخطاء أو رسالة النجاح
  if (errors.length > 0) {
    showAlert("danger", errors.join("<br>"));
    return false;
  } else {
    showAlert("success", "✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    // مسح الحقول بعد الإرسال الناجح
    if (name) name.value = "";
    if (email) email.value = "";
    if (message) message.value = "";
    return false;
  }
}

// التحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// عرض رسائل التنبيه
function showAlert(type, message) {
  const alertDiv = document.getElementById("formAlert");
  if (alertDiv) {
    alertDiv.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
  }
}

// Filter Events - فلترة الفعاليات في صفحة events.html
function filterEvents() {
  const categoryFilter = document.getElementById("categoryFilter");
  const dateFilter = document.getElementById("dateFilter");
  const searchInput = document.getElementById("searchInput");
  const eventCards = document.querySelectorAll(".event-item");

  if (!eventCards.length) return;

  const selectedCategory = categoryFilter ? categoryFilter.value : "all";
  const selectedDate = dateFilter ? dateFilter.value : "all";
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";

  let visibleCount = 0;

  eventCards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");
    const cardDate = card.getAttribute("data-date");
    const cardTitle = card.querySelector(".card-title")
      ? card.querySelector(".card-title").textContent.toLowerCase()
      : "";

    let showCard = true;

    // فلترة حسب التصنيف
    if (selectedCategory !== "all" && cardCategory !== selectedCategory) {
      showCard = false;
    }

    // فلترة حسب التاريخ
    if (selectedDate !== "all" && cardDate !== selectedDate) {
      showCard = false;
    }

    // فلترة حسب البحث
    if (searchTerm && !cardTitle.includes(searchTerm)) {
      showCard = false;
    }

    // إظهار أو إخفاء البطاقة
    if (showCard) {
      card.style.display = "block";
      card.classList.add("fade-in");
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // عرض رسالة إذا لم يتم العثور على نتائج
  const noResultsDiv = document.getElementById("noResults");
  if (noResultsDiv) {
    if (visibleCount === 0) {
      noResultsDiv.style.display = "block";
    } else {
      noResultsDiv.style.display = "none";
    }
  }
}

// Scroll to Top Button - زر العودة للأعلى
window.addEventListener("scroll", function () {
  const scrollBtn = document.querySelector(".scroll-top");
  if (scrollBtn) {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add to Calendar - إضافة للتقويم
function addToCalendar(eventName, eventDate, eventLocation) {
  alert(
    `تم إضافة "${eventName}" للتقويم!\nالتاريخ: ${eventDate}\nالموقع: ${eventLocation}`
  );
  // هنا يمكن إضافة كود لإنشاء ملف .ics فعلي
}

// Share Event - مشاركة الفعالية
function shareEvent(eventName) {
  if (navigator.share) {
    navigator
      .share({
        title: eventName,
        text: `تحقق من هذه الفعالية: ${eventName}`,
        url: window.location.href,
      })
      .catch((err) => console.log("Error sharing:", err));
  } else {
    alert("تم نسخ الرابط! يمكنك مشاركته مع أصدقائك.");
    // نسخ الرابط للحافظة
    navigator.clipboard.writeText(window.location.href);
  }
}

// Modal للحجز الوهمي
function openBookingModal(eventName) {
  const modal = new bootstrap.Modal(document.getElementById("bookingModal"));
  document.getElementById("modalEventName").textContent = eventName;
  modal.show();
}

function submitBooking() {
  const ticketCount = document.getElementById("ticketCount").value;
  const bookingName = document.getElementById("bookingName").value;

  if (!bookingName || !ticketCount || ticketCount < 1) {
    alert("الرجاء ملء جميع الحقول بشكل صحيح");
    return;
  }

  alert(
    `✅ تم الحجز بنجاح!\nعدد التذاكر: ${ticketCount}\nاسم الحاجز: ${bookingName}`
  );

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("bookingModal")
  );
  modal.hide();

  // مسح الحقول
  document.getElementById("ticketCount").value = "1";
  document.getElementById("bookingName").value = "";
}

// تحميل بيانات الفعالية عند فتح صفحة event.html
function loadEventDetails() {
    // الحصول على رقم الفعالية من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    // إذا كانت الصفحة هي event.html وفيها معرّف
    if (eventId && eventsData[eventId]) {
        const event = eventsData[eventId];
        
        // تحديث العنوان
        const titleElements = document.querySelectorAll('h1, .display-4');
        if (titleElements.length > 0) {
            titleElements[0].textContent = event.title;
        }
        
        // تحديث Badge التصنيف
        const badge = document.querySelector('.badge');
        if (badge) {
            badge.className = `badge ${event.categoryClass} mb-3`;
            badge.style.fontSize = '1.1rem';
            badge.textContent = event.category;
        }
        
        // تحديث الوصف القصير
        const leadDesc = document.querySelector('.lead');
        if (leadDesc) {
            leadDesc.textContent = event.description;
        }
        
        // تحديث الوصف الكامل
        const fullDescElements = document.querySelectorAll('.card-text');
        if (fullDescElements.length > 0) {
            // نجد أول عنصر card-text ونضيف فيه الوصف الكامل
            fullDescElements[0].innerHTML = event.fullDescription.replace(/\n/g, '<br>');
        }
        
        // تحديث الصورة الرئيسية
        const mainImage = document.querySelector('.img-fluid.rounded.shadow');
        if (mainImage) {
            mainImage.src = event.image;
            mainImage.alt = event.title;
        }
        
        // تحديث التاريخ والوقت في البطاقة الجانبية
        const dateElements = document.querySelectorAll('.card-body p');
        dateElements.forEach(p => {
            if (p.textContent.includes('أكتوبر') || p.textContent.includes('نوفمبر') || p.textContent.includes('ديسمبر')) {
                p.textContent = event.date;
            }
            if (p.textContent.includes('الساعة') || p.textContent.includes('صباحاً') || p.textContent.includes('مساءً')) {
                p.textContent = event.time;
            }
        });
        
        // تحديث الموقع في البطاقة الجانبية
        const locationH5 = Array.from(document.querySelectorAll('h5')).find(h5 => h5.textContent.includes('📍'));
        if (locationH5) {
            locationH5.textContent = `📍 ${event.location}`;
        }
        
        // تحديث السعر في البطاقة الجانبية
        const priceElements = document.querySelectorAll('.card-body p strong');
        if (priceElements.length > 0) {
            const priceContainer = priceElements[0].closest('div');
            if (priceContainer) {
                priceContainer.innerHTML = `<h6>🎫 سعر التذكرة</h6><p class="mb-0">${event.price}</p>`;
            }
        }
        
        // تحديث المنظم في البطاقة الجانبية
        const organizerElements = document.querySelectorAll('.card-body p');
        organizerElements.forEach(p => {
            if (p.textContent.includes('فرقة') || p.textContent.includes('الاتحاد') || p.textContent.includes('بلدية') || p.textContent.includes('نادي') || p.textContent.includes('اتحاد')) {
                p.textContent = event.organizer;
            }
        });
        
        // تحديث رقم الهاتف في البطاقة الجانبية
        const phoneElements = document.querySelectorAll('.card-body p');
        phoneElements.forEach(p => {
            if (p.textContent.includes('+963-11')) {
                p.textContent = event.phone;
            }
        });
        
        // تحديث عنوان الصفحة
        document.title = `${event.title} - دليل فعاليات المدينة`;
        
        // تحديث اسم الفعالية في Modal
        const modalEventName = document.getElementById('modalEventName');
        if (modalEventName) {
            modalEventName.textContent = event.title;
        }
        
        // تحديث فريق العمل
        const teamList = document.querySelector('.card-body ul');
        if (teamList && event.team) {
            teamList.innerHTML = '';
            event.team.forEach(member => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${member.role}:</strong> ${member.name}`;
                teamList.appendChild(li);
            });
        }
        
        
        // تحديث معرض الصور
const galleryContainer = document.querySelector('.row.g-3');
if (galleryContainer && event.gallery) {
  galleryContainer.innerHTML = '';
  event.gallery.forEach(imgSrc => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = 'gallery-img'; // إضافة الكلاس الجديد
    img.alt = `صورة ${event.title}`;
    col.appendChild(img);
    galleryContainer.appendChild(col);
  });
}
    }
}

// تحميل الصفحة - إضافة مؤثرات عند التحميل
document.addEventListener("DOMContentLoaded", function () {
  // إضافة زر العودة للأعلى
  if (!document.querySelector(".scroll-top")) {
    const scrollBtn = document.createElement("button");
    scrollBtn.className = "scroll-top";
    scrollBtn.innerHTML = "↑";
    scrollBtn.onclick = scrollToTop;
    document.body.appendChild(scrollBtn);
  }

  // تفعيل tooltips في Bootstrap
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltips.forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip);
  });

  // إضافة تأثير fade-in للعناصر
  const cards = document.querySelectorAll(".event-card, .team-member");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("fade-in");
    }, index * 100);
  });
  
  // تشغيل دالة تحميل تفاصيل الفعالية إذا كنا في صفحة event.html
  if (window.location.pathname.includes('event.html')) {
    loadEventDetails();
  }
  
});