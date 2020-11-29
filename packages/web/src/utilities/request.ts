function request(endpoint: string, options?: any) {
  const headers = { "Content-Type": "application/json" };

  const config: RequestInit = {
    method: "GET",
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
    .fetch(`${process.env.REACT_APP_API_URL || ""}/${endpoint}`, config)
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
