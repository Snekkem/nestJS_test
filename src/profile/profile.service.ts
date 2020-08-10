import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Profile} from './interfaces/profile.interface'
import {User} from "./user.entity";
import {Repository} from 'typeorm';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {

    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find()
    }

    async findOne(id): Promise<User> {
        return await this.userRepository.findOne(id)
    }

    async create(userData: User): Promise<User> {
        return await this.userRepository.save(userData)
    }

    async delete(id): Promise<void> {
        await this.userRepository.delete(id)
    }

    async update(id, dataToUpdate): Promise<User> {
        const updatedUser = await this.userRepository.findOne(id)
        if (updatedUser) {
            updatedUser.Name = dataToUpdate.Name
            updatedUser.Age = dataToUpdate.Age
            updatedUser.Email = dataToUpdate.Email
            updatedUser.Password = dataToUpdate.Password
        }
        return this.userRepository.save(updatedUser)
    }
}
