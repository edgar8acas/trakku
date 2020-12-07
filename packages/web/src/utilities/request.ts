const apiUrl = process.env.REACT_APP_SERVER_URL || "";

function request(endpoint: string, options?: any) {
  const headers = { "Content-Type": "application/json" };

  const config: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      ...headers,
      ...options?.headers,
    },
    ...options,
  };

  if (options?.body) {
    config.body = JSON.stringify(options.body);
  }

  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export default request;
