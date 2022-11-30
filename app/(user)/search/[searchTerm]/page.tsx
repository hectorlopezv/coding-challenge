type PageProps = {
  params: {
    searchterm: string;
  };
};
type SearchResulsts = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      snippet: string;
      thumbnail: string;
    }
  ];
};
const search = async (searchterm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchterm}&api_key=${process.env.API_KEY}`
  );
  const data: SearchResulsts = await res.json();
  throw new Error("Something went wrong");
  return data;
};

async function SearchResults({ params: { searchterm } }: PageProps) {
  const searchResulst = await search(searchterm);
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchterm}</p>
      <ol className="space-y-5 p-5">
        {searchResulst.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
