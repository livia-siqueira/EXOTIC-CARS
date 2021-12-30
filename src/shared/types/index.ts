
export type Photo = {
    photo: string;
    color: string;
}

export type CarAPI = {
    cars: Car[];
}

export type Car = {
     id: number,
     model: string,
     brand: string,
     price: number,
     logo_brand: string,
     photos: Photo[],
     capa: string,
     photoBrand: string,
     cover_photo: string,
     cover_photo_upgrade: string
}