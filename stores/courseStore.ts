import { defineStore } from "pinia";

interface CourseState {
  currentCourseId: number | null;
  currentLevel: number;
  userResponses: Record<number, any>;
}

export const useCourseStore = defineStore("course", () => {
  const currentCourseId = ref<number | null>(null);
  const currentLevel = ref(0);
  const userResponses = ref<Record<number, any>>({});
  const maxLevel = ref(10);
  function setCurrentCourse(courseId: number) {
    currentCourseId.value = courseId;
    currentLevel.value = 0;
  }

  function nextLevel() {
    currentLevel.value += 1;
  }

  function saveResponse(level: number, response: any) {
    userResponses.value[level] = response;
  }

  return {
    currentCourseId,
    currentLevel,
    userResponses,
    setCurrentCourse,
    maxLevel,
    nextLevel,
    saveResponse,
  };
});
