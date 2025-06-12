import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { CardPreviewProps } from '@/types/card';
import { Copy, Download, QrCode, Share2 } from 'lucide-react';
import React from 'react';

const CardPreview: React.FC<CardPreviewProps> = ({ businessInfo, platforms, primaryPlatform }) => {
    const uniqueUrl = `reviewcards.io/${businessInfo.name.toLowerCase().replace(/\s+/g, '')}123`;

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="space-y-6">
            {/* Final Preview */}
            <Card className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900">Final Preview</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-center text-white">
                        {/* Business Logo Placeholder */}
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20">
                            <span className="text-2xl font-bold">{businessInfo.name.charAt(0)}</span>
                        </div>

                        {/* Business Name */}
                        <h2 className="mb-2 text-2xl font-bold">{businessInfo.name || 'Your Business'}</h2>
                        <p className="mb-6 text-blue-100">{businessInfo.description || 'Share your experience with others!'}</p>

                        {/* QR Code Placeholder */}
                        <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-2xl bg-white p-6">
                            <QrCode className="h-32 w-32 text-slate-400" />
                        </div>

                        {/* Platform Buttons */}
                        <div className="space-y-3">
                            {platforms.map((platform) => (
                                <div
                                    key={platform.id}
                                    className={`cursor-pointer rounded-xl bg-white/20 p-3 transition-all hover:bg-white/30 ${
                                        primaryPlatform === platform.id ? 'ring-2 ring-white' : ''
                                    }`}
                                >
                                    <span className="font-medium">{platform.name}</span>
                                    {primaryPlatform === platform.id && (
                                        <span className="ml-2 rounded-full bg-white/30 px-2 py-1 text-xs">Primary</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Generated Links */}
            <Card className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900">Your Unique Card</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label className="text-sm font-medium text-slate-700">Unique Card URL</Label>
                        <div className="mt-2 flex">
                            <Input value={`https://${uniqueUrl}`} readOnly className="rounded-l-xl border-r-0 focus:z-10" />
                            <Button
                                onClick={() => copyToClipboard(`https://${uniqueUrl}`)}
                                variant="outline"
                                className="rounded-r-xl border-l-0 px-4"
                            >
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700">
                            <Download className="mr-2 h-4 w-4" />
                            Download QR Code
                        </Button>
                        <Button variant="outline" className="flex-1 rounded-xl">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share Card
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardPreview;
