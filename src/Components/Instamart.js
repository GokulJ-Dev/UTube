import React, { useState } from "react"

const Section = ({ title, desc, isVisible, setIsVisible, name }) => {
    console.log(name);
    return (
        <div className=" border border-black m-2 p-2">
            <h1 className=" font-bold text-xl">{title}</h1>
            <button className=" border border-red-400" onClick={() => {
                setIsVisible(!isVisible)
            }}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <p>{desc}</p>}
        </div>
    )
}




const Instamart = () => {
    const [isVisibleConfg, setIsVisibleConfig] = useState("");
    return (
        <>
            <Section
                title="About Instamart"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                isVisible={isVisibleConfg == "about"}
                setIsVisible={res => {
                    res ?
                        setIsVisibleConfig("about") : setIsVisibleConfig("")
                }}
                name={isVisibleConfg}
            />
            <Section
                title="Products"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                isVisible={isVisibleConfg == "product"}
                setIsVisible={res => {
                    res ?
                        setIsVisibleConfig("product") : setIsVisibleConfig("")
                }}
                name={isVisibleConfg} />
            <Section
                title="Instamart Careers"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                isVisible={isVisibleConfg == "career"}
                setIsVisible={(res) => {
                    res ?
                        setIsVisibleConfig("career") : setIsVisibleConfig("")
                }}
                name={isVisibleConfg}
            />
        </>
    )
}

export default Instamart;