import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, BarChart3, Eye, Plus, Star, Users } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { title: 'Total Cards', value: '12', icon: BarChart3, change: '+2 this week' },
        { title: 'Total Scans', value: '1,247', icon: Eye, change: '+18% from last week' },
        { title: 'Reviews Generated', value: '89', icon: Star, change: '+12 new reviews' },
        { title: 'Top Platform', value: 'Google', icon: Users, change: '67% of clicks' },
    ];

    const recentCards = [
        { id: 1, name: 'Coffee Corner Cafe', scans: 234, platform: 'Google', created: '2 days ago' },
        { id: 2, name: "Bella's Hair Salon", scans: 156, platform: 'Yelp', created: '1 week ago' },
        { id: 3, name: 'Tech Repair Pro', scans: 89, platform: 'Facebook', created: '2 weeks ago' },
    ];

    return (
        <>
        <Head title="Review Dashboard" />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <Button variant="ghost" className="mr-4 rounded-xl hover:bg-white/70 cursor-pointer">
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Back to Home
                            </Button>
                        </Link>
                        <div>
                            <h1 className="mb-2 text-3xl font-bold text-slate-900">Review Card Dashboard</h1>
                            <p className="text-slate-600">Manage your review collection cards and track performance</p>
                        </div>
                    </div>
                    <Link href="/create">
                        <Button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl cursor-pointer">
                            <Plus className="mr-2 h-5 w-5" />
                            Create New Card
                        </Button>
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                                        <p className="mt-1 text-2xl font-bold text-slate-900">{stat.value}</p>
                                        <p className="mt-2 text-xs text-emerald-600">{stat.change}</p>
                                    </div>
                                    <div className="rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 p-3">
                                        <stat.icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Recent Cards */}
                <Card className="rounded-2xl border-0 bg-white/70 shadow-lg backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-slate-900">Recent Review Cards</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            {recentCards.map((card) => (
                                <div
                                    key={card.id}
                                    className="flex cursor-pointer items-center justify-between rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 p-4 transition-all duration-300 hover:from-slate-100 hover:to-blue-100"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-lg font-bold text-white">
                                            {card.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900">{card.name}</h3>
                                            <p className="text-sm text-slate-600">
                                                Primary: {card.platform} • {card.created}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-slate-900">{card.scans} scans</p>
                                        <p className="text-sm text-slate-600">View Details</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
