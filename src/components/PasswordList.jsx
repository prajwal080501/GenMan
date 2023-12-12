import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import NoPasswords from "./NoPasswords";
import PasswordCard from "./PasswordCard";

function PasswordList({ passwords, setPasswords }) {
    const { user, token } = useContext(UserContext);
    async function getPasswordByUserId() {
        const res = await fetch(`http://localhost:8000/api/password/${user?._id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        })
        const data = await res.json();
        setPasswords(data.passwords);
        console.log(passwords);
    }

    useEffect(() => {
        getPasswordByUserId();

    }, [user])

    return (
        <div className="w-full h-fit flex flex-col items-center justify-center mt-10 rounded-lg bg-white dark:bg-zinc-800 p-5">
            <div className="w-full py-5 px-3 flex items-start">
                <p className="text-3xl font-extrabold text-black dark:text-white text-left">
                    Your saved passwords
                </p>
            </div>
            {

                user && passwords ? (
                    passwords.map((password) => (
                        <div className="flex flex-col space-y-8 items-center w-full">
                            <PasswordCard passwords={passwords} setPasswords={setPasswords} key={password._id} password={password} />
                        </div>
                    ))
                ) : (
                    <>
                        <NoPasswords />
                    </>
                )
            }
        </div>
    )
}

export default PasswordList