import { useState, useCallback, useEffect } from "react";
import Options from "./Options";
import SavePassword from "./SavePassword";
import toast from "react-hot-toast";

function Generate() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numbers, setNumbers] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [characters, setCharacters] = useState(false);
    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numbers) str += "0123456789"
        if (characters) str += "!@{}`%$&*-+_()"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
        // console.log(password);

    }, [length, characters, numbers, setPassword])

    function copyPassword() {
        toast.success("Password copied to clipboard");
    }

    useEffect(() => {
        generatePassword();
    }, [length, numbers, characters, generatePassword])
    return (
        <div className="w-[80%] mt-10  rounded-lg bg-white">
            <SavePassword password={password} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="w-1/2 flex mx-auto mt-6">
                <input value={password} onChange={
                    (e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }
                } readOnly className="bg-gray-100  w-full p-3 rounded-l-lg" type="text" placeholder="Password" />
                <div className="flex space-x-4">
                    <button onClick={copyPassword} className="btn-primary">Copy</button>
                    <button onClick={() => setIsOpen(true)} className="bg-gray-800 text-white px-3 py-1 font-medium text-lg rounded-md hover:scale-105 duration-200">Save</button>
                </div>

            </div>
            <div>
                <Options setPassword={setPassword} numbers={numbers} setNumbers={setNumbers} characters={characters} setCharacters={setCharacters} length={length} setLength={setLength} generatePassword={generatePassword} password={password} />
            </div>
        </div>
    )
}

export default Generate;