import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const defaultTags = [
    { label: 'Call for designers',  selected: false},
    { label: 'Call for developers', selected: false },
    { label: 'Call for translators', selected: false },
    { label: 'Call for drivers', selected: false },
    { label: 'Call for writers', selected: false },

];

const DottedChip = withStyles({
  root: {
    border: "1px dashed",
  },
})(Chip);

export default function Tags() {
  const classes = useStyles();
  const [tags, setTags] = useState(defaultTags);
  const selectTag = (i) => {
    tags[i].selected = !tags[i].selected;
    setTags([...tags]);
  };
  return (
    <div className={classes.root}>
      {tags.map(({ label, color, selected }, i) => (
        <Chip
          key={i}
          variant="outlined"
          size="small"
          label={label}
          clickable
          style={{
            background: selected ? "salmon" : "white",
            fontFamily: "'Baloo 2', cursive",
          }}
          onClick={() => selectTag(i)}
        />
      ))}
      <DottedChip
        icon={<AddCircleIcon />}
        size="small"
        label="Add a new tag"
        clickable
        style={{ background: "white", fontFamily: "'Baloo 2', cursive" }}
      />
    </div>
  );
}
