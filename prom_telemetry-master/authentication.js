 function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()) {
        return next()
    }
  if(req.query.page == "login"){

  }
  else{
    res.redirect('/login')

  }

}

 function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}
module.exports = {checkAuthenticated, checkNotAuthenticated};
