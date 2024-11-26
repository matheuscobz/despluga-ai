import { ArrowUpRight } from "lucide-react";
import { Header } from "./header";
import { useNavigate } from "react-router-dom";
import logo from "/logo.svg";

export function Inicio() {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = `/atividades`;
    navigate(path);
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex justify-center bg-gray-100 p-4">
        <div className="flex flex-col items-center justify-center w-full max-w-screen-md bg-white p-6 sm:p-12 shadow-xl rounded">
          <div className="text-2xl sm:text-3xl text-center font-bold flex items-center justify-center mb-6">
            <img className="h-40 sm:h-60 w-auto" src={logo} alt="Logo" />
          </div>

          <p className="text-justify text-base sm:text-lg mb-6">
            Nosso portal foi desenvolvido para auxiliar professores do ensino médio na aplicação de <strong>atividades desplugadas</strong> que promovem o <strong>pensamento computacional</strong>. Estas atividades são alinhadas com a competência (EM13CO10) do novo documento complementar à BNCC, que visa a compreensão dos fundamentos da <strong>Inteligência Artificial</strong>, sua comparação com a inteligência humana e a análise de suas potencialidades, riscos e limites.
          </p>

          <p className="text-justify text-base sm:text-lg mb-6">
            No nosso portal, você terá acesso a uma variedade de atividades educativas que não requerem o uso de computadores, permitindo que os alunos desenvolvam habilidades importantes de forma lúdica e interativa. As atividades disponíveis são projetadas para serem facilmente integradas no currículo escolar e engajar os alunos em conceitos fundamentais da IA.
          </p>

          <div className="flex flex-col text-base sm:text-lg mb-6">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Atividades disponíveis:</h3>
            <ol className="list-disc list-inside flex flex-col gap-4 text-justify">
              <li>
                São diversas atividades que abordam conceitos de Inteligência Artificial sem que seja necessário saber programar ou utilizar algum software específico.
              </li>
              <li>
                Todas as atividades trazem orientações para o professor, informações curriculares, explicações detalhadas, materiais adicionais e aprofundamentos.
              </li>
            </ol>
          </div>

          <button
            onClick={routeChange}
            className="bg-red-700 text-base sm:text-lg p-4 sm:p-6 w-full mb-6 text-white hover:bg-red-600 font-bold tracking-widest flex justify-center gap-4 items-center rounded-md"
          >
            <a href="/atividades">Acesse as atividades</a>
            <ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          <p className="text-base sm:text-lg text-justify mb-6">
            A coleção pode ser utilizada prioritariamente com estudantes do ensino médio, não se restringindo a somente uma única idade ou conhecimento prévio. As atividades foram desenvolvidas com base em projetos reconhecidos internacionalmente e são utilizadas em diversos países, destacando-se pela sua qualidade e eficácia pedagógica.
          </p>

          <div className="flex flex-col text-base sm:text-lg mt-4 gap-4">
            <h3 className="font-bold text-lg sm:text-xl">Objetivo</h3>
            <p className="text-justify">
              Capacitar professores e alunos com o conhecimento necessário para navegar no mundo cada vez mais digital e automatizado, desenvolvendo uma compreensão crítica da Inteligência Artificial e suas aplicações no mundo real.
            </p>
            <p className="text-justify">
              Explore nosso portal e descubra como cada atividade pode transformar a sala de aula em um ambiente de aprendizado e inovador. Juntos, vamos preparar os alunos para os desafios e oportunidades do futuro tecnológico.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
