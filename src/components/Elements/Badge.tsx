interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
    const variantClasses = {
        primary: 'bg-primary text-primary-content',
        secondary: 'bg-secondary text-secondary-conntent'
    };

    return (
        <span className={`${variantClasses[variant]} px-3 py-1 rounded-full text-sm`}>
            {children}
        </span>
    )
}