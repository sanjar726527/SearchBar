import { useEffect, useState } from "react";
import "./App.css";
import MyComponent from "./components/Test";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const apiUrl = "https://dummyjson.com/users";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={inputStyle}
      />
      <MyComponent data={data} query={query} />
    </div>
  );
}
const searchBarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px",
  width: "90%",
  margin: "10px auto 0",
};

const inputStyle = {
  borderRadius: "5px",
  border: "1px solid #a0a0a0",
  padding: "8px",
  marginRight: "8px",
  fontSize: "14px",
  boxShadow: "0 0 8px #b0dee6",
};

export default App;
