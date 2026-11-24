export interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: 'ashlesha' | 'hiren' | 'together' | 'special';
  caption: string;
  tag?: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export const galleryPhotos: PhotoItem[] = [
  {
    id: 'together-1',
    src: '/photos/1.jpeg',
    title: 'Together in Pure Elegance',
    category: 'together',
    caption: 'Every time we stand side by side, everything else just fades away.',
    tag: 'Our Togetherness',
    aspect: 'tall'
  },
  {
    id: 'together-2',
    src: '/photos/2.jpeg',
    title: 'Warmth of Our Love',
    category: 'together',
    caption: 'Wrapped in the sweetest bond and unconditional warmth.',
    tag: 'Our Togetherness',
    aspect: 'tall'
  },
  {
    id: 'together-3',
    src: '/photos/3.jpeg',
    title: 'Cherished Laughter',
    category: 'together',
    caption: 'With you, every laugh is heartfelt and every glance is a celebration.',
    tag: 'Our Togetherness',
    aspect: 'tall'
  },
  {
    id: 'together-4',
    src: '/photos/4.jpeg',
    title: 'Stealing Hearts',
    category: 'together',
    caption: 'Holding onto each other, dreaming of our wonderful forever.',
    tag: 'Our Togetherness',
    aspect: 'tall'
  },
  {
    id: 'together-5',
    src: '/photos/5.jpeg',
    title: 'The Golden Radiance',
    category: 'together',
    caption: 'When two hearts unite, every frame looks royal and divine.',
    tag: 'Our Togetherness',
    aspect: 'tall'
  },
  {
    id: 'together-6',
    src: '/photos/6.jpeg',
    title: 'Forever Yours',
    category: 'together',
    caption: 'A glimpse of true devotion, companionship and pure love.',
    tag: 'Our Togetherness',
    aspect: 'tall'
  },
  {
    id: 'together-7',
    src: '/photos/7.jpeg',
    title: 'Sweet Moments',
    category: 'together',
    caption: 'Together, life feels like the most poetic song ever written.',
    tag: 'Our Togetherness',
    aspect: 'tall'
  },
  {
    id: 'ash-1',
    src: '/photos/11.jpeg',
    title: 'Her Beautiful Grace',
    category: 'ashlesha',
    caption: 'The way your eyes speak, and that gentle smile that stole my heart completely.',
    tag: "Ashlesha's Moments",
    aspect: 'tall'
  },
  {
    id: 'ash-2',
    src: '/photos/12.jpeg',
    title: 'Poetry in Motion',
    category: 'ashlesha',
    caption: 'Pure elegance, timeless charm, and the prettiest woman in my world.',
    tag: "Ashlesha's Moments",
    aspect: 'tall'
  },
  {
    id: 'ash-3',
    src: '/photos/22.jpeg',
    title: 'Radiant Janudii',
    category: 'ashlesha',
    caption: 'Your warmth and natural grace brighten even my dullest days.',
    tag: "Ashlesha's Moments",
    aspect: 'tall'
  },
  {
    id: 'ash-4',
    src: '/photos/32.jpeg',
    title: 'Queen of My Heart',
    category: 'ashlesha',
    caption: 'Elegance personified. A soul as pure and beautiful as her smile.',
    tag: "Ashlesha's Moments",
    aspect: 'tall'
  },
  {
    id: 'ash-5',
    src: '/photos/44.jpeg',
    title: 'Innocent & Sweet',
    category: 'ashlesha',
    caption: 'That captivating smile that makes time stop.',
    tag: "Ashlesha's Moments",
    aspect: 'tall'
  },
  {
    id: 'ash-6',
    src: '/photos/777.jpeg',
    title: 'My Forever Muse',
    category: 'ashlesha',
    caption: 'Seeing you happy is my favourite feeling in this entire universe.',
    tag: "Ashlesha's Moments",
    aspect: 'tall'
  },
  {
    id: 'hiren-1',
    src: '/photos/222.jpeg',
    title: 'The Man in Love',
    category: 'hiren',
    caption: 'Always looking forward to building our grand future together.',
    tag: "Hiren's Moments",
    aspect: 'tall'
  },
  {
    id: 'hiren-2',
    src: '/photos/333.jpeg',
    title: 'Devoted to You',
    category: 'hiren',
    caption: 'Every thought, every dream, and every heartbeat is dedicated to you.',
    tag: "Hiren's Moments",
    aspect: 'tall'
  },
  {
    id: 'hiren-3',
    src: '/photos/444.jpeg',
    title: 'Standing Strong For You',
    category: 'hiren',
    caption: 'Your protector, your best friend, and your biggest cheerleader always.',
    tag: "Hiren's Moments",
    aspect: 'tall'
  },
  {
    id: 'special-1',
    src: '/photos/1111.jpeg',
    title: 'Our Sacred Connection',
    category: 'special',
    caption: 'Those magical unscripted glances where words are never needed.',
    tag: 'Special Memories',
    aspect: 'tall'
  },
  {
    id: 'special-2',
    src: '/photos/111111.jpeg',
    title: 'Written in The Stars',
    category: 'special',
    caption: 'Bhagwan ne humein ek doosre ke liye hi banaya hai.',
    tag: 'Special Memories',
    aspect: 'tall'
  },
  {
    id: 'special-3',
    src: '/photos/555.jpeg',
    title: 'A Bond Beyond Words',
    category: 'special',
    caption: 'Creating memories that we will look back at with a million smiles.',
    tag: 'Special Memories',
    aspect: 'tall'
  },
  {
    id: 'special-4',
    src: '/photos/WhatsApp Image 2026-11-24 at 6.21.05 PM.jpeg',
    title: 'Unfiltered Happiness',
    category: 'special',
    caption: 'Real, candid, and infinitely cherished moments together.',
    tag: 'Special Memories',
    aspect: 'square'
  },
  {
    id: 'special-5',
    src: '/photos/WhatsApp Image 2026-11-24 at 6.21.06 PM.jpeg',
    title: 'The Journey of Love',
    category: 'special',
    caption: 'From our very first meet to eternity, walking hand in hand.',
    tag: 'Special Memories',
    aspect: 'tall'
  }
];

