import { perguntar, fecharIO } from "../io";
import { obrigatorio, parseNumeroInteiro, entre } from "../validators";

class Personagem {
  protected nome: string;
  protected planeta: string;
  protected energia: number;
  
  constructor(nome: string, planeta: string, energia: number) {
    this.nome = nome;
    this.planeta = planeta;
    this.energia = energia;
  }
  
  apresentar(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Planeta: ${this.planeta}`);
    console.log(`Energia: ${this.energia}`);
  }
  
  usarHabilidade(): void {
    console.log("O personagem usou uma habilidade.");
  }
}

class Jedi extends Personagem {
  private corSabre: string;
  
  constructor(nome: string, planeta: string, energia: number, corSabre: string) {
    super(nome, planeta, energia);
    this.corSabre = corSabre;
  }
  
  usarHabilidade(): void {
    console.log(`O Jedi ${this.nome} usou a Força para proteger a galáxia.`);
    console.log(`Cor do sabre de luz: ${this.corSabre}`);
  }
}

class Sith extends Personagem {
  private nivelRaiva: number;
  
  constructor(nome: string, planeta: string, energia: number, nivelRaiva: number) {
    super(nome, planeta, energia);
    this.nivelRaiva = nivelRaiva;
  }
  
  usarHabilidade(): void {
    console.log(`O Sith ${this.nome} usou o lado sombrio da Força.`);
    console.log(`Nível de raiva: ${this.nivelRaiva}`);
  }
}

class Droide extends Personagem {
  private funcao: string;
  
  constructor(nome: string, planeta: string, energia: number, funcao: string) {
    super(nome, planeta, energia);
    this.funcao = funcao;
  }
  
  usarHabilidade(): void {
    console.log(`O droide ${this.nome} executou sua função: ${this.funcao}.`);
  }
}

class Mandaloriano extends Personagem {
  private armaPrincipal: string;
  
  constructor(nome: string, planeta: string, energia: number, armaPrincipal: string) {
    super(nome, planeta, energia);
    this.armaPrincipal = armaPrincipal;
  }
  
  usarHabilidade(): void {
    console.log(`O Mandaloriano ${this.nome} atacou usando ${this.armaPrincipal}.`);
  }
}

async function main() {
  console.log("=== SISTEMA DE PERSONAGENS STAR WARS ===");
  
  try {
    const nomeJedi = await perguntar("Nome do Jedi: ");
    const nomeJediValidado = obrigatorio(nomeJedi, "Nome");
    
    const planetaJedi = await perguntar("Planeta do Jedi: ");
    const planetaJediValidado = obrigatorio(planetaJedi, "Planeta");
    
    const energiaJediStr = await perguntar("Energia do Jedi: ");
    const energiaJediNum = parseNumeroInteiro(energiaJediStr, "Energia");
    const energiaJediValidada = entre(energiaJediNum, 0, 100, "Energia");
    
    const corSabre = await perguntar("Cor do sabre: ");
    const corSabreValidada = obrigatorio(corSabre, "Cor do sabre");
    
    const jedi = new Jedi(
      nomeJediValidado,
      planetaJediValidado,
      energiaJediValidada,
      corSabreValidada
    );
    
    console.log("\n=== JEDI ===");
    jedi.apresentar();
    jedi.usarHabilidade();
    
    
    const nomeSith = await perguntar("\nNome do Sith: ");
    const nomeSithValidado = obrigatorio(nomeSith, "Nome");
    
    const planetaSith = await perguntar("Planeta do Sith: ");
    const planetaSithValidado = obrigatorio(planetaSith, "Planeta");
    
    const energiaSithStr = await perguntar("Energia do Sith: ");
    const energiaSithNum = parseNumeroInteiro(energiaSithStr, "Energia");
    const energiaSithValidada = entre(energiaSithNum, 0, 100, "Energia");
    
    const nivelRaivaStr = await perguntar("Nível de raiva: ");
    const nivelRaivaNum = parseNumeroInteiro(nivelRaivaStr, "Nível de raiva");
    const nivelRaivaValidado = entre(nivelRaivaNum, 0, 100, "Nível de raiva");
    
    const sith = new Sith(
      nomeSithValidado,
      planetaSithValidado,
      energiaSithValidada,
      nivelRaivaValidado
    );
    
    console.log("\n=== SITH ===");
    sith.apresentar();
    sith.usarHabilidade();
    
    
    const nomeDroide = await perguntar("\nNome do Droide: ");
    const nomeDroideValidado = obrigatorio(nomeDroide, "Nome");
    
    const planetaDroide = await perguntar("Planeta do Droide: ");
    const planetaDroideValidado = obrigatorio(planetaDroide, "Planeta");
    
    const energiaDroideStr = await perguntar("Energia do Droide: ");
    const energiaDroideNum = parseNumeroInteiro(energiaDroideStr, "Energia");
    const energiaDroideValidada = entre(energiaDroideNum, 0, 100, "Energia");
    
    const funcao = await perguntar("Função do Droide: ");
    const funcaoValidada = obrigatorio(funcao, "Função");
    
    const droide = new Droide(
      nomeDroideValidado,
      planetaDroideValidado,
      energiaDroideValidada,
      funcaoValidada
    );
    
    console.log("\n=== DROIDE ===");
    droide.apresentar();
    droide.usarHabilidade();
    
    
    const nomeMandaloriano = await perguntar("\nNome do Mandaloriano: ");
    const nomeMandalorianoValidado = obrigatorio(nomeMandaloriano, "Nome");
    
    const planetaMandaloriano = await perguntar("Planeta do Mandaloriano: ");
    const planetaMandalorianoValidado = obrigatorio(planetaMandaloriano, "Planeta");
    
    const energiaMandalorianoStr = await perguntar("Energia do Mandaloriano: ");
    const energiaMandalorianoNum = parseNumeroInteiro(energiaMandalorianoStr, "Energia");
    const energiaMandalorianoValidada = entre(energiaMandalorianoNum, 0, 100, "Energia");
    
    const armaPrincipal = await perguntar("Arma principal: ");
    const armaPrincipalValidada = obrigatorio(armaPrincipal, "Arma principal");
    
    const mandaloriano = new Mandaloriano(
      nomeMandalorianoValidado,
      planetaMandalorianoValidado,
      energiaMandalorianoValidada,
      armaPrincipalValidada
    );
    
    console.log("\n=== MANDALORIANO ===");
    mandaloriano.apresentar();
    mandaloriano.usarHabilidade();
    
  } catch (erro: any) {
    console.log("Erro no sistema:", erro.message);
  } finally {
    fecharIO();
  }
}

main();


// 1. Qual classe é a superclasse do exercício?
// A classe Personagem.

// 2. Quais classes são subclasses?
// Jedi, Sith, Droide e Mandaloriano.

// 3. Por que usamos super(...) no construtor das subclasses?
// Para chamar o construtor da superclasse e inicializar os atributos herdados.

// 4. Qual a diferença entre private e protected?
// private só pode ser acessado dentro da própria classe.
// protected pode ser acessado dentro da classe e também nas subclasses.

// 5. O que é sobrescrita de método?
// É quando uma subclasse redefine um método da superclasse com outro comportamento.