import { FromSchema } from "json-schema-to-ts";
// food.dto.ts
export interface CreateFoodDto {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: number;
}
export interface ResponseFood{
    success:boolean;
    message:string;
    food:Object;
}
