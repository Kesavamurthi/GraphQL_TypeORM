import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Stock{
    @PrimaryColumn()
    type: string
    
    @Column()
    price: number

    @Column()
    quantity: number
}