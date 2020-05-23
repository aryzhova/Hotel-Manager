export class Room {
    
    constructor(
        public id: number,
        public price: number,
        public imageUrls: string[],
        public title: string,
        public description: string
    ) {}
}