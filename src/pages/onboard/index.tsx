import Image from "next/image";
import avatars from "@/constants/avatars";
import { useCallback, useState } from "react";
import Button from "@/components/Button";

const OnboardPage = () => {
    const [profilePicture, setProfilePicture] = useState<any>({
        url: avatars[0].url,
        file: null,
        isDefault: true
    });

    const [usernameError, setUsernameError] = useState<any>({
        error: false,
        message: null
    });


    const [username, setUsername] = useState<string>('');
    const [about, setAbout] = useState<string>('');


    const handleRandomAvatar = () => {
        let randomIndex: number;
        do {
            randomIndex = Math.floor(Math.random() * avatars.length);
        } while (profilePicture.isDefault && profilePicture.url === avatars[randomIndex].url);

        setProfilePicture({
            url: avatars[randomIndex].url,
            file: null,
            isDefault: true
        });
    }


    const handleProfilePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProfilePicture({
                url: URL.createObjectURL(file),
                file: file,
                isDefault: false
            })
        }
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameError({
            error: false,
            message: null
        });
        setUsername(e.target.value);
    }

    const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAbout(e.target.value);
    }


    const handleSetupProfile = useCallback(() => {
        // checking usename
        if (username.trim() === "") {
            setUsernameError({
                error: true,
                message: "Username is required"
            });
            return;
        } else if (username.length > 30) {
            setUsernameError({
                error: true,
                message: "Username can have at most 30 characters"
            });
            return

        } else if (username.match(/^[a-zA-Z0-9_.]{1,30}$/) === null) {
            setUsernameError({
                error: true,
                message: "Username must contain only letters (a-z), numbers (0-9), periods (.), and underscores (_)"
            });
            return;
        }


    }, [username, about, profilePicture]);


    return (
        <div className="w-full h-full flex gap-10">
            <div className="w-4/7 flex flex-col justify-center items-center p-10 pr-0 overflow-hidden">
                <div className="flex-col text-chatsy-text-main font-bold">

                    <br /><br />
                    <br />
                    <p className="text-3xl mb-2">New to Chatsy, huh?</p>
                    <p className="text-4xl">Set how you appear to others</p>

                    <br /><br />

                    <div>
                        <Image
                            src="./images/people_looking_up.svg"
                            alt="People looking up"
                            width="0" height="0"
                            className="w-[100%] h-auto object-contain"
                        />
                    </div>

                    <br />
                </div>
            </div>
            <div className="w-3/7 flex justify-center items-center p-10 pr-20 pl-0">
                <div className="flex flex-col w-[360px] items-center gap-10">

                    <div className="flex flex-col items-center relative w-full">

                        <Image
                            src={profilePicture.url} alt="Profile picture"
                            sizes="100vw" width="0" height="0"
                            className="w-[175px] h-[175px] rounded-full object-cover border-8 border-neutral-200"
                        />

                        <div className="flex gap-5 mt-5">

                            <Button onClick={handleRandomAvatar} variant="sm" overrideClasses={["!font-bold"]}>
                                Random
                            </Button>

                            <label className="text-xs font-bold px-4 py-2 bg-chatsy-action-bg text-chatsy-action-text rounded-sm cursor-pointer relative" htmlFor="profile-picture">
                                Upload
                                <input
                                    type="file"
                                    id="profile-picture"
                                    accept="image/jpeg, image/png, image/jpg, image/webp"
                                    className="hidden"
                                    onChange={handleProfilePictureUpload}
                                />
                            </label>
                        </div>
                    </div>


                    <div className="w-full flex flex-col gap-6">
                        <div>
                            <div className="relative">
                                <input
                                    type="text" placeholder="Your display name"
                                    className="w-full bg-white border-1 border-gray-400 p-3 rounded-md text-chatsy-text-dark placeholder:text-gray-400 outline-none"
                                    spellCheck={false}
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                                {
                                    usernameError.error &&
                                    (
                                        <span
                                            title="Username already exists"
                                            className="bg-red-400 text-white absolute top-1/2 -translate-y-1/2 right-3 aspect-square h-[1.5rem] text-center rounded-full cursor-pointer">
                                            !
                                        </span>
                                    )
                                }
                            </div>
                            {
                                usernameError.error && (
                                    <p className="text-red-400 mt-1.5 text-sm">
                                        {usernameError.message || ""}
                                    </p>
                                )
                            }
                        </div>

                        <div>
                            <textarea
                                placeholder="About you"
                                className="w-full bg-white border-1 border-gray-400 p-3 rounded-md text-chatsy-text-dark placeholder:text-gray-400 outline-none resize-none"
                                autoFocus
                                spellCheck={false}
                                rows={2}
                                value={about}
                                onChange={handleAboutChange}
                            />
                        </div>

                    </div>

                    <Button onClick={handleSetupProfile} variant="full">
                        Get started
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OnboardPage;