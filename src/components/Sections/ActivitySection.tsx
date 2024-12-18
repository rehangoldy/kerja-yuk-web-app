import { Clock, LogIn, LogOut } from 'lucide-react';
import { ActivityTimers } from "../Modules/ActivityTimers";

export function ActivitySection() {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Today's activity</h2>
            <div className="flex justify-between items-start">
                <ActivityTimers
                    icon={<LogIn className="w-5 h-5" />}
                    time="08:30"
                    label="Check In"
                />
                <ActivityTimers
                    icon={<Clock className="w-5 h-5" />}
                    time="03:00:00"
                    label="Working Hours"
                />
                <ActivityTimers
                    icon={<LogOut className="w-5 h-5" />}
                    time="--:--"
                    label="Check Out"
                />
            </div>
        </div>
    );
}

