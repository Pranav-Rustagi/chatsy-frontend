import Image from "next/image";

interface ButtonProps {
    children?: React.ReactNode | React.ReactNode[] | string;
    variant?: "sm" | "md" | "lg" | "full";
    icon?: {
        src: string;
        alt: string;
        classes?: string;
    };
    onClick?: () => void;
    className?: string;
}

const Button = ({ children = "Click me", variant = "md", icon, onClick = () => { }, className = "" }: ButtonProps) => {
    const sizeClasses: Record<string, string> = {
        "sm": "px-4 py-2 text-xs font-light",
        "md": "px-4 py-3",
        "lg": "px-5 py-3 text-lg",
        "full": "w-full px-5 py-3 text-lg font-semibold"
    }

    return (
        <button
            className={`bg-chatsy-action-bg text-chatsy-action-text rounded-full cursor-pointer flex justify-center items-center ${sizeClasses?.[variant] || sizeClasses["md"]} ${className}`}
            onClick={onClick}
        >
            {
                icon &&
                (
                    <>
                        <Image
                            src={icon.src}
                            alt={icon.alt}
                            width="0" height="0" sizes="100vw"
                            className={`w-[1.5rem] h-[1.5rem] ${icon.classes || ""}`}
                        />
                        &nbsp;&nbsp;
                    </>
                )
            }
            {children}
        </button>
    )
}

export default Button;