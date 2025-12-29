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
  <div key={article._id} style={{ border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>

    <h2>{article.title}</h2>

    {/* ORIGINAL */}
    <h4 style={{ color: "#555" }}>Original Version</h4>
    <p>
      {article.originalContent?.slice(0, 300)}...
    </p>

    {/* UPDATED */}
    {article.isUpdated && (
      <>
        <h4 style={{ color: "green" }}>Updated Version</h4>
        <p>
          {article.updatedContent?.slice(0, 300)}...
        </p>
      </>
    )}
  </div>
))}
    </div>
  );
}

export default App;