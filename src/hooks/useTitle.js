import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Toy Universe | ${title}`;
    },[title])
}

export default useTitle;