module.exports = function(app, Admin)
{
  app.post('/api/register', function(req, res) {
    var admin = new Admin();
    admin.admin_id = req.body.admin_id;
    admin.admin_pw = req.body.admin_pw;
    admin.admin_name = req.body.admin_name;
    
    admin.save(function(err){
      if(err){
        console.error(err);
        res.json({result: 0});
        return;
      }
      res.json({result: 1});
    })
  });
}