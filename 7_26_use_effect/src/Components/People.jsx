import {useState, useEffect} from "react";
import Person from "./Person";


export default function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch("https://mocki.io/v1/36dcb212-e855-4b8c-b0c9-2a93d8d63286");
              const data = await response.json();
              setPeople(data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    });

    return (
        <>
          {people.map((peop) => (
            <Person key={peop.id} id={peop.id} name={peop.name} age={peop.age} />
          ))}
        </>
    );
}
