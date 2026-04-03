import { Food } from "../../../generated/main";
import { CreateFoodBody } from "./schemas/food.schema";
import { ResponseFood } from "./types/food.type";

export interface IFoodRepository {
    foodCreate(
        foodData: CreateFoodBody | CreateFoodBody[],
        userId: string
    ): Promise<ResponseFood | any>;
    getSuggestionFood(name: string): Promise<Food[]>;
    getFood(page:number,limit:number): Promise<any>;
    getFoodById(foodId:string):Promise<any>;

}