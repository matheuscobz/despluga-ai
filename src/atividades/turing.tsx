import { HeaderAtividades } from "./header-atividade";
import video from "../../videos/Teste-de-Turing.mp4";

export function Turing() {
  return (
    <div>
      <HeaderAtividades />
      <section className="flex justify-center bg-gray-100 px-4">
        <div className="flex flex-col w-full max-w-[900px] m-4 bg-white p-6 md:p-12 shadow-xl rounded gap-6 text-sm sm:text-md text-justify">
          <h1 className="font-semibold mb-4 text-2xl sm:text-3xl text-center border-y-4 border-dashed border-red-700 py-4 sm:py-8"> 
            Teste de Turing
          </h1>
          <div className="flex flex-col gap-4">
            <p>Vamos explorar como os computadores podem simular a inteligência humana através do Teste de Turing. Proposto por Alan Turing, um dos pioneiros da ciência da computação, este teste visa determinar se uma máquina pode demonstrar um comportamento inteligente comparável ao de um ser humano.</p>
            <p>No Teste de Turing, um avaliador humano interage com uma máquina e um humano, sem saber qual é qual, por meio de uma série de perguntas e respostas. Se o avaliador não conseguir distinguir consistentemente entre a máquina e o humano, a máquina é considerada "inteligente".</p>
            <p>Inicie a atividade perguntando aos participantes se eles acreditam que os computadores podem ser inteligentes ou se algum dia poderão ser. Apresente o conceito do Teste de Turing e explique que, durante a atividade, eles tentarão identificar se estão interagindo com um humano ou com um computador.</p>

            <div className="flex justify-center my-6">
              <img className="border-4 border-red-700 max-w-full h-auto" src="../exemplo-1-atividade-teste-de-turing.jpg" alt="" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Atividade</span>
          </h2>
          <p>Para preparar a atividade, quatro voluntários são selecionados para assumir os papéis de computador e ser humano. Além disso, há dois mensageiros que garantem o bom andamento do jogo e estão equipados com um pedaço de papel e uma caneta para anotar as respostas. Os papéis de 'humano' e 'computador' são atribuídos secretamente pelo professor antes que esses dois alunos saiam da sala de aula e se dirijam para duas salas separadas. O aluno que assume o papel do computador recebe uma cópia das respostas às perguntas do Teste de Turing. Cada um dos mensageiros é responsável por um papel, que também é mantido em segredo.</p>

          <div className="flex justify-center">
            <img className="border-4 border-red-700 max-w-full h-auto" src="../exemplo-2-atividade-teste-de-turing.jpg" alt="Imagem da execução do Teste de Turing" />
          </div>

          <p>Agora, a turma precisa descobrir qual aluno assumiu o papel do computador. Para isso, eles selecionam uma pergunta por rodada da tabela de perguntas distribuída, que deve ser feita ao computador e à pessoa. Após a escolha de uma questão, os alunos devem explicar por que consideram esta questão adequada para distinguir o computador do ser humano. Essa argumentação é o elemento central da tarefa, pois a classe reflete sobre como as respostas de uma pessoa e de um computador podem diferir.</p>

          <p>Em seguida, os mensageiros fazem perguntas para seus colegas nas outras salas e as respostas são trazidas de volta para a classe. O ser humano é obrigado a responder à pergunta de forma breve e honesta, em outras palavras, dar uma resposta humana. O computador, por outro lado, seleciona a resposta apropriada da planilha. Ao transmitir as respostas dadas, os mensageiros devem ter um cuidado especial para não revelar com quem estão interagindo.</p>

          <p>A classe agora discute qual resposta provavelmente virá de um computador. Repita o processo com mais algumas perguntas, se possível, até que a turma possa tomar uma decisão clara sobre quem é o computador. Se a classe não puder distinguir de forma confiável entre humano e computador, o computador passou no Teste de Turing.</p>

          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Objetivo</span>
          </h2>
          <p>Esta atividade visa proporcionar aos estudantes uma introdução prática aos conceitos fundamentais de inteligência artificial e do Teste de Turing. Ao simular o teste, os participantes irão explorar como a inteligência artificial pode imitar o comportamento humano e refletir sobre os desafios e limitações dessa tecnologia.</p>

          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Materiais necessários</span>
          </h2>
          <ol className="list-disc list-inside">
            <li>Uma tabela vasta de perguntas com as respostas para os jogadores.</li>
            <li>Papel e caneta para os mensageiros.</li>
          </ol>

          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Passos</span>
          </h2>
          <ol className="list-decimal list-inside">
            <li>Selecionar quatro voluntários: dois para os papéis de computador e ser humano, e dois para os mensageiros.</li>
            <li>Enviar os alunos que assumem os papéis de computador e ser humano para salas separadas.</li>
            <li>Distribuir a tabela de perguntas para a turma.</li>
            <li>Selecionar uma pergunta por rodada e discutir a adequação da pergunta.</li>
            <li>Os mensageiros fazem a pergunta aos seus respectivos colegas e trazem as respostas de volta.</li>
            <li>Discutir as respostas e tentar identificar qual veio do computador.</li>
            <li>Repetir o processo até que a turma possa tomar uma decisão clara sobre quem é o computador.</li>
          </ol>

          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Vídeo Explicativo</span>
          </h2>
          <video  
            src={video} 
            className="mt-4 w-full max-h-[500px]"
            controls>
          </video>

          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Exercícios</span>
          </h2>
          <ol className="list-decimal list-inside">
            <li>Quais perguntas foram mais eficazes para distinguir entre a máquina e o humano? Por quê?</li>
            <li>Como as respostas da máquina diferiram das respostas do humano?</li>
            <li>Que tipo de perguntas seriam difíceis para uma máquina responder?</li>
            <li>Como os mensageiros influenciaram a dinâmica do jogo?</li>
            <li>Como você melhoraria o Teste de Turing para torná-lo mais eficaz?</li>
          </ol>

          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Discussão</span>
          </h2>
          <ul className="list-disc list-inside">
            <li>Discuta com os alunos se acham que um computador pode "pensar" como um humano ou se está apenas seguindo instruções programadas.</li>
            <br />
            <p><strong>Exemplo:</strong> Um exemplo simples é uma calculadora que consegue resolver cálculos matemáticos, mas não entende o que está fazendo, comparado a um humano que pode explicar o raciocínio por trás da solução.</p>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Conteúdo adicional</span>
          </h2>
          <ul className="list-disc list-inside">
            <li><a className="underline-offset-0 text-red-700 hover:underline" href="https://pt.wikipedia.org/wiki/Alan_Turing" target="_blank">Alan Turing</a></li>
            <li><a className="underline-offset-0 text-red-700 hover:underline" href="https://pt.wikipedia.org/wiki/Teste_de_Turing" target="_blank">Teste de Turing</a></li>
            <li><a className="underline-offset-0 text-red-700 hover:underline" href="https://pt.wikipedia.org/wiki/Inteligência_artificial" target="_blank">Inteligência Artificial</a></li>
            <li><a className="underline-offset-0 text-red-700 hover:underline" href="https://www.oracle.com/br/chatbots/what-is-a-chatbot/" target="_blank">Chatbots</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
