import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: "Users"})
export class User {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column({default: "", type: "text"})
    Name: string;

    @Column({default: 0})
    Age: number;

    @Column({default: "", type: "text"})
    Email: string;

    @Column({default: "", type: "text"})
    Password: string;
}
