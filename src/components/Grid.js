import React from 'react';
import styled from 'styled-components';
import Card from './Cards/Card';

const CardGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Grid = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await fetch(
        'https://h5kgh2h6sh.execute-api.sa-east-1.amazonaws.com/Prod/opportunities/',
      );
      const { data } = await response.json();

      setDados(
        data.map(({ level, project_data, subscribe_data, material_data }) => ({
          key: project_data.slug,
          level: level,
          title: (subscribe_data || material_data).title,
          vehicle: project_data.name,
          value: (subscribe_data || material_data).position.available,
          city: `${(subscribe_data || material_data).address.city}, ${
            (subscribe_data || material_data).address.state
          }`,
        })),
      );
      setLoading(false);
    })();
  }, []);

  return (
    <CardGrid>
      {loading || !dados ? (
        <p>Carregando</p>
      ) : (
        dados.map(({ key, level, title, vehicle, value, city }) => {
          return (
            <Card key={Math.random()}
              level={level}
              title={title}
              vehicle={vehicle}
              value={value}
              city={city}
            />
          );
        })
      )}
    </CardGrid>
  );
};

export default Grid;
