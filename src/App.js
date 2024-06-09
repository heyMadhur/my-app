import './App.css';
import ButtonUsage from './components/ButtonUsage';
import Camera from './components/Camera/Camera';
import Camera2 from './components/Camera/Camera2';

function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
};
  return (
    <div className="App">
      <h1>KNOW Your Food</h1>
      {/* <ButtonUsage /> */}
      {/* <Camera /> */}
      <Camera2 />
    </div>
  );
}

export default App;
