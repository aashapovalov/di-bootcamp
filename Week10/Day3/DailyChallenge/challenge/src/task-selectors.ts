import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "./store.ts";
import type {TaskType} from "./task-mocks.ts";

export const selectTaskState = (state: RootState) => state.task;

export const selectTasks = createSelector(
    selectTaskState,
    (taskState): TaskType[] => taskState.tasks
);

const makeSelectTasksByCategory = (category: TaskType["category"]) =>
    createSelector([selectTasks], (tasks: TaskType[]) => tasks.filter((task) => task.category === category));

export const selectPersonalTasks = makeSelectTasksByCategory("Personal");
export const selectHealthTasks = makeSelectTasksByCategory("Health");
export const selectWorkTasks = makeSelectTasksByCategory("Work");
export const selectFamilyTasks = makeSelectTasksByCategory("Family");

export const selectCompletedTasks = createSelector([selectTasks], (tasks: TaskType[]) =>
    tasks.filter((task: TaskType) => task.done));

export const selectTaskById = (id: number) => createSelector([selectTasks], (tasks: TaskType[]) =>
    tasks.filter(task => task.id === id));