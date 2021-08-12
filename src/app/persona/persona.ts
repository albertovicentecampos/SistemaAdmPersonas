export interface Persona {
    id_persona: number;
    user: string;
    password: string;
    surname: string;
    ciudad: string;
    email_personal: string;
    email_empresa: string;
    actividad: boolean;
    fecha: Date;
    imagen_url: string;
    termination_date: Date;
}

export function inicializar(): Persona{
    const aux = {
        id_persona: null,
        user: null,
        password: null,
        surname: null,
        email_empresa: null,
        email_personal: null,
        ciudad: null,
        actividad: null,
        fecha: null,
        imagen_url: null,
        termination_date: null
        };
        return Object.assign(aux);
}