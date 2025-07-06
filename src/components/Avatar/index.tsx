import Image from "next/image";

interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
    active?: boolean;
    className?: string;
    invert?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 50, active = false, className = "", invert = false }: AvatarProps) => {
    return (
        <div
            className={`relative rounded-full flex-none items-center justify-center z-[100] ${className} `}
            style={{
                height: `${size}px`,
                width: `${size}px`,
            }}
        >
            <Image
                src={src}
                alt={alt}
                width="0" height="0"
                sizes="100vw"
                className={`rounded-full h-full w-full ${invert ? "invert-(--chatsy-invert-1)" : ""}`}
            />

            {
                active &&
                (
                    <div className="absolute bg-chatsy-orange rounded-full h-3 w-3 top-0 right-0">
                    </div>
                )
            }
        </div>
    );
}

export default Avatar;