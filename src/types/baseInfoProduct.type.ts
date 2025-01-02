type BaseInfoProduct = {
    name: string;
    expirationDate: {
        type: "use-by" | "best-before"; // Tipo di data ("use-by" o "best-before")
        date: string; // Data in formato ISO (es. "2025-01-01")
    };
    lotCode: string; // Codice lotto di produzione
    barcode?: string; // Codice a barre (opzionale)
}

export default BaseInfoProduct;
