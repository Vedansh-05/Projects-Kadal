import * as api from "../api";

// Action Creators
export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};