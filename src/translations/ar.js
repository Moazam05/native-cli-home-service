export default {
  // todo: Onboarding Screen
  onboarding: {
    skip: 'تخطي',
    getStarted: 'ابدأ الآن',
    screens: {
      beautySalon: {
        title: 'صالون تجميل في منزلك',
        description: 'احصل على خدمات وعلاجات تجميل احترافية في راحة منزلك',
      },
      plumber: {
        title: 'سباك وخبير بالقرب منك',
        description:
          'تواصل مع السباكين والخبراء المهرة في منطقتك للإصلاحات والحلول السريعة',
      },
      cleaning: {
        title: 'تنظيف منزلي احترافي',
        description:
          'استمتع بخدمات تنظيف منزلية شاملة من قبل متخصصين مدربين ومعتمدين',
      },
    },
  },
  // todo: Auth Screen
  signIn: {
    welcomeBack: 'مرحباً بعودتك! سعيد برؤيتك مرة أخرى',
    continueWithGoogle: 'المتابعة باستخدام جوجل',
    signingIn: 'جاري تسجيل الدخول...',
  },
  // todo: TopBar
  topBar: {
    currentLocation: 'الموقع الحالي',
    points: 'نقاط',
    bronze: 'برونزي',
    street: '15A، شارع جيمس',
    title: 'ما الذي تبحث عنه اليوم',
    hello: 'مرحباً',
  },
  // todo: Drawer
  drawer: {
    calendar: 'التقويم',
    payments: 'طرق الدفع',
    address: 'العنوان',
    notification: 'الإشعارات',
    offers: 'العروض',
    referFriend: 'دعوة صديق',
    support: 'الدعم',
    policy: 'سياسة الخصوصية',
    colorScheme: 'نظام الألوان',
    languagePreference: 'تفضيل اللغة',
    light: 'فاتح',
    dark: 'داكن',
    english: 'English',
    arabic: 'العربية',
  },
  // todo: SearchBar
  search: 'ابحث عن ما تحتاجه...',
  // todo: Slider
  slider: {
    title: {
      acService: 'خدمة تكييف الهواء',
      cleaningService: 'خدمة التنظيف',
      paintingService: 'خدمة الدهان',
    },
    discount: {
      get: 'خصم',
      off: 'خصم',
    },
    action: {
      grabOffer: 'احصل على العرض',
    },
  },
  // todo: Categories
  categories: {
    title: {
      acRepair: 'إصلاح المكيف',
      beauty: 'تجميل',
      appliance: 'أجهزة',
      seeAll: 'عرض الكل',
    },
  },
  // todo: Cleaning Services
  cleaningServices: {
    title: 'خدمات التنظيف',
    seeAll: 'عرض الكل',
    services: {
      homeCleaning: 'تنظيف المنزل',
      carpetCleaning: 'تنظيف السجاد',
      officeCleaning: 'تنظيف المكاتب',
    },
    discount: 'خصم',
  },
  // todo: Appliance Repair
  applianceRepair: {
    title: 'إصلاح الأجهزة',
    dryCleaningOffer: {
      title: 'عرض التنظيف الجاف',
      discount: 'احصل على 25%',
      action: 'احصل على العرض',
    },
  },
  // todo: Bookings
  upcoming: {
    empty: {
      title: 'لا توجد طلبات قادمة',
      description1: 'ليس لديك أي طلبات قادمة حالياً.',
      description2: 'قم بتقديم وتتبع طلباتك من هنا.',
      buttonText: 'عرض جميع الخدمات',
    },
    booking: {
      referenceCode: 'رقم المرجع: D-{{code}}',
      status: {
        label: 'الحالة',
        confirmed: 'مؤكد',
      },
      schedule: {
        label: 'الجدول',
        time: '{{time}}، {{date}}',
      },
      serviceProvider: {
        label: 'مزود الخدمة',
        name: 'وستنجهاوس',
      },
      callButton: 'اتصال',
    },
  },
  // todo: History
  history: {
    empty: {
      title: 'لا يوجد سجل خدمات',
      description1: 'لم تستخدم أي خدمات حتى الآن.',
      description2: 'احجز خدمة لرؤية سجلك هنا.',
    },
  },
  // todo: Draft
  draft: {
    empty: {
      title: 'لا توجد مسودات خدمات',
      description1: 'ليس لديك أي مسودات محفوظة حتى الآن.',
      description2: 'احفظ حجز الخدمة كمسودة لرؤيتها هنا.',
    },
    service: {
      units: '{{count}} وحدات ×',
      price: '{{amount}} $',
      reviews: '({{count}})',
    },
    toast: {
      removeSuccess: 'تمت إزالة الخدمة من المسودات',
    },
  },
  // todo: Bookings
  bookings: {
    title: 'الحجوزات',
    tabs: {
      upcoming: 'القادمة',
      history: 'السجل',
      draft: 'المسودة',
    },
  },
  // todo: Profile
  profile: {
    title: 'الملف الشخصي',
    details: {
      phoneNumber: 'رقم الهاتف',
      email: 'البريد الإلكتروني',
      gender: 'الجنس',
      male: 'ذكر',
      languagePreference: 'تفضيلات اللغة',
    },
    languages: {
      english: 'الإنجليزية',
      arabic: 'العربية',
      changed: 'تم تغيير اللغة بنجاح',
      changeFailed: 'فشل في تغيير اللغة',
    },
    logout: 'تسجيل الخروج',
  },
  // todo: All Categories
  allCategories: {
    searchCategory: 'ابحث عن الفئة',
    allCategories: 'جميع الفئات',
    searchResults: 'نتائج البحث',
    noCategoriesFound: 'لم يتم العثور على أي فئات',
    acRepair: 'إصلاح المكيفات',
    beauty: 'الجمال',
    appliance: 'الأجهزة الكهربائية',
    painting: 'الطلاء',
    cleaning: 'التنظيف',
    plumbing: 'السباكة',
    electronics: 'الإلكترونيات',
    shifting: 'النقل',
    mensSalon: 'صالون الرجال',
  },
  // todo: Sub Categories
  subCategory: {
    searchPlaceholder: 'بحث في الفئات الفرعية',
    startsFrom: 'يبدأ من',
    noResults: 'لم يتم العثور على فئات',
    comingSoon: 'قريباً...',
    applianceRepair: 'إصلاح الأجهزة',
    services: {
      acCheckup: 'فحص المكيف',
      acRegularService: 'خدمة المكيف العادية',
      acInstallation: 'تركيب المكيف',
      acUninstallation: 'فك المكيف',
    },
  },
  // todo: Service Details
  serviceDetails: {
    typeOfProperty: 'نوع العقار',
    total: 'المجموع',
    bookNow: 'احجز الآن',
    saveDraft: 'حفظ المسودة',
    removeDraft: 'إزالة المسودة',
    draftSuccess: 'تم حفظ الخدمة في المسودات',
    draftRemoved: 'تمت إزالة الخدمة من المسودات',
    propertyTypes: {
      home: 'منزل',
      villa: 'فيلا',
      office: 'مكتب',
    },
  },
  // todo: Number of Units
  units: {
    numberOfUnits: 'عدد الوحدات',
    numberOfBedrooms: 'عدد غرف النوم',
  },
  // todo: Text Editor
  editor: {
    description: 'الوصف',
    placeholder: 'اكتب شيئاً...',
  },
  // todo: BottomSheet
  bottomSheet: {
    title: 'حدد التاريخ والوقت؟',
    selectDate: 'حدد التاريخ',
    selectTime: 'حدد الوقت',
    date: 'التاريخ',
    time: 'الوقت',
    total: 'المجموع',
    currency: 'دولار',
    continue: 'متابعة',
    selectDateTime: 'الرجاء تحديد التاريخ والوقت',
  },
};
