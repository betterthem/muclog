module.exports = function(app, Admin)
{
  // 어드민 계정가입 API
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
  
  // 어드민 계정 데이터 API
  app.get('/api/admins', function(req, res) {
    Admin.find(function(err, data) {
      if(err) return res.status(500).send({err: 'database failure'});
      res.json(data);
    })
  });
  
}