import { useEffect, useState } from "react";

function Options({ generatePassword, password }) {
    const [length, setLength] = useState(8);
    const [numbers, setNumbers] = useState(false);
    const [characters, setCharacters] = useState(false);
    useEffect(() => {
        generatePassword(length, numbers, characters);
    }, [password, length, numbers, characters])
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex space-x-5 bg-white rounded-lg mt-8 p-3 items-center justify-center">
                <div className="flex outline-none space-x-4 items-center justify-center">
                    <input value={length} onChange={(e) => {
                        e.preventDefault();
                        setLength(e.target.value);
                    }} type="range" name="length" />
                    <label className="label" htmlFor="length">Length <span className="text-rose-600 font-medium">({length})</span></label>

                </div>
                <div className="flex space-x-4 items-center justify-center">
                    <label className="label" htmlFor="numbers">Numbers</label>
                    <input value={numbers} onChange={(e) => {
                        e.preventDefault();
                    }} type="checkbox" name="numbers" />
                </div>
                <div className="flex space-x-4 items-center justify-center">
                    <label className="label" htmlFor="length">Characters</label>
                    <input value={characters} onChange={(e) => {
                        e.preventDefault();
                    }} className="rounded-lg" type="checkbox" name="length" />
                </div>
            </div>
        </div>
    )
}

export default Options;