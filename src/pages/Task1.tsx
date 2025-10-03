import { useCallback, useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  username?: string;
  email?: string;
}

export const Task1 = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

// const url = "https://jsonplaceholder.typicode.com/users";

// export const Task1 = () => {

//   return (
//     <div>

//     </div>
//   );
// };
