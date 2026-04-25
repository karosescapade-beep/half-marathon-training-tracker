const weeks = [
  {
    title: "Week 1",
    range: "Apr 27-May 3",
    focus: "Start easy and finish fresh.",
    badge: "7 miles",
    tasks: [
      ["Mon Apr 27", "2 miles easy"],
      ["Tue Apr 28", "Rest, walk, or mobility"],
      ["Wed Apr 29", "Pilates"],
      ["Thu Apr 30", "Barry's + evening Pilates"],
      ["Fri May 1", "F45 or upper/core Barry's + Pilates"],
      ["Sat May 2", "3 miles easy"],
      ["Sun May 3", "2 miles easy or Pilates only"],
    ],
  },
  {
    title: "Week 2",
    range: "May 4-May 10",
    focus: "Add a little time on feet.",
    badge: "8 miles",
    tasks: [
      ["Mon May 4", "2.5 miles easy"],
      ["Tue May 5", "Rest, walk, or mobility"],
      ["Wed May 6", "Pilates"],
      ["Thu May 7", "Barry's + evening Pilates"],
      ["Fri May 8", "F45 or upper/core Barry's + Pilates"],
      ["Sat May 9", "3.5 miles easy"],
      ["Sun May 10", "2 miles easy"],
    ],
  },
  {
    title: "Week 3",
    range: "May 11-May 17",
    focus: "Keep the rhythm steady.",
    badge: "9 miles",
    tasks: [
      ["Mon May 11", "2.5 miles easy"],
      ["Tue May 12", "Rest, walk, or mobility"],
      ["Wed May 13", "Pilates"],
      ["Thu May 14", "Barry's + evening Pilates"],
      ["Fri May 15", "Upper/core Barry's or Pilates only"],
      ["Sat May 16", "4 miles easy"],
      ["Sun May 17", "2.5 miles easy or Pilates"],
    ],
  },
  {
    title: "Week 4",
    range: "May 18-May 24",
    focus: "Lighter week for recovery.",
    badge: "7 miles",
    tasks: [
      ["Mon May 18", "2 miles easy"],
      ["Tue May 19", "Rest, walk, or mobility"],
      ["Wed May 20", "Pilates"],
      ["Thu May 21", "Barry's + evening Pilates"],
      ["Fri May 22", "Flexibility"],
      ["Sat May 23", "3 miles easy"],
      ["Sun May 24", "2 miles easy or Pilates only"],
    ],
  },
  {
    title: "Week 5",
    range: "May 25-May 31",
    focus: "Build again, still controlled.",
    badge: "10.5 miles",
    tasks: [
      ["Mon May 25", "3 miles easy"],
      ["Tue May 26", "Rest, walk, or mobility"],
      ["Wed May 27", "Pilates"],
      ["Thu May 28", "Barry's + evening Pilates"],
      ["Fri May 29", "F45 or upper/core Barry's + Pilates"],
      ["Sat May 30", "4.5 miles easy"],
      ["Sun May 31", "3 miles easy"],
    ],
  },
  {
    title: "Week 6",
    range: "Jun 1-Jun 7",
    focus: "Reach a comfortable 5-mile long run.",
    badge: "11 miles",
    tasks: [
      ["Mon Jun 1", "3 miles easy"],
      ["Tue Jun 2", "Rest, walk, or mobility"],
      ["Wed Jun 3", "Pilates"],
      ["Thu Jun 4", "Barry's + evening Pilates"],
      ["Fri Jun 5", "Upper/core Barry's + Pilates"],
      ["Sat Jun 6", "5 miles easy"],
      ["Sun Jun 7", "3 miles easy or Pilates"],
    ],
  },
  {
    title: "Week 7",
    range: "Jun 8-Jun 14",
    focus: "Introduce gentle tempo work.",
    badge: "12 miles",
    tasks: [
      ["Mon Jun 8", "3 miles easy with 4 relaxed strides"],
      ["Tue Jun 9", "Rest, walk, or mobility"],
      ["Wed Jun 10", "Pilates"],
      ["Thu Jun 11", "Barry's + evening Pilates"],
      ["Fri Jun 12", "Upper/core Barry's or F45 strength + Pilates"],
      ["Sat Jun 13", "6 miles easy"],
      ["Sun Jun 14", "3 miles recovery"],
    ],
  },
  {
    title: "Week 8",
    range: "Jun 15-Jun 21",
    focus: "Step back so the build sticks.",
    badge: "10 miles",
    tasks: [
      ["Mon Jun 15", "3 miles easy"],
      ["Tue Jun 16", "Rest, walk, or mobility"],
      ["Wed Jun 17", "Pilates"],
      ["Thu Jun 18", "Barry's + evening Pilates"],
      ["Fri Jun 19", "Flexibility"],
      ["Sat Jun 20", "4 miles easy"],
      ["Sun Jun 21", "3 miles easy or Pilates"],
    ],
  },
  {
    title: "Week 9",
    range: "Jun 22-Jun 28",
    focus: "Build long-run confidence.",
    badge: "14 miles",
    tasks: [
      ["Mon Jun 22", "4 miles easy"],
      ["Tue Jun 23", "Rest, walk, or mobility"],
      ["Wed Jun 24", "Pilates"],
      ["Thu Jun 25", "Barry's + evening Pilates"],
      ["Fri Jun 26", "Upper/core Barry's + Pilates"],
      ["Sat Jun 27", "7 miles easy"],
      ["Sun Jun 28", "3 miles recovery"],
    ],
  },
  {
    title: "Week 10",
    range: "Jun 29-Jul 5",
    focus: "Add controlled half-marathon effort.",
    badge: "15 miles",
    tasks: [
      ["Mon Jun 29", "4 miles with 2 miles steady"],
      ["Tue Jun 30", "Rest, walk, or mobility"],
      ["Wed Jul 1", "Pilates"],
      ["Thu Jul 2", "Barry's + evening Pilates"],
      ["Fri Jul 3", "F45 strength or upper/core Barry's + Pilates"],
      ["Sat Jul 4", "8 miles easy"],
      ["Sun Jul 5", "3 miles recovery"],
    ],
  },
  {
    title: "Week 11",
    range: "Jul 6-Jul 12",
    focus: "Recovery week before the peak.",
    badge: "12 miles",
    tasks: [
      ["Mon Jul 6", "3 miles easy"],
      ["Tue Jul 7", "Rest, walk, or mobility"],
      ["Wed Jul 8", "Pilates"],
      ["Thu Jul 9", "Barry's + evening Pilates"],
      ["Fri Jul 10", "Flexibility"],
      ["Sat Jul 11", "6 miles easy"],
      ["Sun Jul 12", "3 miles easy"],
    ],
  },
  {
    title: "Week 12",
    range: "Jul 13-Jul 19",
    focus: "Peak build starts.",
    badge: "17 miles",
    tasks: [
      ["Mon Jul 13", "4 miles easy with 5 relaxed strides"],
      ["Tue Jul 14", "Rest, walk, or mobility"],
      ["Wed Jul 15", "Pilates"],
      ["Thu Jul 16", "Barry's + evening Pilates"],
      ["Fri Jul 17", "Upper/core Barry's + Pilates"],
      ["Sat Jul 18", "9 miles easy"],
      ["Sun Jul 19", "4 miles recovery"],
    ],
  },
  {
    title: "Week 13",
    range: "Jul 20-Jul 26",
    focus: "Longest long run.",
    badge: "19 miles",
    tasks: [
      ["Mon Jul 20", "5 miles with 3 miles steady"],
      ["Tue Jul 21", "Rest, walk, or mobility"],
      ["Wed Jul 22", "Pilates"],
      ["Thu Jul 23", "Barry's + evening Pilates"],
      ["Fri Jul 24", "Flexibility"],
      ["Sat Jul 25", "10 miles easy"],
      ["Sun Jul 26", "4 miles recovery"],
    ],
  },
  {
    title: "Week 14",
    range: "Jul 27-Aug 2",
    focus: "Taper begins. Keep the legs awake.",
    badge: "13 miles",
    tasks: [
      ["Mon Jul 27", "4 miles easy with 4 relaxed strides"],
      ["Tue Jul 28", "Rest, walk, or mobility"],
      ["Wed Jul 29", "Pilates"],
      ["Thu Jul 30", "Barry's, lighter effort + evening Pilates"],
      ["Fri Jul 31", "Gentle flexibility"],
      ["Sat Aug 1", "6 miles easy"],
      ["Sun Aug 2", "3 miles recovery"],
    ],
  },
  {
    title: "Race Week",
    range: "Aug 3-Aug 9",
    focus: "Fresh, calm, and ready for August 8.",
    badge: "Race",
    tasks: [
      ["Mon Aug 3", "3 miles easy"],
      ["Tue Aug 4", "Rest, walk, or mobility"],
      ["Wed Aug 5", "Gentle flexibility"],
      ["Thu Aug 6", "2 miles easy with 4 short strides"],
      ["Fri Aug 7", "Rest, light walk, and prep gear"],
      ["Sat Aug 8", "Lululemon half marathon"],
      ["Sun Aug 9", "You did it - celebrate, recover, and soak it in"],
    ],
  },
];

