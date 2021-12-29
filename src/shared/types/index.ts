
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
     photoBrand: string,
     coverPhoto: string,
     cover_photo_upgrade: string
}