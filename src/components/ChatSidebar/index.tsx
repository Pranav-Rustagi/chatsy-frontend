import { Avatar } from "@/components";
import Image from "next/image";


const ChatSidebar = () => {
    const activeIndex = -1;

    return (
        <div className="flex flex-col min-w-[400px] max-w-[400px] border-r-[0.5px] border-chatsy-navbar-border bg-chatsy-secondary-bg overflow-hidden">
            <div className="flex gap-3 bg-chatsy-secondary-bg z-50 p-5 pt-7">
                <div className="inline-block w-full relative">
                    <div className="flex items-center gap-2 mb-2 opacity-50 text-chatsy-text-main text-sm absolute top-[50%] -translate-y-[60%] left-4">
                        <Image 
                            src={"/icons/search.png"}
                            alt="Chats"
                            width={16}
                            height={16}
                            className="invert-(--chatsy-black-icon-invert)"
                        />
                        <span>Search</span>
                    </div>
                    <input
                        type="text"
                        className="w-full bg-chatsy-tertiary-bg text-chatsy-text-main text-sm border-[0.5px] border-chatsy-navbar-border rounded-full px-4 py-2 focus:outline-none"
                    />
                </div>

                <button className="bg-chatsy-orange text-white text-2xl h-[2.5rem] aspect-square rounded-full flex items-center justify-center border-[0.5px] border-chatsy-navbar-border">
                    +
                </button>
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
                            <Avatar
                                key={index}
                                src={`/avatars/avatar${index % 13 + 1}.jpg`}
                                alt={`User ${index + 1}`}
                                active
                            />
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col pt-5 overflow-hidden pr-1">
                <div className="flex justify-between items-center px-5 z-50 pt-5 pb-1 mb-1">
                    <span className="text-sm font-semibold">Messages</span>
                    <button className="text-xs text-chatsy-text-dark px-2 py-1 bg-chatsy-tertiary-light rounded-full text-chatsy-text-2xs opacity-90">
                        Requests
                    </button>
                </div>
                <div className="pl-3 pr-1 flex flex-col overflow-y-scroll">
                    {
                        Array.from({ length: 15 }, (_, index) => (
                            <div 
                                key={index}
                                className={`px-2 relative flex gap-3 items-center border-b-[0.5px] border-chatsy-navbar-border py-3 hover:bg-chatsy-tertiary-bg ${index === activeIndex ? "bg-chatsy-tertiary-light" : "bg-chatsy-secondary-bg"}`}
                            >
                                <Avatar src={`/avatars/avatar${index % 13 + 1}.jpg`} alt="User 1" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-semibold text-chatsy-text-main">User 2</p>
                                    <p className="text-xs text-chatsy-text-main">Last message</p>
                                </div>
                                <span className="absolute right-4 top-4 text-chatsy-text-2xs text-chatsy-text-main opacity-70">12:00 PM</span>
                                <span className="absolute right-4 top-9 text-chatsy-text-2xs text-chatsy-light font-semibold bg-chatsy-orange rounded-full px-2 py-1">3</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatSidebar;