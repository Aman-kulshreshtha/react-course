import reactImg from "./assets/react-core-concepts.png"
import {CORE_CONCEPTS} from "./data"

function CoreComponent(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {

  const descriptionArray = ["Core","Crucial","Important"];

  function getRandomIndex(size) {
    return Math.floor(Math.random()*(size));
  }

  const description = descriptionArray[getRandomIndex(descriptionArray.length)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}



function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Components</h2>
          <ul>
            <CoreComponent title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description} />
            <CoreComponent {...CORE_CONCEPTS[1]}/>
            <CoreComponent {...CORE_CONCEPTS[2]}/>
            <CoreComponent {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
       

      </main>
    </div>
  );
}

export default App;
