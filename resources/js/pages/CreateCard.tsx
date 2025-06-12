import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { BusinessInfo, Platform } from '@/types/card';
import { Link } from '@inertiajs/react';
import { ArrowLeft, Eye } from 'lucide-react';
import { useState } from 'react';
import BusinessInfoForm from './BusinessInfoForm';
import CardDesignSelection from './CardDesignSelection';
import CardPreview from './CardPreview';
import LivePreviewCard from './LivePreviewCard';
import PlatformManager from './PlatformManager';

const CreateCard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
        name: '',
        website: '',
        logo: null,
        description: '',
    });
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [primaryPlatform, setPrimaryPlatform] = useState('');
    const [selectedDesign, setSelectedDesign] = useState('design1');

    const steps = [
        { id: 1, title: 'Business Info', completed: businessInfo.name && businessInfo.website },
        { id: 2, title: 'Review Platforms', completed: platforms.length > 0 && primaryPlatform },
        { id: 3, title: 'Card Design', completed: selectedDesign },
        { id: 4, title: 'Preview & Generate', completed: false },
    ];

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <BusinessInfoForm businessInfo={businessInfo} setBusinessInfo={setBusinessInfo} />;
            case 2:
                return (
                    <PlatformManager
                        platforms={platforms}
                        setPlatforms={setPlatforms}
                        primaryPlatform={primaryPlatform}
                        setPrimaryPlatform={setPrimaryPlatform}
                    />
                );
            case 3:
                return <CardDesignSelection selectedDesign={selectedDesign} setSelectedDesign={setSelectedDesign} />;
            case 4:
                return (
                    <CardPreview
                        businessInfo={businessInfo}
                        platforms={platforms}
                        primaryPlatform={primaryPlatform}
                        selectedDesign={selectedDesign}
                    />
                );
            default:
                return null;
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-8 flex items-center">
                    <Link href="/review-dashboard">
                        <Button variant="ghost" className="mr-4 rounded-xl hover:bg-white/70">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Back to Dashboard
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Create New Review Card</h1>
                        <p className="text-slate-600">Build your custom review collection card in 4 easy steps</p>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="mb-8 flex items-center justify-between rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-sm">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-center">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                                    currentStep === step.id
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                        : step.completed
                                          ? 'bg-emerald-500 text-white'
                                          : 'bg-slate-200 text-slate-600'
                                }`}
                            >
                                {step.id}
                            </div>
                            <div className="ml-3">
                                <p className={`text-sm font-medium ${currentStep === step.id ? 'text-blue-600' : 'text-slate-600'}`}>{step.title}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`mx-4 h-1 w-16 rounded-full ${step.completed ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">{renderStepContent()}</div>

                    {/* Live Preview Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-6 rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-slate-900">
                                    <Eye className="mr-2 h-5 w-5" />
                                    Live Preview
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-blue-100 p-4">
                                    <LivePreviewCard
                                        businessInfo={businessInfo}
                                        platforms={platforms}
                                        primaryPlatform={primaryPlatform}
                                        selectedDesign={selectedDesign}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        disabled={currentStep === 1}
                        className="rounded-xl"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                        disabled={currentStep === 4}
                        className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                    >
                        {currentStep === 4 ? 'Generate Card' : 'Next Step'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateCard;
