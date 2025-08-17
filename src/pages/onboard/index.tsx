import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNewUserInfo, setUserInfoData } from "@/redux/reducers/userInfo";
import { Button, Input } from "@/components";
import { useRouter } from "next/router";
import { RootState, StoreDispatch } from "@/redux/store/store";
import Image from "next/image";
import Head from "next/head";
import avatars from "@/constants/avatars";

const OnboardPage = () => {
    const router = useRouter();
    const dispatch = useDispatch<StoreDispatch>();
    const userInfo = useSelector((state: RootState) => state.userInfo.data);

    const [profilePicture, setProfilePicture] = useState<{ url: string, file: File | null, isDefault: boolean }>({
        url: userInfo?.avatarUrl || avatars[0].url,
        file: null,
        isDefault: true
    });

    const [usernameError, setUsernameError] = useState<{ error: boolean, message: string | null }>({
        error: false,
        message: null
    });

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
        const file: File | undefined = e.target.files?.[0];
        if (file) {
            setProfilePicture({
                url: URL.createObjectURL(file),
                file: file,
                isDefault: false
            });
        }
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameError({
            error: false,
            message: null
        });
        dispatch(setUserInfoData({ username: e.target.value.trim() }));
    }

    const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserInfoData({ displayName: e.target.value }));
    }


    const handleSetupProfile = useCallback(async () => {
        if (!userInfo?.username) {
            setUsernameError({
                error: true,
                message: "Username is required"
            });
            return;

        } else if (userInfo.username.length > 30) {
            setUsernameError({
                error: true,
                message: "Username can have at most 30 characters"
            });
            return;

        } else if (userInfo.username.match(/^[a-zA-Z0-9_.]{1,30}$/) === null) {
            setUsernameError({
                error: true,
                message: "Username must contain only letters (a-z), numbers (0-9), periods (.), and underscores (_)"
            });
            return;
        }

        await dispatch(saveNewUserInfo(userInfo));
        console.log("Saved successfully");

        router.replace("/chats");
    }, [userInfo, dispatch, router, setUsernameError]);

    return (
        <>
            <Head>
                <title>Chatsy - Onboard</title>
            </Head>

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
                                priority
                            />
                        </div>

                        <br />
                    </div>
                </div>
                <div className="w-3/7 flex justify-center items-center p-10 pr-20 pl-0">
                    <div className="flex flex-col w-[360px] items-center gap-8">

                        <div className="flex flex-col items-center relative w-full">

                            <Image
                                src={profilePicture.url} alt="Profile picture"
                                sizes="100vw" width="0" height="0"
                                className="w-[160px] h-[160px] rounded-full object-cover border-8 border-neutral-200"
                            />

                            <div className="flex gap-5 mt-5 mb-5">

                                <Button onClick={handleRandomAvatar} variant="sm" className={"!font-bold !rounded-sm"}>
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
                            <div className="relative">
                                <Input
                                    value={userInfo?.username || ""}
                                    onChange={handleUsernameChange}
                                    label="Username"
                                    error={usernameError.error}
                                    errorMessage={usernameError.message}
                                />
                            </div>

                            <div className="relative">
                                <Input
                                    value={userInfo?.displayName || ""}
                                    onChange={handleDisplayNameChange}
                                    label="Display Name"
                                    errorMessage={null}
                                />
                            </div>
                        </div>

                        <Button onClick={handleSetupProfile} variant="full">
                            Get started
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnboardPage;