// useFetch hook
// to communicate with server

import { useEffect, useState } from "react";

const useFetchPost = () => {
  const [url, setUrl] = useState(null);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    if (url) {
      setIsLoading(true);
      fetch("/admin/csrf", {
        signal: abortController.signal,
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((csrfToken) => {
          fetch(url, {
            signal: abortController.signal,
            method: "POST",
            body: JSON.stringify(content),
            headers: {
              "Content-Type": "application/json",
              "csrf-token": csrfToken.csrfToken,
            },
          })
            .then((res) => {
              if (res.ok) {
                setError(null);
                setUrl(null);
                setIsLoading(false);
                return;
              }
              setError("Could not send email");
              setUrl(null);
              setIsLoading(false);
              return;
            })
            .catch((err) => {
              setError("Could not send email");
              setUrl(null);
              setIsLoading(false);
              return;
            });
        })
        .catch((err) => {
          setError("Could not send email");
          setUrl(null);
          setIsLoading(false);
          return;
        });
    }
    return () => abortController.abort();
  }, [url]);
  return [setUrl, setContent, error, isLoading];
};

export default useFetchPost;
