import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/articles")
      .then(res => setArticles(res.data));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>BeyondChats Articles</h1>

      {articles.map(article => (
        <div
          key={article._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "6px"
          }}
        >
          <h2>{article.title}</h2>

          <span style={{
            color: article.isUpdated ? "green" : "gray",
            fontWeight: "bold"
          }}>
            {article.isUpdated ? "Updated" : "Original"}
          </span>

          <p style={{ marginTop: "10px" }}>
            {article.content.slice(0, 200)}...
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
