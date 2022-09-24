/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { Request,Response } from '@nestjs/common';
@Controller('tasks')
export class TasksController {
    @Get()
    getTasks(): { hello: string } {
        return { "hello": "world" }
    }
    @Get('/:id')
    getTasksId(): string {
        return 'Retrieving Tasks id'
    }
    @Post()
    createTasks(@Body() task: CreateTaskDto): string {
        console.log("🚀 ~ file: tasks.controller.ts ~ line 16 ~ TasksController ~ createTasks ~ task", task)

        return 'createTask'
    }
    @Put(':id')
    updateTasks(@Body() tastk: CreateTaskDto, @Param('id') id): string {
        console.log("🚀 ~ file: tasks.controller.ts ~ line 22 ~ TasksController ~ updateTasks ~ tastk", tastk, id)
        return 'updateTasks'
    }
    @Delete(':id')
    deleteTasks(@Param('id') id): string {
        console.log("🚀 ~ file: tasks.controller.ts ~ line 26 ~ TasksController ~ deleteTasks ~ id", id)
        return `delelteTasks ${id}`
    }

}
