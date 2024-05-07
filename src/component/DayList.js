import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const days = useFetch("http://localhost:3001/days");     // <useFetch>에 url 데이터를 전달
    
    // const [days, setDays] = useState([]);
    // useEffect(()=>{
    //     fetch("http://localhost:3001/days")     // fetch : 서버에서 가져온 데이터를 비동기로 처리할 때 사용
    //         .then(res =>{                       // .then() : 비동기 작업 성공시 실행할 콜백 함수를 등록할 때 사용
    //             return res.json();              // .json() : 응답받은 데이터(res)를 json() 타입으로 변환
    //         })
    //         .then(data =>{                      // .then(data => { 콜백 함수 }) : data를 받으면 실행할 콜백 함수
    //             setDays(data);                  // 콜백 함수 : 다른 함수 내에서 실행되는 함수, 주로 이벤트 핸들러나 비동기 작업 완료를 위해 사용
    //         })
    // }, []);

    return (
        <ul className="list_day">
            {days.map(day => (         // dummy object에 props인 days를 map 형태로 day에 담음
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>                  // day에 담긴 props인 day를 map 형태로 출력
            ))}
        </ul>
    )
} 