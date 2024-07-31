import "reflect-metadata"
import { DataSource } from "typeorm";
import { User } from "./entity/user";
import { Stock } from "./entity/stocks";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Keshav@19",
    database: "TextileEmployees",
    synchronize: true,
    logging: true,
    entities: [User,Stock],
    subscribers: [],
    migrations: [],
})

