import { useMemo, useState } from "react";
import { useAppSelector } from "./hook";

import type { Category, TaskType } from "./task-mocks";
import {
    selectTasks,
    selectPersonalTasks,
    selectHealthTasks,
    selectWorkTasks,
    selectFamilyTasks,
    selectCompletedTasks,
} from "./task-selectors";

type Filter = "All" | Category;

export function TaskList() {
    const [filter, setFilter] = useState<Filter>("All");
    const [onlyCompleted, setOnlyCompleted] = useState(false);

    // Pick which selector should be used based on the current filter
    const selector = useMemo(() => {
        if (onlyCompleted) return selectCompletedTasks;

        switch (filter) {
            case "Personal":
                return selectPersonalTasks;
            case "Health":
                return selectHealthTasks;
            case "Work":
                return selectWorkTasks;
            case "Family":
                return selectFamilyTasks;
            case "All":
            default:
                return selectTasks;
        }
    }, [filter, onlyCompleted]);

    const tasks: TaskType[] = useAppSelector((state) => selector(state));

    return (
        <div style={{ display: "grid", gap: 12 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={() => setFilter("All")}>All</button>
                <button onClick={() => setFilter("Work")}>Work</button>
                <button onClick={() => setFilter("Health")}>Health</button>
                <button onClick={() => setFilter("Family")}>Family</button>
                <button onClick={() => setFilter("Personal")}>Personal</button>

                <label style={{ marginLeft: 12, display: "flex", alignItems: "center", gap: 6 }}>
                    <input
                        type="checkbox"
                        checked={onlyCompleted}
                        onChange={(e) => setOnlyCompleted(e.target.checked)}
                    />
                    Completed only
                </label>
            </div>

            <div>
                <div style={{ marginBottom: 8 }}>
                    Showing: <strong>{onlyCompleted ? "Completed" : filter}</strong> ({tasks.length})
                </div>

                <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {tasks.map((t) => (
                        <li key={t.id}>
              <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
                {t.name}
              </span>{" "}
                            — <em>{t.category}</em> {t.done ? "✅" : ""}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
