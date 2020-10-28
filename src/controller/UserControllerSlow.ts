import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserControllerSlow {

    private slowness: number = 2;
    private sleep (s) {
        return new Promise(resolve => setTimeout(resolve, s * 1000));
    }
    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        await this.sleep(Math.random() * this.slowness)
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        await this.sleep(Math.random() * this.slowness)
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        await this.sleep(Math.random() * this.slowness)
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.sleep(Math.random() * this.slowness)
        let userToRemove = await this.userRepository.findOne(request.params.id);
        return await this.userRepository.remove(userToRemove);
    }

}