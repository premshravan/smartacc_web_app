// Central site configuration for SmartAcc
// As per Section 15 of the SmartAcc Website Brief:
// Unknown business facts remain explicit null values. Never use sample production values.

export type ClaimStatus = 'confirmed' | 'reference_pending' | 'proposed';

export interface SiteConfig {
  brandName: string;
  tagline: string;
  supportingDescription: string;
  logoUrl: string;
  location: {
    city: string;
    district: string;
    region: string;
    country: string;
    streetAddress: string | null;
    postalCode: string | null;
  };
  legalEntity: string | null;
  productOwner: string | null;
  canonicalUrl: string | null;
  phoneE164: string | null; // e.g. "+919876543210" if confirmed
  whatsappE164: string | null; // e.g. "919876543210" if confirmed
  email: string | null;
  officeHours: string | null;
  mapsUrl: string | null;
  socialLinks: { platform: string; url: string }[];
  demoIsFree: boolean | null;
  productDeployment: 'unconfirmed' | 'desktop' | 'cloud' | 'hybrid';
}

export const siteConfig: SiteConfig = {
  brandName: 'SmartAcc',
  tagline: 'Smart Billing. Smarter Business.',
  supportingDescription: 'Billing software for retailers, wholesalers, clothing stores, mobile shops, restaurants, and more.',
  logoUrl: `${import.meta.env.BASE_URL}images/smartacc-logo.jpg`,
  location: {
    city: 'Thalassery',
    district: 'Kannur',
    region: 'Kerala',
    country: 'India',
    streetAddress: null, // Pending verification
    postalCode: null,    // Pending verification
  },
  legalEntity: null,     // Not confirmed as a legal fact by default
  productOwner: null,    // Redmango Technologies mentioned, pending confirmation
  canonicalUrl: null,
  phoneE164: null,       // Kept null until verified phone is provided
  whatsappE164: null,    // Kept null until verified WhatsApp is provided
  email: null,           // Kept null until verified email is provided
  officeHours: null,
  mapsUrl: null,
  socialLinks: [
    { platform: 'WhatsApp', url: 'https://wa.me/?text=Hi%20SmartAcc%2C%20I%20would%20like%20to%20know%20more%20about%20your%20billing%20software.' },
    { platform: 'Instagram', url: 'https://instagram.com/' },
    { platform: 'Facebook', url: 'https://facebook.com/' },
  ],
  demoIsFree: null,      // "Request a Demo" used until free demo confirmation
  productDeployment: 'unconfirmed',
};

// Helper to format confirmed location text
export const formatLocation = (): string => {
  const { city, district, region, country } = siteConfig.location;
  return `${city}, ${district} district, ${region}, ${country}`;
};
