interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
    active?: boolean;
    className?: string;
}

const Avatar = ({ src, alt, size = 50, active = false, className = "" }: AvatarProps) => {
    return (
        <div
            className={`${className} relative rounded-full flex-none items-center justify-center z-[100]`}
            style={{
                height: `${size}px`,
                width: `${size}px`,
            }}
        >
            <img
                src={src}
                alt={alt}
                className="rounded-full h-full w-full"
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