const storageKey = "half-hyrox-tracker-2026-v2";
const weeksContainer = document.querySelector("#weeks");
const completedCount = document.querySelector("#completedCount");
const totalCount = document.querySelector("#totalCount");
const progressFill = document.querySelector("#progressFill");
const progressPercent = document.querySelector("#progressPercent");
const resetButton = document.querySelector("#resetButton");

const savedState = JSON.parse(localStorage.getItem(storageKey) || "{}");
savedState.order ||= {};
savedState.recovery ||= {};
savedState.choices ||= {};

const defaultPlacements = weeks.map((week) => week.tasks.map(([day]) => getTaskId(day)));
const taskById = new Map(
  weeks.flatMap((week) =>
    week.tasks.map(([day, workout]) => [
      getTaskId(day),
      {
        originalDay: day,
        workout,
      },
    ]),
  ),
);
let dragState = null;

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(savedState));
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getTaskId(day) {
  return `task-${slugify(day)}`;
}

function getWeekPlacements(weekIndex) {
  const savedOrder = savedState.order[weekIndex];
  if (!Array.isArray(savedOrder)) return defaultPlacements[weekIndex];

  return savedOrder.filter((taskId) => taskById.has(taskId));
}

function getOrderedTasks(weekIndex) {
  return getWeekPlacements(weekIndex)
    .map((id) => ({ id, ...taskById.get(id) }))
    .filter((task) => task.workout);
}

