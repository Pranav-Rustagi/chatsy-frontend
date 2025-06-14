interface InputProps {
    type?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    overrideClasses?: string[],
    label?: string,
    labelOverrideClasses?: string[],
    error?: boolean
    errorMessage?: null | string
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder = "", onChange, value = "", overrideClasses = [], label, labelOverrideClasses = [], error = false, errorMessage = null }: InputProps) => {
    
    return (
        <div className="relative">
            {
                label &&
                <label
                    className={`block text-xs mb-2 absolute left-2.5 -translate-y-[50%] px-1 bg-chatsy-bg font-semibold z-10 ${labelOverrideClasses?.join(' ')}`}
                >
                    {label}
                </label>
            }
            <div>
                <div className="relative">
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        spellCheck={false}
                        className={`w-full border-1 border-gray-400 p-3 pt-4 rounded-md text-chatsy-text-light placeholder:text-gray-400 outline-none text-md font-medium ${overrideClasses.join(' ')}`}
                    />
                    {
                        error &&
                        <div className="h-[1.25rem] aspect-square bg-red-400 absolute top-1/2 -translate-y-1/2 right-3 rounded-full text-white flex items-center justify-center text-xs font-bold">
                            !
                        </div>
                    }
                </div>
                {
                    errorMessage !== null &&
                    <p className="text-xs mt-2 mb-3 text-red-400 h-[1rem]">
                        {
                            errorMessage
                        }
                    </p>
                }
            </div>
        </div>
    )
}

export default Input;