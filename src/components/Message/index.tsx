interface MessageBoxProps {
    message: string;
    sender: string;
    timestamp: string;
    type: 'from' | 'to';
    isGroup?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, sender, isGroup = false, timestamp, type }: MessageBoxProps) => {
    return (
        <div className={`flex ${type === 'from' ? 'flex-row' : 'flex-row-reverse'} mx-5`}>
            <div className={`relative shadow-sm p-3 pb-4 pt-2 max-w-[min(60%,460px)] rounded-lg flex flex-col ${type === 'from' ? 'from-message-container bg-chatsy-light text-chatsy-text-dark rounded-tl-none' : 'to-message-container bg-chatsy-orange text-white rounded-tr-none'}`}>
                {
                    isGroup && type === 'from' ?
                        <p className="text-chatsy-text-2xs font-semibold mb-1">@{sender}</p> :
                        null
                }
                <div className="text-sm relative">
                    <div className="mb-1">
                        <span className="whitespace-break-spaces break-all w-full">{message}</span>
                        <div className="inline-block text-chatsy-text-2xs -ml-4 invisible">
                            &nbsp;&nbsp;{timestamp}
                            {
                                type === 'to' &&
                                <span className="h-1 w-7 bg-chatsy-text-2xs inline-block"></span>
                            }
                        </div>
                    </div>
                    <div className="absolute text-chatsy-text-2xs !right-0 bottom-[-0.6rem] flex items-end gap-1">
                        {timestamp}
                        {
                            type === 'to' &&
                            <img src="icons/msg_unread.png" alt="Not read" width="24px" height="24px" className="translate-y-1" />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageBox;