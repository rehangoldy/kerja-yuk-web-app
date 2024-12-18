import { NotificationItem } from "../Modules/NotificationItem";

const notifications = [
    {
        type: 'reimbursement',
        title: 'Reimbursement',
        description: 'Your submission "Lorem ipsum dolor sit amet..." with the" with a total cost of 50,000 has been paid, please check your BRIMO application, Thankyou',
        timestamp: 'Today',
        status: 'approved'
    },
    {
        type: 'reimbursement',
        title: 'Reimbursement',
        description: 'Your submission "description" has been rejected, please click for details.',
        timestamp: 'Yesterday',
        status: 'rejected'
    },
    {
        type: 'reimbursement',
        title: 'Reimbursement',
        description: 'Your submission will be processed according to the reimbursement schedule. Please wait',
        timestamp: '2022-10-06',
        status: 'processing'
    },
    {
        type: 'sickness',
        title: 'Sickness',
        description: 'Your submission has been approved by the Superior.',
        timestamp: '2022-10-05',
        status: 'approved'
    },
    {
        type: 'sickness',
        title: 'Sickness',
        description: 'Your submission has been rejected, please confirm with your Superior.',
        timestamp: '2022-10-05',
        status: 'rejected'
    },
    {
        type: 'sickness',
        title: 'Sickness',
        description: 'Your submission is being reviewed to the Superior for the approval process, please wait.',
        timestamp: '2022-10-05',
        status: 'processing'
    },
    {
        type: 'overtime',
        title: 'Overtime',
        description: 'Your submission has been approved by the Superior.',
        timestamp: '2022-10-05',
        status: 'approved'
    },
    {
        type: 'overtime',
        title: 'Overtime',
        description: 'Your submission has been rejected, please confirm with your Superior.',
        timestamp: '2022-10-05',
        status: 'rejected'
    }
] as const;

export const NotificationList = () => {
    return (
        <div className="flex flex-col">
            {notifications.map((notification, index) => (
                <NotificationItem
                    key={index}
                    type={notification.type}
                    title={notification.title}
                    description={notification.description}
                    timestamp={notification.timestamp}
                    status={notification.status}
                />
            ))}
        </div>

    );
};

