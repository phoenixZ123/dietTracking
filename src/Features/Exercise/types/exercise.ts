export type createExercise = {
    name: string;
    caloriesBurnedPerMin: number;
}
export interface UserWorkOutLog {
    date?: string;
    userId?: string;
    exerciseId: string;
    durationMin: number;
}
export interface WorkOutResponse {
    success: boolean;
    message: string;
    data: Object;
}