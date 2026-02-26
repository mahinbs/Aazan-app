export const Colors = {
  primary: {
    dark: '#1E2A5A',      // Deep navy blue (Main Brand)
    blue: '#243E8F',      // Royal blue (Accent Arrow)
    light: '#3A4D8F',
  },
  secondary: {
    teal: '#1FB5A9',      // Growth Arrow (CTA buttons)
    tealHover: '#169C91', // Hover state
    aqua: '#4DD4C6',      // Light Aqua (Soft Accent)
    aquaLight: '#E0F7F5',
  },
  accent: {
    gold: '#F4B400',      // Graduation Tassel (Premium features)
    goldLight: '#FFF8E1',
  },
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
  text: {
    primary: '#1E2A5A',   // Main text
    secondary: '#5F6C80', // Support text
    muted: '#8A96A3',     // Placeholders/Disabled
    white: '#FFFFFF',
    dark: '#0F172A',
  },
  background: {
    main: '#F8FAFC',      // soft blue-grey white
    card: '#FFFFFF',
    section: '#F1F5F9',
    glass: 'rgba(255, 255, 255, 0.7)',
    navyGlass: 'rgba(30, 42, 90, 0.8)',
  },
  border: {
    default: '#E2E8F0',
    light: '#F1F5F9',
  },
  gradients: {
    primary: ['#1E2A5A', '#243E8F'],
    teal: ['#1FB5A9', '#4DD4C6'],
    gold: ['#F4B400', '#FFD700'],
    surface: ['#FFFFFF', '#F8FAFC'],
  } as const
};
