"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const Search = (props: Props) => {
  const [term_, setterm] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${term_}`);
  };

  return (
    <form className="" onSubmit={handleSearch}>
      <div className="">
        <BsSearch />
        <input
          title="Search"
          type="text"
          value={term_}
          placeholder="Enter the Search Term"
          onChange={(e) => setterm(e.target.value)}
        />
      </div>

      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" type="submit">
        Search on Google
      </button>
    </form>
  );
};

export default Search;
