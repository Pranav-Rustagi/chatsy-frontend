import { Avatar } from "@/components";
import Image from "next/image";

interface MessageBoxProps {
    message: string;
    sender: string;
    timestamp: string;
    type: 'from' | 'to';
}

const MessageBox = ({ message, sender, timestamp, type }: MessageBoxProps) => {
    return (
        <div className={`flex ${type === 'from' ? 'flex-row' : 'flex-row-reverse'} mx-5`}>
            {/* <Avatar
                src={`/avatars/avatar${type === 'from' ? '1' : '2'}.jpg`}
                alt={sender}
                className={`${type === 'from' ? 'mr-3' : 'ml-3'}`}
                size={32}
                active={type === 'from'}
            /> */}
            <div className={`shadow max-w-xs p-3 rounded-lg flex flex-col gap-2 ${type === 'from' ? 'bg-chatsy-secondary-bg text-chatsy-text' : 'bg-chatsy-orange text-white'}`}>
                <p className="text-sm">{message}</p>
                <p className={`text-right text-xs text-gray-500 text-chatsy-text-2xs ${type === 'from' ? 'bg-chatsy-secondary-bg text-chatsy-text' : 'bg-chatsy-orange text-white'}`}>{timestamp}</p>
            </div>
        </div>
    );
}

export default MessageBox;