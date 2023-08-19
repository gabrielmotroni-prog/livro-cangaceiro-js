//tratamento comum lidar com status da requisicao
export const handleStatus = (res) =>
  res.ok ? res.json() : Promise.reject(res.statusText);
