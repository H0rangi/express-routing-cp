function isWeekdayBusinessHours() {
    const now = new Date();
    const dayOfWeek = now.getDay(); 
    const hourOfDay = now.getHours();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 8 && hourOfDay < 17) {
      return true;
    } else {
      return false;
    }
  }
  
  async function checkWorkingHours(req, res, next) {
    try {
      const isBusinessHours = isWeekdayBusinessHours();
  
      if (!isBusinessHours) {
        return res.render("error");
      }
      next()
    } catch (error) {
      console.log(error);
    }
  }
  
  module.exports = checkWorkingHours;
  