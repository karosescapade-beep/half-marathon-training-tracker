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

const competitionKey = "half-hyrox-competition-2026-v1";
const legacyKey = "half-hyrox-tracker-2026-v2";
const ownerKeyStorageKey = "half-hyrox-owner-key-v1";
// Optional fallback. The easier setup is to paste the Web App URL into google-sheet-url.txt.
let googleSheetWebAppUrl = "https://script.google.com/macros/s/AKfycbx_JHQh_KY4XVMhfLnHeeXOFMbDfg295QGPJsxaZ2exuJ8YEoHDbIDkTWdyNEnfvTnR/exec";
const weeksContainer = document.querySelector("#weeks");
const prevWeekButton = document.querySelector("#prevWeekButton");
const nextWeekButton = document.querySelector("#nextWeekButton");
const weekCarouselStatus = document.querySelector("#weekCarouselStatus");
const completedCount = document.querySelector("#completedCount");
const totalCount = document.querySelector("#totalCount");
const progressFill = document.querySelector("#progressFill");
const progressPercent = document.querySelector("#progressPercent");
const milesCount = document.querySelector("#milesCount");
const scoreCount = document.querySelector("#scoreCount");
const resetButton = document.querySelector("#resetButton");
const deleteProfileButton = document.querySelector("#deleteProfileButton");
const profileSelect = document.querySelector("#profileSelect");
const themeSelect = document.querySelector("#themeSelect");
const joinForm = document.querySelector("#joinForm");
const joinName = document.querySelector("#joinName");
const profileStatus = document.querySelector("#profileStatus");
const syncStatus = document.querySelector("#syncStatus");
const reportView = document.querySelector("#reportView");
const leaderboardView = document.querySelector("#leaderboardView");
const leaderboardRows = document.querySelector("#leaderboardRows");
const viewButtons = [...document.querySelectorAll(".view-button")];
const visualThemeOptions = ["anime", "warrior", "cartoon", "wasteland"];
const browserOwnerKey = getBrowserOwnerKey();
let googleSyncEnabled = false;

const defaultPlacements = weeks.map((week) => week.tasks.map(([day]) => getTaskId(day)));
const taskById = new Map(
  weeks.flatMap((week, weekIndex) =>
    week.tasks.map(([day, workout], taskIndex) => {
      const baseMiles = parseMiles(workout);
      const id = getTaskId(day);
      return [
        id,
        {
          id,
          originalDay: day,
          weekIndex,
          taskIndex,
          workout,
          baseMiles,
          isLongRun: taskIndex === 5 && baseMiles > 0 && !workout.toLowerCase().includes("half marathon"),
          isRun: baseMiles > 0 || workout.toLowerCase().includes("half marathon"),
        },
      ];
    }),
  ),
);
let appState = loadCompetitionState();
let dragState = null;
let carouselScrollFrame = null;
let syncTimer = null;
let isApplyingRemoteProfiles = false;

