
const livroPincipal = "Diário de um banana";
const livros = [
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Rodrick é o cara",
    variacao: "Rodrick é o cara",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana A gota d'agua",
    variacao: "A gota d'agua",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Dias de cão",
    variacao: "Dias de cão",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana A verdade nua e crua",
    variacao: "A verdade nua e crua",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Casa dos horores",
    variacao: "Casa dos horores",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Segurando vela",
    variacao: "Segurando vela",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Maré de azar",
    variacao: "Maré de azar",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Caindo na estrada",
    variacao: "Caindo na estrada",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Bons tempos",
    variacao: "Bons tempos",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Vai ou racha",
    variacao: "Vai ou racha",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Apertem os Cintos",
    variacao: "Apertem os Cintos",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Batalha Neval",
    variacao: "Batalha Neval",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Quebra Tudo",
    variacao: "Quebra Tudo",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Vai Fundo",
    variacao: "Vai Fundo",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Bola Fora",
    variacao: "Bola Fora",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Fräwda Megaxeia",
    variacao: "Fräwda Megaxeia",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Cabeça Oca",
    variacao: "Cabeça Oca",
  },
];

function Filtra() {
  const pesquisa = document.getElementById("pesquisar").value.toLowerCase()
  let resultado = false;

  for (let i = 0; i < livros.length; i++) {

    const nomeMinusculo = livros[i].nome.toLowerCase()
    const variacaoMunusculo = livros[i].variacao.toLowerCase()
    const nomeCompleto = livros[i].nomeCompleto.toLowerCase()

    console.log(pesquisa)

    if (nomeMinusculo.includes(pesquisa) || variacaoMunusculo.includes(pesquisa) || nomeCompleto.includes(pesquisa)) {
      resultado = true;
      break;
    }
  }

  if (resultado) {
    document.querySelector("#resultado").innerHTML = "Disponível ";
  } else {
    document.querySelector("#resultado").innerHTML = "Não encontrado Sory...";
  }
}