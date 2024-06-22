import Organico from "../tabatha-de-almeida-pradier/models/organicos";

const hortifruti = new Organico("Tomates", 9, new Date("2024-06-20"), [
  "Vegetais",
  "Fruta",
]);

const ovos = new Organico(
  "Ovos caipiras e orgânicos",
  19,
  new Date("2024-06-20"),
  ["Sem crueldade", "caipira", "galinhas livres", "free gmo"]
);

hortifruti.exibirInformacoes();
ovos.exibirInformacoes();
