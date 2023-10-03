const weakMap = new WeakMap();

async function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count + 1);

  if (count >= 5) {
    throw new Error("Endpoint load is high");
  }

  const cache = new Map();

  const cachedResponse = cache.get(endpoint);
  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(endpoint);
  const data = await response.json();

  cache.set(endpoint, data);

  return data;

}

export { weakMap, queryAPI};
