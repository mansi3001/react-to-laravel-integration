import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface CardDesignSelectionProps {
    selectedDesign: string;
    setSelectedDesign: (design: string) => void;
}

const CardDesignSelection: React.FC<CardDesignSelectionProps> = ({ selectedDesign, setSelectedDesign }) => {
    const designs = [
        {
            id: 'design1',
            name: 'Classic',
            preview: (
                <div className="rounded-lg border-2 border-slate-200 bg-white p-4">
                    <div className="mb-3 h-8 rounded bg-blue-500"></div>
                    <div className="mx-auto mb-3 h-16 w-16 rounded-lg bg-slate-200"></div>
                    <div className="space-y-2">
                        <div className="h-2 rounded bg-slate-200"></div>
                        <div className="h-2 w-2/3 rounded bg-slate-200"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 'design2',
            name: 'Modern',
            preview: (
                <div className="rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 p-4 text-white">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white/20"></div>
                    <div className="mx-auto mb-3 h-16 w-16 rounded-xl bg-white/80"></div>
                    <div className="space-y-2">
                        <div className="h-2 rounded bg-white/60"></div>
                        <div className="h-2 w-2/3 rounded bg-white/40"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 'design3',
            name: 'Minimal',
            preview: (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-slate-800"></div>
                    <div className="space-y-2">
                        <div className="h-2 rounded bg-slate-300"></div>
                        <div className="h-2 w-3/4 rounded bg-slate-200"></div>
                        <div className="h-2 w-1/2 rounded bg-slate-200"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 'design4',
            name: 'Premium',
            preview: (
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
                    <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-white/20"></div>
                    <div className="mx-auto mb-3 h-16 w-16 rounded-lg bg-white/90"></div>
                    <div className="space-y-2">
                        <div className="h-2 rounded bg-white/80"></div>
                        <div className="h-2 w-2/3 rounded bg-white/60"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 'design5',
            name: 'Neon',
            preview: (
                <div className="relative rounded-lg bg-black p-4 text-white">
                    <div className="mb-3 h-8 rounded bg-gradient-to-r from-cyan-400 to-pink-400"></div>
                    <div className="mx-auto mb-3 h-16 w-16 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-400"></div>
                    <div className="space-y-2">
                        <div className="h-2 rounded bg-cyan-400/60"></div>
                        <div className="h-2 w-2/3 rounded bg-pink-400/60"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 'design6',
            name: 'Nature',
            preview: (
                <div className="rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 p-4 text-white">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white/30"></div>
                    <div className="mx-auto mb-3 h-16 w-16 rounded-2xl bg-white/90"></div>
                    <div className="space-y-2">
                        <div className="h-2 rounded bg-white/70"></div>
                        <div className="h-2 w-2/3 rounded bg-white/50"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 'design7',
            name: 'Sunset',
            preview: (
                <div className="rounded-lg bg-gradient-to-br from-rose-400 via-orange-400 to-yellow-400 p-4 text-white">
                    <div className="mb-3 h-8 rounded-full bg-white/20"></div>
                    <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-white/80"></div>
                    <div className="space-y-2">
                        <div className="h-2 rounded bg-white/60"></div>
                        <div className="h-2 w-2/3 rounded bg-white/40"></div>
                    </div>
                </div>
            ),
        },
        {
            id: 'design8',
            name: 'Ocean',
            preview: (
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-400 p-4 text-white">
                    <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/20"></div>
                    <div className="mx-auto mb-3 h-16 w-16 rounded-2xl bg-white/90"></div>
                    <div className="space-y-2">
                        <div className="h-2 rounded bg-white/80"></div>
                        <div className="h-2 w-2/3 rounded bg-white/60"></div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <Card className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">Choose Card Design</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-6">
                    {designs.map((design) => (
                        <div
                            key={design.id}
                            onClick={() => setSelectedDesign(design.id)}
                            className={`cursor-pointer rounded-xl border-2 p-4 transition-all duration-300 hover:shadow-lg ${
                                selectedDesign === design.id
                                    ? 'border-blue-500 shadow-lg ring-4 ring-blue-100'
                                    : 'border-slate-200 hover:border-slate-300'
                            }`}
                        >
                            <div className="mb-4">{design.preview}</div>
                            <h3 className="text-center font-medium text-slate-900">{design.name}</h3>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CardDesignSelection;
