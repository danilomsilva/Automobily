export const getVehicles = async () => {
  const response = await fetch(
    'https://automobily-default-rtdb.europe-west1.firebasedatabase.app/vehicles.json',
  );
  const data = await response.json();
  return data;
};

export const postVehicle = async data => {
  await fetch(
    'https://automobily-default-rtdb.europe-west1.firebasedatabase.app/vehicles.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
};

export const deleteVehicle = async id => {
  await fetch(
    `https://automobily-default-rtdb.europe-west1.firebasedatabase.app/vehicles/${id}.json`,
    {
      method: 'DELETE',
    },
  );
};
