export function obrigatorio(valor: string, nomeCampo: string): string {
  const v = valor.trim();

  if (v === "") {
    throw new Error(`Campo obrigatório: ${nomeCampo}`);
  }

  return v;
}

export function parseNumeroInteiro(valor: string, nomeCampo: string): number {
  const v = obrigatorio(valor, nomeCampo);

  const n = Number(v);

  if (!Number.isInteger(n)) {
    throw new Error(`${nomeCampo} deve ser um número inteiro`);
  }

  return n;
}

export function entre(n: number, min: number, max: number, nomeCampo: string): number {
  if (n < min || n > max) {
    throw new Error(`${nomeCampo} deve estar entre ${min} e ${max}`);
  }

  return n;
}