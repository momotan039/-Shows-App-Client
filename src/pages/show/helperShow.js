import { appendShowToUserShows, removeShowFromUserShows } from "../../api/shows";
import { addFavoriteShow, addViewedShow, addWatchLaterShow, removeFavoriteShow, removeViewedShow, removeWatchLaterShow } from "../../redux/actions/accountActions";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";
import store from "../../redux/store";
import { showExpiredSessionDialog } from "../../utils/dialogs";

export const findShowInUserShows = (user,list) => {
    const {show}=store.getState().show
    return user[list].find((f) => f.id === show?.id) ? true : false;
  };

 const toggle = async (state = {}, listApi, rmListShow, addListShow) => {
    const {show}=store.getState().show
    store.dispatch(showLoader())
    try {
      if (state.value) {
        await removeShowFromUserShows(show.id, listApi);
        store.dispatch(rmListShow(show.id));
      } else {
        await appendShowToUserShows(show, listApi);
        store.dispatch(addListShow(show));
      }
      state.set(!state.value);
    } catch (error) {
      showExpiredSessionDialog(error)
    }
    store.dispatch(hideLoader())
};
export const toggleFavorite = async (favorite,state) => {
  toggle(
    { value: favorite, set: state },
    "favorite",
    removeFavoriteShow,
    addFavoriteShow
  );
};
export const toggleWatchLater = async (watchLater,state) => {
  toggle(
    { value: watchLater, set: state },
    "watch-later",
    removeWatchLaterShow,
    addWatchLaterShow
  );
};

export const toggleViewed = async (viewed,state) => {
  toggle(
    { value: viewed, set: state },
    "viewd",
    removeViewedShow,
    addViewedShow
  );
};