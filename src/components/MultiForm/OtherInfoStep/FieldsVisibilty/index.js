const imagesPickerVisibilty = [
"Actor"
]

const AboutVisibilty = [
  "Actor",
  "Interior design",
  "TV Director"
]

export const checkVisibility = (category, type) =>{
  switch (type) {
    case "imagesPicker":
      return imagesPickerVisibilty.includes(category)
    case "about":
      return AboutVisibilty.includes(category)
    default:
      return false
  }
}