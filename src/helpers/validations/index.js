const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateField = (form ,value)=>{
  if(form[value]!==undefined){
    if(value==='email')
      return !validateEmail(form[value]);
    return !form[value]?.length>0
  }
}

module.exports = {validateEmail, validateField}