export declare class Pokemon {
    readonly globalPokedexNumber: Number;
    readonly name: PokemonName;
    readonly genderPatterns: Array<PokemonGender>
    readonly size: PokemonSize
    readonly evolutions: Array<Pokemon>
}

export declare class PokemonName {
    readonly jp: String
    readonly en: String
    readonly romajiNotation: String
}

export enum PokemonGender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export declare class PokemonSize {
    readonly weight: Number
    readonly height: Number
}
