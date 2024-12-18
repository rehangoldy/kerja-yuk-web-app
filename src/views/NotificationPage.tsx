import { ArrowLeft } from 'lucide-react';
import { NotificationList } from '../components/Sections/NotificationList';
import { useNavigate } from 'react-router-dom';

export const NotificationPage = () => {
    const navigate = useNavigate();

    return (
        <div className='container mx-auto max-w-lg'>
            <div className="min-h-screen bg-gray-50">
                <header className="bg-white sticky top-0 z-10">
                    <div className="flex items-center p-4 gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-1 hover:bg-gray-100 rounded-full"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <h1 className="text-xl font-semibold text-red-500">Notification</h1>
                    </div>
                </header>
                <main>
                    <NotificationList />
                </main>
            </div>
        </div>

    );
};

