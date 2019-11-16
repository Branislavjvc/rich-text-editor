var showingSourceCode = false;
var isInEditMode = true;

function enableEditMode () {
    richTextField.document.designMode = 'On';
}

function execCmd (command) {
    richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg (command, arg) {
    richTextField.document.execCommand(command, false, arg);
}