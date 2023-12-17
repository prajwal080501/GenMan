import { useState, useCallback, useEffect, useRef } from "react";
import Options from "./Options";
import SavePassword from "./SavePassword";
import toast from "react-hot-toast";

function Generate({passwords, setPasswords}) {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numbers, setNumbers] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [characters, setCharacters] = useState(false);

    const passwordRef = useRef(null);
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

    const copyPassword = useCallback(() => {
        window.navigator.clipboard.writeText(passwordRef.current.value);
        toast.success("Password copied to clipboard");
    }, [password]);

    useEffect(() => {
        generatePassword();
    }, [length, numbers, characters, generatePassword])
    return (
        <div className="w-[100%] lg:w-fit mt-10  rounded-lg bg-white dark:bg-zinc-800">
            <SavePassword passwords={passwords} setPasswords={setPasswords} password={password} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="w-[95%] flex mx-auto mt-6">
                <input ref={passwordRef} value={password} onChange={
                    (e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }
                } readOnly className="input" type="text" placeholder="Password" />
                <div className="flex space-x-4">
                    <button onClick={copyPassword} className="btn-primary text-base lg:text-lg dark:bg-blue-600">Copy</button>
                    <button onClick={() => setIsOpen(true)} className="bg-gray-800 text-base lg:text-lg dark:bg-fuchsia-600 text-white px-3 py-1 font-medium rounded-md hover:scale-105 duration-200">Save</button>
                </div>

            </div>
            <div className=" mx-auto">
                <Options setPassword={setPassword} numbers={numbers} setNumbers={setNumbers} characters={characters} setCharacters={setCharacters} length={length} setLength={setLength} generatePassword={generatePassword} password={password} />
            </div>
        </div>
    )
}

export default Generate;