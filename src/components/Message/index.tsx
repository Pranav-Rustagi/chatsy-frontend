interface MessageBoxProps {
    message: string;
    sender: string;
    timestamp: string;
    type: 'from' | 'to';
    is_group?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, sender, is_group = false, timestamp, type }: MessageBoxProps) => {
    return (
        <div className={`flex ${type === 'from' ? 'flex-row' : 'flex-row-reverse'} mx-5`}>
            <div className={`relative shadow-sm p-3 max-w-[60%] rounded-lg flex flex-col ${type === 'from' ? 'from-message-container bg-chatsy-light text-chatsy-text-main rounded-tl-none' : 'to-message-container bg-chatsy-orange text-white rounded-tr-none'}`}>
                {
                    is_group && type === 'from' ?
                        <p className="text-chatsy-text-2xs font-semibold mb-1">@{sender}</p> :
                        null
                }
                <div className="text-chatsy-text-xs relative">
                    {message}
                    <span className="invisible">&nbsp;&nbsp;{timestamp}</span>
                    <span className={`absolute text-chatsy-text-2xs right-0 bottom-[-0.6rem]`}>{timestamp}</span>
                </div>
            </div>
        </div>
    );
}

export default MessageBox;