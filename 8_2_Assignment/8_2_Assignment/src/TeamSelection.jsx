import { useTeamContext } from "./TeamProvider";


const TeamSelection = () => {
  const { team, setTeam, allTeams } = useTeamContext();

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <select value={team} onChange={handleChange}>
      {allTeams.map((team) => (
        <option key={team} value={team}>
          {team}
        </option>
      ))}
    </select>
  );
};

export default TeamSelection;