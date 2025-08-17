import { useEffect, useState } from "react";
import { Button, SearchBar, UserItem } from "@/components";
import { UserInfoDataProps } from "@/redux/reducers/userInfo";

interface AddNewChatSidebarProps {
    setSidebarState: (state: "chats" | "new-chat" | "add-new-chat") => void;
    sidebarState: "chats" | "new-chat" | "add-new-chat";
}

const AddNewChatSidebar: React.FC<AddNewChatSidebarProps> = ({ setSidebarState, sidebarState }) => {
    const [searchText, setSearchText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<Array<UserInfoDataProps>>([]);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
            setSearchResults([
                {
                    avatarUrl: "/avatars/avatar1.jpg",
                    username: "User 1",
                    description: "Hey I am using Chatsy, let's connect!",
                    displayName: "John Doe (You)"
                },
                {
                    avatarUrl: "/avatars/avatar2.jpg",
                    username: "User 2",
                    description: "Hello! Let's chat.",
                    displayName: "Jane Smith"
                },
                {
                    avatarUrl: "/avatars/avatar3.jpg",
                    username: "User 3",
                    description: "Looking forward to connecting!",
                    displayName: "Alice Johnson"
                }
            ]);
        }, 1500);

        return () => clearTimeout(timer);
    }, [searchText, setLoading]);


    return (
        <div className={`transition-all absolute flex flex-col h-full min-w-[400px] max-w-[400px] border-r-[0.5px] border-chatsy-navbar-border bg-chatsy-secondary-bg overflow-hidden pt-3 z-[700] duration-500 ${sidebarState !== "add-new-chat" ? '-left-full opacity-0' : 'left-0 opacity-100'}`}>
            <div className="flex pt-3 pb-2 px-5 items-center gap-2">
                <Button
                    className="bg-transparent aspect-square rounded-full !p-2 hover:bg-chatsy-tertiary-bg"
                    icon={{
                        src: "/icons/back.png",
                        alt: "Back",
                        classes: "invert-(--chatsy-black-icon-invert) !h-5 !w-5 opacity-70"
                    }}
                    onClick={() => {
                        setSidebarState("new-chat");
                    }}
                />
                <span className="text-chatsy-text-main text-sm">New friend</span>
            </div>

            <div className="flex gap-3 bg-chatsy-secondary-bg z-50 p-5">
                <SearchBar searchText={searchText} setSearchText={setSearchText} />
            </div>

            {
                loading ?
                    null :
                    <div className="flex z-50 p-3 pt-0 flex-col overflow-y-scroll">
                        {
                            searchResults.map((userInfo: UserInfoDataProps) => {
                                return (
                                    <UserItem
                                        key={userInfo.username}
                                        avatarUrl={userInfo.avatarUrl as string}
                                        username= {userInfo.username as string}
                                        description= {userInfo.description as string}
                                        name= {userInfo.displayName as string}
                                    />
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default AddNewChatSidebar;