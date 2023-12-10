
function Features() {
    return (
        <div className="max-w-7xl mx-auto rounded-lg p-3 mt-10 bg-gray-100">
            <div className="  flex items-center justify-center">
                <p className="text-4xl font-extrabold">Features</p>
            </div>
            <div className="flex space-x-4 items-center justify-evenly">
                <div>
                    <img src="https://icons.veryicon.com/png/o/business/work-circle/encrypted-3.png" className="w-52 h-52" alt="" />
                    <p className="text-3xl text-center font-extrabold">Secure</p>
                </div>
                <div>
                    <p className="text-3xl text-center font-extrabold">Authentication</p>
                </div>
                <div>
                    <img src="https://icons.veryicon.com/png/o/business/work-circle/encrypted-3.png" className="w-52 h-52" alt="" />
                    <p className="text-3xl text-center font-extrabold">Encrypted</p>
                </div>
            </div>
        </div>
    )
}

export default Features