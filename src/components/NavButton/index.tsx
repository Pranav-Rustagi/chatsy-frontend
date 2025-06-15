import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";

interface NavButtonProps {
    actionPath: string;
    srcPrefix: string;
    alt: string;
    size?: number;
    text?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ actionPath,  srcPrefix, alt, size = 20, text = '' }) => {
    const router = useRouter();
    const isActive = router.pathname === actionPath;

    return (
        <Button
            className={`group !relative aspect-square !p-4 flex flex-col !rounded-full ${isActive ? 'bg-chatsy-orange' : 'bg-chatsy-secondary-bg'}`}
            onClick={() => router.replace(actionPath)}
        >
            <Image
                src={`/icons/${srcPrefix}-${isActive ? 'active' : 'inactive'}.png`}
                alt={alt}
                className={isActive ? 'invert-(--chatsy-invert-1)' : 'opacity-50 invert-(--chatsy-black-icon-invert)'}
                width={size} height={size}
            />
        </Button>
    )
}

export default NavButton;