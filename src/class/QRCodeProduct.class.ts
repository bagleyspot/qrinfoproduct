import FoodProduct from "../types/foodProduct.type";
import MedicinalProduct from "../types/medicinalProduct.type";
import jsQR from "jsqr";
import {toString,toCanvas,toDataURL} from "qrcode";

export interface QRCodeOptions {
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
    width?: number;
    margin?: number;
}

export class QRCodeProduct {
    /**
     * Genera un QR code come stringa ASCII (per console)
     * @param text Il testo o URL da codificare
     */
    private static async generateToConsole(text: string): Promise<void> {
        try {
            const qrCode = await toString(text, { type: "terminal" });
            console.log(qrCode);
        } catch (err) {
            console.error("Errore nella generazione del QR code:", err);
        }
    }

    /**
     * Genera un QR code in un canvas HTML
     * @param text Il testo o URL da codificare
     * @param elementId ID del canvas HTML
     * @param options Opzioni opzionali per il QR code
     */
    private static async generateToCanvas(
        text: string,
        elementId: string,
        options?: QRCodeOptions
    ): Promise<void> {
        try {
            const canvas = document.getElementById(elementId) as HTMLCanvasElement;
            if (canvas) {
                await toCanvas(canvas, text, options);
            } else {
                console.error("Elemento canvas non trovato!");
            }
        } catch (err) {
            console.error("Errore nella generazione del QR code:", err);
        }
    }

    /**
     * Genera un QR code come immagine base64
     * @param text Il testo o URL da codificare
     * @param options Opzioni opzionali per il QR code
     * @returns Una stringa base64 rappresentante il QR code
     */
    private static async generateToBase64(
        text: string,
        options?: QRCodeOptions
    ): Promise<string> {
        try {
            return await toDataURL(text, options);
        } catch (err: any) {
            throw new Error("Errore nella generazione del QR code: " + err.message);
        }
    }

    /**
     * Genera un QR code a partire da un oggetto JSON
     * @param data Oggetto JSON da codificare
     * @param options Opzioni opzionali per il QR code
     * @returns Una stringa base64 rappresentante il QR code
     */
    public static async generateQR(
        data: FoodProduct | MedicinalProduct,
        options?: QRCodeOptions
    ): Promise<string> {
        try {
            const jsonString = JSON.stringify(data); // Converti l'oggetto JSON in stringa
            return await toDataURL(jsonString, options); // Genera QR code
        } catch (err: any) {
            throw new Error("Errore nella generazione del QR code: " + err.message);
        }
    }

    /**
     * Legge un QR code da un'immagine sotto forma di array di byte (Uint8ClampedArray).
     * @param imageData Array di byte dell'immagine
     * @param width Larghezza dell'immagine
     * @param height Altezza dell'immagine
     * @returns Il testo decodificato dal QR code
     */
    public static readQRFromImage(
        imageData: Uint8ClampedArray,
        width: number,
        height: number
    ): string | null {
        const qrCodeData = jsQR(imageData, width, height);
        if (qrCodeData) {
            return qrCodeData.data; // Contiene il testo decodificato
        } else {
            console.error("QR code non trovato nell'immagine.");
            return null;
        }
    }
}
