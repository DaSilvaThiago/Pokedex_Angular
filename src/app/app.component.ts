import { Component } from '@angular/core';
import { Pokemon } from "src/modules/pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startInAngular';
  message = "Hello World! this is my first project";
  pokemons: Pokemon[] = [
    new Pokemon(1, "Pikachu", ["ELECTRIC"], 320, 55, 40, 50, 50, 90, ["STATIC", "LIGHTNING ROD"], "Raichu", ["Charm", "Growl", "Nasty Plot"], 50, 112, "50% M e 50% F", 190, "Pikachu has a Gigantamax form available in Pokémon Sword/Shield, with an exclusive G-Max move, G-Max Volt Crash.", "Pallet Town", "https://img.pokemondb.net/artwork/large/pikachu.jpg", "Safari Zone", "Pikachu is an Electric type Pokémon introduced in Generation 1."),

    new Pokemon(2, "Bulbasaur", ["GRASS", "POISON"], 318, 49, 49, 45, 65, 65, ["OVERGROW"], "Ivysaur", ["Tackle", "Growl", "Leech Seed"], 70, 69, "87.5% M e 12.5% F", 64, "Bulbasaur can be found in grassy areas and forests.", "Grassland", "https://img.pokemondb.net/artwork/large/bulbasaur.jpg", "Viridian Forest", "Bulbasaur is an dual-type Grass/Poison Pokémon introduced in Generation 1."),

    new Pokemon(3, "Charmander", ["FIRE"], 309, 52, 43, 65, 50, 50, ["BLAZE"], "Charmeleon", ["Scratch", "Growl", "Ember"], 60, 85, "87.5% M e 12.5% F", 62, "Charmander's flame burns intensely, and if it's healthy, the flame burns brightly.", "Mountain", "https://img.pokemondb.net/artwork/large/charmander.jpg", "Charicific Valley", "Charmander is a Fire type Pokémon introduced in Generation 1."),

    new Pokemon(4, "Squirtle", ["WATER"], 314, 48, 65, 43, 50, 64, ["TORRENT"], "Wartortle", ["Tackle", "Tail Whip", "Bubble"], 50, 90, "87.5% M e 12.5% F", 63, "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.", "Waters Edge", "https://img.pokemondb.net/artwork/large/squirtle.jpg", "Pallet Town", "Squirtle is a Water type Pokémon introduced in Generation 1."),

    new Pokemon(5, "Jigglypuff", ["NORMAL", "FAIRY"], 270, 45, 20, 20, 45, 25, ["CUTE CHARM", "COMPETITIVE"], "Wigglytuff", ["Sing", "Defense Curl", "Rollout"], 51, 5.5, "25% M e 75% F", 95, "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.", "Cave", "https://img.pokemondb.net/artwork/large/jigglypuff.jpg", "Mt. Moon", "Jigglypuff is a Normal/Fairy type Pokémon introduced in Generation 1."),

    new Pokemon(6, "Gengar", ["GHOST", "POISON"], 500, 65, 60, 110, 130, 75, ["LEVITATE"], "Haunter", ["Lick", "Confuse Ray", "Shadow Punch"], 51, 40.5, "50% M e 50% F", 225, "Gengar is very mischievous and at times, malicious. It enjoys playing practical jokes on people.", "Cave", "https://img.pokemondb.net/artwork/large/gengar.jpg", "Pokémon Tower", "Gengar is a Ghost/Poison type Pokémon introduced in Generation 1."),

    new Pokemon(7, "Machop", ["FIGHTING"], 305, 70, 50, 35, 35, 35, ["GUTS", "NO GUARD"], "Machoke", ["Karate Chop", "Low Kick", "Leer"], 79, 19.5, "75% M e 25% F", 61, "Machop's muscles are special - they never get sore no matter how much they are used in exercise.", "Mountain", "https://img.pokemondb.net/artwork/large/machop.jpg", "Rock Tunnel", "Machop is a Fighting type Pokémon introduced in Generation 1."),

    new Pokemon(8, "Geodude", ["ROCK", "GROUND"], 300, 80, 100, 20, 30, 30, ["ROCK HEAD", "STURDY"], "Graveler", ["Tackle", "Defense Curl", "Rock Throw"], 40, 20, "50% M e 50% F", 86, "The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance.", "Cave", "https://img.pokemondb.net/artwork/large/geodude.jpg", "Mt. Moon", "Geodude is a Rock/Ground type Pokémon introduced in Generation 1."),

    new Pokemon(9, "Blastoise", ["WATER"], 530, 79, 83, 78, 85, 105, ["TORRENT"], "None", ["Hydro Pump", "Bite", "Withdraw"], 160, 85.5, "87.5% M e 12.5% F", 239, "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.", "Waters Edge", "https://img.pokemondb.net/artwork/large/blastoise.jpg", "Cerulean City", "Blastoise is a Water type Pokémon introduced in Generation 1."),

    new Pokemon(10, "Charizard", ["FIRE", "FLYING"], 534, 84, 78, 100, 109, 85, ["BLAZE"], "None", ["Flamethrower", "Wing Attack", "Dragon Claw"], 170, 90.5, "87.5% M e 12.5% F", 240, "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.", "Mountain", "https://img.pokemondb.net/artwork/large/charizard.jpg", "Cinnabar Island", "Charizard is a Fire/Flying type Pokémon introduced in Generation 1."),

    new Pokemon(11, "Venusaur", ["GRASS", "POISON"], 525, 80, 83, 80, 100, 100, ["OVERGROW"], "None", ["Vine Whip", "Razor Leaf", "Poison Powder"], 200, 100, "87.5% M e 12.5% F", 236, "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.", "Grassland", "https://img.pokemondb.net/artwork/large/venusaur.jpg", "Pallet Town", "Venusaur is a Grass/Poison type Pokémon introduced in Generation 1."),

    new Pokemon(12, "Mewtwo", ["PSYCHIC"], 680, 106, 90, 130, 154, 90, ["PRESSURE", "UNNERVE"], "None", ["Psycho Cut", "Shadow Ball", "Recover"], 200, 122, "Genderless", 306, "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.", "Cave", "https://img.pokemondb.net/artwork/large/mewtwo.jpg", "Cerulean Cave", "Mewtwo is a Psychic type Pokémon introduced in Generation 1."),

    new Pokemon(13, "Caterpie", ["BUG"], 195, 30, 35, 20, 20, 45, ["SHIELD DUST", "RUN AWAY"], "Metapod", ["Tackle", "String Shot"], 7, 39, "50% M e 50% F", 3.2, "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.", "0", "https://img.pokemondb.net/artwork/large/caterpie.jpg", "Viridian Forest", "Caterpie is a Bug type Pokémon introduced in Generation 1."),

    new Pokemon(14, "Pidgey", ["NORMAL", "FLYING"], 251, 45, 40, 35, 35, 56, ["KEEN EYE", "TANGLED FEET", "BIG PECKS"], "Pidgeotto", ["Gust", "Sand Attack", "Quick Attack"], 18, 66, "50% M e 50% F", 0.3, "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.", "0", "https://img.pokemondb.net/artwork/large/pidgey.jpg", "Route 1", "Pidgey is a Normal/Flying type Pokémon introduced in Generation 1."),

    new Pokemon(15, "Rattata", ["NORMAL"], 253, 56, 35, 25, 35, 72, ["RUN AWAY", "GUTS", "HUSTLE"], "Raticate", ["Tackle", "Tail Whip", "Quick Attack"], 16, 116, "50% M e 50% F", 0.3, "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives - it will make its nest anywhere.", "0", "https://img.pokemondb.net/artwork/large/rattata.jpg", "Route 1", "Rattata is a Normal type Pokémon introduced in Generation 1."),

    new Pokemon(16, "Spearow", ["NORMAL", "FLYING"], 262, 60, 30, 31, 31, 70, ["KEEN EYE", "SNIPER"], "Fearow", ["Peck", "Growl", "Leer"], 20, 102, "50% M e 50% F", 0.3, "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.", "0", "https://img.pokemondb.net/artwork/large/spearow.jpg", "Route 3", "Spearow is a Normal/Flying type Pokémon introduced in Generation 1."),

    new Pokemon(17, "Ekans", ["POISON"], 288, 60, 44, 40, 54, 55, ["INTIMIDATE", "SHED SKIN", "UNNERVE"], "Arbok", ["Wrap", "Leer", "Poison Sting"], 20, 69, "50% M e 50% F", 2, "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.", "0", "https://img.pokemondb.net/artwork/large/ekans.jpg", "Route 4", "Ekans is a Poison type Pokémon introduced in Generation 1."),

    new Pokemon(18, "Sandshrew", ["GROUND"], 300, 75, 85, 20, 30, 40, ["SAND VEIL"], "Sandslash", ["Scratch", "Defense Curl", "Sand Attack"], 22, 40, "50% M e 50% F", 0.6, "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.", "0", "https://img.pokemondb.net/artwork/large/sandshrew.jpg", "Route 4", "Sandshrew is a Ground type Pokémon introduced in Generation 1."),

    new Pokemon(19, "Nidoran♀", ["POISON"], 275, 55, 47, 52, 40, 41, ["POISON POINT", "RIVALRY", "HUSTLE"], "Nidorina", ["Scratch", "Growl", "Tackle"], 16, 20, "100% F", 0.4, "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.", "0", "https://img.pokemondb.net/artwork/large/nidoran-f.jpg", "Route 3", "Nidoran♀ is a Poison type Pokémon introduced in Generation 1."),

    new Pokemon(20, "Nidoran♂", ["POISON"], 273, 46, 57, 40, 40, 50, ["POISON POINT", "RIVALRY", "HUSTLE"], "Nidorino", ["Leer", "Peck", "Focus Energy"], 19, 19.5, "100% M", 0.5, "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.", "0", "https://img.pokemondb.net/artwork/large/nidoran-m.jpg", "Route 22", "Nidoran♂ is a Poison type Pokémon introduced in Generation 1."),

    new Pokemon(21, "Vulpix", ["FIRE"], 299, 38, 41, 40, 50, 65, ["FLASH FIRE", "DROUGHT"], "Ninetales", ["Ember", "Tail Whip", "Roar"], 16, 9.9, "75% M e 25% F", 0.6, "Vulpix has six orange tails that are curled at the tips. It looks like a little fox. It is covered in beautiful golden fur. While young, it has six gorgeous tails.", "0", "https://img.pokemondb.net/artwork/large/vulpix.jpg", "Route 7", "Vulpix is a Fire type Pokémon introduced in Generation 1."),

    new Pokemon(22, "Zubat", ["POISON", "FLYING"], 245, 40, 45, 35, 40, 55, ["INNER FOCUS", "INFILTRATOR"], "Golbat", ["Leech Life", "Supersonic", "Astonish"], 22, 7.5, "50% M e 50% F", 0.8, "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.", "0", "https://img.pokemondb.net/artwork/large/zubat.jpg", "Mt. Moon", "Zubat is a Poison/Flying type Pokémon introduced in Generation 1.")


  ];
  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
  closeModal() {
    this.selectedPokemon = undefined;
  }
}