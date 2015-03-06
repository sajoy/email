EmailEtc.Email = DS.Model.extend({
  to: DS.attr(),
  from: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  folder: DS.belongsTo('folder', {embedded: 'always'})
});
