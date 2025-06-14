import { firebaseAuth } from "@/config/firebase.config";
import { fetchUserData, setUserInfoData } from "@/redux/reducers/userInfo";
import { StoreDispatch } from "@/redux/store/store";
import { generateUserNameFromEmail, getHighQualityGoogleAvatar } from "@/utilities";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthInit: (() => null) = () => {

    const dispatch = useDispatch<StoreDispatch>();
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
            try {
                console.log("Auth state changed", user);
                if (router.pathname === "/logout") {
                    return;
                }
    
                if (user === null) {
                    if (router.pathname !== "/auth") {
                        router.replace("/auth");
                    }
                    return;
                }
    
                const idToken = await user.getIdToken();
                const actionResult = await dispatch(fetchUserData(idToken));
    
                if (fetchUserData.rejected.match(actionResult)) {
                    // something went wrong
                    console.error("Something went wrong");

                    if (router.pathname !== "/auth") {
                        router.replace("/auth");
                    }
                    
                    return;
                }
    
                const userInfo = actionResult.payload;
    
                if (userInfo === null) {
                    const user_data = {
                        email: user.email as string,
                        username: generateUserNameFromEmail(user.email as string),
                        avatar_url: getHighQualityGoogleAvatar(user.photoURL as string),
                        onboarded: false,
                        about: "Hey there! I'm using Chatsy."
                    }
    
                    dispatch(setUserInfoData(user_data));
    
                    if (router.pathname !== "/onboard") {
                        router.replace("/onboard");
                    }
                } else {
                    if (router.pathname === "/auth" || router.pathname === "/onboard" || router.pathname === "/") {
                        router.replace("/chats");
                    }
                }
            } catch (error) {
                console.error("Error during authentication state change:", error);
                if (router.pathname !== "/auth") {
                    router.replace("/auth");
                }
            }
        });

        return unsubscribe;
    }, [dispatch, fetchUserData, setUserInfoData, router]);

    return null;
}

export default AuthInit;