interface ButtonProps {
    children?: React.ReactNode | React.ReactNode[] | string;
    variant?: "sm" | "md" | "lg" | "full";
    onClick?: () => void;
    overrideClasses?: string[];
}

const Button = ({ children = "Click me", variant = "md", onClick = () => {}, overrideClasses = [] }: ButtonProps) => {
    const sizeClasses: Record<string, string> = {
        "sm": "px-4 py-2 text-xs font-light",
        "md": "px-4 py-3",
        "lg": "px-5 py-3 text-lg",
        "full": "w-full px-5 py-3 text-lg font-semibold"
    }

    return (
        <button 
            className={`bg-chatsy-action-bg text-chatsy-action-text rounded-md cursor-pointer flex justify-center items-center ${sizeClasses?.[variant] || sizeClasses["md"]} ${overrideClasses.join(' ')}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;