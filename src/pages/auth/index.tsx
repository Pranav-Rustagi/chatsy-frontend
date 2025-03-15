import Button from "@/components/Button";
import Image from "next/image";

const AuthPage = () => {
    return (
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
                        <input
                            type="email" placeholder="Email address"
                            className="w-full bg-white border-1 border-gray-400 p-3 rounded-md text-chatsy-text-dark placeholder:text-gray-400 outline-none"
                            autoFocus
                            spellCheck={false}
                        />

                        <br />

                        <Button variant="full">
                            Continue
                        </Button>
                    </div>


                    <div className="w-full text-center text-chatsy-text-main relative my-8 opacity-75 text-sm">
                        <span className="px-5 bg-chatsy-bg leading-none relative z-40">Or continue with</span>
                        <hr className="border-t-1 border-chatsy-text-main absolute w-full top-[calc(50%+1px)]" />
                    </div>

                    <div className="flex gap-5">
                        <Button overrideClasses={["!w-1/2", "!bg-chatsy-text-main", "!text-chatsy-bg"]}>
                            <Image
                                src="/icons/google_icon.svg"
                                alt="Authenticate with Google"
                                width="0" height="0" sizes="100vw"
                                className="w-[1.5rem] h-[1.5rem]"
                            />
                            &nbsp;&nbsp;
                            Google
                        </Button>

                        <Button overrideClasses={["!w-1/2", "!bg-chatsy-text-main", "!text-chatsy-bg"]}>
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
                />
            </div>
        </div>
    )
}

export default AuthPage;