import { useRouter } from "next/navigation";
import { useEffect } from "react";


const RootPage = () => {
    const router = useRouter();

    // useEffect(() => {
    //     router.replace("/auth");
    // }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            This is Chatsy root page
        </div>
    )
}

export default RootPage;