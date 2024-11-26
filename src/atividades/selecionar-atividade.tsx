import { useNavigate } from "react-router-dom";
import { Header } from "../header";

export function Atividades() {
  const navigate = useNavigate();
  let path = `atividades`;

  const routeChangeTuring = () => {
    path = `/atividades/teste-de-turing`;
    navigate(path);
  };

  const routeChangeImageRecognition = () => {
    path = `/atividades/reconhecimento-de-imagens`;
    navigate(path);
  };

  const routeChangeNetwork = () => {
    path = `/atividades/rede-adversaria-generativa`;
    navigate(path);
  };

  return (
    <div className="">
      <Header />
      <div className="flex flex-col">
        
        <div className="flex flex-col items-center bg-gray-100 h-screen p-4 gap-6 justify-evenly">
          <div className="flex flex-col bg-white shadow-2xl rounded gap-4 max-w-md items-center sm:w-full">
            <button
              onClick={routeChangeTuring}
              className="flex flex-col sm:flex-row justify-between items-center border-red-700 border-dashed border-4 rounded-md px-4 py-6 hover:bg-red-700 text-xl sm:text-2xl font-bold hover:text-white gap-4 [@media (min-width:320px){ w-full }]  "
            >
              <span className="px-16">Teste de Turing</span>
              <img className="w-16 h-16 shrink-0" src="teste-de-turing.png" alt="Teste de Turing" />
            </button>
          </div>

          <div className="flex flex-col bg-white shadow-2xl rounded gap-4 max-w-md items-center sm:w-full">
            <button
              onClick={routeChangeImageRecognition}
              className="flex flex-col sm:flex-row justify-between items-center border-red-700 border-dashed border-4 rounded-md px-4 py-6 hover:bg-red-700 text-xl sm:text-2xl font-bold hover:text-white gap-4  sm:w-full"
            >
              <span className="">Reconhecimento de Imagens</span>
              <img
                className="w-16 h-16 shrink-0"
                src="reconhecimento-de-imagens.png"
                alt="Reconhecimento de Imagens"
              />
            </button>
          </div>

          <div className="flex flex-col bg-white shadow-2xl rounded gap-4 max-w-md items-center sm:w-full">
            <button
              onClick={routeChangeNetwork}
              className="flex flex-col sm:flex-row justify-between items-center border-red-700 border-dashed border-4 rounded-md px-4 py-6 hover:bg-red-700 text-xl sm:text-2xl font-bold hover:text-white gap-4  sm:w-full"
            >
              <span className="text-center">Rede Adversária Generativa</span>
              <img className="w-16 h-16 shrink-0" src="rede-neural.png" alt="Rede Adversária Generativa" />
            </button>
          </div>
        </div>

        {/* <footer>
          <div className="flex items-center justify-center bg-black text-white py-6">
            <a
              href="https://www.flaticon.com/br"
              title="Ícones criados por CapVora - Flaticon"
              className="text-sm"
            >
              Ícones criados por CapVora - Flaticon
            </a>
          </div>
        </footer> */}
      </div>
    </div>
  );
}
