import ListItem from "../utils/listItems";
import teeChaAreas from "../../constants/TeeChaAreas";

const academics = ListItem(teeChaAreas.academics);
const fl = ListItem(teeChaAreas.fl);
const gs = ListItem(teeChaAreas.gs);

const teeChaAreasLists = {
  academics: academics, fl: fl, gs: gs
};

export default teeChaAreasLists;
