import { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/temp.php");
    const data = await response.json();

    setData(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Test</button>
      {data && <p>{data.message}</p>}
    </div>
  );
};

export default App;
