export function formataData(dataString: string): string {
  if (!dataString) return "N/A"; 

  try {
    const data = new Date(dataString);
    if (isNaN(data.getTime())) {
      console.warn(`Data inválida recebida: ${dataString}`);
      return "Data inválida";
    }

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); 
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  } catch (error) {
    console.error(`Erro ao formatar data '${dataString}':`, error);
    return "Erro de formatação";
  }
}
