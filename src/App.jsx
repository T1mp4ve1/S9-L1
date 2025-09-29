import "./App.css";
import ButtonReact from "./assets/components/buttonReact";
import IMGReact from "./assets/components/IMGReact";

function App() {
  return (
    <>
      <IMGReact
        src="https://img.freepik.com/foto-gratuito/pianeta-immaginario-con-cielo-notturno-colorato-stelle-e-nebulosa_1048-7926.jpg?semt=ais_hybrid&w=740&q=80"
        alt="spazio"
      />
      <ButtonReact
        className="btn btn-lg btn-dark rounded-0"
        buttonContent="Cliccami"
      />
    </>
  );
}

export default App;
