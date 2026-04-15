export type workoutData= {
    dailyLogId: string;
    durationMin: number;
    exerciseId:string;
}
export interface workoutResponseData {
    id: string;
    durationMin: number;
    created_at?: Date;
    updated_at?: Date;
    dailyLogId: string;
    userId?: string;
    exerciseId: string;
}