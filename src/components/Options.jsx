import { useEffect, useState } from "react";

function Options({ generatePassword, password, setPassword, characters, setCharacters, numbers, setNumbers, length, setLength }) {

  
    return (
        <div className="w-full mx-auto p-5 flex items-center justify-center">
            <div className="flex flex-row w-full space-x-5 bg-white dark:bg-zinc-900 rounded-lg mt-8 p-3 items-center justify-center">
                <div className="flex flex-col lg:flex-row outline-none space-x-4 items-center justify-center">
                    <input value={length} onChange={(e) => {
                        e.preventDefault();
                        setLength(e.target.value);
                    }} type="range" min={8} max={50} name="length" />
                    <label className="label" htmlFor="length">Length <span className="text-rose-600 font-medium">({length})</span></label>

                </div>
                <div className="flex space-x-4 items-center justify-center">
                    <label className="label" htmlFor="numbers">Numbers</label>
                    <input defaultChecked={numbers} value={numbers} onChange={(e) => {
                        setNumbers((prev) => !prev)
                   
                    }} type="checkbox" name="numbers" />
                </div>
                <div className="flex space-x-4 items-center justify-center">
                    <label className="label" htmlFor="length">Characters</label>
                    <input  defaultChecked={characters} value={characters} onChange={(e) => {
                        setCharacters((prev) => !prev )
                    }} className="rounded-lg" type="checkbox" name="length" />
                </div>
            </div>
        </div>
    )
}

export default Options;