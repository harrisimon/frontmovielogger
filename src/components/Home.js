import { useEffect, useState
 } from "react";
import { getLogs } from "../api/logs";

const Home = (props) => {
    
    const [logs, setLogs] = useState(null)


    useEffect(() => {
        getLogs(props.user)
            .then(res => {
                setLogs(res.data.logs)
                console.log("the res",res.data.logs)
            })
    },[])

    let renderedLogs
    if(logs){
       renderedLogs = logs.map((log) => {
        return log.movieTitle
       }) 
    }
    return (
        <>
            Home
            {renderedLogs}
        </>
    )
}

export default Home