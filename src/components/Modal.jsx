const Modal = ({ children, isOpen, setIsOpen }) => {
    return (
        // generate a modal using tailwindcss
        <div className={`fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? "block duration-200" : "hidden"}`}>
            <div className="bg-white p-5 drop-shadow-2xl rounded-lg w-[40%] h-fit">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl py-4 font-extrabold">Save Password</h1>
                    <button onClick={() => setIsOpen(false)} className="text-4xl text-red-500 font-bold">&times;</button>

                </div>
                <div className="mt-5">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal