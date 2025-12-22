export type createDailyLog = {
  id?: string;
  date: string;
  userId?: string;
}
export interface CreateMealInput {
  name: string;
  logId: string;
}

export interface UpdateMealInput {
  name?: string;
}
export interface MealResponse {
  id: string;
  name: string;
}

export interface DailyLogResponse {
  id: string;
  date: string;
  userId: string;   // ✅ added
  meals: MealResponse[];
}