import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    
    const {day} = useParams();                 // useParams : 주소창에 있는 데이터
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
  
    // const [words, setWords] = useState([]);    // 수정될 데이터가 있으면 useState 사용
    // useEffect(()=>{
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setWords(data);
    //         });
    // },[day]);

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}