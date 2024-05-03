const imagesPickerVisibilty = [
"Actor"
]

const AboutVisibilty = [
  "Actor",
  "InteriorDesign",
  "TVDirector"
]

const CanTravelVisibilty = [
  "Actor"
]

const ParagraphVisibilty = [
  "Scriptwriter",
  "DialectChecker",
  "PostProduction",
  "LightingPhotography",
  "TVDirector",
  "DesignBattlesStunts",
  "Music",
  "Sound",
  "Model",
  "VFXgraphics",
  "Production",
  "InteriorDesign"
]

const FileVisibilty = [
  "Scriptwriter",
  "LightingPhotography",
  "DesignBattlesStunts",
  "Model",
  "Production",
  "InteriorDesign"
]

export const checkVisibility = (category, type) =>{
  switch (type) {
    case "imagesPicker":
      return imagesPickerVisibilty.includes(category.parent)
    case "about":
      return AboutVisibilty.includes(category.parent)
    case "canTravel":
      return CanTravelVisibilty.includes(category.parent)
    case "paragraph":
      return ParagraphVisibilty.includes(category.parent)
    case "file":
      return FileVisibilty.includes(category.parent)
    default:
      return false
  }
}