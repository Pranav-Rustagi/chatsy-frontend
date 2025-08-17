import { Avatar } from "@/components";
import MessageBox from "../Message";

const ChatBox = () => {
    return (
        <div className="w-full relative bg-black/5">
            <div className="absolute w-full h-full left-0 top-0 bg-[url(/images/gi_DckOUM5a.png)] bg-size-cover mix-blend-exclusion bg-blend-multiply opacity-[0.1] z-0">
            </div>

            <div className="flex flex-col h-full relative z-10">
                <div className="flex flex-none flex-row gap-4 items-center relative w-full bg-chatsy-secondary-bg border-b-[0.5px] border-chatsy-navbar-border z-50 px-6 py-3">
                    <Avatar
                        src="/avatars/avatar1.jpg"
                        alt="User Display Name"
                        active
                    />
                    <div className="flex flex-col gap-0.5">
                        <span className="text-chatsy-text-main font-semibold text-md">
                            User Display Name
                        </span>
                        <span className="text-chatsy-text-main text-xs opacity-70">
                            status
                        </span>
                    </div>
                </div>

                <div className="grow overflow-hidden pr-1">
                    <div className="overflow-y-scroll flex flex-col gap-4 h-full w-full py-5 px-2">
                        <MessageBox message="Hello, how are you?" sender="User 1" timestamp="10:00 AM" type="from" />
                        <MessageBox message="I'm good, thanks! How about you? okokokokkookkookkokkokokokokookkokookokokokokokokokkookkookkokkokokokokookkokookokokokokokokokkookkookkokkokokokokookkokookokokokokokokokkookkookkokkokokokokookkokookokokok" sender="User 2" timestamp="10:01 AM" type="to" />
                        <MessageBox message="Hello, how are you?" sender="User 1" timestamp="10:00 AM" type="from" />
                        <MessageBox message="I'm good, thanks! How about you? I am just a baby who is child of a crocodile" sender="User 2" timestamp="10:01 AM" type="to" />
                        <MessageBox message="Hello, how are you?" sender="User 1" timestamp="10:00 AM" type="from" />
                        <MessageBox message="I'm good, thanks! How about you?" sender="User 2" timestamp="10:01 AM" type="to" />
                        <MessageBox message="Hello, how are you?" sender="User 1" timestamp="10:00 AM" type="from" />
                        <MessageBox message="I'm good, thanks! How about you?" sender="User 2" timestamp="10:01 AM" type="to" />
                        <MessageBox message="Hello, how are you?" sender="User 1" timestamp="10:00 AM" type="from" />
                        <MessageBox message="I'm good, thanks! How about you?" sender="User 2" timestamp="10:01 AM" type="to" />
                        <MessageBox message="Hello, how are you?" sender="User 1" timestamp="10:00 AM" type="from" />
                        <MessageBox message="I'm good, thanks! How about you?" sender="User 2" timestamp="10:01 AM" type="to" />
                        
                    </div>
                </div>

                <div className="flex flex-none flex-row items-center gap-5 w-full bg-chatsy-secondary-bg border-t-[0.5px] border-chatsy-navbar-border z-50 px-6 py-4">
                    <input
                        type="text" name="" id=""
                        placeholder="Type a message..."
                        className="flex-auto bg-chatsy-tertiary-bg text-sm border-[0.5px] border-chatsy-navbar-border rounded-full px-4 py-3 text-chatsy-text-main placeholder:text-chatsy-text-main placeholder:opacity-50 focus:outline-none w-full"
                    />

                    <button className="rounded-full py-3 px-4 bg-chatsy-orange text-white h-[2.5rem] flex items-center justify-center border-[0.5px] border-chatsy-navbar-border text-sm">
                        Send&nbsp;&nbsp;
                        <img src="icons/send_msg.png" alt="Send message" height="20px" width="20px" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;