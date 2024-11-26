import { Home, Info, NotebookPen } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation(); // Obtém a localização da URL atual

  return (
    <header>
      <nav className="bg-zinc-300">
        <ul className="flex justify-center items-center gap-8 h-24 font-bold text-lg min-w-screen px-4 md:gap-12 md:text-xl">
          {/* Link para Início */}
          <li
            className={`flex items-center gap-2 ${location.pathname === "/" ? "border-b-4 border-b-red-700" : ""}`}
          >
            <Home className="shrink-0 w-6 h-6" />
            <a className="hover:text-red-700 md:hidden block" href="/">
              Início
            </a>
            <a className="hover:text-red-700 hidden md:block" href="/">
              Início
            </a>
          </li>

          {/* Link para Atividades */}
          <li
            className={`flex items-center gap-2 ${location.pathname === "/atividades" ? "border-b-4 border-b-red-700" : ""}`}
          >
            <NotebookPen className="shrink-0 w-6 h-6" />
            <a className="hover:text-red-700 md:hidden block" href="/atividades">
              Atividades
            </a>
            <a className="hover:text-red-700 hidden md:block" href="/atividades">
              Atividades
            </a>
          </li>

          {/* Link para Sobre */}
          <li
            className={`flex items-center gap-2 ${location.pathname === "/sobre" ? "border-b-4 border-b-red-700" : ""}`}
          >
            <Info className="shrink-0 w-6 h-6" />
            <a className="hover:text-red-700 md:hidden block" href="/sobre">
              Sobre
            </a>
            <a className="hover:text-red-700 hidden md:block" href="/sobre">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
