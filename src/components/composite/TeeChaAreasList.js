import ListItem from "../basic/ListItems";
import teeChaAreas from "../../constants/TeeChaAreas";

const academics = ListItem(teeChaAreas.academics);
const fl = ListItem(teeChaAreas.fl);
const gs = ListItem(teeChaAreas.gs);

const teeChaAreasLists = {
  academics: academics, fl: fl, gs: gs
};

export default teeChaAreasLists;
