import { useTeamContext } from "./TeamProvider";

const TeamData = () => {
  const { team } = useTeamContext();

  return <div>{team ? `Data for ${team}` : "Please select a team"}</div>;
};

export default TeamData;