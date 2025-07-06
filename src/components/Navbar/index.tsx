import Image from "next/image";
import { Button, NavButton } from "@/components";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-between items-center min-w-[80px] max-w-[70px] bg-chatsy-tertiary-bg border-r-[0.5px] border-chatsy-navbar-border py-7 relative z-[1000]">
            <div className="flex flex-col gap-5 items-center p-1 rounded-full">
                <NavButton
                    actionPath="/viora"
                    srcPrefix="ai"
                    alt="viora ai"
                    text="Viora"
                />

                <NavButton
                    actionPath="/chats"
                    srcPrefix="chats"
                    alt="chats"
                    text="Chats"
                />

                <NavButton
                    actionPath="calls"
                    srcPrefix="call"
                    alt="calls"
                    text="Calls"
                />
            </div>
            <div className="flex flex-col gap-3 items-center">
                <Button
                    className={"bg-transparent aspect-square rounded-full !p-2"}
                    onClick={() => router.replace('/settings')}
                >
                    <Image
                        src="/icons/settings-inactive.png"
                        alt="Settings"
                        className="opacity-40 invert-(--chatsy-black-icon-invert)"
                        width={28} height={28}
                    />
                </Button>

                <Button
                    className={"bg-transparent aspect-square rounded-full !p-2"}
                    onClick={() => router.replace('/logout')}
                >
                    <Image
                        src="/icons/logout.png"
                        alt="Settings"
                        className="opacity-40 invert-(--chatsy-black-icon-invert)"
                        width={28} height={28}
                    />
                </Button>
            </div>
        </div>
    )
}

export default Navbar;