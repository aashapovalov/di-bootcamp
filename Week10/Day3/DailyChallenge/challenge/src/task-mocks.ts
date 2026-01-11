export type Category = "Work" | "Health" | "Family" | "Personal";

export type TaskType = {
    id: number;
    name: string;
    category: Category;
    done: boolean;
}

export const tasksMock: TaskType[] = [
    {
        id: 1,
        name: "Finish project report",
        category: "Work",
        done: false,
    },
    {
        id: 2,
        name: "Team standup meeting",
        category: "Work",
        done: true,
    },
    {
        id: 3,
        name: "Morning workout",
        category: "Health",
        done: false,
    },
    {
        id: 4,
        name: "Doctor appointment",
        category: "Health",
        done: true,
    },
    {
        id: 5,
        name: "Call parents",
        category: "Family",
        done: false,
    },
    {
        id: 6,
        name: "Family dinner",
        category: "Family",
        done: true,
    },
    {
        id: 7,
        name: "Read a book",
        category: "Personal",
        done: false,
    },
    {
        id: 8,
        name: "Plan weekend trip",
        category: "Personal",
        done: true,
    },
];
