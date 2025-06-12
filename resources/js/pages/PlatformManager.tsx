import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info, Plus, Trash2 } from 'lucide-react';
import React from 'react';

interface Platform {
    id: string;
    name: string;
    url: string;
}

interface PlatformManagerProps {
    platforms: Platform[];
    setPlatforms: (platforms: Platform[]) => void;
    primaryPlatform: string;
    setPrimaryPlatform: (platform: string) => void;
}

const PlatformManager: React.FC<PlatformManagerProps> = ({ platforms, setPlatforms, primaryPlatform, setPrimaryPlatform }) => {
    const platformOptions = ['Google Reviews', 'Yelp', 'Facebook', 'Trustpilot', 'TripAdvisor', 'Amazon', 'Better Business Bureau', 'Other'];

    const addPlatform = () => {
        const newPlatform = {
            id: Date.now().toString(),
            name: '',
            url: '',
        };
        setPlatforms([...platforms, newPlatform]);
    };

    const removePlatform = (id: string) => {
        setPlatforms(platforms.filter((p) => p.id !== id));
        if (primaryPlatform === id) {
            setPrimaryPlatform('');
        }
    };

    const updatePlatform = (id: string, field: 'name' | 'url', value: string) => {
        setPlatforms(platforms.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
    };

    return (
        <Card className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">Review Platforms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Platform List */}
                <div className="space-y-4">
                    {platforms.map((platform) => (
                        <div key={platform.id} className="rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 p-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <Label className="text-sm font-medium text-slate-700">Platform</Label>
                                    <Select value={platform.name} onValueChange={(value) => updatePlatform(platform.id, 'name', value)}>
                                        <SelectTrigger className="mt-2 rounded-xl border-slate-200">
                                            <SelectValue placeholder="Select platform" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {platformOptions.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                    {option}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="text-sm font-medium text-slate-700">Review URL</Label>
                                    <Input
                                        value={platform.url}
                                        onChange={(e) => updatePlatform(platform.id, 'url', e.target.value)}
                                        placeholder="https://..."
                                        className="mt-2 rounded-xl border-slate-200"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="primaryPlatform"
                                        checked={primaryPlatform === platform.id}
                                        onChange={() => setPrimaryPlatform(platform.id)}
                                        className="text-blue-600"
                                    />
                                    <span className="text-sm text-slate-600">Set as primary platform</span>
                                </label>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removePlatform(platform.id)}
                                    className="rounded-xl text-red-600 hover:bg-red-50"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Platform Button */}
                <Button
                    variant="outline"
                    onClick={addPlatform}
                    className="w-full rounded-xl border-dashed border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Review Platform
                </Button>

                {/* Primary Platform Info */}
                {primaryPlatform && (
                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                        <div className="flex items-start space-x-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="mt-0.5 h-5 w-5 text-blue-600" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>This is where the QR code will redirect customers</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <div>
                                <p className="text-sm font-medium text-blue-900">Primary Platform Selected</p>
                                <p className="text-xs text-blue-700">QR code will redirect to this platform first</p>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default PlatformManager;
