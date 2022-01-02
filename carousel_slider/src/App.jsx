import { Carousel } from './components';
import staticData from './assets/data.json';

function App() {
  return (
    <div className="">
      <main>
        <Carousel data={staticData} />
      </main>
    </div>
  );
}

export default App;
