import type { LivePreviewCardProps } from '@/types/card';
import { QrCode } from 'lucide-react';
import React from 'react';

const LivePreviewCard: React.FC<LivePreviewCardProps> = ({ businessInfo, platforms, primaryPlatform, selectedDesign }) => {
    const getDesignStyles = () => {
        switch (selectedDesign) {
            case 'design1':
                return {
                    container: 'bg-white rounded-2xl p-6 text-slate-900 border-2 border-slate-200',
                    header: 'bg-blue-500 h-6 rounded mb-4',
                    logo: 'bg-slate-200 text-slate-600',
                    qr: 'bg-slate-100',
                    buttons: 'bg-blue-500 text-white',
                };
            case 'design2':
                return {
                    container: 'bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white',
                    header: 'bg-white/20 h-6 rounded mb-4',
                    logo: 'bg-white/20 text-white',
                    qr: 'bg-white',
                    buttons: 'bg-white/20 text-white hover:bg-white/30',
                };
            case 'design3':
                return {
                    container: 'bg-slate-50 rounded-2xl p-6 text-slate-900 border border-slate-200',
                    header: 'bg-slate-300 h-6 rounded mb-4',
                    logo: 'bg-slate-800 text-white',
                    qr: 'bg-white border border-slate-200',
                    buttons: 'bg-slate-800 text-white hover:bg-slate-700',
                };
            case 'design4':
                return {
                    container: 'bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white relative overflow-hidden',
                    header: 'bg-white/30 h-6 rounded mb-4',
                    logo: 'bg-white/20 text-white',
                    qr: 'bg-white',
                    buttons: 'bg-white/20 text-white hover:bg-white/30',
                };
            case 'design5':
                return {
                    container: 'bg-black rounded-2xl p-6 text-white border border-cyan-400',
                    header: 'bg-gradient-to-r from-cyan-400 to-pink-400 h-6 rounded mb-4',
                    logo: 'bg-gradient-to-br from-cyan-400 to-pink-400 text-white',
                    qr: 'bg-white',
                    buttons: 'bg-gradient-to-r from-cyan-400 to-pink-400 text-white hover:from-cyan-500 hover:to-pink-500',
                };
            case 'design6':
                return {
                    container: 'bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl p-6 text-white',
                    header: 'bg-white/30 h-6 rounded mb-4',
                    logo: 'bg-white/20 text-white',
                    qr: 'bg-white',
                    buttons: 'bg-white/20 text-white hover:bg-white/30',
                };
            case 'design7':
                return {
                    container: 'bg-gradient-to-br from-rose-400 via-orange-400 to-yellow-400 rounded-2xl p-6 text-white',
                    header: 'bg-white/30 h-6 rounded-full mb-4',
                    logo: 'bg-white/20 text-white',
                    qr: 'bg-white',
                    buttons: 'bg-white/20 text-white hover:bg-white/30',
                };
            case 'design8':
                return {
                    container: 'bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-400 rounded-2xl p-6 text-white relative overflow-hidden',
                    header: 'bg-white/30 h-6 rounded mb-4',
                    logo: 'bg-white/20 text-white',
                    qr: 'bg-white',
                    buttons: 'bg-white/20 text-white hover:bg-white/30',
                };
            default:
                return {
                    container: 'bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white',
                    header: 'bg-white/30 h-6 rounded mb-4',
                    logo: 'bg-white/20 text-white',
                    qr: 'bg-white',
                    buttons: 'bg-white/20 text-white hover:bg-white/30',
                };
        }
    };

    const styles = getDesignStyles();
    const displayName = businessInfo.name || 'Your Business';
    const displayDescription = businessInfo.description || 'Share your experience with others!';

    return (
        <div className={`${styles.container} origin-top scale-75 transform text-center`}>
            {/* Decorative header */}
            <div className={styles.header}></div>

            {/* Business Logo Placeholder */}
            <div className={`h-16 w-16 ${styles.logo} mx-auto mb-4 flex items-center justify-center rounded-2xl`}>
                <span className="text-lg font-bold">{displayName.charAt(0)}</span>
            </div>

            {/* Business Name */}
            <h2 className="mb-2 text-lg font-bold">{displayName}</h2>
            <p className="mb-4 text-sm opacity-80">{displayDescription}</p>

            {/* QR Code Placeholder */}
            <div className={`${styles.qr} mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-xl p-4`}>
                <QrCode className="h-20 w-20 text-slate-400" />
            </div>

            {/* Platform Buttons */}
            <div className="space-y-2">
                {platforms.length > 0 ? (
                    platforms.map((platform) => (
                        <div
                            key={platform.id}
                            className={`${styles.buttons} cursor-pointer rounded-lg p-2 text-sm transition-all ${
                                primaryPlatform === platform.id ? 'ring-2 ring-white/50' : ''
                            }`}
                        >
                            <span className="font-medium">{platform.name}</span>
                            {primaryPlatform === platform.id && <span className="ml-2 rounded-full bg-white/30 px-2 py-1 text-xs">Primary</span>}
                        </div>
                    ))
                ) : (
                    <div className={`${styles.buttons} rounded-lg p-2 text-sm opacity-50`}>Add platforms to see them here</div>
                )}
            </div>
        </div>
    );
};

export default LivePreviewCard;
