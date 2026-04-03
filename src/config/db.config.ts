// main DB
import { PrismaClient as MainClient } from '../../generated/main'

// active DB
import { PrismaClient as ActiveClient } from '../../generated/active'

export const mainDb = new MainClient()
export const activeDb = new ActiveClient()
