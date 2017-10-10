/**
 * @description Creates initial state for table controls
 * @property { object }  modalBoxesIsOpenState - List of modal boxes, if true - mount
 *                                               appropriate modal box to the page
 * @property { boolean } fetchingAPI             - If true, inform that data is being fetched
 * @property { boolean } resSuccess            - If true, inform that operation has succeed
 */

const initialState = {
  fetchingAPI: false,
  resSuccess: null
};

export default function employeesTableControls(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
