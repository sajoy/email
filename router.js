EmailEtc.Router.map(function() {

  this.resource("folders", {path: '/'}),
  this.resource("folder", {path: '/:folder_id'})

});
