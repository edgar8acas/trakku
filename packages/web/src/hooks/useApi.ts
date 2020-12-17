import { useEffect, useState } from "react";
import request from "../utilities/request";

export function useApi({
  initialUrl,
  options = {},
  initialData,
  onSuccess,
  onError,
}: {
  initialUrl: string;
  options?: object;
  initialData: any;
  onSuccess?: () => void;
  onError?: () => void;
}) {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [requestOptions, setRequestOptions] = useState(options);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLoading(true);

      try {
        const response = await request(url, requestOptions);
        setData(response);
        setIsLoading(false);
        if (onSuccess) onSuccess();
      } catch (error) {
        setError(error);
        if (onError) onError();
      }

      setIsLoading(false);
    };
    fetchData();
  }, [url, requestOptions, onError, onSuccess]);

  return { data, error, isLoading, setUrl, setRequestOptions };
}
