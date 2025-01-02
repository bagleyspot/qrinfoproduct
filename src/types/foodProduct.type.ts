import BaseInfoProduct from "./baseInfoProduct.type";


type FoodProduct = {
    ingredients: string[]; // Lista degli ingredienti
    allergens?: string[]; // Lista opzionale degli allergeni evidenziati
    nutritionalValues: {
        energy: {
            kj: number; // Energia in kJ
            kcal: number; // Energia in kcal
        };
        fats: {
            total: number; // Grassi totali in g
            saturated: number; // Grassi saturi in g
        };
        carbohydrates: {
            total: number; // Carboidrati totali in g
            sugars: number; // Zuccheri in g
        };
        fibers?: number; // Fibre in g (opzionale)
        proteins: number; // Proteine in g
        salt: number; // Sale in g
    };
    netWeight: string; // Peso netto o quantità (es. "500g")
    storageInstructions?: string; // Modalità di conservazione (opzionale)
    manufacturer: {
        name: string; // Nome del produttore
        address: string; // Indirizzo del produttore
    };
    origin?: string; // Paese di origine o luogo di provenienza (opzionale)
    usageInstructions?: string; // Modalità d'uso (opzionale)
    specialClaims?: string[]; // Dichiarazioni specifiche (es. "Bio", "DOP")
} & BaseInfoProduct;

export default FoodProduct;
