export const updatePersonalInfo = (firebase, id, item) => {
  return {
    do: () => {
      firebase.update('/users/' + id, item)
    }
  }
}

export const addNote = (firebase, id, item) => {
  return {
    do: () => {
      firebase.push('/users/' + id + '/notes', item)
    }
  }
}

export const deleteNote = (firebase, id, noteID) => {
  return {
    do: () => {
      firebase.remove('/users/' + id + '/notes/' + noteID)
    }
  }
}

export const updateNote = (firebase, id, noteID, item) => {
  return {
    do: () => {
      firebase.update('/users/' + id + '/notes/' + noteID, item)
    }
  }
}

export const addGraphItem = (firebase, id, item) => {
  return {
    do: () => {
      firebase.push('/users/' + id + '/stats', item)
    }
  }
}

export const deleteGraphItem = (firebase, id, itemID) => {
  return {
    do: () => {
      firebase.remove('/users/' + id + '/stats/' + itemID)
    }
  }
}

export const updateGraph = (firebase, id, itemID, item) => {
  return {
    do: () => {
      firebase.update('/users/' + id + '/stats/' + itemID, item)
    }
  }
}