import styles from "./NFTsContent.module.css";
import { useEffect, useState } from "react";

const NFTsContent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("francesco-api.herokuapp.com/projects")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProjects(data);
      })
      .catch(error => console.log(error));

    console.log(projects);
  });

  return (
    <div>
      <h1 style={{ color: "white", width: "100%", textAlign: "center" }}>
        NFTsContent
      </h1>
    </div>
  );
};

export default NFTsContent;
