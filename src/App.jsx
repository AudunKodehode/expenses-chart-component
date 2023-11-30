import "./App.css";
import data from "/src/data.json";
import LOGO from "/public/images/logo.svg";
import Graph from "./components/graph";
function App() {
  return (
    <>
      <div className="appContainer center flexCol">
        <div className="balance">
          <div className="balancecontainer">
            <h1>My balance</h1>
            <h2>$921.48</h2>
          </div>
          <div className="logo">
            <img src={LOGO} alt="" />
          </div>
        </div>
        <div className="main">
          <h3>Spending - Last 7 days</h3>

          <div className="graph">
            <div className="graphContainer">
              <Graph data={data} />
            </div>
            <div className="days">
              <div className="day">
                <p>mon</p>
              </div>
              <div className="day">
                <p>tue</p>
              </div>
              <div className="day">
                <p>wed</p>
              </div>
              <div className="day">
                <p>thu</p>
              </div>
              <div className="day">
                <p>fri</p>
              </div>
              <div className="day">
                <p>sat</p>
              </div>
              <div className="day">
                <p>sun</p>
              </div>
            </div>
          </div>

          <div className="horLine"></div>
          <div className="total">
            <div className="total-l">
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>
            <div className="total-r">
              <h5>+2.4%</h5>
              <h6>from last month</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
