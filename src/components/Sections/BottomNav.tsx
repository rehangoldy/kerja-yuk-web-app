import { Home, Calendar, LogOut, FileText, Settings } from 'lucide-react';

export function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="container mx-auto max-w-lg">
        <div className="flex justify-between items-center p-4">
          <button className="flex flex-col items-center text-red-500">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Calendar className="w-6 h-6" />
            <span className="text-xs mt-1">Attendance</span>
          </button>
          <button className="flex flex-col items-center -mt-8">
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white">
              <LogOut className="w-8 h-8" />
            </div>
            <span className="text-xs mt-1 text-red-500">Check Out</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <FileText className="w-6 h-6" />
            <span className="text-xs mt-1">Form</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Settings className="w-6 h-6" />
            <span className="text-xs mt-1">Setting</span>
          </button>
        </div>
      </div>
    </div>
  );
}
