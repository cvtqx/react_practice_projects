import './App.css';
import CounterWithLocalStorage from './components/localStorage';
// import Accordion from './components/accordion';
// import ImageSlider from './components/image-slider';
// import LoadMoreData from './components/load-more-data';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
// import MapAPI from './components/mapAPI';


function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}
      {/* Star rating component */}
      {/* <StarRating numberOfStars={ 10 } /> */}
      {/* Image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={'10'} /> */}
      {/* Load more data component */}
      {/* <LoadMoreData /> */}
      {/* Map component */}
      {/* <MapAPI /> */}
      <CounterWithLocalStorage />

    </div>
  );
}

export default App;
