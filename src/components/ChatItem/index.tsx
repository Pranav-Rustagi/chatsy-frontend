import { getLastMessageTimeString } from "@/utilities";
import { Avatar } from "@/components";

interface ChatItemProps {
    isActive?: boolean;
    name: string;
    lastMessageTIme: Date;
    lastMessageText: string;
    unreadCount: number;
    avatarUrl: string;
    onClick?: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ isActive = false, name, lastMessageTIme, lastMessageText, unreadCount, avatarUrl, onClick = () => {} }) => {
    return (
        <div
            className={`w-full px-2 relative flex gap-3 items-center border-chatsy-navbar-border py-3 hover:bg-chatsy-tertiary-bg rounded-lg cursor-pointer ${isActive ? 'bg-chatsy-tertiary-bg' : ''}`}
            onClick={onClick}
        >
            <Avatar src={avatarUrl} alt={name} />
            <div className="w-full flex flex-col gap-1 overflow-hidden">

                <div className="flex items-center gap-2 justify-between">
                    <p className="text-sm font-semibold text-chatsy-text-main  whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {name}
                    </p>
                    <div className="flex mr-2 items-center whitespace-nowrap">
                        <span className="text-chatsy-text-2xs text-chatsy-text-main opacity-70" suppressHydrationWarning>{getLastMessageTimeString(lastMessageTIme)}</span>
                    </div>
                </div>

                <div className="flex gap-2 items-center justify-between">
                    <p className="text-xs text-chatsy-text-main whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {lastMessageText}
                    </p>
                    {
                        unreadCount > 0 &&
                        <div className="mr-2 flex items-center whitespace-nowrap">
                            <span className="text-chatsy-text-2xs text-chatsy-light font-semibold bg-chatsy-orange rounded-full px-2 py-1">{unreadCount}</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatItem;