import Head from "next/head";
import ChatSidebar from "./ChatSidebar";
import ChatBox from "./ChatBox";
import { Navbar } from "@/components";

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