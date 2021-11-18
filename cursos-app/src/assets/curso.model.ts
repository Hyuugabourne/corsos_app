export type Curso = {
  Id: number;
  assunto: string;
  inicio: string;
  fim: string;
  categoria:
    | "Multiplataforma"
    | "Banco de dados"
    | "Metodologia"
    | "Comportamento"
    | "Comunicação";
  quantidadeAlunos?: number;
  editando: boolean;
};
