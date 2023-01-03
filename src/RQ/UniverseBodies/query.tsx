// Libraries
import { useQuery } from 'react-query';

const URL_ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';
const QUERY = '?filter[]=bodyType,eq,Planet';

interface QueryResponse {
  bodies: StellarBody[];
}

type StellarBody = {
  englishName: string;
  discoveredBy: string;
  discoveryDate: string;
};

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

function PlanetCard(props: StellarBody) {
  return (
    <div className="flex px-2 py-2 my-4 border-2 border-solid rounded-lg border-slate-800 bg-slate-600/60">
      <div className="w-1/2 text-sm">
        <p>
          Planet Name: <br /> {props.englishName}
        </p>
        <p>
          Discovered by: <br /> {props.discoveredBy}
        </p>
        <p>
          Discovery date: <br /> {props.discoveryDate}
        </p>
      </div>

      <div className="w-1/2 bg-yellow-300"></div>
    </div>
  );
}

export default UniverseBodies;
