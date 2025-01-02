import BaseInfoProduct from "./baseInfoProduct.type";


type MedicinalProduct = {
    activeIngredient: {
        name: string; // Nome del principio attivo
        quantity: string; // Quantità per unità di dosaggio (es. "500 mg per compressa")
    };
    excipients?: string[]; // Elenco opzionale degli eccipienti
    pharmaceuticalForm: string; // Forma farmaceutica (es. "compresse", "capsule")
    indications: string[]; // Indicazioni terapeutiche
    dosage: {
        recommendedDose: string; // Dose consigliata (es. "1 compressa ogni 8 ore")
        administrationRoute: string; // Via di somministrazione (es. "orale", "intramuscolare")
    };
    contraindications?: string[]; // Elenco opzionale delle controindicazioni
    warnings?: string[]; // Avvertenze e precauzioni speciali d'uso
    interactions?: {
        substances: string[]; // Altri farmaci o alimenti con cui interagisce
        description?: string; // Descrizione opzionale delle interazioni
    };
    sideEffects?: {
        description: string; // Descrizione degli effetti indesiderati
        frequency?: string; // Frequenza degli effetti collaterali (es. "Comune")
    };
    storageInstructions: string; // Modalità di conservazione
    lotCode: string; // Codice lotto per la tracciabilità
    authorization: {
        number: string; // Numero di autorizzazione (AIC)
        holder: string; // Nome del titolare dell'autorizzazione
        holderAddress: string; // Indirizzo del titolare
    };
    dispensingConditions: "OTC" | "Prescription" | "Restricted"; // Condizioni di dispensazione (OTC: da banco)
    therapeuticCategory?: string; // Categoria terapeutica (es. "Antinfiammatorio")
    patientInformation: {
        leafletAvailable: boolean; // Indica se il foglio illustrativo è disponibile
        digitalAccess?: string; // URL o QR code per accedere digitalmente alle informazioni
    };
} & BaseInfoProduct;

export default MedicinalProduct;
