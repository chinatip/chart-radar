export class UndoRedo {
  constructor() {
    this._actions = []
  }
  doCommand(command) {
    this._actions.push(command)
    command.do()
  }
  undo() {
    const command = this._actions.pop()
    if (command) {
      command.undo()
    }
  }
}