import Image from "next/image";

interface UserItemProps {
    avatarUrl: string;
    username: string;
    description?: string;
    name?: string;
    avatarClassName?: string;
    isIcon?: boolean;
    onClick?: () => void;
}

const UserItem: React.FC<UserItemProps> = ({ avatarUrl, name, username, description, avatarClassName, isIcon = false, onClick = () => {} }) => {
    return (
        <div 
            className="w-full px-2 relative flex gap-3 items-center border-chatsy-navbar-border py-3 hover:bg-chatsy-tertiary-bg rounded-lg cursor-pointer group"
            onClick={onClick}
        >

            <div className={`relative h-[50px] w-[50px] rounded-full overflow-hidden flex-none items-center justify-center z-[100] ${avatarClassName}`}>
                <Image
                    src={avatarUrl}
                    alt={username}
                    width="0" height="0"
                    sizes="100vw"
                    className={`w-fit ${isIcon ? "invert-(--chatsy-invert-1)" : ""}`}
                />

            </div>

            <div className="flex flex-col gap-1 overflow-hidden">
                <p className="text-sm font-semibold text-chatsy-text-main">
                    {name || username}
                </p>
                {
                    description && description.length > 0 &&
                    <p className="flex gap-2 items-end text-xs text-chatsy-text-main whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {description}
                    </p>
                }
            </div>
        </div>
    )
}

export default UserItem;