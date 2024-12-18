interface ActivityTimersProps {
    time: string;
    label: string;
    icon: React.ReactNode;
  }
  
  export function ActivityTimers({ time, label, icon }: ActivityTimersProps) {
    return (
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-2">
          {icon}
        </div>
        <span className="font-semibold">{time}</span>
        <span className="text-gray-500 text-sm">{label}</span>
      </div>
    );
  }
  
  