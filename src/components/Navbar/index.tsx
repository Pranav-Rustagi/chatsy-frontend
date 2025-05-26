import Image from "next/image";
import Avatar from "../Avatar";
import Button from "../Button";

const Navbar = () => {
    return (
        <div className="flex flex-col justify-between items-center min-w-[70px] max-w-[70px] bg-chatsy-secondary-bg border-r-[0.5px] border-chatsy-navbar-border py-7">
            <div className="flex flex-col gap-5 items-center">
                <Button className={"bg-transparent aspect-square rounded-full !p-2 !border-1 border-chatsy-navbar-border"}>
                    <Image
                        src="/icons/ai-active.png"
                        alt="Chats"
                        className="opacity-40 invert-(--chatsy-black-icon-invert)"
                        width={20} height={20}
                    />
                </Button>

                <Button className={"bg-chatsy-orange aspect-square rounded-full !p-2 !border-1 border-chatsy-orange"}>
                    <Image
                        src="/icons/chats-active.png"
                        alt="Chats"
                        className="invert-(--chatsy-invert-1)"
                        width={20} height={20}
                    />
                </Button>

                <Button className={"bg-transparent aspect-square rounded-full !p-2 !border-1 border-chatsy-navbar-border"}>
                    <Image
                        src="/icons/call-active.png"
                        alt="Call Log"
                        className="opacity-40 invert-(--chatsy-black-icon-invert)"
                        width={20} height={20}
                    />
                </Button>

            </div>
            <div className="flex flex-col gap-3 items-center">
                <Button className={"bg-transparent aspect-square rounded-full !p-2"}>
                    <Image
                        src="/icons/settings-active.png"
                        alt="Settings"
                        className="opacity-40 invert-(--chatsy-black-icon-invert)"
                        width={30} height={30}
                    />
                </Button>

                <Avatar
                    src="/avatars/avatar1.jpg"
                    alt="User Display Name"
                    size={40}
                />
            </div>
        </div>
    )
}

export default Navbar;