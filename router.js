EmailEtc.Router.map(function() {

  this.resource("folders", {path: '/'}, function() {
    this.resource("folder", {path: '/:folder_id'}),
    this.resource("newEmail"),
    this.resource("emails")
  });

});
