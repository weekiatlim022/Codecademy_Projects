const getSleepHours = day => {
    if (day === 'monday'){
      return 8;
    }else if (day === 'tuesday'){
      return 8;
    }else if (day === 'wednesday'){
      return 8;
    }else if (day === 'thursday'){
      return 8;
    }else if (day === 'friday'){
      return 8;
    }else if (day === 'saturday'){
      return 9;
    }else if (day === 'sunday'){
      return 9;
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 10;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep.');
    }else if (actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed');
    }else{
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  }
  
  calculateSleepDebt();