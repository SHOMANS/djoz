import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
// import axios from "axios";

export default function VideosPage() {
  // var unirest = require("unirest");

  // var req = unirest("GET", "https://theaudiodb.p.rapidapi.com/searchtrack.php");

  // req.query({
  //   t: "yellow",
  //   s: "coldplay",
  // });

  // req.headers({
  //   "x-rapidapi-key": "f291cd8ab8mshc8f280b2df68aa8p1f3937jsnffdb0109c34c",
  //   "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
  //   useQueryString: true,
  // });

  // var unirest = require("unirest");

  // var req = unirest("GET", "https://theaudiodb.p.rapidapi.com/searchtrack.php");

  // req.query({
  //   t: "yellow",
  //   s: "coldplay",
  // });

  // req.headers({
  //   "x-rapidapi-key": "f291cd8ab8mshc8f280b2df68aa8p1f3937jsnffdb0109c34c",
  //   "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
  //   useQueryString: true,
  // });

  // req.end(function (res) {
  //   if (res.error) throw new Error(res.error);

  //   console.log(res.body);
  // });

  // const searchValue = "coldplay";

  // async function getUser() {
  //   try {
  //     const response = await axios.get(
  //       `https://theaudiodb.p.rapidapi.com/searchtrack.php/search?q=${searchValue}&api_key=f291cd8ab8mshc8f280b2df68aa8p1f3937jsnffdb0109c34c`
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div>
      <NavBar videos />
      {/* <button onClick={getUser}>press here</button> */}
      <Footer />
    </div>
  );
}
