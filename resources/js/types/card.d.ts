export interface BusinessInfo {
    name: string;
    website: string;
    logo: File | null;
    description: string;
}

export interface Platform {
    id: string;
    name: string;
    url: string;
}

export interface CardPreviewProps {
    businessInfo: BusinessInfo;
    platforms: Platform[];
    primaryPlatform: string;
    selectedDesign?: string;
}

export interface LivePreviewCardProps {
    businessInfo: BusinessInfo;
    platforms: Platform[];
    primaryPlatform: string;
    selectedDesign: string;
}
