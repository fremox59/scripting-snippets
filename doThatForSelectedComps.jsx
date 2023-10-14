// simple script to iteratively do something inside some selected comps in the project panel

var selection = app.project.selection;
app.beginUndoGroup("Create Green Background");
for (var i = 0; i < selection.length; i++) {
if (selection[i] instanceof CompItem){
  //do something in the selected comp (here we create a green solid as background for each comp);
  var solidLayer = selection[i].layers.addSolid([0, 1, 0], "Green Background", 1920, 1080, 1.0);
  solidLayer.moveToEnd();
}
}
app.endUndoGroup();
