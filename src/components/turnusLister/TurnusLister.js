import React, {useState, useEffect} from "react";
import axios from "axios";
import Turnus from "../turnus/Turnus";


const TurnusLister = () => {
    const url = process.env.REACT_APP_URL;
    const[turns, setTurns] = useState([])


    useEffect(()=> {
        fetchTurns()
    },[])

    async function  fetchTurns() {
        axios.get(url+ "/turnus/all").then((res) => {
            setTurns(res.data)
        })
    }




    return <div className="turnusLister__main">
        <div className="turnusLister__tableContainer">
            <table className={"turnus__table"}>
                <thead>
                <tr>
                    <th>Turnus neve</th>
                    <th>Turnus év</th>
                    <th>Elóadás kötelező jelenlét</th>
                    <th>Gyakorlat kötelező jelenlét</th>
                    <th>Konzultáció kötelező jelenlét</th>
                    <th>Törlés</th>
                    </tr>
                </thead>
                <tbody>
                {turns.map(turnus => (
                    <Turnus data={turnus} />
                ))}
                </tbody>
            </table>
        </div>
    </div>

}

export default TurnusLister;