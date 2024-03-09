import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return <h1>College Basketball Team Info</h1>;
}

class School extends React.Component<Team> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        <h2>{school}</h2>
        <h3>Mascot Name: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
        <br></br>
      </div>
    );
  }
}

function SchoolNames() {
  const teams: Team[] = teamsData.teams;
  return (
    <div>
      {/* <School {...teams[0]} />
      <School {...teams[1]} />
      <School {...teams[2]} /> */}

      {teams.map((team) => (
        <School key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <SchoolNames />
    </div>
  );
}

export default App;
