export interface Componente {
    icon: string,
    name: string,
    redirecTo: string
}

export interface acompI {
    name?: string,
    dni?: number,
    date?: string
  
  }
  export interface autoI {
    mod?: string,
    patente?: string
  
  }
export interface UserI {
    uid?: string;
    name?: string,
    surname?: string,
    dni?: number,
    fotodni?: string,
    // age: number,
    tel?: string,
    mail?: string,
    nac?: string,
    sexo?: string,
    date?: string,
    comp?: acompI,
    auto?: autoI,
    inhouse?: boolean,
    length?: any,
    deletedAt?: Date,
    delete?: boolean

  }
  export interface BookI{
    pnr?: string,
    ota?: string,
    ci?: any,
    co?: any,
    uid?: string,
    id?: string,
    card?: string,
    tit?: string,
    check?: boolean,
    qr?: any,
    consumos?: any,
    cardCO?: string,
    out?: number,
    status?: number,
    length?: any

  }
  export interface TarjetaI{
    name?: string,
    cod?: number,
    mes?: number,
    ano?: number,
    card?: number

  }
  export interface message{
    content: string,
    type: string,
    date: Date,
    hotel: boolean,
    listen: boolean

}