import { HeaderAtividades } from "./header-atividade";
import video from '../../videos/Reconhecimento-de-Imagens.mp4';

export function ReconhecimentoDeImagens() {
  return (
    <div>
      <HeaderAtividades />
      <section className="flex justify-center bg-gray-100">
        <div className="flex flex-col min-w-[300px] max-w-[900px] m-4 lg:m-10 bg-white p-6 lg:p-12 shadow-xl rounded gap-6 text-sm lg:text-md text-justify">
          <h1 className="font-semibold mb-4 text-2xl lg:text-3xl text-center border-y-4 border-dashed border-red-700 py-4 lg:py-8">
            Reconhecimento de Imagens
          </h1>
          <div className="flex flex-col gap-4">
            <p>
              Esta atividade oferece uma maneira diferente de entender como os computadores podem aprender a reconhecer e classificar imagens, de forma semelhante a como o cérebro humano processa informações visuais. Redes Neurais são um tipo de inteligência artificial inspirada no funcionamento do cérebro, e são usadas em muitas aplicações modernas, como reconhecimento de imagem, voz e até mesmo em carros autônomos.
            </p>
            <p>
              Para entender melhor o processo de reconhecimento de imagem, os alunos irão simular o funcionamento de uma rede neural. Uma rede neural é composta por várias camadas de neurônios artificiais, onde cada camada realiza uma tarefa específica no processamento da informação. Nessa atividade, cada grupo de estudantes desempenhará o papel de uma dessas camadas, colaborando para classificar corretamente as imagens baseadas em suas características.
            </p>
            <p>
              Os alunos serão divididos em três grupos, cada um representando uma camada da rede neural. O primeiro grupo será responsável por observar a imagem e criar representações simplificadas dela. O segundo grupo analisará essas representações em busca de características específicas, como formas geométricas. O terceiro grupo utilizará as informações fornecidas pelo segundo grupo para fazer a classificação final da imagem.
            </p>
            <p>
              Este exercício não só ajuda os alunos a compreenderem o conceito de redes neurais e reconhecimento de imagem, mas também destaca a importância de colaboração e comunicação entre diferentes partes de um sistema complexo. Além disso, os alunos perceberão que, assim como em uma rede neural real, melhorar a precisão do reconhecimento de imagem envolve ajustar e refinar o processo com base em feedback contínuo.
            </p>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Atividade</span>
          </h2>
          <p>Separe os alunos em 3 grupos (A, B e C). Em cada grupo, há uma conduta diferente a ser trabalhada:</p>
          <ul className="list-disc list-inside">
            <li>O grupo A pega uma imagem da pilha de cartões de foto (B e C não podem ver a imagem), cria 2 desenhos diferentes (30 segundos para cada um) e passa para o grupo B.</li>
            <li>O grupo B recebe os desenhos do grupo A e verifica se existem formatos quadrados, retangulares, triangulares, circulares, etc. Após realizar a análise, repassa as informações para o grupo C.</li>
            <li>O grupo C faz a avaliação das informações recebidas e compara com a tabela se a resposta está correta.</li>
          </ul>

          <div className="flex justify-center">
            <img
              className="border-4 border-red-700 max-w-full"
              src="../exemplo-1-reconhecimento-de-imagens.jpg"
              alt="Imagem de execução da atividade de reconhecimento de imagens"
            />
          </div>
          <p>
            Após realizar os experimentos iniciais, é possível expandir o conhecimento da rede, colocando alguma imagem que não tenha as características apresentadas dentro da tabela. Ao fazer essa expansão de definição de imagens dentro da rede, é necessário aumentar a quantidade de características a serem analisadas dentro da tabela, para ser possível distinguir as categorias, ou várias características devem ser combinadas para formar um padrão mais complexo.
          </p>

          <h2 className="text-xl lg:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Objetivo</span>
          </h2>
          <p>
            Esta atividade visa proporcionar aos estudantes uma introdução prática aos conceitos fundamentais das redes neurais e do reconhecimento de imagem. Ao simular o funcionamento de uma rede neural, os participantes irão explorar como a inteligência artificial pode identificar e classificar objetos com base em características extraídas de imagens.
          </p>

          <h2 className="text-xl lg:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Materiais necessários</span>
          </h2>
          <ol className="list-disc list-inside">
            <li>Cartões com fotos para serem desenhados</li>
            <li>Papel e caneta para desenhar</li>
            <li>Tabela de características para o grupo C</li>
          </ol>

          <h2 className="text-xl lg:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Passos</span>
          </h2>
          <ol className="list-decimal list-inside marker:font-bold">
            <li>Dividir os alunos em 3 grupos: A, B e C.</li>
            <li>O grupo A pega uma imagem da pilha de cartões de foto e cria 2 desenhos diferentes em 30 segundos cada.</li>
            <li>O grupo A passa os desenhos para o grupo B.</li>
            <li>O grupo B analisa os desenhos e verifica se existem formatos específicos (quadrados, retangulares, triangulares, circulares, etc.).</li>
            <li>O grupo B repassa as informações das características identificadas para o grupo C.</li>
            <li>O grupo C avalia as informações recebidas e compara com a tabela para verificar se a resposta está correta.</li>
            <li>Repetir o processo com diferentes imagens e características.</li>
            <li>Expandir a definição de imagens dentro da rede, adicionando novas características ou combinando várias características para formar padrões mais complexos.</li>
          </ol>

          <h2 className="text-xl lg:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Vídeo Explicativo</span>
          </h2>
          <video src={video} className="mt-4 w-full" controls></video>

          <h2 className="text-xl lg:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Exercícios</span>
          </h2>
          <ol className="list-decimal list-inside marker:font-bold">
            <li>Quantas imagens foram usadas no total durante a atividade? Quantas características diferentes foram identificadas no final?</li>
            <li>Como a qualidade dos desenhos criados pelo grupo A afetou a capacidade do grupo B de identificar características?</li>
            <li>Qual foi a taxa de precisão na classificação das imagens pelo grupo C? Houve alguma imagem que foi classificada incorretamente?</li>
            <li>Quais novas características poderiam ser adicionadas à tabela para melhorar o reconhecimento de imagens?</li>
          </ol>

          <h2 className="text-xl lg:text-2xl font-bold">
            <span className="border-b-4 border-red-700">Discussão</span>
          </h2>
          <ul className="list-disc list-inside">
            <li>Como a adição de novas características à tabela pode melhorar a capacidade de classificação das imagens mais complexas?</li>
            <br />
            <p>
              <strong>Sugestão:</strong> Discuta como isso pode ajudar a criar padrões mais complexos, permitindo uma melhor distinção entre categorias de imagens mais complexas a serem classificadas pelos participantes.
            </p>
          </ul>

          <h2 className="text-xl lg:text-2xl font-bold">
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
                href="https://pt.wikipedia.org/wiki/Sistema_de_reconhecimento_facial"
                target="_blank"
              >
                Reconhecimento facial
              </a>
            </li>
            <li>
              <a
                className="underline-offset-0 text-red-700 hover:underline"
                href="https://pt.wikipedia.org/wiki/Arte_de_inteligência_artificial"
                target="_blank"
              >
                Criação de imagens com Inteligência Artificial
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
