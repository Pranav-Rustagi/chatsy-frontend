import Image from "next/image"

interface SearchBarProps {
    searchText: string;
    setSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
    return (
        <div className="inline-block w-full relative">
            {
                searchText === "" &&
                (
                    <div className="flex items-center gap-2 opacity-50 text-chatsy-text-main text-sm absolute top-[50%] -translate-y-[50%] left-4">
                        <Image
                            src={"/icons/search.png"}
                            alt="Chats"
                            width={16}
                            height={16}
                            className="invert-(--chatsy-black-icon-invert)"
                        />
                        <span>Search</span>
                    </div>
                )
            }
            <input
                type="text"
                value={searchText}
                className="w-full bg-chatsy-tertiary-bg text-chatsy-text-main text-sm border-[0.5px] border-chatsy-navbar-border rounded-full px-4 py-2 focus:outline-none"
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;