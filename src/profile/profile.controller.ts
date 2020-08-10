import {Controller, Body, Get, Post, Req, Res, Param, Delete, Put} from '@nestjs/common';
import {ProfileService} from "./profile.service";
import {CreateProfileDto} from './dto/create-profile.dto'
import {Request, Response} from "express";
import {Profile} from "./interfaces/profile.interface";
import {User} from "./user.entity";

@Controller('profile')

export class ProfileController {
    constructor(private readonly profileService: ProfileService) {
    }

    // @Get()
    // findAll(@Req() req: Request, @Res() res: Response): Response {
    //     console.log(req.url)
    //     return res.send('Hello world')
    // }

    @Get()
    findAll(): Promise<User[]> {
        return this.profileService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<User> {
        return this.profileService.findOne(id)
    }

    @Post()
    create(@Body() userData: User): Promise<User> {
        return this.profileService.create(userData)
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<void> {
        return this.profileService.delete(id)
    }

    @Put(':id')
    update(@Body() updateProfileDto: CreateProfileDto, @Param('id') id): Promise<User> {
        return this.profileService.update(id, updateProfileDto)
    }
}
