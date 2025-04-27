import { signInWithPopup } from "firebase/auth";
import { firebaseAuth, googleAuthProvider } from "@/config/firebase.config.js";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoogleUserData, setUserInfoData } from "@/redux/reducers/userInfo";
import { generateUserNameFromEmail, getHighQualityGoogleAvatar } from "@/utilities";
import { Button, Input } from "@/components";
import store, { RootState, StoreDispatch } from "@/redux/store/store";
import Image from "next/image";
import Head from "next/head";

const AuthPage = () => {
    const router = useRouter();

    const dispatch = useDispatch<StoreDispatch>();
    const userInfo = useSelector((state: RootState) => state.userInfo);

    const handleGoogleAuth = async () => {
        const authResult = await signInWithPopup(firebaseAuth, googleAuthProvider);
        const idToken = await authResult.user.getIdToken() as string;

        const actionResult = await dispatch(fetchGoogleUserData(idToken));

        if (fetchGoogleUserData.rejected.match(actionResult)) {
            // something went wrong
            console.error("Something went wrong");
            return;
        }

        const userInfo = store.getState().userInfo;
        const user = authResult.user;

        if (userInfo.data === null) {
            const user_data = {
                email: user.email as string,
                username: generateUserNameFromEmail(user.email as string),
                avatar_url: getHighQualityGoogleAvatar(user.photoURL as string),
                onboarded: false,
                about: "Hey there! I'm using Chatsy."
            }

            dispatch(setUserInfoData(user_data));

            router.replace("/onboard");
        } else {
            router.replace("/chats");
        }
    }


    const handleAppleAuth = () => {
        alert("Not implemented yet");
    }

    const handleEmailAuth = () => {
        alert("Not implemented yet");
    }


    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserInfoData({email: e.target.value}));
    }


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
    //         const idToken = await user?.getIdToken();
    //         console.log({
    //             "onAuthStateChanged": idToken
    //         });

            // if (user && user.emailVerified) {
            //     const userObj = {
            //         email: user.email as string,
            //         avatar_url: getHighQualityGoogleAvatar(user.photoURL as string)
            //     }

            //     handleUserLogin(userObj);
            // }
        // });

    //     return () => unsubscribe();
    // }, [handleUserLogin]);

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
                                value={userInfo.data?.email || ""}
                                onChange={handleEmailInputChange}
                                placeholder="e.g. john.doe65808@xyz.com"
                            />

                            <br />

                            <Button variant="full" onClick={handleEmailAuth}>
                                Continue
                            </Button>
                        </div>


                        <div className="w-full text-center text-chatsy-text-main relative my-8 opacity-75 text-sm">
                            <span className="px-5 bg-chatsy-bg leading-none relative z-40">Or continue with</span>
                            <hr className="border-t-1 border-chatsy-text-main absolute w-full top-[calc(50%+1px)]" />
                        </div>

                        <div className="flex gap-5">
                            <Button overrideClasses={["!w-1/2", "!bg-chatsy-text-main", "!text-chatsy-bg"]} onClick={handleGoogleAuth}>
                                <Image
                                    src="/icons/google_icon.svg"
                                    alt="Authenticate with Google"
                                    width="0" height="0" sizes="100vw"
                                    className="w-[1.5rem] h-[1.5rem]"
                                />
                                &nbsp;&nbsp;
                                Google
                            </Button>

                            <Button 
                                overrideClasses={["!w-1/2", "!bg-chatsy-text-main", "!text-chatsy-bg"]}
                                onClick={handleAppleAuth}
                            >
                                <Image
                                    src="/icons/apple_icon.svg"
                                    alt="Authenticate with Google"
                                    width="0" height="0" sizes="100vw"
                                    className="w-[1.5rem] h-[1.5rem] invert-(--chatsy-black-icon-invert)"
                                />
                                &nbsp;&nbsp;
                                Apple
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