function normalizeSavedOrder() {
  const savedOrders = weeks.map((_, weekIndex) => savedState.order[weekIndex]);
  if (!savedOrders.some(Array.isArray)) return;

  const flatOrder = savedOrders.flatMap((order) => (Array.isArray(order) ? order : []));
  const uniqueIds = new Set(flatOrder);
  const expectedIds = new Set(defaultPlacements.flat());
  const valid =
    savedOrders.every((order) => Array.isArray(order) && order.length === 7) &&
    uniqueIds.size === expectedIds.size &&
    [...uniqueIds].every((taskId) => expectedIds.has(taskId));

  if (!valid) savedState.order = {};
}

function getInsertionIndex(list, y) {
  const afterElement = getDragAfterElement(list, y);
  const tasks = [...list.querySelectorAll(".task:not(.dragging)")];
  return afterElement == null ? tasks.length : tasks.indexOf(afterElement);
}

function applyDrop(list, event) {
  if (!dragState) return;

  const sourceWeekIndex = dragState.weekIndex;
  const targetWeekIndex = Number(list.dataset.weekIndex);
  const sourcePlacements = [...getWeekPlacements(sourceWeekIndex)];
  const targetPlacements =
    sourceWeekIndex === targetWeekIndex ? sourcePlacements : [...getWeekPlacements(targetWeekIndex)];
  const sourceIndex = sourcePlacements.indexOf(dragState.taskId);
  const insertionIndex = getInsertionIndex(list, event.clientY);

  if (sourceIndex === -1) return;

  if (sourceWeekIndex === targetWeekIndex) {
    const [movedTask] = sourcePlacements.splice(sourceIndex, 1);
    sourcePlacements.splice(insertionIndex, 0, movedTask);
    savedState.order[sourceWeekIndex] = sourcePlacements;
  } else {
    const targetIndex = Math.max(0, Math.min(insertionIndex, targetPlacements.length - 1));
    const targetTask = targetPlacements[targetIndex];
    sourcePlacements[sourceIndex] = targetTask;
    targetPlacements[targetIndex] = dragState.taskId;
    savedState.order[sourceWeekIndex] = sourcePlacements;
    savedState.order[targetWeekIndex] = targetPlacements;
  }

  saveState();
  dragState = null;
  renderWeeks();
  updateProgress();
}

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".task:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }

      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, element: null },
  ).element;
}

