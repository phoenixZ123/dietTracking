"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";

// Shadcn UI components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GetProfile } from "@/http/api/dashboard/profile";

interface Profile {
  gender?: string;
  heightCm?: number;
  weightLb?: number;
  goalWeight?: number;
  activityLvl?: string;
}

interface DailyLog {
  id: string;
  date: string;
  meals: {
    id: string;
    name: string;
    items: {
      id: string;
      food: { name: string; calories: number };
      quantity: number;
    }[];
  }[];
  workoutLogs: {
    id: string;
    exercise: { name: string; caloriesBurnedPerMin: number };
    durationMin: number;
  }[];
  waterLogs: { id: string; amount: number }[];
  weightLogs: { id: string; weightKg: number }[];
}

// Fake data

// const fakeProfile: Profile = {
//   gender: "Male",
//   heightCm: 175,
//   weightLb: 70,
//   goalWeight: 68,
//   activityLvl: "Medium",
// };

const fakeDailyLogs: DailyLog[] = [
  {
    id: "1",
    date: new Date().toISOString(),
    meals: [
      {
        id: "m1",
        name: "Breakfast",
        items: [
          { id: "mi1", food: { name: "Oatmeal", calories: 150 }, quantity: 1 },
          { id: "mi2", food: { name: "Banana", calories: 100 }, quantity: 2 },
        ],
      },
      {
        id: "m2",
        name: "Lunch",
        items: [
          {
            id: "mi3",
            food: { name: "Chicken Salad", calories: 300 },
            quantity: 1,
          },
        ],
      },
    ],
    workoutLogs: [
      {
        id: "w1",
        exercise: { name: "Running", caloriesBurnedPerMin: 10 },
        durationMin: 30,
      },
    ],
    waterLogs: [{ id: "wt1", amount: 1.5 }],
    weightLogs: [{ id: "wg1", weightKg: 70 }],
  },
  {
    id: "2",
    date: new Date(Date.now() - 86400000).toISOString(),
    meals: [
      {
        id: "m3",
        name: "Dinner",
        items: [
          { id: "mi4", food: { name: "Salmon", calories: 400 }, quantity: 1 },
        ],
      },
    ],
    workoutLogs: [
      {
        id: "w2",
        exercise: { name: "Cycling", caloriesBurnedPerMin: 8 },
        durationMin: 45,
      },
    ],
    waterLogs: [{ id: "wt2", amount: 2 }],
    weightLogs: [{ id: "wg2", weightKg: 69.5 }],
  },
];

const Dashboard = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const navigate = useNavigate();
  const logoutStore = useAuthStore((state) => state.logout);

  const [dailyLogs] = useState<DailyLog[]>(fakeDailyLogs);

  const handleLogout = () => {
    logoutStore();
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Helper for summary
  const totalCalories = dailyLogs.reduce((acc, log) => {
    log.meals.forEach((meal) => {
      meal.items.forEach((item) => (acc += item.food.calories * item.quantity));
    });
    return acc;
  }, 0);

  const totalWater = dailyLogs.reduce((acc, log) => {
    log.waterLogs.forEach((w) => (acc += w.amount));
    return acc;
  }, 0);

  const totalExerciseCalories = dailyLogs.reduce((acc, log) => {
    log.workoutLogs.forEach(
      (w) => (acc += w.durationMin * w.exercise.caloriesBurnedPerMin)
    );
    return acc;
  }, 0);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await GetProfile();
        // backend shape:
        // res.data.profile
        // localStorage.setItem("token", response.data.token);

        console.log(response);
        setProfile(response.data.profile);
      } catch (error) {
        console.error("Failed to load profile", error);
      } finally {
        setLoadingProfile(false);
      }
    };

    fetchProfile();
  }, []);
  return (
    <div className="container m-auto p-5 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-700">Diet Dashboard</h1>
        <Button variant="destructive" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-green-700">
              Total Calories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalCalories} kcal</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-700">
              Water Intake
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalWater} L</p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-red-700">
              Calories Burned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalExerciseCalories} kcal</p>
          </CardContent>
        </Card>
      </div>

      {/* Profile Card */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Profile</CardTitle>
        </CardHeader>
        {loadingProfile ? <div>Loading ...</div> : <CardContent className="space-y-1">
          <p>Gender: {profile?.gender ?? "-"}</p>
          <p>Height: {profile?.heightCm ?? "-"} cm</p>
          <p>Weight: {profile?.weightLb ?? "-"} lb</p>
          <p>Goal Weight: {profile?.goalWeight ?? "-"}</p>
          <p>Activity Level: {profile?.activityLvl ?? "-"}</p>
        </CardContent>}


      </Card>

      {/* Daily Logs Tabs */}
      <Tabs defaultValue="logs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="logs">Daily Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="logs">
          <ScrollArea className="h-[500px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dailyLogs.map((log) => (
                <Card key={log.id} className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-green-700 font-semibold">
                      {new Date(log.date).toDateString()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Meals */}
                    {log.meals.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-gray-700">Meals:</h3>
                        {log.meals.map((meal) => (
                          <div key={meal.id} className="ml-3">
                            <p className="font-medium">{meal.name}</p>
                            {meal.items.map((item) => (
                              <p key={item.id} className="text-gray-600">
                                {item.food.name} - {item.quantity} serving
                                {item.quantity > 1 ? "s" : ""} (
                                {item.food.calories} cal each)
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Exercises */}
                    {log.workoutLogs.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-gray-700">
                          Exercises:
                        </h3>
                        {log.workoutLogs.map((w) => (
                          <p key={w.id} className="text-gray-600">
                            {w.exercise.name} - {w.durationMin} min (
                            {w.durationMin * w.exercise.caloriesBurnedPerMin}{" "}
                            cal burned)
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Water Intake */}
                    {log.waterLogs.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-gray-700">
                          Water Intake:
                        </h3>
                        {log.waterLogs.map((w) => (
                          <p key={w.id} className="text-gray-600">
                            {w.amount} L
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Weight Logs */}
                    {log.weightLogs.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-gray-700">
                          Weight Logs:
                        </h3>
                        {log.weightLogs.map((w) => (
                          <p key={w.id} className="text-gray-600">
                            {w.weightKg} kg
                          </p>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
