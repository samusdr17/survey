import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import { useState } from "react";
import VerticalBar from "../Chart/chart";

export default function TableRowComponent(props) {
  const [state, setState] = useState(props.item);

  const [detail, setDetail] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setDetail(!detail);
  }

  const date = 'Date & time: ' + props.item.published_at;
  const dateResult = date.slice(0, 32)
  // for (let i = 0; i > date.length; i++){
  //   if(date[i] != date[10]){
  //     dateResult += valueOf(date[i]);
  //     console.log(date[i].value)
  //   }else
  //   break;
  // }


  return (
    <div>
      <TableRow>
        <TableCell width={240}>{props.item.url.replace('/',' ').replace('/',' ').replace('s ', ' ')}</TableCell>
        <TableCell width={960}>
          <p className="question" onClick={handleClick}>
            {!detail ? (
              props.item.question
            ) : (
              <div>
                <Button size="large" color="primary" onClick={handleClick}>
                  CLOSE DETAIL
                </Button>
                <VerticalBar
                  key={state.index}
                  index={state.index}
                  item={props.item}
                  stateTRC={state}
                  question={props.question}
                  choices={props.choices}
                  survey={props.survey}
                  choiceState={props.choiceState}
                  votesState={props.votesState}
                ></VerticalBar>
              </div>
            )}
          </p>
        </TableCell>
        <TableCell width={240}>
          <p>{dateResult.replace('-','/').replace('-','/').replace('T',' ').replace('.', ' ')}</p>
        </TableCell>
      </TableRow>
    </div>
  );
}
