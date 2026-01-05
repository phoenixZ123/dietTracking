export interface IMealRepository {
getMeal(logId: string): Promise<any>;
createMeal(
    data: { mealId: string; foodId: string; quantity: number },
    userId: string
): Promise<any>;
}