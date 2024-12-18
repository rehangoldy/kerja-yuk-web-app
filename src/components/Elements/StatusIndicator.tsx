import { Check, X, ArrowRight } from 'lucide-react';

type StatusType = 'approved' | 'rejected' | 'processing';

interface StatusIndicatorProps {
  status: StatusType;
}

export const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'approved':
        return <Check className="w-4 h-4 text-green-500" />;
      case 'rejected':
        return <X className="w-4 h-4 text-red-500" />;
      case 'processing':
        return <ArrowRight className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="absolute -right-1 -bottom-1 bg-white rounded-full p-1">
      {getStatusIcon()}
    </div>
  );
};

