import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Award, CheckCircle, Clock, Heart, Shield, Smartphone, Star, TrendingUp, Zap } from 'lucide-react';

function LandingPage() {
    const testimonials = [
        {
            quote: 'I finally got a Google review from a client who always forgets!',
            author: 'Martin',
            role: 'Electrician',
            rating: 5,
        },
        {
            quote: 'My review count went from 3 to 47 in just 2 months. Game changer!',
            author: 'Sarah',
            role: 'Plumber',
            rating: 5,
        },
        {
            quote: 'So simple even my dad could use it. Clients love how professional it looks.',
            author: 'Jake',
            role: 'Carpenter',
            rating: 5,
        },
    ];

    const features = [
        {
            icon: Smartphone,
            title: 'Works on Any Phone',
            description: 'No apps to download. Works instantly on iOS and Android.',
        },
        {
            icon: Clock,
            title: 'Setup in Minutes',
            description: 'Get your review card ready in under 5 minutes. No tech skills needed.',
        },
        {
            icon: Shield,
            title: 'Lifetime Hosting',
            description: 'Your card works forever. No monthly fees or subscriptions.',
        },
    ];

    const platforms = ['Google Business', 'Facebook', 'Yelp', 'Trustpilot', 'Apple Maps', 'Custom URL'];

    return (
        <>
            <Head title="LandingPage">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                {/* Hero Section */}
                <section className="relative overflow-hidden px-6 py-20">
                    <div className="mx-auto max-w-6xl text-center">
                        <div className="mb-6">
                            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Trusted by 500+ Tradespeople
                            </span>
                        </div>

                        <h1 className="mb-6 text-5xl leading-tight font-bold text-slate-900 md:text-7xl">
                            Get More Reviews,
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Without Lifting a Finger
                            </span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">
                            📲 A digital review card built for tradespeople who just want the job done—and done well.
                        </p>

                        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-700">
                            Turn happy clients into glowing online reviews in 30 seconds. No tech skills, no apps—just a simple card that works.
                        </p>

                        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href="/create">
                                <Button className="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                                    Create Your Card Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/create">
                                <Button
                                    variant="outline"
                                    className="rounded-xl border-2 border-slate-300 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
                                >
                                    See Demo
                                </Button>
                            </Link>
                        </div>

                        <div className="mx-auto max-w-4xl rounded-2xl bg-white/70 p-8 shadow-xl backdrop-blur-sm">
                            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                                <div>
                                    <div className="mb-2 text-3xl font-bold text-slate-900">£27</div>
                                    <div className="text-slate-600">One-time payment</div>
                                </div>
                                <div>
                                    <div className="mb-2 text-3xl font-bold text-slate-900">30s</div>
                                    <div className="text-slate-600">Customer review time</div>
                                </div>
                                <div>
                                    <div className="mb-2 text-3xl font-bold text-slate-900">6+</div>
                                    <div className="text-slate-600">Review platforms</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="bg-white/50 px-6 py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">✅ How It Works</h2>
                            <p className="text-xl text-slate-600">Three simple steps to review success</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                {
                                    step: '1',
                                    title: 'Finish the job',
                                    description: 'Complete your work like you always do. Quality first, reviews second.',
                                    icon: CheckCircle,
                                },
                                {
                                    step: '2',
                                    title: 'Ask customer to scan',
                                    description: 'Show them your card and ask them to scan the QR code with their phone.',
                                    icon: Smartphone,
                                },
                                {
                                    step: '3',
                                    title: 'They leave a review',
                                    description: 'Customer chooses their preferred platform and leaves a review. Done!',
                                    icon: Star,
                                },
                            ].map((item, index) => (
                                <Card
                                    key={index}
                                    className="group overflow-hidden rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                                >
                                    <CardContent className="p-8 text-center">
                                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                                            {item.step}
                                        </div>
                                        <item.icon className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                                        <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
                                        <p className="leading-relaxed text-slate-600">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-2xl font-semibold text-slate-900">It's that easy.</p>
                        </div>
                    </div>
                </section>

                {/* Built for Tradespeople */}
                <section className="px-6 py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">🔧 Built for Tradespeople</h2>
                            <p className="text-xl text-slate-600">No complicated tech. Just results.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {features.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                                >
                                    <CardContent className="p-8 text-center">
                                        <feature.icon className="mx-auto mb-6 h-16 w-16 text-blue-600" />
                                        <h3 className="mb-4 text-xl font-bold text-slate-900">{feature.title}</h3>
                                        <p className="leading-relaxed text-slate-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Reviews Matter */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-white">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold md:text-5xl">🌟 Why Reviews Matter</h2>
                            <p className="text-xl text-blue-100">Your reputation is your best marketing tool</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                {
                                    icon: TrendingUp,
                                    title: 'Stand out in Google search',
                                    description: 'More reviews = higher rankings = more customers finding you',
                                },
                                {
                                    icon: Shield,
                                    title: 'Build trust with new customers',
                                    description: "Social proof that shows you're reliable and professional",
                                },
                                {
                                    icon: Award,
                                    title: 'Win more quotes',
                                    description: 'Verified testimonials help you beat the competition',
                                },
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <item.icon className="mx-auto mb-6 h-16 w-16 text-blue-200" />
                                    <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                                    <p className="leading-relaxed text-blue-100">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What's Included */}
                <section className="bg-white/50 px-6 py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">📦 What's Included</h2>
                            <p className="text-xl text-slate-600">Everything you need to start collecting reviews</p>
                        </div>

                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                            <div className="space-y-6">
                                {[
                                    'Your own branded digital review card',
                                    'QR code linked to your review platforms',
                                    'Custom logo and business info',
                                    'Lifetime hosting (no monthly fees)',
                                    'Works with 6+ review platforms',
                                    '1 revision/update included',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <CheckCircle className="h-6 w-6 flex-shrink-0 text-emerald-500" />
                                        <span className="text-lg text-slate-700">{item}</span>
                                    </div>
                                ))}

                                <div className="mt-8 rounded-xl bg-gradient-to-r from-emerald-50 to-blue-50 p-6">
                                    <h4 className="mb-4 font-bold text-slate-900">Supported Platforms:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {platforms.map((platform, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                                <span className="text-slate-700">{platform}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white/70 p-8 shadow-xl backdrop-blur-sm">
                                <div className="mb-6 text-center">
                                    <div className="mb-2 text-5xl font-bold text-slate-900">£27</div>
                                    <div className="text-lg text-slate-600">One-time payment</div>
                                    <div className="font-semibold text-emerald-600">No subscriptions ever</div>
                                </div>

                                <Link href="/create">
                                    <Button className="mb-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                                        Get Your Review Card
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <div className="mb-4 text-center text-sm text-slate-500">Optional Add-ons:</div>
                                <div className="space-y-2 text-sm text-slate-600">
                                    <div>• Physical printed QR card: £12</div>
                                    <div>• Review reminder templates: £5</div>
                                    <div>• Extra platforms/revisions: £3 each</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="px-6 py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">💬 What Trades Say</h2>
                            <p className="text-xl text-slate-600">Real results from real tradespeople</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                                >
                                    <CardContent className="p-8">
                                        <div className="mb-4 flex">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                                            ))}
                                        </div>
                                        <blockquote className="mb-6 leading-relaxed text-slate-700 italic">"{testimonial.quote}"</blockquote>
                                        <div className="flex items-center">
                                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-lg font-bold text-white">
                                                {testimonial.author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-slate-900">{testimonial.author}</div>
                                                <div className="text-sm text-slate-600">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-r from-slate-900 to-blue-900 px-6 py-20 text-white">
                    <div className="mx-auto max-w-4xl text-center">
                        <Heart className="mx-auto mb-6 h-16 w-16 text-red-400" />
                        <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ready to Turn Customers Into Fans?</h2>
                        <p className="mb-8 text-xl leading-relaxed text-blue-100">
                            Join hundreds of tradespeople who've transformed their online reputation with just one simple card.
                        </p>
                        <Link href="/create">
                            <Button className="transform rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 px-12 py-4 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-blue-600 hover:shadow-xl">
                                <Zap className="mr-2 h-6 w-6" />
                                Create Your Card Now - £27
                            </Button>
                        </Link>
                        <p className="mt-4 text-sm text-blue-200">30-day money-back guarantee</p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default LandingPage;
