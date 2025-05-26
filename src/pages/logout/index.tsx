import { firebaseAuth } from "@/config/firebase.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LogOutPage = () => {
    const router = useRouter();
    useEffect(() => {
        (async () => {
            setTimeout(async () => {
                await signOut(firebaseAuth);
                router.push("/auth");
            }, 3000);
        })();
    }, []);

    return (
        <div>
            We're sad to see you go
        </div>
    )
}

export default LogOutPage;