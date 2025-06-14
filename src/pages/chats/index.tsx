import Head from "next/head";
import { ChatBox, ChatSidebar } from "@/components";

const ChatsPage = () => {
    return (
        <>
            <Head>
                <title>Chatsy - Chats</title>
            </Head>

            <div className="flex flex-row w-full h-full">
                <ChatSidebar />
                <ChatBox />
            </div>
        </>
    )
}

export default ChatsPage;