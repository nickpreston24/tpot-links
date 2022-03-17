import { ref, onMounted, computed, toRefs } from "vue";
import { countEmpty, devmode, groupBy, isArray } from "../helpers";
import { getRecords, create } from "./neo";

const initialPage = {
  Title: "",
  Url: "",
};

export function usePages() {
  const pages = ref([]);
  const loading = ref(true);
  const error = ref(null);

  onMounted(async () => {
    loading.value = true;
    pages.value = await getRecords("Page", 10).catch((err) => {
      console.log("err", err);
      return (error.value = err);
    });
    devmode && console.log("pages", pages);
    loading.value = false;
  });

  const createPage = async (props = {}) => {
    devmode && console.log("props", props);
    const page = await create("Page", { ...props }).catch((err) => {
      console.log("err", err);
      return (error.value = err);
    });
    devmode && console.log("pages", page);
  };

  return {
    pages,
    loading,
    error,

    //api
    createPage,
  };
}

export default usePages;
