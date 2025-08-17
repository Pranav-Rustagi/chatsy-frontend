import { Avatar, Button, ChatItem, SearchBar } from "@/components";
import { useState } from "react";
import Image from "next/image";


interface ChatSidebarProps {
    setSidebarState: (state: "chats" | "new-chat" | "add-new-chat") => void;
    sidebarState: "chats" | "new-chat" | "add-new-chat";
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ setSidebarState, sidebarState }) => {
    const [searchText, setSearchText] = useState<string>("");
    const [activeChat, setActiveChat] = useState<string | null>(null);
    

    return (
        <div className={`transition-all h-full flex flex-col min-w-[400px] max-w-[400px] border-r-[0.5px] border-chatsy-navbar-border bg-chatsy-secondary-bg overflow-hidden z-[500] duration-500 ${sidebarState === "chats" ? "opacity-100" : "opacity-0"}`}>
            <div className="flex justify-between w-full items-center px-5 z-50 pt-5 pb-2">
                <div className="flex items-center gap-5">
                    <Image
                        src="/icons/logo.png"
                        alt="Chatsy Logo"
                        height="0" width="0"
                        sizes="100vw"
                        className="h-9 w-auto"
                    />

                    <span>Chatsy</span>
                </div>

                <Button
                    icon={{
                        src: "/icons/add-chat.png",
                        alt: "Add chat",
                        classes: "invert-(--chatsy-black-icon-invert) opacity-70"
                    }}
                    className="bg-transparent aspect-square rounded-full !p-2 hover:bg-chatsy-tertiary-bg"
                    onClick={() => {
                        if (setSidebarState) {
                            setSidebarState("new-chat");
                        }
                    }}
                />
            </div>

            <div className="flex gap-3 bg-chatsy-secondary-bg z-50 p-5">
                <SearchBar searchText={searchText} setSearchText={setSearchText} />
            </div>


            <div className="flex flex-col gap-3 p-5 pb-0">
                <div className="flex justify-between items-center pb-1">
                    <span className="text-sm font-semibold">Online now</span>
                    <button className="text-xs text-chatsy-text-dark px-2 py-1 bg-chatsy-tertiary-light rounded-full text-chatsy-text-2xs opacity-90">
                        Show all
                    </button>
                </div>
                <div className="flex gap-3 items-center overflow-hidden">
                    {
                        Array.from({ length: 10 }, (_, index) => (
                            <Button className="!p-0" key={`online-user-${index}`}>
                                <Avatar
                                    key={index}
                                    src={`/avatars/avatar${index % 13 + 1}.jpg`}
                                    alt={`User ${index + 1}`}
                                    active
                                />
                            </Button>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col pt-5 overflow-hidden pr-1">
                <div className="flex justify-between items-center px-5 z-50 pt-5 pb-1 mb-2">
                    <span className="text-sm font-semibold">Messages</span>
                    <button className="text-xs text-chatsy-text-dark px-2 py-1 bg-chatsy-tertiary-light rounded-full text-chatsy-text-2xs opacity-90">
                        Requests
                    </button>
                </div>
                <div className="ml-3 mr-1 flex flex-col overflow-y-scroll">
                    <ChatItem 
                        avatarUrl="/avatars/avatar1.jpg"
                        name="User 2"
                        lastMessageText="Last messageLast messagjhklkhhjkjhhjhkjkjhjhkhkhhjkkjhhjkkjjjhehjkhkjhjhjk"
                        lastMessageTIme={new Date()}
                        unreadCount={3}
                        isActive={activeChat === "user2"}
                        onClick={() => setActiveChat("user2")}
                    />                    
                </div>
            </div>
        </div>
    )
}

export default ChatSidebar;