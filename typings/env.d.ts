declare namespace NodeJS {
    export interface ProcessEnv {
        ENV: 'dev' | 'prod';
        PORT: string | number;
        MONGODB_URI: string;
    }
}