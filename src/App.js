import "./App.css";
import { useState, useEffect } from "react";
const LIMIT = 16;
const App = () => {
  const [imgs, setImgs] = useState([]);
  const [data, setData] = useState([]);
  var [start, setStart] = useState(1);
  var [end, setEnd] = useState(16);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        const updatedImgs = data.filter((img) => img.id >= 1 && img.id <= 16);
        setImgs(updatedImgs);
      });
  }, []);

  const nextPage = () => {
    setStart((start += 16));
    setEnd((end += 16));
    const updatedImgs = data.filter((img) => img.id >= start && img.id <= end);
    setImgs(updatedImgs);
    console.log(start, end);
  };

  const prevPage = () => {
    setStart((start -= 16));
    setEnd((end -= 16));
    const updatedImgs = data.filter((img) => img.id >= start && img.id <= end);
    setImgs(updatedImgs);
    console.log(start, end);
  };
  const jump = (value) => {
    const newStart = LIMIT * value;
    const updatedImgs = data.filter(
      (img) => img.id >= newStart + 1 && img.id <= newStart + LIMIT
    )
    setImgs(updatedImgs);
  };

  return (
    <div className="mainContainer">
      {imgs.map((ob) => {
        return <img key={ob.id} className="col-md-3 img" src={ob.url} />;
      })}
      <div align="center">
        <button className="btn-lg btn-info" onClick={prevPage}>
          Prev
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        {imgs.map((ob, i) => {
          if (i < 10)
            return (
              <button
                className="btn-lg btn-outline-info btn-bottom"
                onClick={() => jump(i)}
              >
                {i + 1}
              </button>
            );
        })}
        &nbsp;&nbsp;&nbsp;
        <button className="btn-lg btn-info" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
export default App;
