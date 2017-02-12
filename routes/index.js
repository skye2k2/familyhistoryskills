exports.index = function(req, res){
  res.render("_index", { title: "Family History Skills Checklist" });
};

exports.reference = function(req, res){
  res.render("reference", { title: "Family History Skills Quick Reference" });
};
