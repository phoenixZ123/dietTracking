import { prisma } from "../../config/db.config";
import { IMealRepository } from "./interface/meal.interface";
import { Meal } from "@prisma/client";

export class mealRepository implements IMealRepository {
    async getMeal(logId: string): Promise<any> {
        const meal=await prisma.meal.findMany({ where: { logId } })
        if(meal.length == 0) return null;
        return meal;
    }
}