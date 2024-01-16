const fakePokemonCardsInfos = [
    {
        name: "bulbasaur",
        id: 1,
        sprites: {
            other: {
                ["official-artwork"]: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/…ster/sprites/pokemon/other/official-artwork/1.png" }
            }
        },
        types: [
            { type: { name: "grass", url: "https://testing" } },
            { type: { name: "poison", url: "https://testing" } }
        ]
    },
    {
        name: "ivysaur",
        id: 2,
        sprites: {
            other: {
                ["official-artwork"]: { front_default: null }
            },
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        }, 
        types: [
            { type: { name: "grass", url: "https://testing" } },
            { type: { name: "poison", url: "https://testing" } } 
        ]
    },
    {
        name: "bulbasaur",
        id: 1, 
        sprites: {
            other: {
                ["official-artwork"]: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/…ster/sprites/pokemon/other/official-artwork/1.png' }
            }
        },
        types: [
            { type: { name: "grass", url: "https://testing" } }, 
            { type: { name: "poison", url: "https://testing" } }
        ]
    }
    
]

const fakeBasicPokemonInfos = {
    abilities: [
        { ability: { name: "overgrow", url: "https://testing" } },
        { ability: { name: "chlorophyll", url: "https://testing" } } 
    ],
    base_experience: 64,
    height: 7,
    id: 1,
    moves: [{
        move: { name: "razor-wind", url: "https://testing" }
    },
    {
        move: { name: "swords-dance", url: "https://testing" }
    }],
    name: "bulbasaur",
    sprites: {
        other: {
            ["official-artwork"] : {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/…ster/sprites/pokemon/other/official-artwork/1.png'} 
        }
    },
    stats: [
        {
            base_stat: 45,
            stat: {name: "hp", url: "https://testing"}
        },
        {
            base_stat: 49,
            stat: {name: "attack", url: "https://testing"}  
        } 
    ],
    types: [
        {
            slot: 1,
            type: {name: "grass", url: "https://testing"} 
        },
        {
            slot: 2,
            type: {name: "poison", url: "https://testing"}
        }
    ],
    weight: 69,  
}

export { fakePokemonCardsInfos, fakeBasicPokemonInfos }