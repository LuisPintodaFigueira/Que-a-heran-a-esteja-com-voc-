import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function perguntar(texto: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(texto, (resposta: string) => {
      resolve(resposta);
    });
  });
}

export function fecharIO(): void {
  rl.close();
}