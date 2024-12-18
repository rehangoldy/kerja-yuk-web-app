interface SliderDotProps {
    active: boolean;
    onClick: () => void;
}

export function SliderDot({ active, onClick }: SliderDotProps) {
    return (
        <button
            className={`w-2 h-2 rounded-full mx-1 ${active ? 'bg-red-500' : 'bg-gray-500'}`}
            onClick={onClick}
        />
    )
}