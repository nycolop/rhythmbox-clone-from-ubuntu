export async function fetchRadioStations() {
  const response = await fetch("/api/radio-stations");

  if (response.ok) return response.json();

  throw new Error("Error fetching radio-stations");
}

const services = {
  fetchRadioStations,
};

export default services;
