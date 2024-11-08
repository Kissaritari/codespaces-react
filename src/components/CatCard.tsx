import { useState } from "react"

const CatCard= ()=> {
const [catKuva, setCatKuva] = useState("")
const handleOnClick = ()=> {
    setCatKuva("https://placecats.com/neo/300/200")
}
    return (
        <div className="flex items-center flex-col mx-20">
            <img className="rounded-lg mb-2" src={catKuva}></img>
            <button onClick={handleOnClick} className="max-w-20 px-3 py-1 bg-slate-500 rounded-md">kissa</button>
        </div>
    )
}

export default CatCard;