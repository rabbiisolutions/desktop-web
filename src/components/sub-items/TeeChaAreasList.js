import ListItem from "../utils/listItems";
import teeChaAreas from "../../constants/teeChaAreas";

const academics = ListItem(teeChaAreas.academics);
const thi = ListItem(teeChaAreas.thi);
const technology = ListItem(teeChaAreas.technology);
const languages = ListItem(teeChaAreas.languages);
const counselling = ListItem(teeChaAreas.counselling);
const sports = ListItem(teeChaAreas.sports);
const university = ListItem(teeChaAreas.university);

const teeChaAreasLists = {
  academics: academics, thi: thi, technology: technology, languages: languages,
  counselling: counselling, sports: sports, university: university
};

export default teeChaAreasLists;
