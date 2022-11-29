import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const Search = (props: Props) => {
  const [term_, setterm] = useState("");

  const inputHandler = (event: any) => {
    setterm(event.target.value);
  };

  return (
    <form className="">
      <div className="">
        <BsSearch />
        <input
          title="Search"
          type="text"
          value={term_}
          onChange={inputHandler}
        />
      </div>

      <div className="">
        <button className="">Search on Google</button>
      </div>
    </form>
  );
};

export default Search;