function saveState(options = {}) {
  localStorage.setItem(competitionKey, JSON.stringify(appState));
  if (options.sync !== false) queueProfileSync();
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getTaskId(day) {
  return `task-${slugify(day)}`;
}

function parseMiles(workout) {
  if (workout.toLowerCase().includes("half marathon")) return 13.1;
  const match = workout.match(/(\d+(?:\.\d+)?)\s*miles/i);
  return match ? Number(match[1]) : 0;
}

function safeParse(rawValue, fallback) {
  try {
    return JSON.parse(rawValue) || fallback;
  } catch {
    return fallback;
  }
}

function getBrowserOwnerKey() {
  const storedOwnerKey = localStorage.getItem(ownerKeyStorageKey);
  if (storedOwnerKey) return storedOwnerKey;

  const newOwnerKey = `owner-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  localStorage.setItem(ownerKeyStorageKey, newOwnerKey);
  return newOwnerKey;
}

function collectLegacyCompleted(legacyState) {
  return Object.fromEntries(
    Object.entries(legacyState || {})
      .filter(([key, value]) => key.startsWith("task-") && value === true)
      .map(([key]) => [key, true]),
  );
}

function createProfile(name, seed = {}) {
  const trimmedName = name.trim() || "You";
  const id = seed.id || `profile-${slugify(trimmedName)}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;

  return {
    id,
    name: trimmedName,
    joinedAt: seed.joinedAt || new Date().toISOString(),
    order: seed.order || {},
    recovery: seed.recovery || {},
    choices: seed.choices || {},
    completed: seed.completed || {},
    runMileage: seed.runMileage || seed.longRunMileage || {},
    longRunMileage: seed.longRunMileage || {},
    theme: seed.theme || "anime",
    ownerKey: Object.prototype.hasOwnProperty.call(seed, "ownerKey") ? seed.ownerKey : browserOwnerKey,
    remote: Boolean(seed.remote),
    canEdit: Object.prototype.hasOwnProperty.call(seed, "canEdit") ? Boolean(seed.canEdit) : true,
  };
}

function loadCompetitionState() {
  const stored = safeParse(localStorage.getItem(competitionKey), null);
  if (stored?.profiles && stored.activeProfileId) {
    stored.ownerKey ||= browserOwnerKey;
    stored.activeWeekIndex = clampWeekIndex(stored.activeWeekIndex || 0);
    Object.values(stored.profiles).forEach(normalizeProfile);
    return stored;
  }

  const legacyState = safeParse(localStorage.getItem(legacyKey), {});
  const you = createProfile("You", {
    id: "profile-you",
    order: legacyState.order || {},
    recovery: legacyState.recovery || {},
    choices: legacyState.choices || {},
    completed: collectLegacyCompleted(legacyState),
    ownerKey: null,
  });

  return {
    activeProfileId: you.id,
    activeView: "report",
    activeWeekIndex: 0,
    ownerKey: browserOwnerKey,
    profiles: {
      [you.id]: you,
    },
  };
}

function normalizeProfile(profile) {
  profile.order ||= {};
  profile.recovery ||= {};
  profile.choices ||= {};
  profile.completed ||= {};
  profile.runMileage ||= profile.longRunMileage || {};
  profile.longRunMileage ||= {};
  if (!visualThemeOptions.includes(profile.theme)) profile.theme = "anime";
  if (!Object.prototype.hasOwnProperty.call(profile, "ownerKey")) {
    profile.ownerKey = profile.id === "profile-you" ? null : browserOwnerKey;
  }
  normalizeSavedOrder(profile);
}

function canDeleteProfile(profile) {
  return profile.id !== "profile-you" && isProfileEditable(profile) && Object.keys(appState.profiles).length > 1;
}

function isProfileEditable(profile) {
  if (!profile) return false;
  if (googleSyncEnabled && profile.remote) return profile.canEdit === true;
  return profile.id === "profile-you" || profile.ownerKey === browserOwnerKey;
}

function shouldSyncProfile(profile) {
  return googleSyncEnabled && profile?.id !== "profile-you" && isProfileEditable(profile);
}

function clampWeekIndex(index) {
  const numericIndex = Number(index);
  if (!Number.isFinite(numericIndex)) return 0;
  return Math.max(0, Math.min(weeks.length - 1, Math.round(numericIndex)));
}

function updateWeekCarouselControls() {
  const index = clampWeekIndex(appState.activeWeekIndex || 0);
  const activeWeek = weeks[index];
  weekCarouselStatus.textContent = `${activeWeek.title} / ${weeks.length}`;
  prevWeekButton.disabled = index === 0;
  nextWeekButton.disabled = index === weeks.length - 1;
}

function scrollToWeek(index, behavior = "smooth", shouldSave = true) {
  appState.activeWeekIndex = clampWeekIndex(index);
  updateWeekCarouselControls();

  const card = weeksContainer.querySelector(`.week-card[data-week-index="${appState.activeWeekIndex}"]`);
  if (card) {
    const left = card.offsetLeft - weeksContainer.offsetLeft;
    weeksContainer.scrollTo({ left, behavior });
  }

  if (shouldSave) saveState();
}

function syncWeekCarouselAfterRender() {
  appState.activeWeekIndex = clampWeekIndex(appState.activeWeekIndex || 0);
  updateWeekCarouselControls();
  requestAnimationFrame(() => scrollToWeek(appState.activeWeekIndex, "auto", false));
}

function updateActiveWeekFromScroll() {
  carouselScrollFrame = null;
  const cards = [...weeksContainer.querySelectorAll(".week-card")];
  if (!cards.length) return;

  const containerLeft = weeksContainer.getBoundingClientRect().left;
  const closestCard = cards.reduce(
    (closest, card) => {
      const distance = Math.abs(card.getBoundingClientRect().left - containerLeft);
      return distance < closest.distance ? { distance, card } : closest;
    },
    { distance: Number.POSITIVE_INFINITY, card: cards[0] },
  ).card;
  const nextIndex = clampWeekIndex(closestCard.dataset.weekIndex);

  if (nextIndex !== appState.activeWeekIndex) {
    appState.activeWeekIndex = nextIndex;
    updateWeekCarouselControls();
    saveState();
  }
}

function updateSyncStatus(message, tone = "neutral") {
  if (!syncStatus) return;
  syncStatus.textContent = message;
  syncStatus.dataset.tone = tone;
}

function setGoogleSheetWebAppUrl(value) {
  googleSheetWebAppUrl = (value || "").trim();
  googleSyncEnabled = /^https:\/\/script\.google\.com\//.test(googleSheetWebAppUrl);
}

function extractGoogleSheetWebAppUrl(text) {
  const match = String(text || "").match(/https:\/\/script\.google\.com\/[^\s"'<>]+/i);
  return match ? match[0].trim() : "";
}

async function loadGoogleSheetWebAppUrl() {
  let configuredUrl = googleSheetWebAppUrl;

  try {
    const response = await fetch("google-sheet-url.txt", { cache: "no-store" });
    if (response.ok) {
      const fileUrl = extractGoogleSheetWebAppUrl(await response.text());
      if (fileUrl) configuredUrl = fileUrl;
    }
  } catch {
    // Local file previews can block this request; GitHub Pages will load it normally.
  }

  setGoogleSheetWebAppUrl(configuredUrl);
}

function getPublicProfile(profile) {
  return {
    id: profile.id,
    name: profile.name,
    joinedAt: profile.joinedAt,
    order: profile.order || {},
    recovery: profile.recovery || {},
    choices: profile.choices || {},
    completed: profile.completed || {},
    runMileage: profile.runMileage || {},
    longRunMileage: profile.longRunMileage || {},
    theme: visualThemeOptions.includes(profile.theme) ? profile.theme : "anime",
  };
}

function makeSheetUrl(params = {}) {
  const url = new URL(googleSheetWebAppUrl);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

function loadJsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = `sheetCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete window[callbackName];
      script.remove();
    };

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Google Sheet sync did not respond."));
    };

    script.src = `${url}${url.includes("?") ? "&" : "?"}callback=${encodeURIComponent(callbackName)}`;
    document.body.append(script);
  });
}

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

function fetchSheetProfiles() {
  return loadJsonp(
    makeSheetUrl({
      action: "list",
      ownerKey: browserOwnerKey,
      cacheBust: Date.now().toString(),
    }),
  ).then((payload) => (Array.isArray(payload?.profiles) ? payload.profiles : []));
}

function submitToSheet(payload) {
  if (!googleSyncEnabled) return Promise.resolve({ ok: false });

  const params = {
    action: payload.action || "upsert",
    ownerKey: payload.ownerKey || browserOwnerKey,
    cacheBust: Date.now().toString(),
  };

  if (payload.profile) params.payload = JSON.stringify({ profile: payload.profile });
  if (payload.profileId) params.profileId = payload.profileId;

  return loadJsonp(makeSheetUrl(params)).then((response) => {
    if (!response?.ok) throw new Error(response?.error || "Google Sheet save failed.");
    return response;
  });
}

async function fetchProfilesUntil(predicate) {
  let profiles = [];

  for (let attempt = 0; attempt < 5; attempt += 1) {
    profiles = await fetchSheetProfiles();
    if (predicate(profiles)) return profiles;
    await wait(850);
  }

  return profiles;
}

function applyRemoteProfiles(profiles) {
  const remoteIds = new Set();
  isApplyingRemoteProfiles = true;

  profiles.forEach((remoteProfile) => {
    if (!remoteProfile?.id) return;
    const profile = createProfile(remoteProfile.name || "Friend", {
      ...remoteProfile,
      ownerKey: remoteProfile.canEdit ? browserOwnerKey : null,
      remote: true,
      canEdit: Boolean(remoteProfile.canEdit),
    });
    remoteIds.add(profile.id);
    appState.profiles[profile.id] = profile;
  });

  Object.entries(appState.profiles).forEach(([profileId, profile]) => {
    if (profile.remote && !remoteIds.has(profileId)) delete appState.profiles[profileId];
  });

  if (!appState.profiles[appState.activeProfileId]) {
    appState.activeProfileId = appState.profiles["profile-you"] ? "profile-you" : Object.keys(appState.profiles)[0];
  }

  saveState({ sync: false });
  refreshApp({ loadRemote: false });
  isApplyingRemoteProfiles = false;
}

function queueProfileSync(profile = getActiveProfile()) {
  if (isApplyingRemoteProfiles || !shouldSyncProfile(profile)) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => syncProfileToSheet(profile), 450);
}

async function syncProfileToSheet(profile = getActiveProfile()) {
  if (!shouldSyncProfile(profile)) return;
  const profileId = profile.id;
  updateSyncStatus("Saving to Google Sheet...", "saving");

  try {
    await submitToSheet({
      action: "upsert",
      ownerKey: browserOwnerKey,
      profile: getPublicProfile(profile),
    });

    const profiles = await fetchProfilesUntil((sheetProfiles) =>
      sheetProfiles.some((remoteProfile) => remoteProfile.id === profileId),
    );
    if (!profiles.some((remoteProfile) => remoteProfile.id === profileId)) {
      throw new Error("Profile was not found in the Google Sheet.");
    }

    applyRemoteProfiles(profiles);
    updateSyncStatus("Synced with Google Sheet", "success");
  } catch (error) {
    updateSyncStatus(`Google Sheet error: ${error.message || "save failed"}`, "error");
  }
}

async function syncDeleteProfile(profile) {
  if (!googleSyncEnabled || !isProfileEditable(profile)) return;
  const profileId = profile.id;
  updateSyncStatus("Removing from Google Sheet...", "saving");

  try {
    await submitToSheet({
      action: "delete",
      ownerKey: browserOwnerKey,
      profileId,
    });

    const profiles = await fetchProfilesUntil((sheetProfiles) =>
      !sheetProfiles.some((remoteProfile) => remoteProfile.id === profileId),
    );
    if (profiles.some((remoteProfile) => remoteProfile.id === profileId)) {
      throw new Error("Profile was still found in the Google Sheet.");
    }

    applyRemoteProfiles(profiles);
    updateSyncStatus("Synced with Google Sheet", "success");
  } catch (error) {
    updateSyncStatus(`Google Sheet error: ${error.message || "delete failed"}`, "error");
  }
}

async function refreshProfilesFromSheet() {
  if (!googleSyncEnabled) {
    updateSyncStatus("Saved on this browser", "local");
    return;
  }

  updateSyncStatus("Loading Google Sheet...", "saving");

  try {
    const profiles = await fetchSheetProfiles();
    applyRemoteProfiles(profiles);
    updateSyncStatus("Synced with Google Sheet", "success");
  } catch {
    updateSyncStatus("Google Sheet sync unavailable", "error");
  } finally {
    isApplyingRemoteProfiles = false;
  }
}

function getActiveProfile() {
  const profile = appState.profiles[appState.activeProfileId];
  if (profile) return profile;

  const fallback = Object.values(appState.profiles)[0] || createProfile("You", { id: "profile-you" });
  appState.profiles[fallback.id] = fallback;
  appState.activeProfileId = fallback.id;
  return fallback;
}

function getWeekPlacements(weekIndex, profile = getActiveProfile()) {
  const savedOrder = profile.order[weekIndex];
  if (!Array.isArray(savedOrder)) return defaultPlacements[weekIndex];
  return savedOrder.filter((taskId) => taskById.has(taskId));
}

function getOrderedTasks(weekIndex, profile = getActiveProfile()) {
  return getWeekPlacements(weekIndex, profile)
    .map((id) => taskById.get(id))
    .filter(Boolean);
}

function normalizeSavedOrder(profile) {
  Object.keys(profile.order || {}).forEach((weekIndex) => {
    const index = Number(weekIndex);
    const order = profile.order[weekIndex];
    const expected = defaultPlacements[index];
    const valid =
      Array.isArray(order) &&
      expected &&
      order.length === expected.length &&
      new Set(order).size === expected.length &&
      order.every((taskId) => expected.includes(taskId));

    if (!valid) delete profile.order[weekIndex];
  });
}

function getInsertionIndex(list, y) {
  const afterElement = getDragAfterElement(list, y);
  const tasks = [...list.querySelectorAll(".task:not(.dragging)")];
  return afterElement == null ? tasks.length : tasks.indexOf(afterElement);
}

function applyDrop(list, event) {
  if (!dragState) return;

  const targetWeekIndex = Number(list.dataset.weekIndex);
  if (dragState.weekIndex !== targetWeekIndex) {
    dragState = null;
    renderWeeks();
    return;
  }

  const profile = getActiveProfile();
  const placements = [...getWeekPlacements(targetWeekIndex, profile)];
  const sourceIndex = placements.indexOf(dragState.taskId);
  const insertionIndex = getInsertionIndex(list, event.clientY);
  if (sourceIndex === -1) return;

  const [movedTask] = placements.splice(sourceIndex, 1);
  placements.splice(insertionIndex, 0, movedTask);
  profile.order[targetWeekIndex] = placements;
  saveState();
  dragState = null;
  renderWeeks();
  updateProgress();
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".task:not(.dragging)")];

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
  if (lowerWorkout.includes("half marathon")) return "Race";
  if (lowerWorkout.includes("miles") || lowerWorkout.includes("strides") || lowerWorkout.includes("steady")) {
    return "Run";
  }
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
  const profile = getActiveProfile();
  const editable = isProfileEditable(profile);
  const select = document.createElement("select");
  select.className = "choice-select";
  select.setAttribute("aria-label", `${type} choice`);
  select.disabled = !editable;
  const key = `${taskId}-${type}`;
  const legacyRecovery = type === "Flexibility" ? profile.recovery[taskId] : null;
  const selection = profile.choices[key] || legacyRecovery || defaultValue;

  options.forEach((optionLabel) => {
    const option = document.createElement("option");
    option.value = optionLabel;
    option.textContent = optionLabel;
    option.selected = selection === optionLabel;
    select.append(option);
  });

  select.addEventListener("click", (event) => event.stopPropagation());
  select.addEventListener("change", () => {
    if (!isProfileEditable(profile)) return;
    profile.choices[key] = select.value;
    if (type === "Flexibility") profile.recovery[taskId] = select.value;
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

function stripMileageText(workout) {
  return simplifyRunText(workout).replace(/^\d+(\.\d+)?\s*miles\s*/i, "").trim() || "easy";
}

function formatMiles(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function getTaskMiles(task, profile = getActiveProfile()) {
  if (!task.isRun) return 0;
  const saved = Number(profile.runMileage[task.id]);
  if (Number.isFinite(saved) && saved >= 0) return saved;
  return task.baseMiles;
}

function makeRunMileageControl(task) {
  const profile = getActiveProfile();
  const editable = isProfileEditable(profile);
  const wrap = document.createElement("span");
  wrap.className = "mileage-control";

  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.max = "20";
  input.step = "0.1";
  input.value = formatMiles(getTaskMiles(task, profile));
  input.setAttribute("aria-label", "Run mileage");
  input.disabled = !editable;

  const unit = document.createElement("span");
  unit.className = "mileage-unit";
  unit.textContent = "miles";

  const detail = document.createElement("span");
  detail.className = "mileage-detail";
  detail.textContent = stripMileageText(task.workout);

  input.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("change", () => {
    if (!isProfileEditable(profile)) return;
    const parsedValue = Number(input.value);
    const value = Math.max(0, Math.min(20, Number.isFinite(parsedValue) ? parsedValue : task.baseMiles));
    profile.runMileage[task.id] = Math.round(value * 10) / 10;
    if (task.isLongRun) profile.longRunMileage[task.id] = profile.runMileage[task.id];
    saveState();
    renderWeeks();
    updateProgress();
    renderLeaderboard();
  });

  wrap.append(input, unit, detail);
  return wrap;
}

function renderWorkout(task) {
  const fragment = document.createDocumentFragment();
  const { workout, id } = task;
  const hasStrength = workout.includes("Barry") || workout.includes("F45");
  const hasFlexibility = workout.includes("Pilates") || workout.toLowerCase().includes("flexibility");
  const theme = getTheme(workout);
  const hasRun = task.isRun || workout.includes("miles");
  const hasTwoExercises = (hasStrength && hasFlexibility) || (hasRun && hasFlexibility);

  if (theme === "Race" || theme === "Celebrate") {
    fragment.append(makeThemeLine(theme, workout));
    return fragment;
  }

  if (hasRun) {
    fragment.append(makeThemeLine(task.isLongRun ? "Long run" : "Run", makeRunMileageControl(task)));
  }

  if (hasStrength) {
    const strengthOptions = hasTwoExercises ? ["Barry's", "F45", "None"] : ["Barry's", "F45"];
    const strength = makeChoiceSelect(id, "Strength", strengthOptions, getStrengthDefault(workout));
    fragment.append(makeThemeLine("Strength", strength));
  }

  if (hasFlexibility) {
    const flexibilityOptions = hasTwoExercises
      ? ["Pilates", "Barre", "Yoga", "None"]
      : ["Pilates", "Barre", "Yoga"];
    const flexibility = makeChoiceSelect(id, "Flexibility", flexibilityOptions, "Pilates");
    fragment.append(makeThemeLine("Flexibility", flexibility, hasTwoExercises));
  }

  if (!hasRun && !hasStrength && !hasFlexibility) {
    fragment.append(makeThemeLine(theme, simplifyRunText(workout)));
  }

  return fragment;
}

function getWeekPlannedMiles(weekIndex, profile = getActiveProfile()) {
  return [...taskById.values()]
    .filter((task) => task.weekIndex === weekIndex && task.isRun)
    .reduce((total, task) => total + getTaskMiles(task, profile), 0);
}

function renderWeeks() {
  const profile = getActiveProfile();
  const editable = isProfileEditable(profile);
  weeksContainer.innerHTML = "";

  weeks.forEach((week, weekIndex) => {
    const article = document.createElement("article");
    article.className = "week-card";
    article.dataset.weekIndex = weekIndex;

    const header = document.createElement("div");
    header.className = "week-header";
    const badgeText = week.badge === "Race" ? "Race week" : `${formatMiles(getWeekPlannedMiles(weekIndex, profile))} miles`;
    header.innerHTML = `
      <div>
        <h3>${week.title}</h3>
        <p>${week.range} - ${week.focus}</p>
      </div>
      <span class="week-badge">${badgeText}</span>
    `;

    const list = document.createElement("div");
    list.className = "task-list";
    list.dataset.weekIndex = weekIndex;

    list.addEventListener("dragover", (event) => {
      if (dragState?.weekIndex === weekIndex) event.preventDefault();
    });

    list.addEventListener("drop", (event) => applyDrop(list, event));

    getOrderedTasks(weekIndex, profile).forEach((taskData, taskIndex) => {
      const task = document.createElement("article");
      task.className = "task";
      const theme = getTheme(taskData.workout);
      if (theme === "Race") task.classList.add("race-day");
      if (theme === "Celebrate") task.classList.add("celebration-day");
      task.draggable = editable;
      task.dataset.taskId = taskData.id;

      const grip = document.createElement("span");
      grip.className = "drag-grip";
      grip.setAttribute("aria-hidden", "true");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${profile.id}-${taskData.id}`;
      checkbox.checked = Boolean(profile.completed[taskData.id]);
      checkbox.disabled = !editable;

      checkbox.addEventListener("change", () => {
        if (!isProfileEditable(profile)) return;
        profile.completed[taskData.id] = checkbox.checked;
        task.classList.toggle("completed", checkbox.checked);
        saveState();
        updateProgress();
        renderLeaderboard();
      });

      const copy = document.createElement("div");
      const dayLabel = document.createElement("span");
      dayLabel.textContent = week.tasks[taskIndex]?.[0] || "Flex day";

      const workoutLabel = document.createElement("strong");
      workoutLabel.append(renderWorkout(taskData));

      copy.append(dayLabel, workoutLabel);

      task.addEventListener("dragstart", () => {
        if (!isProfileEditable(profile)) return;
        dragState = { taskId: taskData.id, weekIndex };
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

  syncWeekCarouselAfterRender();
}

function getProfileStats(profile) {
  const total = taskById.size;
  const completedTasks = [...taskById.values()].filter((task) => profile.completed[task.id]);
  const completed = completedTasks.length;
  const miles = completedTasks.reduce((sum, task) => sum + getTaskMiles(task, profile), 0);
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const score = Math.round((completed + miles) * 10) / 10;

  return { completed, total, percent, miles, score };
}

function updateProgress() {
  const profile = getActiveProfile();
  const stats = getProfileStats(profile);
  const editable = isProfileEditable(profile);

  completedCount.textContent = `${stats.completed} completed`;
  totalCount.textContent = `${stats.total} total`;
  progressPercent.textContent = `${stats.percent}%`;
  progressFill.style.width = `${stats.percent}%`;
  milesCount.textContent = formatMiles(stats.miles);
  scoreCount.textContent = formatMiles(stats.score);
  profileStatus.textContent = editable ? `${profile.name}'s report is active.` : `${profile.name}'s report is view-only here.`;
  deleteProfileButton.hidden = !canDeleteProfile(profile);
  resetButton.disabled = !editable;
  document.documentElement.style.setProperty("--ring-value", `${stats.percent}%`);
}

function renderProfileSelect() {
  profileSelect.innerHTML = "";

  Object.values(appState.profiles).forEach((profile) => {
    const option = document.createElement("option");
    option.value = profile.id;
    option.textContent = profile.name;
    option.selected = profile.id === appState.activeProfileId;
    profileSelect.append(option);
  });
}

function applyVisualTheme() {
  const profile = getActiveProfile();
  const visualTheme = visualThemeOptions.includes(profile.theme) ? profile.theme : "anime";
  document.body.dataset.theme = visualTheme;
  themeSelect.value = visualTheme;
}

function renderLeaderboard() {
  const leaderboardProfiles = Object.values(appState.profiles).filter((profile) => !googleSyncEnabled || profile.id !== "profile-you");
  const rows = leaderboardProfiles
    .map((profile) => ({ profile, stats: getProfileStats(profile) }))
    .sort((left, right) => {
      if (right.stats.score !== left.stats.score) return right.stats.score - left.stats.score;
      if (right.stats.miles !== left.stats.miles) return right.stats.miles - left.stats.miles;
      return right.stats.percent - left.stats.percent;
    });

  leaderboardRows.innerHTML = "";

  if (!rows.length) {
    const emptyRow = document.createElement("article");
    emptyRow.className = "leaderboard-row leaderboard-empty";
    emptyRow.innerHTML = `
      <span class="rank">-</span>
      <div>
        <h3>No synced athletes yet</h3>
        <p>Add yourself to start the leaderboard.</p>
      </div>
    `;
    leaderboardRows.append(emptyRow);
    return;
  }

  rows.forEach(({ profile, stats }, index) => {
    const row = document.createElement("article");
    row.className = "leaderboard-row";
    if (profile.id === appState.activeProfileId) row.classList.add("active-athlete");

    const rank = document.createElement("span");
    rank.className = "rank";
    rank.textContent = index + 1;

    const identity = document.createElement("div");
    const name = document.createElement("h3");
    name.textContent = profile.name;
    const completed = document.createElement("p");
    completed.textContent = `${stats.completed}/${stats.total} workouts`;
    identity.append(name, completed);

    const percent = document.createElement("span");
    percent.textContent = `${stats.percent}%`;

    const miles = document.createElement("span");
    miles.textContent = `${formatMiles(stats.miles)} mi`;

    const score = document.createElement("strong");
    score.textContent = formatMiles(stats.score);

    row.append(rank, identity, percent, miles, score);
    leaderboardRows.append(row);
  });
}

function setView(view) {
  appState.activeView = view;
  reportView.hidden = view !== "report";
  leaderboardView.hidden = view !== "leaderboard";
  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  saveState();

  if (view === "report") {
    requestAnimationFrame(() => scrollToWeek(appState.activeWeekIndex || 0, "auto", false));
  }
}

function refreshApp(options = {}) {
  Object.values(appState.profiles).forEach(normalizeProfile);
  renderProfileSelect();
  applyVisualTheme();
  renderWeeks();
  updateProgress();
  renderLeaderboard();
  setView(appState.activeView || "report");

  if (options.loadRemote !== false) refreshProfilesFromSheet();
}

profileSelect.addEventListener("change", () => {
  appState.activeProfileId = profileSelect.value;
  saveState();
  applyVisualTheme();
  renderWeeks();
  updateProgress();
  renderLeaderboard();
});

themeSelect.addEventListener("change", () => {
  const profile = getActiveProfile();
  profile.theme = visualThemeOptions.includes(themeSelect.value) ? themeSelect.value : "anime";
  saveState();
  applyVisualTheme();
  renderLeaderboard();
});

joinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = joinName.value.trim();
  if (!name) return;

  const profile = createProfile(name);
  appState.profiles[profile.id] = profile;
  appState.activeProfileId = profile.id;
  joinName.value = "";
  saveState();
  refreshApp();
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

prevWeekButton.addEventListener("click", () => {
  scrollToWeek((appState.activeWeekIndex || 0) - 1);
});

nextWeekButton.addEventListener("click", () => {
  scrollToWeek((appState.activeWeekIndex || 0) + 1);
});

weeksContainer.addEventListener("scroll", () => {
  if (carouselScrollFrame) return;
  carouselScrollFrame = requestAnimationFrame(updateActiveWeekFromScroll);
});

weeksContainer.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    scrollToWeek((appState.activeWeekIndex || 0) - 1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    scrollToWeek((appState.activeWeekIndex || 0) + 1);
  }
});

resetButton.addEventListener("click", () => {
  const profile = getActiveProfile();
  if (!isProfileEditable(profile)) return;
  if (!confirm(`Clear completed checkmarks, choices, run mileage edits, and moved boxes for ${profile.name}?`)) return;
  profile.order = {};
  profile.recovery = {};
  profile.choices = {};
  profile.completed = {};
  profile.runMileage = {};
  profile.longRunMileage = {};
  saveState();
  renderWeeks();
  updateProgress();
  renderLeaderboard();
});

deleteProfileButton.addEventListener("click", () => {
  const profile = getActiveProfile();
  if (!canDeleteProfile(profile)) return;
  if (!confirm(`Delete ${profile.name}'s leaderboard entry?`)) return;

  syncDeleteProfile(profile);
  delete appState.profiles[profile.id];
  const fallbackProfile = appState.profiles["profile-you"] || Object.values(appState.profiles)[0];
  appState.activeProfileId = fallbackProfile.id;
  saveState();
  refreshApp();
});

async function initializeApp() {
  await loadGoogleSheetWebAppUrl();
  refreshApp();
}

initializeApp();
