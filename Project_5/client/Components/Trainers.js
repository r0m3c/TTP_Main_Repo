import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Trainers() {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        async function fetchTrainers() {
            const { data } = await axios.get("/api/trainer");
            setTrainers(data);
            }

            fetchTrainers();
    }, []);

    return (
        <>
            <h1>Trainers list</h1>
            <ul id="main">
                {trainers.map((trainer) => (
                    <li key={trainer.id}>
                        <Link to={`/trainer/${trainer.id}`}>{trainer.firstName} {trainer.lastName} | {trainer.team}</Link> <br />
                    </li>
                ))}
            </ul>
        </>
    );
}
