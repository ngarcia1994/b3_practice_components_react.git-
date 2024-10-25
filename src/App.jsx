import { useState } from 'react'
import './App.css'
import { People } from './Component/Person';

function App() {

    const [people, setPeople] = useState{[
        {
          id: 1,
          name: "Ines Oliveros",
          role: "Backend Developer"
          img: "https://bootdey.com/img/Content/avatar/avatar8.png"
        },
        {
          id: 2,
          name: "Francisco Perez"
          role: "Designer"
          img: "https://bootdey.com/img/Content/avatar/avatar5.png"
        },
        {
          id: 3,
          name: "Natalia Zuliaga",
          role: "frontend",
          img: "link"
        },
      ]};
      return (
        <div>
          <People
            people={people}
            setPeople={setPeople}
          />
        </div>
      )
}
