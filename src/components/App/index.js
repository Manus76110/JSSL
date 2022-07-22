import Header from "../Header";
import Slider from "../Slider";
import data from "../../data/pictures"
// Styles


// 1) Je récupere mon tableau data et je le passe en props dans mon composent <Slider slider={data}/>
// =>(voir slider.js)

function App() {
  // console.log(data);
  return (
    <>
    <Header />
    <Slider slider={data}/>
    </>
    )
}
export default App;