export const  servicesEnum={
  HAIR_CUTTING : 'Hair cutting',
  WAXING : 'Waxing',
  NAIL_TREATMENT : 'Nail treatment',
  SKIN_CARE : 'Skin care',
  TANNING : 'Tanning',
  MASSAGE : 'Massage',
  TATTOO : 'Tattoo',
}

export const workingSchedules = {
  STANDARD: [
    {
      Mon: '9:00-20:00',
      Tue: '9:00-20:00',
      Wed: '9:00-20:00',
      Thu: '9:00-20:00',
      Fri: '9:00-20:00',
      Sat: '9:00-20:00',
      Sun: '9:00-20:00',
    },
  ],

  SHORT_HOLIDAY_WITH_SUNDAY: [
    {
      Mon: '9:00-20:00',
      Tue: '9:00-20:00',
      Wed: '9:00-20:00',
      Thu: '9:00-20:00',
      Fri: '9:00-20:00',
      Sat: '9:00-13:00',
      Sun: '9:00-12:00',
    },
  ],
  SHORT_HOLIDAY_WITHOUT_SUNDAY: [
    {
      Mon: '9:00-20:00',
      Tue: '9:00-20:00',
      Wed: '9:00-20:00',
      Thu: '9:00-20:00',
      Fri: '9:00-20:00',
      Sat: '9:00-13:00',
    },
  ],
  WITHOUT_HOLIDAY: [
    {
      Mon: '9:00-20:00',
      Tue: '9:00-20:00',
      Wed: '9:00-20:00',
      Thu: '9:00-20:00',
      Fri: '9:00-20:00',
    },
  ],
};

