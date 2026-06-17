export interface DayPlan {
  day: number;
  date: string;
  title: string;
  subtitle: string;
  emoji: string;
  highlights: Highlight[];
  transport?: Transport;
}

export interface Highlight {
  time?: string;
  icon: string;
  title: string;
  description: string;
  duration?: string;
  price?: string;
  tip?: string;
  image?: string;
  link?: string;
}

export interface Transport {
  mode: string;
  from: string;
  to: string;
  duration: string;
  details?: string;
  price?: string;
  link?: string;
}

export interface Hotel {
  name: string;
  city: string;
  nights: number;
  stars: number;
  priceRange: string;
  description: string;
  highlights: string[];
  image: string;
  bookingLinks: { name: string; url: string }[];
  note?: string;
}

export interface Attraction {
  name: string;
  city: string;
  emoji: string;
  description: string;
  tips: string[];
  image: string;
  timeNeeded: string;
  ticketLink?: string;
}

export interface CityVideo {
  city: string;
  embedId: string;
  title: string;
}
