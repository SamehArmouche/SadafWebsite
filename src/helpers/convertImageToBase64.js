async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result.replace(/^.*,/, ''));
    }
    reader.onerror = reject
  })
}

export default async function convertImageToBase64(target: any) {
  return await getBase64(target.files[0]).catch(err=> {return;})
};