function getTheme(workout) {
  const lowerWorkout = workout.toLowerCase();
  if (lowerWorkout.includes("you did it")) return "Celebrate";
  if (workout.includes("half marathon")) return "Race";
  if (/^\d+(\.\d+)? miles/.test(workout) && workout.includes("easy")) return "Run";
  if (workout.includes("miles recovery")) return "Run";
  if (workout.includes("strides") || workout.includes("steady")) return "Run";
  if (lowerWorkout.includes("rest") || lowerWorkout.includes("walk") || lowerWorkout.includes("prep gear")) {
    return "Recovery";
  }
  if (workout.includes("Pilates") || lowerWorkout.includes("flexibility")) return "Flexibility";
  if (workout.includes("Barry") || workout.includes("F45")) return "Strength";
  return "Training";
}

function getStrengthDefault(workout) {
  if (workout.includes("F45") && !workout.includes("Barry")) return "F45";
  return "Barry's";
}

function makeChoiceSelect(taskId, type, options, defaultValue) {
  const select = document.createElement("select");
  select.className = "choice-select";
  select.setAttribute("aria-label", `${type} choice`);
  const key = `${taskId}-${type}`;
  const legacyRecovery = type === "Flexibility" ? savedState.recovery[taskId] : null;
  const selection = savedState.choices[key] || legacyRecovery || defaultValue;

  options.forEach((optionLabel) => {
    const option = document.createElement("option");
    option.value = optionLabel;
    option.textContent = optionLabel;
    option.selected = selection === optionLabel;
    select.append(option);
  });

  select.addEventListener("click", (event) => event.stopPropagation());
  select.addEventListener("change", () => {
    savedState.choices[key] = select.value;
    if (type === "Flexibility") savedState.recovery[taskId] = select.value;
    saveState();
  });

  return select;
}

function makeThemeLine(theme, content, isOptional = false) {
  const line = document.createElement("div");
  line.className = "theme-line";

  const label = document.createElement("em");
  label.textContent = isOptional ? `${theme} optional` : theme;
  line.append(label);

  if (typeof content === "string") {
    line.append(document.createTextNode(content));
  } else {
    line.append(content);
  }

  return line;
}

function simplifyRunText(workout) {
  return workout
    .replace(" or Pilates only", "")
    .replace(" or Pilates", "")
    .replace(" or Flexibility", "")
    .trim();
}

