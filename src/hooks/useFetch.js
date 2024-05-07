import {useEffect, useState} from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);    // 수정될 데이터가 있으면 useState 사용

    //console.log("useFetch/data : " + data); // Url을 통해 넘어온 데이터들이 data에 저장

    useEffect(() => {               // 1. data 상태값이 있고 url 데이터를 받아서
        fetch(url)                  // 2. fetch를 통해 비동기적 실행
            .then(res => {          // 3. 응답받은 값(res)을 
                return res.json();  // 4. json() 으로 변환
            })
            .then(data => {
                setData(data);      // 5. 변환된 데이터는 setData를 통해 data에 저장
            });
    }, [url]);

    return data;                    // 6. data 리턴
}