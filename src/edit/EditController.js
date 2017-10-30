import React from 'react';

import NoteController from '../NoteController';
import EditPersonalInfo from './EditPersonalInfo';
import { RadarChartWithFirebaseController } from '../FireBaseChartController';

const EditController = ({
    data, 
    userKey, 
    firebase, 
    updatePerson, 
    addNote, 
    deleteNote, 
    updateNote,
    addGraphItem,
    deleteGraphItem,
    updateGraph
  }) => {

  return (
    <div style={{display: "flex"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <EditPersonalInfo
          id={userKey}
          data={data}
          updatePerson={updatePerson} />
        <RadarChartWithFirebaseController
          id={userKey}
          data={data.stats}
          firebase={firebase}
          firebasePath={"/users/" + userKey + "/stats/"}
          addGraphItem={addGraphItem}
          deleteGraphItem={deleteGraphItem}
          updateGraph={updateGraph} />
        <NoteController
          id={userKey}
          data={data.notes} 
          addNote={addNote}
          deleteNote={deleteNote}
          updateNote={updateNote} />
      </div>
    </div>
  );
}

export default EditController;