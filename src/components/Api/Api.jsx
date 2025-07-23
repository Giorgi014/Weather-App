const ApiKey = "c002eabec3dffadff47e3a2e8c28fb4f";

export const fetchData = async (city) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ApiKey}`;

  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data
  } catch (error) {
    throw error;
  }
};
console.log(fetchData("batumi"));