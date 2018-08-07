export interface ClienteDTO {
    id: number;
    name: string;
    federalId: string;
    registration: number;
    phone: string;
    phone2: string;
    email: string;
    emailCollection: string;
    residentialPhone: string;
    commercialPhone: string;
    emergencyContact: string;
    emergencyPhone: string;
    birthday: Date;
    gender: string;
    federalIdType: string;
    active: boolean;
}