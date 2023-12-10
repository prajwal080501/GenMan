function PasswordList() {
    return (
        <div className="w-full h-fit flex items-center justify-center mt-10 mb-10 rounded-lg bg-white  p-5">
            <div className="flex w-fit h-fit items-center justify-center flex-col space-y-5">
                <img src="https://media.tenor.com/97Zio3BdYvQAAAAi/fluent-emoji.gif" className="h-52  hover:animate-bounce cursor-pointer w-52" alt="" />
                <p className="text-3xl font-bold">
                    No Passwords saved
                </p>
            </div>
        </div>
    )
}

export default PasswordList