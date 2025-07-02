export default {
  // todo: Onboarding Screen
  onboarding: {
    skip: 'Skip',
    getStarted: 'Get Started',
    screens: {
      beautySalon: {
        title: 'Beauty parlour at your home',
        description:
          'Get professional beauty services and treatments in the comfort of your home',
      },
      plumber: {
        title: 'Plumber & expert nearby you',
        description:
          'Connect with skilled plumbers and experts in your area for quick repairs and solutions',
      },
      cleaning: {
        title: 'Professional home cleaning',
        description:
          'Experience thorough home cleaning services by trained and verified professionals',
      },
    },
  },
  // todo: Auth Screen
  signIn: {
    welcomeBack: 'Welcome back! Glad to see you, Again',
    continueWithGoogle: 'Continue with Google',
    signingIn: 'Signing in...',
  },
  // todo: TopBar
  topBar: {
    currentLocation: 'CURRENT LOCATION',
    points: 'POINTS',
    bronze: 'BRONZE',
    street: '15A, James Street',
    title: 'What you are looking for today',
    hello: 'Hello',
  },
  // todo: Drawer
  drawer: {
    calendar: 'Calendar',
    payments: 'Payment Methods',
    address: 'Address',
    notification: 'Notification',
    offers: 'Offers',
    referFriend: 'Refer a Friend',
    support: 'Support',
    policy: 'Privacy Policy',
    colorScheme: 'Color Scheme',
    languagePreference: 'Language Preference',
    light: 'Light',
    dark: 'Dark',
    english: 'English',
    arabic: 'Arabic',
  },
  // todo: SearchBar
  search: 'Search what you need...',
  // todo: Slider
  slider: {
    title: {
      acService: 'Offer AC Service',
      cleaningService: 'Offer Cleaning Service',
      paintingService: 'Offer Painting Service',
    },
    discount: {
      get: 'Get',
      off: 'OFF',
    },
    action: {
      grabOffer: 'Grab Offer',
    },
  },
  // todo: Categories
  categories: {
    title: {
      acRepair: 'AC Repair',
      beauty: 'Beauty',
      appliance: 'Appliance',
      seeAll: 'See All',
    },
  },
  // todo: Cleaning Services
  cleaningServices: {
    title: 'Cleaning Services',
    seeAll: 'See All',
    services: {
      homeCleaning: 'Home Cleaning',
      carpetCleaning: 'Carpet Cleaning',
      officeCleaning: 'Office Cleaning',
    },
    discount: 'OFF',
  },
  // todo: Appliance Repair
  applianceRepair: {
    title: 'Appliance Repair',
    dryCleaningOffer: {
      title: 'Offer Dry Cleaning',
      discount: 'Get 25%',
      action: 'Grab Offer',
    },
  },
  // todo: Bookings
  upcoming: {
    empty: {
      title: 'No Upcoming Order',
      description1: "Currently you don't have any upcoming order.",
      description2: 'Place and track your orders from here.',
      buttonText: 'View all services',
    },
    booking: {
      referenceCode: 'Reference Code: D-{{code}}',
      status: {
        label: 'Status',
        confirmed: 'Confirmed',
      },
      schedule: {
        label: 'Schedule',
        time: '{{time}}, {{date}}',
      },
      serviceProvider: {
        label: 'Service provider',
        name: 'Westinghouse',
      },
      callButton: 'Call',
    },
  },
  // todo: History
  history: {
    empty: {
      title: 'No Service History',
      description1: "You haven't used any services yet.",
      description2: 'Book a service to see your history here.',
    },
  },
  // todo: Draft
  draft: {
    empty: {
      title: 'No Draft Services',
      description1: "You don't have any saved drafts yet.",
      description2: 'Save a service booking as a draft to see it here.',
    },
    service: {
      units: '{{count}} units ×',
      price: '${{amount}}',
      reviews: '({{count}} reviews)',
    },
    toast: {
      removeSuccess: 'Service removed from drafts',
    },
  },
  // todo: Bookings
  bookings: {
    title: 'Bookings',
    tabs: {
      upcoming: 'Upcoming',
      history: 'History',
      draft: 'Draft',
    },
  },
  // todo: Profile
  profile: {
    title: 'Profile',
    details: {
      phoneNumber: 'Phone Number',
      email: 'E-mail',
      gender: 'Gender',
      male: 'Male',
      languagePreference: 'Language Preference',
    },
    languages: {
      english: 'English',
      arabic: 'Arabic',
      changed: 'Language changed successfully',
      changeFailed: 'Failed to change language',
    },
    logout: 'Logout',
  },
  // todo: All Categories
  allCategories: {
    searchCategory: 'Search Category',
    allCategories: 'All Categories',
    searchResults: 'Search Results',
    noCategoriesFound: 'No categories found',
    acRepair: 'AC Repair',
    beauty: 'Beauty',
    appliance: 'Appliance',
    painting: 'Painting',
    cleaning: 'Cleaning',
    plumbing: 'Plumbing',
    electronics: 'Electronics',
    shifting: 'Shifting',
    mensSalon: "Men's Salon",
  },
  // todo: Sub Categories
  subCategory: {
    searchPlaceholder: 'Search Sub Category',
    startsFrom: 'Starts From',
    noResults: 'No categories found',
    comingSoon: 'Coming Soon...',
    applianceRepair: 'Appliance Repair',
    services: {
      acCheckup: 'AC Check-Up',
      acRegularService: 'AC Regular Service',
      acInstallation: 'AC Installation',
      acUninstallation: 'AC Uninstallation',
    },
  },
  // todo: Service Details
  serviceDetails: {
    typeOfProperty: 'Type of Property',
    total: 'Total',
    bookNow: 'Book Now',
    saveDraft: 'Save Draft',
    removeDraft: 'Remove Draft',
    draftSuccess: 'Service saved to drafts',
    draftRemoved: 'Service removed from drafts',
    propertyTypes: {
      home: 'Home',
      villa: 'Villa',
      office: 'Office',
    },
  },
  // todo: Number of Units
  units: {
    numberOfUnits: 'Number of Units',
    numberOfBedrooms: 'Number of Bedrooms',
  },
  // todo: Text Editor
  editor: {
    description: 'Description',
    placeholder: 'Write something...',
  },
  // todo: BottomSheet
  bottomSheet: {
    title: 'Select your Date & Time?',
    selectDate: 'Select your Date',
    selectTime: 'Select your Time',
    date: 'DATE',
    time: 'TIME',
    total: 'Total',
    currency: 'USD',
    continue: 'Continue',
    selectDateTime: 'Please select Date & Time',
  },
};
