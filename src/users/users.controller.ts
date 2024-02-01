import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseInterceptor } from '../response/response.interceptor';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOkResponse({ content: { 'application/json': {} } })
  @UseInterceptors(ResponseInterceptor)
  async create(@Body() createUserDto: CreateUserDto) {
    const result = await this.usersService.create(createUserDto);
    return { result, message: 'User successfully Created.' };
  }

  @Get()
  @ApiOkResponse({ content: { 'application/json': {} } })
  @UseInterceptors(ResponseInterceptor)
  async findAll() {
    const result = await this.usersService.findAll();
    return { result, message: 'Successfully' };
  }

  @Get(':id')
  @ApiOkResponse({ content: { 'application/json': {} } })
  @UseInterceptors(ResponseInterceptor)
  async findOne(@Param('id') id: string) {
    const result = await this.usersService.findOne(+id);
    return { result, message: 'Successfully' };
  }

  @Patch(':id')
  @ApiOkResponse({ content: { 'application/json': {} } })
  @UseInterceptors(ResponseInterceptor)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const result = await this.usersService.update(+id, updateUserDto);
    return { result, message: 'User successfully Updated.' };
  }

  @Delete(':id')
  @ApiOkResponse({ content: { 'application/json': {} } })
  @UseInterceptors(ResponseInterceptor)
  async remove(@Param('id') id: string) {
    const result = await this.usersService.remove(+id);
    return { result, message: 'User successfully Removed.' };
  }
}
