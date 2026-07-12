import { useState } from "react";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useApp } from "../../context/AppContext";
import type { Task } from "../../context/AppContext";

function TaskRow({ task, projectId, onToggle }: { task: Task; projectId: string; onToggle: () => void }) {
  return (
    <div className="flex items-start gap-3 py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors">
      <button
        onClick={onToggle}
        className="size-4 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors"
        style={{ border: task.done ? "none" : "2px solid #cbd5e1", background: task.done ? "#8d0000" : "transparent" }}
      >
        {task.done && (
          <svg viewBox="0 0 10 8" fill="none" className="size-3">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <div className="flex-1 min-w-0">
        <span className="text-[14px] leading-[1.4]" style={{ fontFamily: "'Inter', sans-serif", color: task.done ? "#94a3b8" : "#0f172a", textDecoration: task.done ? "line-through" : "none" }}>
          {task.title}
        </span>
        <div className="flex items-center gap-2 mt-0.5">
          {task.due && (
            <span className="text-[11px] px-1.5 py-0.5 rounded" style={{ fontFamily: "'Inter', sans-serif", background: "#f1f5f9", color: "#64748b" }}>
              {new Date(task.due).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TasksPage() {
  const { projects, toggleTask, addTaskToProject } = useApp();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [newTaskTitles, setNewTaskTitles] = useState<Record<string, string>>({});

  const toggle = (pid: string) =>
    setOpenGroups((prev) => ({ ...prev, [pid]: prev[pid] === undefined ? false : !prev[pid] }));

  const isOpen = (pid: string) => openGroups[pid] !== false;

  const addTask = (projectId: string) => {
    const title = (newTaskTitles[projectId] ?? "").trim();
    if (!title) return;
    addTaskToProject(projectId, {
      id: Date.now().toString(),
      projectId,
      title,
      done: false,
      due: null,
      notes: "",
    });
    setNewTaskTitles((prev) => ({ ...prev, [projectId]: "" }));
  };

  const allTasks = projects.flatMap((p) => p.tasks.map((t) => ({ ...t, projectName: p.name, projectId: p.id })));
  const totalDone = allTasks.filter((t) => t.done).length;

  return (
    <div className="p-6" style={{ background: "#fcfcfc", minHeight: "100%" }}>
      <div className="mb-5">
        <h1 className="text-[26px] tracking-[-0.65px]" style={{ fontFamily: "'Archivo Black', sans-serif", color: "#0f172a" }}>Tasks</h1>
        <p className="text-[13px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#64748b" }}>
          {totalDone} of {allTasks.length} tasks completed
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-2xl p-12 text-center" style={{ border: "1px solid #e2e8f0", background: "white" }}>
          <p className="text-[14px]" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
            No tasks yet. Create a project to add tasks.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {projects.map((project) => {
            const active = project.tasks.filter((t) => !t.done);
            const done = project.tasks.filter((t) => t.done);
            const open = isOpen(project.id);
            return (
              <div key={project.id} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0", background: "white" }}>
                {/* Project header */}
                <button
                  onClick={() => toggle(project.id)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[14px]" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: "#0f172a" }}>{project.name}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full" style={{ fontFamily: "'Inter', sans-serif", background: "#f1f5f9", color: "#64748b" }}>
                      {done.length}/{project.tasks.length}
                    </span>
                  </div>
                  {open ? <ChevronUp className="size-4" style={{ color: "#94a3b8" }} /> : <ChevronDown className="size-4" style={{ color: "#94a3b8" }} />}
                </button>

                {open && (
                  <div className="border-t" style={{ borderColor: "#f1f5f9" }}>
                    {/* Add task */}
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "#f8fafc" }}>
                      <div className="size-4 rounded border-2 shrink-0" style={{ borderColor: "#e2e8f0" }} />
                      <input
                        type="text"
                        placeholder="Add a task…"
                        value={newTaskTitles[project.id] ?? ""}
                        onChange={(e) => setNewTaskTitles((prev) => ({ ...prev, [project.id]: e.target.value }))}
                        onKeyDown={(e) => e.key === "Enter" && addTask(project.id)}
                        className="flex-1 text-[13px] outline-none bg-transparent"
                        style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}
                      />
                      <button
                        onClick={() => addTask(project.id)}
                        className="size-6 rounded flex items-center justify-center hover:bg-slate-100"
                      >
                        <Plus className="size-4" style={{ color: "#8d0000" }} strokeWidth={2} />
                      </button>
                    </div>

                    {/* Active tasks */}
                    {active.length > 0 && (
                      <div className="px-1 py-1">
                        {active.map((task) => (
                          <TaskRow key={task.id} task={task} projectId={project.id} onToggle={() => toggleTask(project.id, task.id)} />
                        ))}
                      </div>
                    )}

                    {/* Completed */}
                    {done.length > 0 && (
                      <div className="border-t px-1 py-1" style={{ borderColor: "#f8fafc" }}>
                        <p className="text-[10px] uppercase tracking-wider px-4 pt-2 pb-1" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
                          Completed
                        </p>
                        {done.map((task) => (
                          <TaskRow key={task.id} task={task} projectId={project.id} onToggle={() => toggleTask(project.id, task.id)} />
                        ))}
                      </div>
                    )}

                    {project.tasks.length === 0 && (
                      <p className="text-center py-4 text-[13px]" style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>
                        No tasks yet — add one above
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
