import { useEffect, useState } from 'react'
import { CharacterCard } from './components/CharacterCard'
import type { CharacterData } from './types/CharacterData'

const CHARACTER_API_URL = 'http://localhost:8080/api/v0'

function App() {
  const [chars, setChars] = useState<CharacterData[]>(
    [
      {
        id: 0,
        name: "Numuhukumakiaki'aia Lunamor",
        body_type: "type_a",
        species: "human",
        class: "fighter",
        stats: { strength: 1, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0 },
        customization: { hair: 0, face: 0, shirt: 0, pants: 0, shoes: 0 }
      },
      {
        id: 1,
        name: "Kaladin",
        body_type: "type_a",
        species: "human",
        class: "paladin",
        stats: { strength: 10, dexterity: 8, constitution: 4, intelligence: 5, wisdom: 7, charisma: 3 },
        customization: { hair: 0, face: 0, shirt: 0, pants: 0, shoes: 0 }
      },
    ]
  );

  useEffect(() => {
    fetch(`${CHARACTER_API_URL}/characters`)
      .then(res => res.json())
      .then(data => setChars(data))
      .catch(error => console.error("Error fetching characters: ", error));
  }, []);

  return (
    <>
      <header className='bg-stone-950 text-white mb-3 flex flex-row font-[Fredoka]'>
        <span>
          <strong>CHARACTER GALLERY</strong>
        </span>
        <button>
          Submit Character
        </button>
      </header>
      <main className='bg-stone-900 flex items-center flex-col
 justify-center min-h-screen'>
        {chars.length === 0 && <p className='text-white'>No characters found</p>}

        <ul className='flex gap-2 flex-wrap flex-col justify-center list-none p-0 m-0'>
          {
            chars.map((char) => (
              <li key={char.id}>
                <CharacterCard data={char} />
              </li>)
            )
          }
        </ul>
      </main>
    </>
  )
}

export default App
