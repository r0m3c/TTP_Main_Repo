import { useState, useContext, createContext, useEffect } from "react";

const TeamContext = createContext();


export default function TeamProvider({children}) {
    const [team, setTeam] = useState(null);
    const [allTeams, setAllTeams] = useState([]);

    useEffect(() => {
        // Replace this with your actual API call
        const fetchTeams = async () => {
          const teams = ["Team 1", "Team 2", "Team 3"];
          setAllTeams(teams);
        };
    
        fetchTeams();
    }, []);

    return (
        <TeamContext.Provider value={{ team, setTeam, allTeams, setAllTeams }}>
          {children}
        </TeamContext.Provider>
      );
}

export const useTeamContext = () => useContext(TeamContext);