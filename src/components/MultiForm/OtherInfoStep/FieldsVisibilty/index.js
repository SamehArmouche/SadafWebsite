const imagesPickerVisibilty = [
"Actor"
]

const AboutVisibilty = [
  "Actor",
  "InteriorDesign",
  "TVDirector"
]

export const checkVisibility = (category, type) =>{
  switch (type) {
    case "imagesPicker":
      return imagesPickerVisibilty.includes(category.key)
    case "about":
      return AboutVisibilty.includes(category.key)
    default:
      return false
  }
}