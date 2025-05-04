import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/config/firebase.config.js";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoData } from "@/redux/reducers/userInfo";
import { RootState, StoreDispatch } from "@/redux/store/store";
import { useState } from "react";
import { Button, Input } from "@/components";
import Image from "next/image";
import Head from "next/head";

const AuthPage = () => {
    const dispatch = useDispatch<StoreDispatch>();
    const userInfo = useSelector((state: RootState) => state.userInfo.data);

    const [rememberMe, setRememberMe] = useState<Boolean>(true);


    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    }


    const handleGoogleAuth = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        signInWithPopup(firebaseAuth, googleAuthProvider);
    }


    const handleFacebookAuth = () => {
        alert("Not implemented yet");
    }

    const handleEmailAuth = () => {
        alert("Not implemented yet");
    }


    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserInfoData({ email: e.target.value }));
    }


    return (
        <>
            <Head>
                <title>Chatsy - Login</title>
            </Head>
            <div className="w-full h-full flex gap-10">
                <div className="w-1/2 flex justify-center items-center p-10 pr-0">
                    <div className="flex flex-col">
                        <span className="text-4xl mb-4 font-bold">
                            Hey buddy!
                        </span>
                        <h1 className="text-5xl font-bold">
                            Let&apos;s Chatsy
                        </h1>

                        <br /><br /><br />

                        <div className="flex flex-col w-[400px]">
                            <Input
                                type="email"
                                label="Email"
                                value={userInfo?.email || ""}
                                onChange={handleEmailInputChange}
                                placeholder="e.g. john.doe65808@xyz.com"
                            />

                            <div className="flex items-center gap-2 mt-6">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-chatsy-action-bg cursor-pointer"
                                    id="remember-me"
                                    checked={rememberMe ? true : false}
                                    onChange={toggleRememberMe}
                                />

                                <label 
                                    className="text-sm text-chatsy-text-main font-semibold cursor-pointer"
                                    htmlFor="remember-me"
                                >
                                    Remember me
                                </label>
                            </div>

                            <br />

                            <Button variant="full" onClick={handleEmailAuth}>
                                Continue
                            </Button>
                        </div>


                        <div className="w-full text-center text-chatsy-text-main relative my-8 opacity-75 text-sm">
                            <span className="px-5 bg-chatsy-bg leading-none relative z-40">or continue with</span>
                            <hr className="border-t-1 border-chatsy-text-main absolute w-full top-[calc(50%+1px)]" />
                        </div>

                        <div className="flex gap-5">
                            <Button
                                overrideClasses={["!w-1/2", "!bg-chatsy-text-main", "!text-chatsy-bg"]}
                                icon={{
                                    src: "/icons/google_icon.svg",
                                    alt: "Authenticate with Google",
                                    classes: "!w-[1.4rem] !h-[1.4rem]"
                                }}
                                onClick={handleGoogleAuth}
                            >
                                Google
                            </Button>

                            <Button
                                overrideClasses={["!w-1/2", "!bg-chatsy-text-main", "!text-chatsy-bg"]}
                                onClick={handleFacebookAuth}
                                icon={{
                                    src: "/icons/facebook_icon.svg",
                                    alt: "Authenticate with Facebook",
                                    classes: "!w-[1.6rem] !h-[1.6rem]"
                                }}
                            >
                                Facebook
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 py-10 pl-0 pr-20 flex justify-center items-center translate-y-16">
                    <Image
                        src="/images/people_sitting_talking.svg"
                        alt="People chatting"
                        width="0" height="0"
                        className="w-full"
                        priority
                    />
                </div>
            </div>
        </>
    )
}

export default AuthPage;