function renderWorkout(workout, taskId) {
  const fragment = document.createDocumentFragment();
  const hasStrength = workout.includes("Barry") || workout.includes("F45");
  const hasFlexibility = workout.includes("Pilates") || workout.toLowerCase().includes("flexibility");
  const hasRun = workout.includes("miles");
  const theme = getTheme(workout);
  const hasTwoExercises = (hasStrength && hasFlexibility) || (hasRun && hasFlexibility);

  if (hasRun) {
    fragment.append(makeThemeLine("Run", simplifyRunText(workout)));
  }

  if (hasStrength) {
    const strengthOptions = hasTwoExercises ? ["Barry's", "F45", "None"] : ["Barry's", "F45"];
    const strength = makeChoiceSelect(taskId, "Strength", strengthOptions, getStrengthDefault(workout));
    fragment.append(makeThemeLine("Strength", strength));
  }

  if (hasFlexibility) {
    const flexibilityOptions = hasTwoExercises
      ? ["Pilates", "Barre", "Yoga", "None"]
      : ["Pilates", "Barre", "Yoga"];
    const flexibility = makeChoiceSelect(taskId, "Flexibility", flexibilityOptions, "Pilates");
    fragment.append(makeThemeLine("Flexibility", flexibility, hasTwoExercises));
  }

  if (!hasRun && !hasStrength && !hasFlexibility) {
    fragment.append(makeThemeLine(theme, simplifyRunText(workout)));
  }

  return fragment;
}

function renderWeeks() {
  weeksContainer.innerHTML = "";

  weeks.forEach((week, weekIndex) => {
    const article = document.createElement("article");
    article.className = "week-card";

    const header = document.createElement("div");
    header.className = "week-header";
    header.innerHTML = `
      <div>
        <h3>${week.title}</h3>
        <p>${week.range} - ${week.focus}</p>
      </div>
      <span class="week-badge">${week.badge}</span>
    `;

    const list = document.createElement("div");
    list.className = "task-list";
    list.dataset.weekIndex = weekIndex;

    list.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    list.addEventListener("drop", (event) => applyDrop(list, event));

    getOrderedTasks(weekIndex).forEach(({ workout, id }, taskIndex) => {
      const task = document.createElement("article");
      task.className = "task";
      const theme = getTheme(workout);
      if (theme === "Race") task.classList.add("race-day");
      if (theme === "Celebrate") task.classList.add("celebration-day");
      task.draggable = true;
      task.dataset.taskId = id;

      const grip = document.createElement("span");
      grip.className = "drag-grip";
      grip.setAttribute("aria-hidden", "true");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = Boolean(savedState[id]);

      checkbox.addEventListener("change", () => {
        savedState[id] = checkbox.checked;
        task.classList.toggle("completed", checkbox.checked);
        saveState();
        updateProgress();
      });

      const copy = document.createElement("div");
      const dayLabel = document.createElement("span");
      dayLabel.textContent = week.tasks[taskIndex]?.[0] || "Flex day";

      const workoutLabel = document.createElement("strong");
      workoutLabel.append(renderWorkout(workout, id));

      copy.append(dayLabel, workoutLabel);

      task.addEventListener("dragstart", () => {
        dragState = { taskId: id, weekIndex };
        task.classList.add("dragging");
      });

      task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
        dragState = null;
      });

      task.append(grip, checkbox, copy);
      task.classList.toggle("completed", checkbox.checked);
      list.append(task);
    });

    article.append(header, list);
    weeksContainer.append(article);
  });
}

function updateProgress() {
  const checkboxes = [...document.querySelectorAll("input[type='checkbox']")];
  const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
  const total = checkboxes.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  completedCount.textContent = `${completed} completed`;
  totalCount.textContent = `${total} total`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  document.documentElement.style.setProperty("--ring-value", `${percent}%`);
}

resetButton.addEventListener("click", () => {
  if (!confirm("Clear all completed checkmarks, recovery choices, and moved boxes?")) return;
  Object.keys(savedState).forEach((key) => delete savedState[key]);
  savedState.order = {};
  savedState.recovery = {};
  savedState.choices = {};
  saveState();
  renderWeeks();
  updateProgress();
});

normalizeSavedOrder();
renderWeeks();
updateProgress();
