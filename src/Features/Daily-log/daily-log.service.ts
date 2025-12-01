import { dailyLogRepository } from "./daily-log.repository";

export class dailyLogService {
    private dailyLogRepository: dailyLogRepository;
    constructor() {
        this.dailyLogRepository = new dailyLogRepository();
    }
}