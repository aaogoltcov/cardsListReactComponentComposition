import logo from './logo.svg';
import './App.css';
import CardsList from "./components/cards_list/CardsList";
import Card from "./components/card/Card";
import shortid from "shortid";

function App() {
  const cardsList = [
    {
      img: "https://via.placeholder.com/350x250",
      title: "Card title with picture",
      text: "Some quick example text to build on the card title and make up",
      button: "Go somewhere",
    },
    {
      img: "",
      title: "Card title without picture",
      text: "Some quick example text to build on the card title and make up",
      button: "Go somewhere",
    },
  ]

  const cards = () => {
    return cardsList.map(item => <Card card={item} key={shortid.generate()} />)
  }

  return (
    <div className="app">
      <CardsList children={cards()} />
    </div>
  );
}

export default App;
