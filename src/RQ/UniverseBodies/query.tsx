// Libraries
import { useState } from 'react';
import { useQuery } from 'react-query';

const URL_ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';
const QUERY = '?filter[]=bodyType,eq,Planet';

interface QueryResponse {
  bodies: StellarBody[];
}

function UniverseBodies() {
  const { isLoading, error, data } = useQuery(
    'universeBodies',
    () =>
      fetch(URL_ENDPOINT + QUERY).then((response) =>
        response.json(),
      ) as Promise<QueryResponse>,
  );

  console.dir(data);

  return (
    <div className="mx-10 my-4 text-slate-300">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>An error has occurred</div>
      ) : (
        data!.bodies.map((body, index) => (
          <PlanetCard
            key={index}
            {...body}
          />
        ))
      )}
    </div>
  );
}

type StellarBody = {
  englishName: string;
  discoveredBy: string;
  discoveryDate: string;
  gravity: number;
  equaRadius: number;
  inclination: number;
  moons: StellarBodyMoon[] | undefined;
};

type StellarBodyMoon = {
  moon: string;
  rel: string;
};

function PlanetCard(props: StellarBody) {
  return (
    <div className="flex max-w-xl px-2 py-2 my-4 border-2 border-solid rounded-lg border-slate-800 bg-slate-600/80">
      <div className="w-1/2 text-sm">
        <p>Planet Name: <br /> {props.englishName}</p>
        <p>Discovered by: <br /> {props.discoveredBy}</p>
        <p>Discovery date: <br /> {props.discoveryDate}</p>
      </div>

      <div className="w-1/2 text-xs flex flex-col items-end">
        <p>Gravity: {props.gravity}</p>
        <MoonList moons={props.moons} />
      </div>
    </div>
  );
}

function MoonList({ moons }: { moons: StellarBodyMoon[] | undefined }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setTimeout(() => setIsHovering(false), 200)}
    >
      <p>Moons: {moons ? moons.length : 0}</p>

      {isHovering && moons && (
        <ul className="absolute top-0 p-2 -right-24 rounded-xl bg-slate-600 z-10">
          {moons.map((moon, index) => (
            <li key={index}>{moon.moon}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UniverseBodies;
