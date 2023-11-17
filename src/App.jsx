import "./App.css";
import React from "react";

function Arama(props) {
  function handleChange(event) {
    setAramaMetni(event.target.value);
    props.onSearch(event);
  }

  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input
        id="arama"
        type="text"
        onChange={props.onSearch}
        value={props.aramaMetni}
      />
    </div>
  );
}
function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}
    </ul>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "Mikroişlemciler",
      url: "wwww.google.com.tr",
      yazar: "Bill Gates",
      yorum_sayisi: 9,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Javascript Course",
      url: "wwww.google.com.tr",
      yazar: "Steve Jobs",
      yorum_sayisi: 53,
      puan: 5,
      id: 3,
    },
    {
      baslik: "Object Orianted Programming",
      url: "wwww.google.com.tr",
      yazar: "Elon Musk",
      yorum_sayisi: 1634,
      puan: 5,
      id: 4,
    },
  ];

  const searchText = yaziListesi.filter((yazi) => {
    const baslik = yazi.baslik.toLowerCase();
    const yazar = yazi.yazar.toLowerCase();
    if(yazar.includes(aramaMetni.toLowerCase())){
      return yazar.includes(aramaMetni.toLowerCase())
    }else{
      return baslik.includes(aramaMetni.toLowerCase())
    }
  });

  function handleSearch(e) {
    setAramaMetni(e.target.value);
  }

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);
  return (
    <div>
      <h1>Yazılar</h1>
      <Arama onSearch={handleSearch} />
      <hr />
      <Liste yazilar={searchText} />
    </div>
  );
}
export default App;
