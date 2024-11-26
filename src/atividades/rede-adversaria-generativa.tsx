import { HeaderAtividades } from "./header-atividade";
import video from "../../videos/Rede-Adversaria-Generativa.mp4";

export function RedeAdversariaGenerativa() {
  return (
    <div>
      <HeaderAtividades />
      <section className="flex justify-center bg-gray-100">
        <div className="flex flex-col w-full max-w-3xl m-4 md:m-10 bg-white p-6 md:p-12 shadow-xl rounded gap-6 text-md text-justify">
          <h1 className="font-semibold text-2xl md:text-3xl text-center border-y-4 border-dashed border-red-700 py-4 md:py-8">
            Rede Adversária Generativa
          </h1>

          <p>
            Esta atividade aborda como os computadores podem aprender a criar
            novas coisas, como desenhos ou músicas, ao imitar exemplos
            existentes. Imagine que estamos ensinando um computador a desenhar,
            e ele aprende observando muitos desenhos de dinossauros.
          </p>

          <p>
            A atividade envolve três grupos de estudantes. O primeiro grupo irá
            desenhar sabendo por antecipação o tema do desenho. Por outro lado,
            o segundo grupo não tem noção do tema desse desenho e precisa
            descobrir justamente qual é o tema desse desenho. O terceiro será o
            responsável em avaliar se os desenhos estão de acordo com o tema
            estabelecido e passar um feedback do mesmo.
          </p>

          <p>
            Esta abordagem ilustra o conceito de uma Rede Adversária
            Generativa, onde dois modelos de inteligência artificial competem
            entre si: um gerador que cria novos exemplos e um discriminador que
            tenta distinguir entre exemplos reais e gerados.
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-sm border-4 border-red-700"
              src="../exemplo-1-rede-adversaria-generativa.jpg"
              alt="Imagem de execução da atividade de reconhecimento de imagens"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Atividade</span>
          </h2>
          <p>
            Nesta atividade, os estudantes são divididos em quatro grupos, cada
            um com uma função específica. O grupo Real (R) é responsável por
            criar desenhos autênticos, seguindo critérios fornecidos pelo
            professor, como, por exemplo, representar dinossauros com
            características específicas. Já o grupo Gerador (G) tem o desafio
            de criar desenhos que imitam os do grupo R, mas inserindo pequenas
            modificações que os diferenciem, sem descaracterizá-los totalmente.
          </p>

          <p>
            A dinâmica é coordenada pelo grupo Rede (W), que seleciona
            aleatoriamente um desenho, seja do grupo R ou do grupo G, e o envia
            ao grupo Discriminador (D). Este último tem a tarefa de analisar o
            desenho recebido e determinar se ele corresponde às regras definidas
            pelo professor, classificando-o como real ou falso.
          </p>

          <p>
            Com base na análise do grupo D, os desenhos retornam aos seus
            criadores (R ou G), acompanhados de feedback. O grupo G, então,
            ajusta suas criações a partir desse retorno, buscando aperfeiçoá-las
            para que se assemelhem cada vez mais aos desenhos do grupo R.
          </p>

          <p>
            A atividade se desenrola por um período de 30 minutos ou até que o
            grupo Gerador consiga enganar o grupo Discriminador, produzindo
            imitações tão convincentes que sejam indistinguíveis dos desenhos
            reais.
          </p>

          <p>Exemplo de execução de uma partida:</p>
          <div className="flex justify-center">
            <img
              className="w-full max-w-sm border-4 border-red-700"
              src="../exemplo-2-rede-adversaria-generativa.jpg"
              alt="Imagem do exemplo da execução do jogo"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Objetivo</span>
          </h2>
          <p>
            Esta atividade visa proporcionar aos estudantes uma introdução
            prática aos conceitos fundamentais das Redes Adversárias Generativas
            (GANs). Ao simular uma competição entre dois grupos de estudantes,
            um que cria desenhos verdadeiros (Grupo Real) e outro que tenta
            criar desenhos falsos que pareçam autênticos (Grupo Gerador), os
            participantes irão explorar como a inteligência artificial pode se
            manifestar de forma lúdica.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Materiais necessários</span>
          </h2>
          <ul className="list-disc list-inside">
            <li>Papel em branco para desenhar</li>
            <li>Canetas ou lápis</li>
            <li>Espaço para dividir os grupos sem que vejam uns aos outros</li>
            <li>Cronômetro</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Passos</span>
          </h2>
          <ol className="list-decimal list-inside">
            <li>
              Dividir os estudantes em 4 grupos: Real (R), Gerador/Falso (G),
              Discriminador (D) e Rede (W).
            </li>
            <li>
              O grupo R recebe do professor os atributos que definem a imagem
              real (por exemplo: "Os verdadeiros desenhos devem ser de
              dinossauros").
            </li>
            <li>
              O grupo W escolhe um dos grupos para enviar o desenho ao grupo D.
            </li>
            <li>
              O grupo D avalia o desenho e decide se ele condiz com a regra
              definida pelo instrutor (se é real ou falso).
            </li>
            <li>
              Os desenhos são devolvidos aos grupos que os geraram (R ou G) com
              o feedback do grupo D.
            </li>
            <li>
              O processo se repete com o grupo G ajustando suas tentativas de
              desenhar imagens realistas baseando-se no feedback recebido.
            </li>
            <li>
              A atividade continua por 30 minutos ou até que o grupo G consiga
              desenhar imagens falsas tão realistas que o grupo D não consiga
              mais distingui-las das reais.
            </li>
          </ol>

          <h2 className="text-xl md:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Vídeo Explicativo</span>
          </h2>
          <video src={video} className="w-full mt-4" controls></video>

          <h2 className="text-xl md:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Exercícios</span>
          </h2>
          <ol className="list-decimal list-inside marker:font-bold">
            <li>
              Qual foi a taxa de precisão do grupo D em identificar corretamente
              os desenhos reais e falsos? Houve algum desenho que foi mal
              classificado?
            </li>
            <li>
              Como os desenhos criados pelo grupo G evoluíram ao longo da
              atividade? Quais foram as principais mudanças feitas com base no
              feedback recebido?
            </li>
            <li>
              Quais características adicionais poderiam ser introduzidas para
              tornar o processo de avaliação mais desafiador para o grupo D?
            </li>
            <li>
              Quantos desenhos foram criados pelos grupos R e G durante a
              atividade? Quantos feedbacks foram fornecidos pelo grupo D?
            </li>
          </ol>

          <h2 className="text-xl md:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Discussão</span>
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Qual é a importância do feedback fornecido pelo grupo D para a
              melhoria dos desenhos gerados pelo grupo G?
            </li>
            <p className="mt-2">
              <strong>Sugestão:</strong> Discuta como o feedback contínuo é
              essencial para a melhoria dos exemplos gerados em uma rede
              adversária generativa. Explique como o feedback ajuda a ajustar e
              refinar o gerador para criar exemplos mais realistas.
            </p>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Conteúdo adicional</span>
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <a
                className="underline-offset-0 text-red-700 hover:underline"
                href="https://pt.wikipedia.org/wiki/Inteligência_artificial"
                target="_blank"
              >
                Inteligência Artificial
              </a>
            </li>
            <li>
              <a
                className="underline-offset-0 text-red-700 hover:underline"
                href="https://aws.amazon.com/pt/what-is/gan/"
                target="_blank"
              >
                Rede Adversária Generativa
              </a>
            </li>
            <li>
              <a
                className="underline-offset-0 text-red-700 hover:underline"
                href="https://aws.amazon.com/pt/what-is/neural-network/"
                target="_blank"
              >
                Rede Neural
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
