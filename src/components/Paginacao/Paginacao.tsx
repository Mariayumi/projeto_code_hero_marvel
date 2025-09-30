import "./Paginacao.css";

export interface PaginacaoProps {
  paginaAtual: number;
  totalPaginas: number;
  irParaPagina: (pagina: number) => void;
  irParaPrimeira: () => void;
  irParaUltima: () => void;
  irParaAnterior: () => void;
  irParaProxima: () => void;
}

export default function Paginacao({
  paginaAtual,
  totalPaginas,
  irParaPagina,
  irParaPrimeira,
  irParaUltima,
  irParaAnterior,
  irParaProxima,
}: PaginacaoProps) {
  const getNumerosPaginacao = () => {
    const maxNumeros = 5;
    const numeros = [];
    let startPage = Math.max(1, paginaAtual - Math.floor(maxNumeros / 2));
    let endPage = Math.min(totalPaginas, startPage + maxNumeros - 1);

    if (endPage - startPage < maxNumeros - 1) {
      startPage = Math.max(1, endPage - maxNumeros + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      numeros.push(i);
    }
    return numeros;
  };

  const numerosPaginacao = getNumerosPaginacao();

  return (
    <div className="paginacao_container">
      <button onClick={irParaPrimeira} disabled={paginaAtual === 1}>
        &lt;&lt;
      </button>

      <button onClick={irParaAnterior} disabled={paginaAtual === 1}>
        &lt;
      </button>

      {numerosPaginacao.map((numero) => (
        <button
          key={numero}
          onClick={() => irParaPagina(numero)}
          className={numero === paginaAtual ? "pagina_ativa" : ""}
        >
          {numero}
        </button>
      ))}

      <button onClick={irParaProxima} disabled={paginaAtual === totalPaginas}>
        &gt;
      </button>

      <button onClick={irParaUltima} disabled={paginaAtual === totalPaginas}>
        &gt;&gt;
      </button>
    </div>
  );
}
