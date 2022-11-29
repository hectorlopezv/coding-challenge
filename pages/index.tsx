import Search from "../components/search/Search";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google image"
        />

        <div className="">
          <Search />
        </div>
      </div>
    </div>
  );
}
