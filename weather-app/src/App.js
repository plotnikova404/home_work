import './App.css';
import SearchBar from "./SearchBar";
import Location from "./Location";
import Weather from "./Weather";
import "./background.jpg";

function App() {
    return (
        <div className="App">
            <div className="Container">
                <SearchBar></SearchBar>
                <Location></Location>
                <Weather></Weather>
            </div>
        </div>
    );
}

export default App;