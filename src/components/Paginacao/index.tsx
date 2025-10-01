import { useEffect, useState } from "react";
import "./Paginacao.css"
import type { PaginacaoProps } from "../../types/components/IPaginacao";

function gerarPaginas(paginaAtual: number, totalPaginas: number, isMobile: boolean) {
    if (isMobile) {
        const paginas: number[] = [];
        if (paginaAtual > 1) paginas.push(paginaAtual - 1);
        paginas.push(paginaAtual);
        if (paginaAtual < totalPaginas) paginas.push(paginaAtual + 1);
        return paginas;
    }

    const paginas: (number | string)[] = [];

    for (let i = 1; i <= Math.min(3, totalPaginas); i++) {
        paginas.push(i);
    }

    if (paginaAtual > 5) paginas.push("...");

    for (let i = paginaAtual - 1; i <= paginaAtual + 1; i++) {
        if (i > 3 && i < totalPaginas - 2) paginas.push(i);
    }

    if (paginaAtual < totalPaginas - 4) paginas.push("...");

    for (let i = totalPaginas - 2; i <= totalPaginas; i++) {
        if (i > 3) paginas.push(i);
    }

    return paginas;
}

export default function Paginacao({ totalPaginas, paginaAtual, setPaginaAtual }: PaginacaoProps) {
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);
    const isMobile = larguraTela <= 800;

    useEffect(() => {
        function handleResize() {
            setLarguraTela(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const irParaPrimeira = () => setPaginaAtual(1);
    const irParaUltima = () => setPaginaAtual(totalPaginas);
    const irParaAnterior = () => setPaginaAtual(Math.max(1, paginaAtual - 1));
    const irParaProxima = () => setPaginaAtual(Math.min(totalPaginas, paginaAtual + 1));
    const irParaPagina = (numero: number) => setPaginaAtual(numero);

    if (totalPaginas <= 1) return null;

    return (
        <div className="paginacao_container">
            <button onClick={irParaPrimeira} disabled={paginaAtual === 1}>
                {"<<"}
            </button>
            <button onClick={irParaAnterior} disabled={paginaAtual === 1}>
                {"<"}
            </button>

            {gerarPaginas(paginaAtual, totalPaginas, isMobile).map((numero, i) =>
                numero === "..." ? (
                    <span key={`ellipsis-${i}`} className="ellipsis">...</span>
                ) : (
                    <button
                        key={numero}
                        onClick={() => irParaPagina(numero as number)}
                        className={numero === paginaAtual ? "pagina_ativa" : ""}
                    >
                        {numero}
                    </button>
                )
            )}

            <button onClick={irParaProxima} disabled={paginaAtual === totalPaginas}>
                {">"}
            </button>
            <button onClick={irParaUltima} disabled={paginaAtual === totalPaginas}>
                {">>"}
            </button>
        </div>
    );
}