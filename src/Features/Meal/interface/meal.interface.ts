export interface IMealRepository {
getMeal(logId: string): Promise<any>;
}