import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { BusinessInfo } from '@/types/card';
import { Upload } from 'lucide-react';
import React from 'react';

interface BusinessInfoFormProps {
    businessInfo: BusinessInfo;
    setBusinessInfo: React.Dispatch<React.SetStateAction<BusinessInfo>>;
}

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({ businessInfo, setBusinessInfo }) => {
    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setBusinessInfo((prev) => ({ ...prev, logo: file }));
    };

    return (
        <Card className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <Label htmlFor="businessName" className="text-sm font-medium text-slate-700">
                        Business Name *
                    </Label>
                    <Input
                        id="businessName"
                        value={businessInfo.name}
                        onChange={(e) => setBusinessInfo((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your business name"
                        className="mt-2 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <Label htmlFor="website" className="text-sm font-medium text-slate-700">
                        Website URL *
                    </Label>
                    <Input
                        id="website"
                        value={businessInfo.website}
                        onChange={(e) => setBusinessInfo((prev) => ({ ...prev, website: e.target.value }))}
                        placeholder="https://yourbusiness.com"
                        className="mt-2 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <Label className="text-sm font-medium text-slate-700">Business Logo</Label>
                    <div className="mt-2 rounded-xl border-2 border-dashed border-slate-300 p-6 text-center transition-colors hover:border-blue-400">
                        <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" id="logo-upload" />
                        <label htmlFor="logo-upload" className="cursor-pointer">
                            <Upload className="mx-auto mb-4 h-12 w-12 text-slate-400" />
                            <p className="text-slate-600">Click to upload logo</p>
                            <p className="mt-1 text-xs text-slate-500">PNG, JPG up to 5MB</p>
                        </label>
                        {businessInfo.logo && <p className="mt-2 text-sm text-emerald-600">✓ {businessInfo.logo.name}</p>}
                    </div>
                </div>

                <div>
                    <Label htmlFor="description" className="text-sm font-medium text-slate-700">
                        Business Description
                    </Label>
                    <Textarea
                        id="description"
                        value={businessInfo.description}
                        onChange={(e) => setBusinessInfo((prev) => ({ ...prev, description: e.target.value }))}
                        placeholder="Brief description of your business..."
                        className="mt-2 min-h-[100px] rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default BusinessInfoForm;
