import { StatusIndicator } from '../Elements/StatusIndicator';
import { Coins, Clock, Pill } from 'lucide-react';

type NotificationType = 'reimbursement' | 'sickness' | 'overtime';
type StatusType = 'approved' | 'rejected' | 'processing';

interface NotificationItemProps {
  type: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  status: StatusType;
}

export const NotificationItem = ({
  type,
  title,
  description,
  timestamp,
  status,
}: NotificationItemProps) => {
  const getIcon = () => {
    switch (type) {
      case 'reimbursement':
        return <Coins className="w-6 h-6 text-red-500" />;
      case 'sickness':
        return <Pill className="w-6 h-6 text-red-500" />;
      case 'overtime':
        return <Clock className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <div className="flex gap-3 p-4 bg-white border-b border-gray-100">
      <div className="relative">
        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
          {getIcon()}
        </div>
        <StatusIndicator status={status} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

