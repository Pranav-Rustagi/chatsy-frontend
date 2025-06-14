import { useRouter } from "next/router";
import Navbar from "../Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

const SharedLayout1: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    const navbarPaths = ['/chats', '/viora', '/calls'];

    return (
        <div className="flex flex-row w-full h-full">
            {
                navbarPaths.includes(router.pathname) &&
                <Navbar />
            }
            {children}
        </div>
    )
}

export default SharedLayout1;