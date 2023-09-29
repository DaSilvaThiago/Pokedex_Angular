export class Pokemon {
    id: number;
    name: string;
    types: string[]; // Pode ser um ou dois tipos
    totalHealth: number;
    physicalAttack: number;
    physicalDefense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    abilities: string[]; // Habilidades especiais
    evolution: string; // Para qual Pokémon ele evolui e condições
    moves: string[]; // Ataques que pode aprender
    level: number;
    experience: number;
    gender: string; // Masculino, feminino ou indefinido
    captureRate: number; // Dificuldade de captura
    description: string; // Descrição breve
    dimensions: string;
    visualRepresentation: string;
    region: string; // De qual região ele é
    pokedexInfo: string; // Informação da Pokédex

    constructor(
        id: number,
        name: string,
        types: string[],
        totalHealth: number,
        physicalAttack: number,
        physicalDefense: number,
        specialAttack: number,
        specialDefense: number,
        speed: number,
        abilities: string[],
        evolution: string,
        moves: string[],
        level: number,
        experience: number,
        gender: string,
        captureRate: number,
        description: string,
        dimensions: string,
        visualRepresentation: string,
        region: string,
        pokedexInfo: string
    ) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.totalHealth = totalHealth;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.speed = speed;
        this.abilities = abilities;
        this.evolution = evolution;
        this.moves = moves;
        this.level = level;
        this.experience = experience;
        this.gender = gender;
        this.captureRate = captureRate;
        this.description = description;
        this.dimensions = dimensions;
        this.visualRepresentation = visualRepresentation;
        this.region = region;
        this.pokedexInfo = pokedexInfo;
    }

    calcularDano(oponente: Pokemon): number {
        const dano = this.physicalAttack - oponente.physicalDefense;
        if (dano > 0) {
            oponente.totalHealth -= dano;
            return dano;
        } else {
            return 0;
        }
    }

    evoluir(): boolean {
        if (this.level >= 16) {

            this.name = "Pidgeotto";
            this.visualRepresentation = "url_da_imagem_do_Pidgeotto";

            return true;
        }
        return false;
    }
}