export const salons = [
  {
    id: '1',
    name: 'Alisa Studio',
    imageUrl:
      'https://www.allbeauty.md/upfiles/masters-salons/84416ab394af3ccdaa4ada4f6e4cc9d226407442.jpeg',
    description: 'No description',
    services: [
      servicesEnum.HAIR_CUTTING,
      servicesEnum.NAIL_TREATMENT,
      servicesEnum.WAXING,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 068',
          email: 'alisaSt@gmail.com',
        },
        address: {
          district: 'Ciocana',
          street: 'Negureni 2/8',
        },
        workingSchedule: workingSchedules.STANDARD,
      },
    ],
  },
  {
    id: '2',
    name: 'Tagline Beauty',
    imageUrl:
      'https://img.freepik.com/premium-vector/beauty-hair-salon-logo-design_714329-103.jpg',
    description: 'A serene beauty oasis with a touch of modern aesthetics.',
    services: [
      servicesEnum.HAIR_CUTTING,
      servicesEnum.SKIN_CARE,
      servicesEnum.MASSAGE,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 069',
          email: 'tagline@gmail.com',
        },
        address: {
          district: 'Buiucani',
          street: 'Primaverii 10/1',
        },
        workingSchedule: workingSchedules.WITHOUT_HOLIDAY,
      },
    ],
  },
  {
    id: '3',
    name: 'Chic Charm',
    imageUrl:
      'https://media.istockphoto.com/id/1027575800/vector/beauty-and-hair-salon-vector-logo-with-woman-face-and-letter-s.jpg?s=612x612&w=0&k=20&c=attZnF6ZZm2X2fyGDDX1z8Qn4S68Bw_dcBd4iLQiFwo=',
    description: 'Where timeless beauty techniques meet contemporary style.',
    services: [
      servicesEnum.WAXING,
      servicesEnum.TATTOO,
      servicesEnum.SKIN_CARE,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 070',
          email: 'chicCharm@gmail.com',
        },
        address: {
          district: 'Centru',
          street: 'Miron Costin 7/5',
        },
        workingSchedule: workingSchedules.SHORT_HOLIDAY_WITH_SUNDAY,
      },
    ],
  },
  {
    id: '4',
    name: 'Divine Glow Spa',
    imageUrl:
      'https://i.pinimg.com/736x/2b/b7/78/2bb7785e27dde4b1803ea05bac837afa.jpg',
    description:
      'Unwind, rejuvenate, and reveal your best self with our holistic treatments.',
    services: [
      servicesEnum.MASSAGE,
      servicesEnum.SKIN_CARE,
      servicesEnum.TANNING,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 071',
          email: 'divineGlow@gmail.com',
        },
        address: {
          district: 'Botanica',
          street: 'Verde 15/3',
        },
        workingSchedule: workingSchedules.SHORT_HOLIDAY_WITHOUT_SUNDAY,
      },
      {
        contact: {
          phone: '0760 90 099',
          email: 'divineGlowwww@gmail.com',
        },
        address: {
          district: 'Buiucani',
          street: 'Alba Iulia 15/3',
        },
        workingSchedule: workingSchedules.STANDARD,
      },
    ],
  },
  {
    id: '5',
    name: 'Elegance Hub',
    imageUrl:
      'https://cdn4.vectorstock.com/i/1000x1000/71/23/beauty-salon-logo-design-with-pink-lovehair-style-vector-36067123.jpg',
    description:
      'Dedicated to elevating beauty and confidence with a blend of traditional and modern services.',
    services: [
      servicesEnum.HAIR_CUTTING,
      servicesEnum.NAIL_TREATMENT,
      servicesEnum.WAXING,
      servicesEnum.MASSAGE,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 072',
          email: 'eleganceHub@gmail.com',
        },
        address: {
          district: 'Riscani',
          street: 'Solar 5/2',
        },
        workingSchedule: workingSchedules.STANDARD,
      },
      {
        contact: {
          phone: '0760 88 073',
          email: 'frescoStyles@gmail.com',
        },
        address: {
          district: 'Ciocana',
          street: 'Piata-alba 3/1',
        },
        workingSchedule: workingSchedules.WITHOUT_HOLIDAY,
      },
    ],
  },
  {
    id: '6',
    name: 'Fresco Styles',
    imageUrl:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/beauty-salon-logo-design-template-5f6bc6eac1eeec50c33a5e4452a69cbd_screen.jpg?ts=1652855217',
    description:
      'A refreshing approach to beauty, ensuring every client feels revitalized.',
    services: [servicesEnum.WAXING, servicesEnum.TATTOO],
    branches: [
      {
        contact: {
          phone: '0760 00 073',
          email: 'frescoStyles@gmail.com',
        },
        address: {
          district: 'Ciocana',
          street: 'Lumii 9/8',
        },
        workingSchedule: workingSchedules.WITHOUT_HOLIDAY,
      },
    ],
  },
  {
    id: '7',
    name: 'Harbor Beauty Lounge',
    imageUrl:
      'https://cdn.dribbble.com/users/8614065/screenshots/16433389/beauty_salon_4x.png',
    description:
      'Experience the union of advanced beauty techniques and relaxation therapies.',
    services: [
      servicesEnum.TANNING,
      servicesEnum.SKIN_CARE,
      servicesEnum.HAIR_CUTTING,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 074',
          email: 'harborBeauty@gmail.com',
        },
        address: {
          district: 'Ciocana',
          street: 'Doinelor 14/8',
        },
        workingSchedule: workingSchedules.SHORT_HOLIDAY_WITH_SUNDAY,
      },
    ],
  },
  {
    id: '8',
    name: 'Illumina Aesthetics',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROE9XdQyJ1nfNSUrmmev95AArcyrwUiMOdJEZcdavC_ybi7-jFZUeBaTl7jHJIhYICdoQ&usqp=CAU',
    description:
      'Where science meets beauty, delivering precision and perfection.',
    services: [
      servicesEnum.TATTOO,
      servicesEnum.NAIL_TREATMENT,
      servicesEnum.WAXING,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 075',
          email: 'illuminaAesthetics@gmail.com',
        },
        address: {
          district: 'Buiucani',
          street: 'Albisoara 5/6',
        },
        workingSchedule: workingSchedules.STANDARD,
      },
    ],
  },
  {
    id: '9',
    name: 'Jade Serenity Spa',
    imageUrl:
      'https://previews.123rf.com/images/butenkow/butenkow1511/butenkow151100071/48324057-beauty-female-face-logo-design-cosmetic-salon-logo-design-creative-woman-face-vector.jpg',
    description:
      'A blend of ancient relaxation rituals and modern beauty practices for holistic rejuvenation.',
    services: [
      servicesEnum.MASSAGE,
      servicesEnum.SKIN_CARE,
      servicesEnum.NAIL_TREATMENT,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 076',
          email: 'jadeSerenity@gmail.com',
        },
        address: {
          district: 'Centru',
          street: 'Lirei 23/4',
        },
        workingSchedule: workingSchedules.SHORT_HOLIDAY_WITHOUT_SUNDAY,
      },
    ],
  },
  {
    id: '10',
    name: 'Kaleidoscope Beauty',
    imageUrl:
      'https://img.myloview.com/posters/beauty-salon-logo-beautiful-woman-portrait-flower-hairstyle-icon-spa-aesthetics-beautician-hair-studio-business-modern-elegant-luxury-glamour-style-face-makeup-cute-blond-female-head-700-270410510.jpg',
    description:
      'A colorful array of beauty treatments to bring out every shade of your beauty.',
    services: [
      servicesEnum.HAIR_CUTTING,
      servicesEnum.WAXING,
      servicesEnum.TANNING,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 077',
          email: 'kaleidoscopeBeauty@gmail.com',
        },
        address: {
          district: 'Botanica',
          street: 'Irisului 10/10',
        },
        workingSchedule: workingSchedules.STANDARD,
      },
    ],
  },
  {
    id: '11',
    name: 'Lavish Luxe Studio',
    imageUrl:
      'https://img.myloview.com/murals/beauty-salon-and-hair-studio-logo-cosmetics-and-spa-icon-beautiful-woman-with-elegant-hairstyle-and-makeup-wearing-a-flower-in-her-hair-long-eyelashes-and-pink-lipstick-700-213692944.jpg',
    description:
      'Embrace luxury in every treatment, designed to make you feel exquisite.',
    services: [
      servicesEnum.NAIL_TREATMENT,
      servicesEnum.MASSAGE,
      servicesEnum.TATTOO,
    ],
    branches: [
      {
        contact: {
          phone: '0760 00 078',
          email: 'lavishLuxe@gmail.com',
        },
        address: {
          district: 'Telecentru',
          street: 'Sperantei 14/6',
        },
        workingSchedule: workingSchedules.WITHOUT_HOLIDAY,
      },
      {
        contact: {
          phone: '0790 11 077',
          email: 'lavishLuxe2@gmail.com',
        },
        address: {
          district: 'Botanica',
          street: 'Padurii 10/10',
        },
        workingSchedule: workingSchedules.STANDARD,
      },
      {
        contact: {
          phone: '0790 12 077',
          email: 'lavishLuxe44@gmail.com',
        },
        address: {
          district: 'Centru',
          street: 'Ismail 9/10',
        },
        workingSchedule: workingSchedules.STANDARD,
      },
    ],
  },
];
