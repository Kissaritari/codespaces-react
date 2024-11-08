import { useState } from "react"
import { useGetCatPic } from "../services/CatService"

const CatCard= ()=> {
const [catKuva, setCatKuva] = useState("")



const handleOnClick = ()=> {
    useGetCatPic()
    .then((url) => {
        setCatKuva(url);})
   
}
    return (
        <div className="flex items-center flex-col mx-20">
            <img className="rounded-lg mb-2" src={catKuva}></img>
            <button onClick={handleOnClick} className="max-w-20 px-3 py-1 bg-slate-500 rounded-md hover:bg-slate-400 duration-100n">kissa</button>
        </div>
    )
}

export default CatCard;