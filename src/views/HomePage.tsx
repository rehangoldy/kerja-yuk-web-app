import { Header } from "../components/Sections/Header"
import { ProfileInfo } from "../components/Modules/ProfileInfo"
import { ActivitySection } from "../components/Sections/ActivitySection"
import { NewsSection } from "../components/Sections/NewsSection"
import { OnlineUsers } from "../components/Sections/OnlineUser"
import { BottomNav } from "../components/Sections/BottomNav"


export function HomePage() {

    const mockNews = [
        {
            avatar: '/images/3.png',
            name: 'Ana Riswati',
            date: 'Senin, 30 Mei 2022',
            content: [
                'Kalimat 1 - Lorem ipsum dolor sit amet consec',
                'Kalimat 2 - Lorem ipsum dolor sit amet consec',
                'Kalimat 3 - Lorem ipsum dolor sit amet consec',
                'Kalimat 4 - Lorem ipsum dolor sit amet consec',
            ]
        },
        {
            avatar: '/images/3.png',
            name: 'John Doe',
            date: 'Selasa, 31 Mei 2022',
            content: [
                'Kalimat 1 - Consectetur adipiscing elit',
                'Kalimat 2 - Sed do eiusmod tempor incididunt',
                'Kalimat 3 - Ut labore et dolore magna aliqua',
            ]
        },
        {
            avatar: '/images/3.png',
            name: 'Jane Smith',
            date: 'Rabu, 1 Juni 2022',
            content: [
                'Kalimat 1 - Ut enim ad minim veniam',
                'Kalimat 2 - Quis nostrud exercitation ullamco',
                'Kalimat 3 - Laboris nisi ut aliquip ex ea commodo',
                'Kalimat 4 - Duis aute irure dolor in reprehenderit',
            ]
        }
    ];

    const mockOnlineUsers = [
        { id: '1', name: 'Jefril', role: 'Staff', avatar: '/images/3.png', },
        { id: '2', name: 'Zasami', role: 'BDD', avatar: '/images/3.png', },
        { id: '3', name: 'Sam', role: 'Staff', avatar: '/images/3.png', },
        { id: '4', name: 'Aldo', role: 'Staff', avatar: '/images/3.png', },
        { id: '5', name: 'Erwin', role: 'Staff', avatar: '/images/3.png', },
        { id: '6', name: 'Arye', role: 'BDD', avatar: '/images/3.png', },
    ];

    const getGreeting = () => {
        const hour = new Date().getHours();
        
        if (hour >= 3 && hour < 11) return "Selamat Pagi";
        if (hour >= 11 && hour < 15) return "Selamat Siang";
        if (hour >= 15 && hour < 18) return "Selamat Sore";
        return "Selamat Malam";
    };

    return (

        <div className="min-h-screen bg-gray-50 pb-24">
            <Header />
            <main className="container mx-auto max-w-lg">
                <div className="p-4">
                    <h1 className="text-xl mb-4">Hi, {getGreeting()}!</h1>
                    <ProfileInfo
                        name="Tabay"
                        role="UI/UX Designer"
                        location="Kantor Sahid"
                        memberSince="01 Juni 2021"
                        avatarUrl="/images/1.png"
                    />
                </div>
                <ActivitySection />
                <NewsSection news={mockNews} />
                <OnlineUsers users={mockOnlineUsers} />
            </main>
            <BottomNav />
        </div>

    )
}