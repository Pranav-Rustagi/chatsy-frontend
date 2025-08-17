import { useState } from "react";
import { Button, SearchBar, UserItem } from "@/components";

interface NewChatSidebarProps {
    setSidebarState: (state: "chats" | "new-chat" | "add-new-chat") => void;
    sidebarState: "chats" | "new-chat" | "add-new-chat";
}

const NewChatSidebar: React.FC<NewChatSidebarProps> = ({ setSidebarState, sidebarState }) => {
    const [searchText, setSearchText] = useState<string>("");

    const contacts = [
        {
            profile_picture_src: "/avatars/avatar3.jpg",
            username: "User 3",
            description: "Looking forward to our meeting.",
            name: "Alice Johnson"
        },
        {
            profile_picture_src: "/avatars/avatar4.jpg",
            username: "User 4",
            description: "Let's catch up soon!",
            name: "Rob Smith"
        },
        {
            profile_picture_src: "/avatars/avatar5.jpg",
            username: "User 5",
            description: "Excited to collaborate on this project.",
            name: "Charlie Brown"
        },
        {
            profile_picture_src: "/avatars/avatar6.jpg",
            username: "User 6",
            description: "I love using Chatsy!",
            name: "Eliana Prince"
        },
        {
            profile_picture_src: "/avatars/avatar4.jpg",
            username: "User 4",
            description: "Let's catch up soon!",
            name: "Rob Smith"
        }
    ]

    return (
        <div className={`transition-all absolute flex flex-col h-full min-w-[400px] max-w-[400px] border-r-[0.5px] border-chatsy-navbar-border bg-chatsy-secondary-bg overflow-hidden pt-3 z-[600] duration-500 ${sidebarState !== "new-chat" ? '-left-full opacity-0' : 'left-0 opacity-100'}`}>
            <div className="flex pt-3 pb-2 px-5 items-center gap-2">
                <Button
                    className="bg-transparent aspect-square rounded-full !p-2 hover:bg-chatsy-tertiary-bg"
                    icon={{
                        src: "/icons/back.png",
                        alt: "Back",
                        classes: "invert-(--chatsy-black-icon-invert) !h-5 !w-5 opacity-70"
                    }}
                    onClick={() => {
                        setSidebarState("chats");
                    }}
                />
                <span className="text-chatsy-text-main text-sm">New chat</span>
            </div>

            <div className="flex gap-3 bg-chatsy-secondary-bg z-50 p-5">
                <SearchBar searchText={searchText} setSearchText={setSearchText} />
            </div>

            <div className="flex z-50 p-3 pt-0 flex-col overflow-y-scroll">
                <UserItem
                    avatarUrl="/icons/add-group.png"
                    username="&nbsp;New group"
                    avatarClassName="!rounded-full bg-chatsy-tertiary-bg p-2 !bg-chatsy-orange"
                    isIcon={true}
                />
                <UserItem
                    avatarUrl="/icons/add-user.png"
                    username="&nbsp;New friend"
                    avatarClassName="!rounded-full bg-chatsy-tertiary-bg p-2 !bg-chatsy-orange"
                    isIcon={true}
                    onClick={() => {
                        setSidebarState("add-new-chat");
                    }}
                />
                
                <p className="px-2 text-chatsy-text-main font-semibold opacity-70 mb-2 mt-5">
                    Friends on Chatsy
                </p>

                {
                    Array.from({ length: 26 }).map((_, index) => {
                        const alphabet = String.fromCharCode(65 + index);
                        const filteredContacts = contacts.filter(contact => contact.name.startsWith(alphabet));

                        return (
                            filteredContacts.length > 0 &&
                            <div key={index} className="mt-5">
                                <p className="px-2 text-chatsy-text-main font-semibold opacity-70 mb-2">
                                    {alphabet}
                                </p>
                                {
                                    contacts.filter(contact => contact.name.startsWith(alphabet)).map((contact, index) => {
                                        return (
                                            <UserItem
                                                key={index}
                                                avatarUrl={contact.profile_picture_src}
                                                username={contact.username}
                                                description={contact.description}
                                                name={contact.name}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewChatSidebar;