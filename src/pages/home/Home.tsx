import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Tabela, { type Personagem } from "../../components/Tabela/Tabela";
import { fetchPersonagens } from "../../routes/fetch";
import "./Home.css";

const INITIAL_STATE: Personagem[] = [];

export default function Home() {
  const [personagens, setPersonagens] = useState<Personagem[]>(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true); // Para exibir um loading
  const [error, setError] = useState<string | null>(null); // Para exibir erros

  useEffect(() => {
    const loadPersonagens = async () => {
      setIsLoading(true); 
      setError(null);   
      
      try {
        const data: Personagem[] = await fetchPersonagens();
        
        setPersonagens(data);
        console.log(data)
      } catch (e) {
        console.error("Erro ao carregar dados:", e);
        setError("Não foi possível carregar os dados da API da Marvel.");
      } finally {
        setIsLoading(false);
      }
    };

    loadPersonagens();
    
  }, []);
  return (
    <div className="home">
      <div >
        <div className="container_home">
          <h1>Busca de personagens</h1>
          <Input
            placeholder="Search"
            pesquisa={true}
            label="Nome do personagem"
          />
        </div>
        <Tabela
          data={[
            {
              id: 1,
              nome: "Homem de Ferro",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37e69a.jpg",
              series: [
                "Invincible Iron Man",
                "Iron Man: Director of S.H.I.E.L.D.",
              ],
              eventos: ["Guerra Civil", "O Cerco", "Vingadores vs. X-Men"],
            },
            {
              id: 2,
              nome: "Capitão América",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d2553f.jpg",
              series: ["Captain America Vol 7", "All-New Captain America"],
              eventos: ["Guerra Civil", "Reinado Sombrio", "Guerra Secreta"],
            },
            {
              id: 3,
              nome: "Thor",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc21a44e69.jpg",
              series: ["Thor: God of Thunder", "The Mighty Thor"],
              eventos: ["O Cerco", "Reinado Sombrio", "Guerra das Dimensões"],
            },
            {
              id: 4,
              nome: "Hulk",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc21a44e69.jpg",
              series: ["Indestructible Hulk", "The Incredible Hulk"],
              eventos: ["Guerra Mundial Hulk", "Planeta Hulk"],
            },
            {
              id: 5,
              nome: "Viúva Negra",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/3/70/5232321557008.jpg",
              series: ["Black Widow Vol 5", "Black Widow: Deadly Origin"],
              eventos: ["Guerra Secreta", "Império Secreto"],
            },
            {
              id: 6,
              nome: "Doutor Estranho",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/c/30/526548a34e005.jpg",
              series: ["Doctor Strange Vol 4", "Strange Academy"],
              eventos: ["Guerra das Dimensões", "Reino da Sombra"],
            },
            {
              id: 7,
              nome: "Homem-Aranha (Miles Morales)",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/c/a0/6440f82d17c76.jpg",
              series: [
                "Miles Morales: Spider-Man",
                "Ultimate Comics Spider-Man",
              ],
              eventos: ["Spider-Verse", "Guerras Secretas"],
            },
            {
              id: 8,
              nome: "Wolverine",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/c/00/537ba537b018b.jpg",
              series: ["Wolverine Vol 6", "Savage Wolverine"],
              eventos: ["Vingadores vs. X-Men", "Morte de Wolverine"],
            },
            {
              id: 9,
              nome: "Magneto",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/52695c00e66e7.jpg",
              series: ["Magneto Vol 3", "Uncanny X-Men"],
              eventos: ["Complexo de Messias", "Cisma"],
            },
            {
              id: 10,
              nome: "Doutor Destino",
              fotoUrl:
                "https://i.annihil.us/u/prod/marvel/i/mg/6/20/5269527741d4c.jpg",
              series: ["Infamous Iron Man", "Fantastic Four"],
              eventos: ["Guerras Secretas", "Guerra do Destino"],
            },
            // Página 2 (Itens 11-20)
            {
              id: 11,
              nome: "Pantera Negra",
              fotoUrl: "...",
              series: ["Black Panther Vol 6"],
              eventos: ["A Era de Khonshu"],
            },
            {
              id: 12,
              nome: "Fênix",
              fotoUrl: "...",
              series: ["Jean Grey Vol 1"],
              eventos: ["Saga da Fênix Negra"],
            },
            {
              id: 13,
              nome: "Thanos",
              fotoUrl: "...",
              series: ["Thanos Vol 2"],
              eventos: ["Guerra Infinita"],
            },
            {
              id: 14,
              nome: "Deadpool",
              fotoUrl: "...",
              series: ["Deadpool Vol 4"],
              eventos: ["Guerra dos Reinos"],
            },
            {
              id: 15,
              nome: "Gamora",
              fotoUrl: "...",
              series: ["Guardians of the Galaxy"],
              eventos: ["Guerra das Joias"],
            },
          ]}
        />
      </div>
    </div>
  );
}