export interface Milestone {
  date: string;
  title: string;
  hindiQuote: string;
  englishSub: string;
  iconName: string;
  image?: string;
}

export const milestones: Milestone[] = [
  {
    date: '5 July 2026',
    title: 'The First Meeting',
    hindiQuote: 'Our arranged meeting, but something felt special from the very beginning. Dil mein feeling aa gayi thi ki humari jodi zaroor jamegi.',
    englishSub: 'The destiny whispered its first promise when our paths crossed.',
    iconName: 'Sparkles',
    image: '/photos/1.jpeg'
  },
  {
    date: '12 July 2026',
    title: 'The First Message',
    hindiQuote: "Just one little 'hey' on Instagram... and slowly, a beautiful story started.",
    englishSub: 'A single greeting that opened the door to our shared universe.',
    iconName: 'MessageCircleHeart',
    image: '/photos/11.jpeg'
  },
  {
    date: '26 July 2026',
    title: 'Our First Video Call',
    hindiQuote: 'The first time we saw each other on video call. A new kind of closeness began.',
    englishSub: 'Miles away, yet right in front of my eyes. A new rhythm began.',
    iconName: 'Video',
    image: '/photos/2.jpeg'
  },
  {
    date: '6 September 2026',
    title: 'Our Engagement',
    hindiQuote: 'The day I kneeled down to put the ring on your finger. One of the most special moments of our lives.',
    englishSub: 'A lifelong pledge sealed with gold and eternal promise.',
    iconName: 'HeartHandshake',
    image: '/photos/5.jpeg'
  },
  {
    date: '8 September 2026',
    title: 'Our First Outing',
    hindiQuote: '3 PM to 7 PM. We went out together, got lost on the wrong road, got a little परेशान, and then sat in a garden talking for hours. Sometimes the simplest moments become the most beautiful memories.',
    englishSub: 'Lost on the road, but finding our forever in each other.',
    iconName: 'Compass',
    image: '/photos/3.jpeg'
  }
];

export const dreamGoals = [
  {
    title: 'Always Together & Supporting',
    desc: 'Standing beside each other through thick and thin, celebrating triumphs and comforting each other in every season of life.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Building Our Dream Home',
    desc: 'Milkar ghar sambhalna, turning every corner into a sanctuary of warmth, laughter and peace.',
    icon: 'Home'
  },
  {
    title: 'Travelling & Exploring',
    desc: 'Holding hands while wandering through new cities, scenic landscapes and uncovering hidden wonders together.',
    icon: 'Plane'
  },
  {
    title: 'Eating & Little Joys',
    desc: 'Late-night chai, exploring delicious foods, cooking together and cherishing the simplest everyday conversations.',
    icon: 'Coffee'
  },
  {
    title: 'Achieving Our Dreams',
    desc: 'Being each other’s pillar of strength so we both soar high in our careers, passions and aspirations.',
    icon: 'TrendingUp'
  },
  {
    title: 'Our Little Family',
    desc: 'A happy, cheerful home filled with love — one sweet little princess and one energetic little champ.',
    icon: 'Baby'
  },
  {
    title: 'Memories With Bike, Car & Home',
    desc: 'Long drives in our car, windy evening bike rides, and cozy nights in our home with our hearts full.',
    icon: 'Car'
  }
];

export const nicknames = [
  { name: 'Ashhuu', meaning: 'My favorite heartbeat, the melody of my soul' },
  { name: 'Janudii', meaning: 'My life, my happiness and sweetest blessing' },
  { name: 'Darling', meaning: 'The most precious presence in my world' },
  { name: 'Wifey', meaning: 'My forever partner, my pride and lifelong love' }
];
