const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateNumber = (number) => {
  return String(number)
    .toLowerCase()
    .match(
      /^\d*\.?\d*$/
    );
};

const validatePhoneNumber = (number) => {
  return String(number)
    .toLowerCase()
    .match(
      /^\d+$/
    );
};


const validateField = (form ,value, type)=>{
  if(form[value]!==undefined){
    if(value==='email')
      return !validateEmail(form[value]);
    return !form[value]?.length>0
  }
}

const validateOneField = (value, type)=>{
  if(value!==undefined){
    if(value==='email')
      return !validateEmail(value);
    return !value.length>0
  }
}

const validateSizeFile = (file) => {
  const MAX_FILE_SIZE = 1120 // 5MB
  const fileSizeKiloBytes = file.size / 1024
  return fileSizeKiloBytes < MAX_FILE_SIZE
};

const validateExtensionFile = (ext, type) => {
  if(type==='images')
    return ['.jpg','.jpeg','.png'].filter(i => i===ext ).length>0;
  if(type==='file')
    return [".pdf",".pptx",".ppt",".xlsx",".xls",".docx",".doc",".txt"].filter(i => i===ext ).length>0;
  return false
};

module.exports = {validateEmail, validateField,validateNumber,validatePhoneNumber, validateSizeFile, validateOneField, validateExtensionFile}