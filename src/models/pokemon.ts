export class Pokemon {

    globalPokedexNumber: Number;
    name: PokemonName;
    genderPatterns: Array<PokemonGender>
    size: {
        jp: PokemonSize,
        en: PokemonSize,
    }
    evolutions: Array<Pokemon>
    constructor(inner: PokemonResponse) {
        this.globalPokedexNumber = inner.globalPokedexNumber;
        this.name = inner.name;
        this.genderPatterns = inner.genderPatterns;
        this.size = inner.size;
        this.evolutions = inner.evolutions.map((p) => {
            return new Pokemon(p)
        });
    }
    
    height(locale: "jp" | "en"): string {
        switch (locale) {
            case "jp":
                var h = this.size.jp.height;
                return `${h.value} ${h.unit}`;
            case "en":
                var h = this.size.en.height;
                var feetAndInch = String(h.value).split(".")
                var feet = feetAndInch[0];
                var inch = feetAndInch[1];
                return `${feet}' ${inch}"`;
        }
    }

    weight(locale: "jp" | "en"): string {
        switch (locale) {
            case "jp":
                var w = this.size.jp.weight;
                return `${w.value} ${w.unit}`;
            case "en":
                var w = this.size.en.weight;
                return `${w.value} ${w.unit}`;
        }
    }
}

export declare class PokemonResponse {
    readonly globalPokedexNumber: Number;
    readonly name: PokemonName;
    readonly genderPatterns: Array<PokemonGender>
    readonly size: {
        jp: PokemonSize,
        en: PokemonSize,
    }
    readonly evolutions: Array<Pokemon>
}

export declare class PokemonName {
    readonly jp: string
    readonly en: string
    readonly romajiNotation: string
}

export enum PokemonGender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export declare class PokemonSize {
    readonly weight: PokemonSizeField
    readonly height: PokemonSizeField
}

export declare class PokemonSizeField {
    readonly value: number
    readonly unit: string
}