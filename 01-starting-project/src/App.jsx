function Header() {

  const descriptionArray = ["Core","Crucial","Important"];

  function getRandomIndex(size) {
    return Math.floor(Math.random()*(size));
  }

  const description = descriptionArray[getRandomIndex(descriptionArray.length)]

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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
      </main>
    </div>
  );
}

export default App;
