const pokemonTypesColors = [
	{name: "normal", color: '#A8A77A'},
	{name: "fire", color: '#EE8130'},
	{name: "water", color: '#6390F0'},
	{name: "electric", color: '#F7D02C'},
	{name: "grass", color: '#7AC74C'},
	{name: "ice", color: '#96D9D6'},
	{name: "fighting", color: '#C22E28'},
	{name: "poison", color: '#A33EA1'},
	{name: "ground", color: '#E2BF65'},
	{name: "flying", color: '#A98FF3'},
	{name: "psychic", color: '#F95587'},
	{name: "bug", color: '#A6B91A'},
	{name: "rock", color: '#B6A136'},
	{name: "ghost", color: '#735797'},
	{name: "dragon", color: '#6F35FC'},
	{name: "dark", color: '#705746'},
	{name: "steel", color: '#B7B7CE'},
	{name: "fairy", color: '#D685AD'},
];

const themeColors = {
	dark: { background: "var(--transparent-black)", boxShadow: "var(--color-white-glow)", borderColor: "var(--color-white-glow)", color: "var(--color-purple-300)" },
	light: { background: "var(--transparent-white)", boxShadow: "var(--color-yellow-200)", borderColor: "var(--color-yellow-200)", color: "var(--color-yellow-200)" },
}

export { pokemonTypesColors, themeColors }