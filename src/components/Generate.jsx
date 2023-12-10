import { useState } from "react";
import Options from "./Options";

function Generate() {
    const [password, setPassword] = useState("");
    function generatePassword(length, numbers, characters) {
        console.log("Generate password");
        console.log(length, numbers, characters);
        
    }
    return (
        <div className="w-full">
            <div className="w-1/2 flex mx-auto mt-6">
                <input value={password} onChange={
                    (e) => {
                        e.preventDefault();
                        setPassword(e.target.value);
                    }
                } className="bg-white  w-full p-3 rounded-l-lg" type="text" placeholder="Password" />
                <button className="btn-primary rounded-r-lg">Copy</button>
            </div>
            <div>
                <Options generatePassword={generatePassword} password={password}/>
            </div>
        </div>
    )
}

export default Generate;