import Navbar from '../components/Navbar';
import Searchbox from '../components/Searchbox';
import Countries from '../components/Countries';

function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <Searchbox />
      <Countries />
    </div>
  );
}

export default Home;
