import {Module} from '@nestjs/common';
import {ProfileController} from "./profile.controller";
import {ProfileService} from "./profile.service";
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {User} from "./user.entity";
import * as dotenv from 'dotenv'

dotenv.config()

@Module({
    imports: [TypeOrmModule.forRoot({
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DB,
        entities: [User],
        synchronize: true
    }), TypeOrmModule.forFeature([User])],
    controllers: [ProfileController],
    providers: [ProfileService],
    exports: [TypeOrmModule]
})
export class ProfileModule {
    constructor(private connection: Connection) {
    }
}
