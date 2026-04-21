import React from 'react';

interface IconProps {
    className?: string;
    svgClassName?: string;
}

// Consultation Icon - Tooth with checkmark
export const ConsultationIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 28L30 32L38 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

// Scaling & Polishing Icon - Tooth with sparkles
export const ScalingIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="6" y1="12" x2="10" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="12" x2="6" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="54" y1="12" x2="58" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="58" y1="12" x2="54" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    </div>
);

// Fillings Icon - Tooth with filled area
export const FillingsIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="32" cy="22" r="4" fill="white" />
        </svg>
    </div>
);

// Root Canal Icon - Tooth with root emphasis
export const RootCanalIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="27" y1="32" x2="27" y2="52" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="37" y1="32" x2="37" y2="52" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    </div>
);

// Teeth Whitening Icon - Tooth with sparkles
export const WhiteningIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="8" y1="20" x2="12" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="12" y1="20" x2="8" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="52" y1="20" x2="56" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="56" y1="20" x2="52" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="8" y1="32" x2="12" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="12" y1="32" x2="8" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    </div>
);

// Extractions Icon - Tooth with extraction tool
export const ExtractionsIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 14C16 14 14 16 14 20C14 24 14 28 14 32C14 36 14 40 16 42C18 44 20 46 22 48C23 50 24 52 24 54C24 56 24 58 25 59C25.5 60 26 61 27 61C28 61 28.5 60 29 59C29.5 58 30 56 30 54C30 52 30 50 31 48C31.5 46.5 32 45 32 44C32 45 32.5 46.5 33 48C34 50 34 52 34 54C34 56 34.5 58 35 59C35.5 60 36 61 37 61C38 61 38.5 60 39 59C40 58 40 56 40 54C40 52 41 50 42 48C44 46 46 44 48 42C50 40 50 36 50 32C50 28 50 24 50 20C50 16 48 14 44 14C40 14 36 18 32 18C28 18 24 14 20 14Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="28" y1="6" x2="36" y2="6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="6" x2="32" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    </div>
);

// X-ray Icon - X-ray symbol
export const XrayIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="12" width="32" height="40" rx="2" stroke="white" strokeWidth="2" />
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            <circle cx="22" cy="16" r="1.5" fill="white" />
            <circle cx="42" cy="16" r="1.5" fill="white" />
        </svg>
    </div>
);

// Crown Icon - Tooth with crown
export const CrownIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 8L24 12L28 8L32 12L36 8L40 12L44 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

// Veneers Icon - Layered tooth
export const VeneersIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 18C18 18 20 14 32 14C44 14 46 18 46 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    </div>
);

// Kids Treatment Icon - Smaller/playful tooth
export const KidsIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="26" cy="22" r="2" fill="white" />
            <circle cx="38" cy="22" r="2" fill="white" />
            <path d="M26 30C26 30 28 32 32 32C36 32 38 30 38 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    </div>
);

// Dentures Icon - Set of teeth
export const DenturesIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20C12 16 14 14 18 14C22 14 24 16 24 20C24 24 24 28 24 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 20C28 16 30 14 34 14C38 14 40 16 40 20C40 24 40 28 40 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M44 20C44 16 46 14 50 14C54 14 56 16 56 20C56 24 56 28 56 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 32C10 32 12 36 32 36C52 36 54 32 54 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 44C12 48 14 50 18 50C22 50 24 48 24 44C24 40 24 36 24 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 44C28 48 30 50 34 50C38 50 40 48 40 44C40 40 40 36 40 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M44 44C44 48 46 50 50 50C54 50 56 48 56 44C56 40 56 36 56 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

// Others Icon - Dental tools
export const OthersIcon: React.FC<IconProps> = ({ className = "w-[85px] h-[85px]", svgClassName = "w-12 h-12" }) => (
    <div className={`bg-[var(--color-navy)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,34,63,0.25)] ${className}`}>
        <svg className={svgClassName} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C16 10 14 12 14 16C14 20 14 24 14 28C14 32 14 36 16 38C18 40 20 42 22 44C23 46 24 48 24 50C24 52 24 54 25 55C25.5 56 26 57 27 57C28 57 28.5 56 29 55C29.5 54 30 52 30 50C30 48 30 46 31 44C31.5 42.5 32 41 32 40C32 41 32.5 42.5 33 44C34 46 34 48 34 50C34 52 34.5 54 35 55C35.5 56 36 57 37 57C38 57 38.5 56 39 55C40 54 40 52 40 50C40 48 41 46 42 44C44 42 46 40 48 38C50 36 50 32 50 28C50 24 50 20 50 16C50 12 48 10 44 10C40 10 36 14 32 14C28 14 24 10 20 10Z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="28" r="3" stroke="white" strokeWidth="2" />
            <line x1="13" y1="28" x2="18" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    </div>
);
