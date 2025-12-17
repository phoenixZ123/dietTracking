import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { MealItem } from "../../meal/entities/meal.entity";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id!: number;

  // UUID must have type and default
  @Column({ type: "varchar", nullable: true })
  uuid: string = uuidv4();

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "float" })
  calories!: number;

  @Column({ type: "float" })
  protein!: number;

  @Column({ type: "float" })
  carbs!: number;

  @Column({ type: "float" })
  fat!: number;

  @Column({ type: "float" })
  servingSize!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updated_at!: Date;

  @OneToMany(() => MealItem, (mealItem) => mealItem.food)
  mealItems!: MealItem[];
}
