import { useEffect, useState, useMemo } from "react";

function usePokemons(urlInfo) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = useMemo(() => `https://pokeapi.co/api/v2/${urlInfo.endPoint}`, [urlInfo.endPoint]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const result = await res.json();

                if (urlInfo.getDataBy === 'generation') {
                    const updatedData = await fetchDataForGeneration(result.pokemon_species);
                    setData(updatedData);
                    setLoading(false);
                } else if (urlInfo.getDataBy === 'type') {
                    const updatedData = await fetchDataForType(result.pokemon);
                    setData(updatedData);
                    setLoading(false);
                } else {
                    setData([]);
                }
            } catch (err) {
                console.error("Fetch error:", err.message);
            }
        };

        fetchData();
    }, [url, urlInfo.getDataBy]);

    return [data, loading];
}

const fetchDataForGeneration = async (items) => {
    return Promise.all(
        items.map(async (item) => {
            const updatedItem = { ...item, type: [null], imgSrc:'', isHidden: false };
            updatedItem.url = `https://pokeapi.co/api/v2/pokemon/${updatedItem.url.split('/')[6]}/`;

            try {
                const response = await fetch(updatedItem.url);
                const data = await response.json();
                updatedItem.imgSrc =  data?.sprites.other.home.front_default
                data?.types?.forEach((a, index) => {
                    updatedItem.type[index] = a.type.name;
                });
            } catch (err) {
                console.error("Fetch error:", err.message);
            }
            return updatedItem;
        })
    );
};

const fetchDataForType = async (items) => {
    return Promise.all(
        items.map(async (item) => {
            const updatedItem = { ...item.pokemon, type: [null], imgSrc:'' ,isHidden: false };

            try {
                const response = await fetch(updatedItem.url);
                const data = await response.json();
                updatedItem.imgSrc =  data?.sprites.other.home.front_default
                data?.types?.forEach((a, index) => {
                    updatedItem.type[index] = a.type.name;
                });
            } catch (err) {
                console.error("Fetch error:", err.message);
            }
            return updatedItem;
        })
    );
};

export default usePokemons;
