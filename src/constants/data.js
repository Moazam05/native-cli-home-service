import images from './images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const onboarding = [
  {
    id: 1,
    title: 'Beauty parlour \u00A0\u00A0at your home',
    description:
      'Get professional beauty services and treatments in the comfort of your home',
    image: images.onboardingOne,
  },
  {
    id: 2,
    title: 'Plumber & expart nearby you',
    description:
      'Connect with skilled plumbers and experts in your area for quick repairs and solutions',
    image: images.onboardingTwo,
  },
  {
    id: 3,
    title: 'Professional home cleaning',
    description:
      'Experience thorough home cleaning services by trained and verified professionals',
    image: images.onboardingThree,
  },
];

export const categoriesList = [
  {
    id: 1,
    title: 'allCategories.acRepair',
    image: images.categoryOne,
  },
  {
    id: 2,
    title: 'allCategories.beauty',
    image: images.categoryTwo,
  },
  {
    id: 3,
    title: 'allCategories.appliance',
    image: images.categoryThree,
  },
  {
    id: 4,
    title: 'allCategories.painting',
    image: images.categoryFour,
  },
  {
    id: 5,
    title: 'allCategories.cleaning',
    image: images.categoryFive,
  },
  {
    id: 6,
    title: 'allCategories.plumbing',
    image: images.categorySix,
  },
  {
    id: 7,
    title: 'allCategories.electronics',
    image: images.categorySeven,
  },
  {
    id: 8,
    title: 'allCategories.shifting',
    image: images.categoryEight,
  },
  {
    id: 9,
    title: 'allCategories.mensSalon',
    image: images.categoryNine,
  },
];

export const sliderData = [
  {
    id: 1,
    titleKey: 'slider.title.acService',
    discount: '25%',
    bgColor: '#F0F8FF',
  },
  {
    id: 2,
    titleKey: 'slider.title.cleaningService',
    discount: '15%',
    bgColor: '#FFE4E1',
  },
  {
    id: 3,
    titleKey: 'slider.title.paintingService',
    discount: '10%',
    bgColor: '#E0FFF0',
  },
];

export const categoryData = [
  {
    id: 1,
    titleKey: 'categories.title.acRepair',
    image: images.categoryOne,
  },
  {
    id: 2,
    titleKey: 'categories.title.beauty',
    image: images.categoryTwo,
  },
  {
    id: 3,
    titleKey: 'categories.title.appliance',
    image: images.categoryThree,
  },
];

export const cleaningData = [
  {
    id: 1,
    title: 'cleaningServices.services.homeCleaning',
    image: images.CleaningOne,
    discount: '10%',
  },
  {
    id: 2,
    title: 'cleaningServices.services.carpetCleaning',
    image: images.CleaningTwo,
  },
  {
    id: 3,
    title: 'cleaningServices.services.officeCleaning',
    image: images.CleaningThree,
    discount: '15%',
  },
];

// Icon configuration
export const ICONS = {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
};

export const DRAWER_ITEMS = [
  {
    icon: {
      type: 'MaterialIcons',
      name: 'calendar-today',
    },
    label: 'drawer.calendar',
  },
  {
    icon: {
      type: 'MaterialIcons',
      name: 'payment',
    },
    label: 'drawer.payments',
  },
  {
    icon: {
      type: 'Ionicons',
      name: 'location-outline',
    },
    label: 'drawer.address',
  },
  {
    icon: {
      type: 'MaterialIcons',
      name: 'notifications-none',
    },
    label: 'drawer.notification',
  },
  {
    icon: {
      type: 'MaterialCommunityIcons',
      name: 'ticket-percent-outline',
    },
    label: 'drawer.offers',
  },
  {
    icon: {
      type: 'MaterialIcons',
      name: 'person-add-alt-1',
    },
    label: 'drawer.referFriend',
  },
  {
    icon: {
      type: 'MaterialIcons',
      name: 'support-agent',
    },
    label: 'drawer.support',
  },
  {
    icon: {
      type: 'MaterialIcons',
      name: 'privacy-tip',
    },
    label: 'drawer.policy',
  },
];

export const subCategoryList = [
  {
    id: 1,
    title: 'subCategory.services.acCheckup',
    rating: 4.8,
    reviews: 87,
    price: 128,
    image: images.AcOne,
  },
  {
    id: 2,
    title: 'subCategory.services.acRegularService',
    rating: 4.5,
    reviews: 87,
    price: 128,
    image: images.AcTwo,
  },
  {
    id: 3,
    title: 'subCategory.services.acInstallation',
    rating: 4.5,
    reviews: 87,
    price: 170,
    image: images.AcThree,
  },
  {
    id: 4,
    title: 'subCategory.services.acUninstallation',
    rating: 4.5,
    reviews: 87,
    price: 170,
    image: images.AcFour,
  },
];

export const propertyTypes = [
  {
    id: 1,
    title: 'Home',
    icon: 'home-outline',
  },
  {
    id: 2,
    title: 'Office',
    icon: 'office-building',
  },
  {
    id: 3,
    title: 'Villa',
    icon: 'store-outline',
  },
];
