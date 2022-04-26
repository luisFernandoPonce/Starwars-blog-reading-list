const baseUrl = "https://www.swapi.tech/api/people/";

const people = {
	//busca un personaje por el id y retorna un personaje con los datos
	//declaro una funcion callback que reciba como parámetro el id y retorne la data del personaje
	getById: async (id) => {
		try {
			// Buscar un personaje por el id y retornar el objeto con los datos
			const resp = await fetch(`${baseUrl}${id}`);
			if (resp.ok) return await resp.json();
			console.error(resp.status, resp.statusText);
			return [];
		} catch (error) {
			console.error("Error en la api", error); //en la api de arnaldo esta console.error
			return [];
		}
	},
	getQuery: async (page = 1, limit = 10) => {
		//Declaro una función call back para ingresar parametros numero de pagina y limite de elementos
		// Ejemplo de peticion https://www.swapi.tech/api/people?limit=20&page=2
		try {
			const resp = await fetch(`${baseUrl}?limit=${limit}&page=${page}`);
			if (resp.ok) return await resp.json();
			console.error(resp.status, resp.statusText);
			return [];
		} catch (error) {
			console.error("Error en la api", error);
			return [];
		}
	},
};
export { people };
