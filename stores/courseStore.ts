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
  const maxLevel = computed(() => {
    return 10;
  });
  const setCurrentCourse = (courseId: number) => {
    if (currentLevel.value > 0 && courseId > 0) {
      currentCourseId.value = courseId;
      currentLevel.value = 0;
    }
  };

  const backLevel = () => {
    if (currentLevel.value > 0) {
      currentLevel.value -= 1;
    }
  };
  const nextLevel = (): void => {
    currentLevel.value += 1;
  };
  const selectLevel = (level: number): void => {
    currentLevel.value = level;
  };
  const saveResponse = (level: number, response: any): void => {
    userResponses.value[level] = response;
  };

  return {
    currentCourseId,
    currentLevel,
    userResponses,
    setCurrentCourse,
    maxLevel,
    backLevel,
    nextLevel,
    selectLevel,
    saveResponse,
  };
});
