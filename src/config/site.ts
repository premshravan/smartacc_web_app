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
  mapEmbedUrl: string | null;
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
    streetAddress: '2nd Floor, Orange Tower, AVK Nair Road, Near Axis Bank, Pilakool',
    postalCode: '670101',
  },
  legalEntity: null,     // Not confirmed as a legal fact by default
  productOwner: 'Redmango Technologies',
  canonicalUrl: null,
  phoneE164: null,       // Kept null until verified phone is provided
  whatsappE164: null,    // Kept null until verified WhatsApp is provided
  email: null,           // Kept null until verified email is provided
  officeHours: null,
  mapsUrl: 'https://maps.google.com/?q=Redmango+Technologies,+AVK+Nair+Road,+Near+Axis+Bank,+2nd+Floor,+Orange+Tower,+Pilakool,+Thalassery,+Kerala+670101',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3651.9384926817265!2d75.4941652!3d11.7473062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba426518a6167a7%3A0x15caf734cde94569!2sRedmango%20Technologies%2C%20AVK%20Nair%20Road%2C%20Near%20Axis%20Bank%2C%202nd%20Floor%2C%20Orange%20Tower%2C%20Pilakool%2C%20Thalassery%2C%20Kerala%20670101!3m2!1d11.747306199999999!2d75.4941652!5e1!3m2!1sen!2sin!4v1790994010495!5m2!1sen!2sin',
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
