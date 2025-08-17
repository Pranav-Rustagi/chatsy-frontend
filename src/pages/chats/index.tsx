import Head from "next/head";
import { AddNewChatSidebar, ChatBox, ChatSidebar, NewChatSidebar } from "@/components";
import { useState } from "react";

const ChatsPage = () => {
    const [sidebarState, setSidebarState] = useState<"chats" | "new-chat" | "add-new-chat">("chats");

    return (
        <>
            <Head>
                <title>Chatsy - Chats</title>
            </Head>

            <div className="flex flex-row w-full h-full relative">
                <NewChatSidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
                <AddNewChatSidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
                <ChatSidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
                <ChatBox />
            </div>
        </>
    )
}

export default ChatsPage;