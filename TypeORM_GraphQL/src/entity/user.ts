import { Column, Entity, PrimaryColumn } from "typeorm";
// import { Column } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    id!: number;

    @Column({
        length: 100,
    })

    @Column()
    name: string

    @Column()
    Publications: string

    @Column()
    isAuthorised: boolean
}