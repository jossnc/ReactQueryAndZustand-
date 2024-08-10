import { useFetchRepositories } from './hooks/useRepos';

const App = () => {
  const { data, isLoading, error } = useFetchRepositories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return <div className="Hello">Hello World</div>;
};

export default App;
