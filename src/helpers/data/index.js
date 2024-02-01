const options = [
  {
    value:"mobile",
    label:'talent.stepper.contactinfostep.inputs.communicationType.mobile'
  },
  {
    value:"email",
    label:'talent.stepper.contactinfostep.inputs.communicationType.email'
  },
  {
    value:"whatsapp",
    label:'talent.stepper.contactinfostep.inputs.communicationType.whatsapp'
  }
]

const studies = [
  {
    value:"ابتدائي",
    label:'talent.stepper.skillslanguagesstep.inputs.studies.primary'
  },
  {
    value:"متوسط",
    label:'talent.stepper.skillslanguagesstep.inputs.studies.middle'
  },
  {
    value:"ثانوي",
    label:'talent.stepper.skillslanguagesstep.inputs.studies.secondary'
  },
  {
    value:"دبلوم",
    label:'talent.stepper.skillslanguagesstep.inputs.studies.diploma'
  },
  {
    value:"بكالوريوس",
    label:'talent.stepper.skillslanguagesstep.inputs.studies.bachelor'
  },
  {
    value:"دراسات عليا",
    label:'talent.stepper.skillslanguagesstep.inputs.studies.postgraduate'
  },
  {
    value:"بدون",
    label:'talent.stepper.skillslanguagesstep.inputs.studies.without'
  }
]

const languages = [
  { value: 'عربي',
    label:'talent.stepper.skillslanguagesstep.inputs.languages.arabic'
  },
  { value: 'إنجليزي',
    label:'talent.stepper.skillslanguagesstep.inputs.languages.english'
  },
  { value: 'فرنسي',
    label:'talent.stepper.skillslanguagesstep.inputs.languages.french'
  },
  { value: 'إيطالي',
    label:'talent.stepper.skillslanguagesstep.inputs.languages.italian'
  },
  { value: 'إسباني',
    label:'talent.stepper.skillslanguagesstep.inputs.languages.spanish'
  }
];

const dialects = [
  { value: 'اللهجة السعودية',
    label:'talent.stepper.skillslanguagesstep.inputs.dialects.saudi'
  },
  { value: 'اللهجة الخليجية',
    label:'talent.stepper.skillslanguagesstep.inputs.dialects.gulf'
  },
  { value: 'اللهجة الحجازية الحضرية',
    label:'talent.stepper.skillslanguagesstep.inputs.dialects.urbanhijazi'
  },
  { value: 'اللهجة الحجازية البدوية',
    label:'talent.stepper.skillslanguagesstep.inputs.dialects.bedouinhijazi'
  },
  { value: 'اللهجة الجنوبية',
    label:'talent.stepper.skillslanguagesstep.inputs.dialects.southern'
  },
  {
    value: 'اللهجة التهامية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.tehama'
  },
  {
    value: 'اللهجة النجدية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.najdi'
  },
  {
    value: 'اللهجة الحضرية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.urban'
  },
  {
    value: 'اللهجة البدوية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.bedouin'
  },
  {
    value: 'اللهجة القصيمية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.qassimi'
  },
  {
    value: 'لهجة حوطه',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.hota'
  },
  {
    value: 'لهجة كوينه',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.quynh'
  },
  {
    value: 'اللهجة الشمالية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.northern'
  },
  {
    value: 'اللهجة الحساوية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.hasawi'
  },
  {
    value: 'اللهجة القطيفية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.qatifi'
  },
  {
    value: 'اللهجة القحطانية',
    label: 'talent.stepper.skillslanguagesstep.inputs.dialects.qahtani'
  }
];


const hairColors = [
  { value: 'أسود',
    label:'talent.stepper.bodyinfostep.inputs.haircolors.black'
  },
  { value: 'بني',
    label:'talent.stepper.bodyinfostep.inputs.haircolors.brown'
  },
  { value: 'بني فاتح',
    label:'talent.stepper.bodyinfostep.inputs.haircolors.lightbrown'
  },
  { value: 'أشقر',
    label:'talent.stepper.bodyinfostep.inputs.haircolors.blonde'
  },
  { value: 'رمادي',
    label:'talent.stepper.bodyinfostep.inputs.haircolors.grey'
  },
  { value: 'أحمر',
    label:'talent.stepper.bodyinfostep.inputs.haircolors.red'
  },
  { value: 'أبيض',
    label:'talent.stepper.bodyinfostep.inputs.haircolors.white'
  },
  { value: 'أصلع/محلوق',
    label:'talent.stepper.bodyinfostep.inputs.haircolors.shaved'
  }
];

const eyeColors = [
  { value: 'أسود',
    label:'talent.stepper.bodyinfostep.inputs.eyecolors.black'
  },
  { value: 'عسلي',
    label:'talent.stepper.bodyinfostep.inputs.eyecolors.hazelbrown'
  },
  { value: 'بندقي',
    label:'talent.stepper.bodyinfostep.inputs.eyecolors.hazelnut'
  },
  { value: 'أخضر',
    label:'talent.stepper.bodyinfostep.inputs.eyecolors.green'
  },
  { value: 'أزرق',
    label:'talent.stepper.bodyinfostep.inputs.eyecolors.blue'
  },
  { value: 'رمادي',
    label:'talent.stepper.bodyinfostep.inputs.eyecolors.grey'
  },
  { value: 'أخرى',
    label:'talent.stepper.bodyinfostep.inputs.eyecolors.other'
  }
];

const skinColors= [
  { value: 'أبيض',
    label:'talent.stepper.bodyinfostep.inputs.skincolors.white'
  },
  { value: 'أسمر',
    label:'talent.stepper.bodyinfostep.inputs.skincolors.brown'
  },
  { value: 'قمحي',
    label:'talent.stepper.bodyinfostep.inputs.skincolors.wheat'
  },
  { value: 'أخرى',
    label:'talent.stepper.bodyinfostep.inputs.skincolors.other'
  }
];

const bodyTypes= [
  { value: 'صغير',
    label:'talent.stepper.bodyinfostep.inputs.bodytypes.small'
  },
  { value: 'نحيل',
    label:'talent.stepper.bodyinfostep.inputs.bodytypes.skinny'
  },
  { value: 'رياضي',
    label:'talent.stepper.bodyinfostep.inputs.bodytypes.athletic'
  },
  { value: 'عادي',
    label:'talent.stepper.bodyinfostep.inputs.bodytypes.normal'
  },
  { value: 'ضخم',
    label:'talent.stepper.bodyinfostep.inputs.bodytypes.big'
  },
  { value: 'قليل من الوزن الزائد',
    label:'talent.stepper.bodyinfostep.inputs.bodytypes.fattish'
  }
];

const categories = [
  "Actor",
  "Scriptwriter",
  "Montage",
  "Photography",
  "TV Director",
  "Music",
  "Model",
  "VFX graphics",
  "Interior design",
  "Other"
]

const talents = [
  { value: 'التمثيل',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.0'
  },
  { value: 'كتابة',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.1'
  },
  { value: 'مساعد إنتاج',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.2'
  },
  { value: 'معد موسيقي',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.3'
  },
  { value: 'إخراج',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.4'
  },
  { value: 'موننير (محرر فيديو)',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.5'
  },
  { value: 'VFX جرافيكس',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.6'
  },
  { value: 'تصميم ديكور',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.7'
  },
  { value: 'تصميم أزياء',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.8'
  },
  { value: 'تصوير',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.9'
  },
  { value: 'مكياج',
    label:'talent.stepper.skillslanguagesstep.inputs.talents.10'
  }
];


const fieldsMandatoryCategoryStep = [
  "category"
]
const fieldsMandatoryPersonalStep = [
  "firstname",
  "fathername",
  "lastname",
  "gender",
  "relationship",
  "birthday",
  "nacionality",
  "country",
  "city"
]

const fieldsMandatoryContactStep = [
  "phonenumber",
  "phoneCode"
]

const fieldsMandatorySkillsStep = [
  "studies",
  "languages",
  "talents",
  "dialects"
]
const fieldsMandatoryBodyStep = [
  "haircolor",
  "eyecolor",
  "skincolor",
  "weight",
  "height",
  "bodytype"
]

const countries = 
[
    {
      "english_name": "Afghanistan",
      "arabic_name": "أفغانستان",
      "alpha2_code": "AF",
      "alpha3_code": "AFG",
      "phone_code": "93"
    },
    {
      "english_name": "Åland Islands",
      "arabic_name": "جزر أولاند",
      "alpha2_code": "AX",
      "alpha3_code": "ALA",
      "phone_code": "358"
    },
    {
      "english_name": "Albania",
      "arabic_name": "ألبانيا",
      "alpha2_code": "AL",
      "alpha3_code": "ALB",
      "phone_code": "355"
    },
    {
      "english_name": "Algeria",
      "arabic_name": "الجزائر",
      "alpha2_code": "DZ",
      "alpha3_code": "DZA",
      "phone_code": "213"
    },
    {
      "english_name": "American Samoa",
      "arabic_name": "ساموا الأمريكية",
      "alpha2_code": "AS",
      "alpha3_code": "ASM",
      "phone_code": "684"
    },
    {
      "english_name": "Andorra",
      "arabic_name": "أندورا",
      "alpha2_code": "AD",
      "alpha3_code": "AND",
      "phone_code": "376"
    },
    {
      "english_name": "Angola",
      "arabic_name": "أنغولا",
      "alpha2_code": "AO",
      "alpha3_code": "AGO",
      "phone_code": "244"
    },
    {
      "english_name": "Anguilla",
      "arabic_name": "أنغويلا",
      "alpha2_code": "AI",
      "alpha3_code": "AIA",
      "phone_code": "264"
    },
    {
      "english_name": "Antarctica",
      "arabic_name": "القارة القطبية الجنوبية",
      "alpha2_code": "AQ",
      "alpha3_code": "ATA",
      "phone_code": "672"
    },
    {
      "english_name": "Antigua and Barbuda",
      "arabic_name": "أنتيغوا وبربودا",
      "alpha2_code": "AG",
      "alpha3_code": "ATG",
      "phone_code": "268"
    },
    {
      "english_name": "Argentina",
      "arabic_name": "الأرجنتين",
      "alpha2_code": "AR",
      "alpha3_code": "ARG",
      "phone_code": "54"
    },
    {
      "english_name": "Armenia",
      "arabic_name": "أرمينيا",
      "alpha2_code": "AM",
      "alpha3_code": "ARM",
      "phone_code": "374"
    },
    {
      "english_name": "Aruba",
      "arabic_name": "أروبا",
      "alpha2_code": "AW",
      "alpha3_code": "ABW",
      "phone_code": "297"
    },
    {
      "english_name": "Australia",
      "arabic_name": "أستراليا",
      "alpha2_code": "AU",
      "alpha3_code": "AUS",
      "phone_code": "61"
    },
    {
      "english_name": "Austria",
      "arabic_name": "النمسا",
      "alpha2_code": "AT",
      "alpha3_code": "AUT",
      "phone_code": "43"
    },
    {
      "english_name": "Azerbaijan",
      "arabic_name": "أذربيجان",
      "alpha2_code": "AZ",
      "alpha3_code": "AZE",
      "phone_code": "994"
    },
    {
      "english_name": "Bahamas",
      "arabic_name": "باهاماس",
      "alpha2_code": "BS",
      "alpha3_code": "BHS",
      "phone_code": "1"
    },
    {
      "english_name": "Bahrain",
      "arabic_name": "البحرين",
      "alpha2_code": "BH",
      "alpha3_code": "BHR",
      "phone_code": "973"
    },
    {
      "english_name": "Bangladesh",
      "arabic_name": "بنغلاديش",
      "alpha2_code": "BD",
      "alpha3_code": "BGD",
      "phone_code": "880"
    },
    {
      "english_name": "Barbados",
      "arabic_name": "بربادوس",
      "alpha2_code": "BB",
      "alpha3_code": "BRB",
      "phone_code": "246"
    },
    {
      "english_name": "Belarus",
      "arabic_name": "بيلاروسيا",
      "alpha2_code": "BY",
      "alpha3_code": "BLR",
      "phone_code": "375"
    },
    {
      "english_name": "Belgium",
      "arabic_name": "بلجيكا",
      "alpha2_code": "BE",
      "alpha3_code": "BEL",
      "phone_code": "32"
    },
    {
      "english_name": "Belize",
      "arabic_name": "بليز",
      "alpha2_code": "BZ",
      "alpha3_code": "BLZ",
      "phone_code": "501"
    },
    {
      "english_name": "Benin",
      "arabic_name": "بنين",
      "alpha2_code": "BJ",
      "alpha3_code": "BEN",
      "phone_code": "229"
    },
    {
      "english_name": "Bermuda",
      "arabic_name": "برمودا",
      "alpha2_code": "BM",
      "alpha3_code": "BMU",
      "phone_code": "1"
    },
    {
      "english_name": "Bhutan",
      "arabic_name": "بوتان",
      "alpha2_code": "BT",
      "alpha3_code": "BTN",
      "phone_code": "975"
    },
    {
      "english_name": "Bolivia",
      "arabic_name": "بوليفيا",
      "alpha2_code": "BO",
      "alpha3_code": "BOL",
      "phone_code": "591"
    },
    {
      "english_name": "Bosnia and Herzegovina",
      "arabic_name": "البوسنة والهرسك",
      "alpha2_code": "BA",
      "alpha3_code": "BIH",
      "phone_code": "387"
    },
    {
      "english_name": "Botswana",
      "arabic_name": "بوتسوانا",
      "alpha2_code": "BW",
      "alpha3_code": "BWA",
      "phone_code": "267"
    },
    {
      "english_name": "Bouvet Island",
      "arabic_name": "جزيرة بوفيه",
      "alpha2_code": "BV",
      "alpha3_code": "BVT",
      "phone_code": "47"
    },
    {
      "english_name": "Brazil",
      "arabic_name": "البرازيل",
      "alpha2_code": "BR",
      "alpha3_code": "BRA",
      "phone_code": "55"
    },
    {
      "english_name": "British Indian Ocean Territory",
      "arabic_name": "إقليم المحيط الهندي البريطاني",
      "alpha2_code": "IO",
      "alpha3_code": "IOT",
      "phone_code": "246"
    },
    {
      "english_name": "British Virgin Islands",
      "arabic_name": "جزر العذراء البريطانية",
      "alpha2_code": "VG",
      "alpha3_code": "VGB",
      "phone_code": "1"
    },
    {
      "english_name": "Brunei",
      "arabic_name": "بروناي",
      "alpha2_code": "BN",
      "alpha3_code": "BRN",
      "phone_code": "673"
    },
    {
      "english_name": "Bulgaria",
      "arabic_name": "بلغاريا",
      "alpha2_code": "BG",
      "alpha3_code": "BGR",
      "phone_code": "359"
    },
    {
      "english_name": "Burkina Faso",
      "arabic_name": "بوركينا فاسو",
      "alpha2_code": "BF",
      "alpha3_code": "BFA",
      "phone_code": "226"
    },
    {
      "english_name": "Burundi",
      "arabic_name": "بوروندي",
      "alpha2_code": "BI",
      "alpha3_code": "BDI",
      "phone_code": "257"
    },
    {
      "english_name": "Cabo Verde",
      "arabic_name": "كابو فيردي",
      "alpha2_code": "CV",
      "alpha3_code": "CPV",
      "phone_code": "238"
    },
    {
      "english_name": "Cambodia",
      "arabic_name": "كمبوديا",
      "alpha2_code": "KH",
      "alpha3_code": "KHM",
      "phone_code": "855"
    },
    {
      "english_name": "Cameroon",
      "arabic_name": "الكاميرون",
      "alpha2_code": "CM",
      "alpha3_code": "CMR",
      "phone_code": "237"
    },
    {
      "english_name": "Canada",
      "arabic_name": "كندا",
      "alpha2_code": "CA",
      "alpha3_code": "CAN",
      "phone_code": "1"
    },
    {
      "english_name": "Caribbean Netherlands",
      "arabic_name": "الجزر الكاريبية الهولندية",
      "alpha2_code": "BQ",
      "alpha3_code": "BES",
      "phone_code": "599"
    },
    {
      "english_name": "Cayman Islands",
      "arabic_name": "جزر كايمان",
      "alpha2_code": "KY",
      "alpha3_code": "CYM",
      "phone_code": "1345"
    },
    {
      "english_name": "Central African Republic",
      "arabic_name": "جمهورية أفريقيا الوسطى",
      "alpha2_code": "CF",
      "alpha3_code": "CAF",
      "phone_code": "236"
    },
    {
      "english_name": "Chad",
      "arabic_name": "تشاد",
      "alpha2_code": "TD",
      "alpha3_code": "TCD",
      "phone_code": "235"
    },
    {
      "english_name": "Chile",
      "arabic_name": "تشيلي",
      "alpha2_code": "CL",
      "alpha3_code": "CHL",
      "phone_code": "56"
    },
    {
      "english_name": "China",
      "arabic_name": "الصين",
      "alpha2_code": "CN",
      "alpha3_code": "CHN",
      "phone_code": "86"
    },
    {
      "english_name": "Christmas Island",
      "arabic_name": "جزيرة الكريسماس",
      "alpha2_code": "CX",
      "alpha3_code": "CXR",
      "phone_code": "61"
    },
    {
      "english_name": "Cocos (Keeling) Islands",
      "arabic_name": "جزر كوكوس",
      "alpha2_code": "CC",
      "alpha3_code": "CCK",
      "phone_code": "61"
    },
    {
      "english_name": "Colombia",
      "arabic_name": "كولومبيا",
      "alpha2_code": "CO",
      "alpha3_code": "COL",
      "phone_code": "57"
    },
    {
      "english_name": "Comoros",
      "arabic_name": "جزر القمر",
      "alpha2_code": "KM",
      "alpha3_code": "COM",
      "phone_code": "269"
    },
    {
      "english_name": "Congo Republic",
      "arabic_name": "جمهورية الكونغو",
      "alpha2_code": "CG",
      "alpha3_code": "COG",
      "phone_code": "242"
    },
    {
      "english_name": "Cook Islands",
      "arabic_name": "جزر كوك",
      "alpha2_code": "CK",
      "alpha3_code": "COK",
      "phone_code": "682"
    },
    {
      "english_name": "Costa Rica",
      "arabic_name": "كوستاريكا",
      "alpha2_code": "CR",
      "alpha3_code": "CRI",
      "phone_code": "506"
    },
    {
      "english_name": "Croatia",
      "arabic_name": "كرواتيا",
      "alpha2_code": "HR",
      "alpha3_code": "HRV",
      "phone_code": "385"
    },
    {
      "english_name": "Cuba",
      "arabic_name": "كوبا",
      "alpha2_code": "CU",
      "alpha3_code": "CUB",
      "phone_code": "53"
    },
    {
      "english_name": "Curaçao",
      "arabic_name": "كوراساو",
      "alpha2_code": "CW",
      "alpha3_code": "CUW",
      "phone_code": "599"
    },
    {
      "english_name": "Cyprus",
      "arabic_name": "قبرص",
      "alpha2_code": "CY",
      "alpha3_code": "CYP",
      "phone_code": "357"
    },
    {
      "english_name": "Czechia",
      "arabic_name": "التشيك",
      "alpha2_code": "CZ",
      "alpha3_code": "CZE",
      "phone_code": "420"
    },
    {
      "english_name": "Denmark",
      "arabic_name": "الدنمارك",
      "alpha2_code": "DK",
      "alpha3_code": "DNK",
      "phone_code": "45"
    },
    {
      "english_name": "Djibouti",
      "arabic_name": "جيبوتي",
      "alpha2_code": "DJ",
      "alpha3_code": "DJI",
      "phone_code": "253"
    },
    {
      "english_name": "Dominica",
      "arabic_name": "دومينيكا",
      "alpha2_code": "DM",
      "alpha3_code": "DMA",
      "phone_code": "767"
    },
    {
      "english_name": "Dominican Republic",
      "arabic_name": "جمهورية الدومينيكان",
      "alpha2_code": "DO",
      "alpha3_code": "DOM",
      "phone_code": "1"
    },
    {
      "english_name": "DR Congo",
      "arabic_name": "جمهورية الكونغو الديمقراطية",
      "alpha2_code": "CD",
      "alpha3_code": "COD",
      "phone_code": "243"
    },
    {
      "english_name": "Ecuador",
      "arabic_name": "الاكوادور",
      "alpha2_code": "EC",
      "alpha3_code": "ECU",
      "phone_code": "593"
    },
    {
      "english_name": "Egypt",
      "arabic_name": "مصر",
      "alpha2_code": "EG",
      "alpha3_code": "EGY",
      "phone_code": "20"
    },
    {
      "english_name": "El Salvador",
      "arabic_name": "السلفادور",
      "alpha2_code": "SV",
      "alpha3_code": "SLV",
      "phone_code": "503"
    },
    {
      "english_name": "Equatorial Guinea",
      "arabic_name": "غينيا الاستوائية",
      "alpha2_code": "GQ",
      "alpha3_code": "GNQ",
      "phone_code": "240"
    },
    {
      "english_name": "Eritrea",
      "arabic_name": "إريتريا",
      "alpha2_code": "ER",
      "alpha3_code": "ERI",
      "phone_code": "291"
    },
    {
      "english_name": "Estonia",
      "arabic_name": "إستونيا",
      "alpha2_code": "EE",
      "alpha3_code": "EST",
      "phone_code": "372"
    },
    {
      "english_name": "Eswatini",
      "arabic_name": "إسواتيني",
      "alpha2_code": "SZ",
      "alpha3_code": "SWZ",
      "phone_code": "268"
    },
    {
      "english_name": "Ethiopia",
      "arabic_name": "إثيوبيا",
      "alpha2_code": "ET",
      "alpha3_code": "ETH",
      "phone_code": "251"
    },
    {
      "english_name": "Falkland Islands",
      "arabic_name": "جزر فوكلاند",
      "alpha2_code": "FK",
      "alpha3_code": "FLK",
      "phone_code": "500"
    },
    {
      "english_name": "Faroe Islands",
      "arabic_name": "جزر فارو",
      "alpha2_code": "FO",
      "alpha3_code": "FRO",
      "phone_code": "298"
    },
    {
      "english_name": "Fiji",
      "arabic_name": "فيجي",
      "alpha2_code": "FJ",
      "alpha3_code": "FJI",
      "phone_code": "679"
    },
    {
      "english_name": "Finland",
      "arabic_name": "فنلندا",
      "alpha2_code": "FI",
      "alpha3_code": "FIN",
      "phone_code": "358"
    },
    {
      "english_name": "France",
      "arabic_name": "فرنسا",
      "alpha2_code": "FR",
      "alpha3_code": "FRA",
      "phone_code": "33"
    },
    {
      "english_name": "French Guiana",
      "arabic_name": "غويانا الفرنسية",
      "alpha2_code": "GF",
      "alpha3_code": "GUF",
      "phone_code": "594"
    },
    {
      "english_name": "French Polynesia",
      "arabic_name": "بولينزيا الفرنسية",
      "alpha2_code": "PF",
      "alpha3_code": "PYF",
      "phone_code": "689"
    },
    {
      "english_name": "French Southern Territories",
      "arabic_name": "أراض فرنسية جنوبية",
      "alpha2_code": "TF",
      "alpha3_code": "ATF",
      "phone_code": "262"
    },
    {
      "english_name": "Gabon",
      "arabic_name": "الجابون",
      "alpha2_code": "GA",
      "alpha3_code": "GAB",
      "phone_code": "241"
    },
    {
      "english_name": "Gambia",
      "arabic_name": "غامبيا",
      "alpha2_code": "GM",
      "alpha3_code": "GMB",
      "phone_code": "220"
    },
    {
      "english_name": "Georgia",
      "arabic_name": "U+202Bجورجيا",
      "alpha2_code": "GE",
      "alpha3_code": "GEO",
      "phone_code": "995"
    },
    {
      "english_name": "Germany",
      "arabic_name": "ألمانيا",
      "alpha2_code": "DE",
      "alpha3_code": "DEU",
      "phone_code": "49"
    },
    {
      "english_name": "Ghana",
      "arabic_name": "غانا",
      "alpha2_code": "GH",
      "alpha3_code": "GHA",
      "phone_code": "233"
    },
    {
      "english_name": "Gibraltar",
      "arabic_name": "جبل طارق",
      "alpha2_code": "GI",
      "alpha3_code": "GIB",
      "phone_code": "350"
    },
    {
      "english_name": "Greece",
      "arabic_name": "اليونان",
      "alpha2_code": "GR",
      "alpha3_code": "GRC",
      "phone_code": "30"
    },
    {
      "english_name": "Greenland",
      "arabic_name": "جرينلاند",
      "alpha2_code": "GL",
      "alpha3_code": "GRL",
      "phone_code": "299"
    },
    {
      "english_name": "Grenada",
      "arabic_name": "غرينادا",
      "alpha2_code": "GD",
      "alpha3_code": "GRD",
      "phone_code": "473"
    },
    {
      "english_name": "Guadeloupe",
      "arabic_name": "غوادلوب",
      "alpha2_code": "GP",
      "alpha3_code": "GLP",
      "phone_code": "590"
    },
    {
      "english_name": "Guam",
      "arabic_name": "غوام",
      "alpha2_code": "GU",
      "alpha3_code": "GUM",
      "phone_code": "1"
    },
    {
      "english_name": "Guatemala",
      "arabic_name": "غواتيمالا",
      "alpha2_code": "GT",
      "alpha3_code": "GTM",
      "phone_code": "502"
    },
    {
      "english_name": "Guernsey",
      "arabic_name": "غيرنزي",
      "alpha2_code": "GG",
      "alpha3_code": "GGY",
      "phone_code": "44"
    },
    {
      "english_name": "Guinea",
      "arabic_name": "غينيا",
      "alpha2_code": "GN",
      "alpha3_code": "GIN",
      "phone_code": "224"
    },
    {
      "english_name": "Guinea-Bissau",
      "arabic_name": "غينيا بيساو",
      "alpha2_code": "GW",
      "alpha3_code": "GNB",
      "phone_code": "245"
    },
    {
      "english_name": "Guyana",
      "arabic_name": "غيانا",
      "alpha2_code": "GY",
      "alpha3_code": "GUY",
      "phone_code": "592"
    },
    {
      "english_name": "Haiti",
      "arabic_name": "هايتي",
      "alpha2_code": "HT",
      "alpha3_code": "HTI",
      "phone_code": "509"
    },
    {
      "english_name": "Heard Island and McDonald Islands",
      "arabic_name": "جزيرة هيرد وجزر ماكدونالد",
      "alpha2_code": "HM",
      "alpha3_code": "HMD",
      "phone_code": "672"
    },
    {
      "english_name": "Honduras",
      "arabic_name": "هندوراس",
      "alpha2_code": "HN",
      "alpha3_code": "HND",
      "phone_code": "504"
    },
    {
      "english_name": "Hong Kong",
      "arabic_name": "هونج كونج",
      "alpha2_code": "HK",
      "alpha3_code": "HKG",
      "phone_code": "852"
    },
    {
      "english_name": "Hungary",
      "arabic_name": "هنجاريا",
      "alpha2_code": "HU",
      "alpha3_code": "HUN",
      "phone_code": "36"
    },
    {
      "english_name": "Iceland",
      "arabic_name": "آيسلندا",
      "alpha2_code": "IS",
      "alpha3_code": "ISL",
      "phone_code": "354"
    },
    {
      "english_name": "India",
      "arabic_name": "الهند",
      "alpha2_code": "IN",
      "alpha3_code": "IND",
      "phone_code": "91"
    },
    {
      "english_name": "Indonesia",
      "arabic_name": "أندونيسيا",
      "alpha2_code": "ID",
      "alpha3_code": "IDN",
      "phone_code": "62"
    },
    {
      "english_name": "Iran",
      "arabic_name": "إيران",
      "alpha2_code": "IR",
      "alpha3_code": "IRN",
      "phone_code": "98"
    },
    {
      "english_name": "Iraq",
      "arabic_name": "العراق",
      "alpha2_code": "IQ",
      "alpha3_code": "IRQ",
      "phone_code": "964"
    },
    {
      "english_name": "Ireland",
      "arabic_name": "أيرلندا",
      "alpha2_code": "IE",
      "alpha3_code": "IRL",
      "phone_code": "353"
    },
    {
      "english_name": "Isle of Man",
      "arabic_name": "جزيرة مان",
      "alpha2_code": "IM",
      "alpha3_code": "IMN",
      "phone_code": "44"
    },
    {
      "english_name": "Italy",
      "arabic_name": "إيطاليا",
      "alpha2_code": "IT",
      "alpha3_code": "ITA",
      "phone_code": "390"
    },
    {
      "english_name": "Ivory Coast",
      "arabic_name": "ساحل العاج",
      "alpha2_code": "CI",
      "alpha3_code": "CIV",
      "phone_code": "225"
    },
    {
      "english_name": "Jamaica",
      "arabic_name": "جامايكا",
      "alpha2_code": "JM",
      "alpha3_code": "JAM",
      "phone_code": "1876"
    },
    {
      "english_name": "Japan",
      "arabic_name": "اليابان",
      "alpha2_code": "JP",
      "alpha3_code": "JPN",
      "phone_code": "81"
    },
    {
      "english_name": "Jersey",
      "arabic_name": "جيرسي",
      "alpha2_code": "JE",
      "alpha3_code": "JEY",
      "phone_code": "44"
    },
    {
      "english_name": "Jordan",
      "arabic_name": "الأردن",
      "alpha2_code": "JO",
      "alpha3_code": "JOR",
      "phone_code": "962"
    },
    {
      "english_name": "Kazakhstan",
      "arabic_name": "كازاخستان",
      "alpha2_code": "KZ",
      "alpha3_code": "KAZ",
      "phone_code": "7"
    },
    {
      "english_name": "Kenya",
      "arabic_name": "كينيا",
      "alpha2_code": "KE",
      "alpha3_code": "KEN",
      "phone_code": "254"
    },
    {
      "english_name": "Kiribati",
      "arabic_name": "كيريباتي",
      "alpha2_code": "KI",
      "alpha3_code": "KIR",
      "phone_code": "686"
    },
    {
      "english_name": "Kosovo",
      "arabic_name": "كوسوفو",
      "alpha2_code": "XK",
      "alpha3_code": "XKX",
      "phone_code": "383"
    },
    {
      "english_name": "Kuwait",
      "arabic_name": "الكويت",
      "alpha2_code": "KW",
      "alpha3_code": "KWT",
      "phone_code": "965"
    },
    {
      "english_name": "Kyrgyzstan",
      "arabic_name": "قيرغيزستان",
      "alpha2_code": "KG",
      "alpha3_code": "KGZ",
      "phone_code": "996"
    },
    {
      "english_name": "Laos",
      "arabic_name": "لاوس",
      "alpha2_code": "LA",
      "alpha3_code": "LAO",
      "phone_code": "856"
    },
    {
      "english_name": "Latvia",
      "arabic_name": "لاتفيا",
      "alpha2_code": "LV",
      "alpha3_code": "LVA",
      "phone_code": "371"
    },
    {
      "english_name": "Lebanon",
      "arabic_name": "لبنان",
      "alpha2_code": "LB",
      "alpha3_code": "LBN",
      "phone_code": "961"
    },
    {
      "english_name": "Lesotho",
      "arabic_name": "ليسوتو",
      "alpha2_code": "LS",
      "alpha3_code": "LSO",
      "phone_code": "266"
    },
    {
      "english_name": "Liberia",
      "arabic_name": "ليبيريا",
      "alpha2_code": "LR",
      "alpha3_code": "LBR",
      "phone_code": "231"
    },
    {
      "english_name": "Libya",
      "arabic_name": "ليبيا",
      "alpha2_code": "LY",
      "alpha3_code": "LBY",
      "phone_code": "218"
    },
    {
      "english_name": "Liechtenstein",
      "arabic_name": "ليختنشتاين",
      "alpha2_code": "LI",
      "alpha3_code": "LIE",
      "phone_code": "423"
    },
    {
      "english_name": "Lithuania",
      "arabic_name": "ليتوانيا",
      "alpha2_code": "LT",
      "alpha3_code": "LTU",
      "phone_code": "370"
    },
    {
      "english_name": "Luxembourg",
      "arabic_name": "لوكسمبورغ",
      "alpha2_code": "LU",
      "alpha3_code": "LUX",
      "phone_code": "352"
    },
    {
      "english_name": "Macao",
      "arabic_name": "ماكاو",
      "alpha2_code": "MO",
      "alpha3_code": "MAC",
      "phone_code": "853"
    },
    {
      "english_name": "Madagascar",
      "arabic_name": "مدغشقر",
      "alpha2_code": "MG",
      "alpha3_code": "MDG",
      "phone_code": "261"
    },
    {
      "english_name": "Malawi",
      "arabic_name": "مالاوي",
      "alpha2_code": "MW",
      "alpha3_code": "MWI",
      "phone_code": "265"
    },
    {
      "english_name": "Malaysia",
      "arabic_name": "ماليزيا",
      "alpha2_code": "MY",
      "alpha3_code": "MYS",
      "phone_code": "60"
    },
    {
      "english_name": "Maldives",
      "arabic_name": "المالديف",
      "alpha2_code": "MV",
      "alpha3_code": "MDV",
      "phone_code": "960"
    },
    {
      "english_name": "Mali",
      "arabic_name": "مالي",
      "alpha2_code": "ML",
      "alpha3_code": "MLI",
      "phone_code": "223"
    },
    {
      "english_name": "Malta",
      "arabic_name": "مالطا",
      "alpha2_code": "MT",
      "alpha3_code": "MLT",
      "phone_code": "356"
    },
    {
      "english_name": "Marshall Islands",
      "arabic_name": "جزر مارشال",
      "alpha2_code": "MH",
      "alpha3_code": "MHL",
      "phone_code": "692"
    },
    {
      "english_name": "Martinique",
      "arabic_name": "مارتينيك",
      "alpha2_code": "MQ",
      "alpha3_code": "MTQ",
      "phone_code": "33"
    },
    {
      "english_name": "Mauritania",
      "arabic_name": "موريتانيا",
      "alpha2_code": "MR",
      "alpha3_code": "MRT",
      "phone_code": "222"
    },
    {
      "english_name": "Mauritius",
      "arabic_name": "موريشيوس",
      "alpha2_code": "MU",
      "alpha3_code": "MUS",
      "phone_code": "230"
    },
    {
      "english_name": "Mayotte",
      "arabic_name": "مايوت",
      "alpha2_code": "YT",
      "alpha3_code": "MYT",
      "phone_code": "262"
    },
    {
      "english_name": "Mexico",
      "arabic_name": "المكسيك",
      "alpha2_code": "MX",
      "alpha3_code": "MEX",
      "phone_code": "52"
    },
    {
      "english_name": "Micronesia",
      "arabic_name": "ولايات ميكرونيسيا المتحدة",
      "alpha2_code": "FM",
      "alpha3_code": "FSM",
      "phone_code": "691"
    },
    {
      "english_name": "Moldova",
      "arabic_name": "مولدوفا",
      "alpha2_code": "MD",
      "alpha3_code": "MDA",
      "phone_code": "373"
    },
    {
      "english_name": "Monaco",
      "arabic_name": "موناكو",
      "alpha2_code": "MC",
      "alpha3_code": "MCO",
      "phone_code": "377"
    },
    {
      "english_name": "Mongolia",
      "arabic_name": "منغوليا",
      "alpha2_code": "MN",
      "alpha3_code": "MNG",
      "phone_code": "976"
    },
    {
      "english_name": "Montenegro",
      "arabic_name": "مونتينيغرو",
      "alpha2_code": "ME",
      "alpha3_code": "MNE",
      "phone_code": "382"
    },
    {
      "english_name": "Montserrat",
      "arabic_name": "مونتسرات",
      "alpha2_code": "MS",
      "alpha3_code": "MSR",
      "phone_code": "1664"
    },
    {
      "english_name": "Morocco",
      "arabic_name": "المغرب",
      "alpha2_code": "MA",
      "alpha3_code": "MAR",
      "phone_code": "212"
    },
    {
      "english_name": "Mozambique",
      "arabic_name": "موزمبيق",
      "alpha2_code": "MZ",
      "alpha3_code": "MOZ",
      "phone_code": "258"
    },
    {
      "english_name": "Myanmar",
      "arabic_name": "ميانمار",
      "alpha2_code": "MM",
      "alpha3_code": "MMR",
      "phone_code": "95"
    },
    {
      "english_name": "Namibia",
      "arabic_name": "ناميبيا",
      "alpha2_code": "NA",
      "alpha3_code": "NAM",
      "phone_code": "264"
    },
    {
      "english_name": "Nauru",
      "arabic_name": "ناورو",
      "alpha2_code": "NR",
      "alpha3_code": "NRU",
      "phone_code": "674"
    },
    {
      "english_name": "Nepal",
      "arabic_name": "نيبال",
      "alpha2_code": "NP",
      "alpha3_code": "NPL",
      "phone_code": "977"
    },
    {
      "english_name": "Netherlands",
      "arabic_name": "هولندا",
      "alpha2_code": "NL",
      "alpha3_code": "NLD",
      "phone_code": "31"
    },
    {
      "english_name": "Netherlands Antilles",
      "arabic_name": "جزر الأنتيل الهولندية",
      "alpha2_code": "AN",
      "alpha3_code": "ANT",
      "phone_code": "599"
    },
    {
      "english_name": "New Caledonia",
      "arabic_name": "كاليدونيا الجديدة",
      "alpha2_code": "NC",
      "alpha3_code": "NCL",
      "phone_code": "687"
    },
    {
      "english_name": "New Zealand",
      "arabic_name": "نيوزيلندا",
      "alpha2_code": "NZ",
      "alpha3_code": "NZL",
      "phone_code": "64"
    },
    {
      "english_name": "Nicaragua",
      "arabic_name": "نيكاراغوا",
      "alpha2_code": "NI",
      "alpha3_code": "NIC",
      "phone_code": "505"
    },
    {
      "english_name": "Niger",
      "arabic_name": "النيجر",
      "alpha2_code": "NE",
      "alpha3_code": "NER",
      "phone_code": "227"
    },
    {
      "english_name": "Nigeria",
      "arabic_name": "نيجيريا",
      "alpha2_code": "NG",
      "alpha3_code": "NGA",
      "phone_code": "234"
    },
    {
      "english_name": "Niue",
      "arabic_name": "نييوي",
      "alpha2_code": "NU",
      "alpha3_code": "NIU",
      "phone_code": "683"
    },
    {
      "english_name": "Norfolk Island",
      "arabic_name": "جزيرة نورفولك",
      "alpha2_code": "NF",
      "alpha3_code": "NFK",
      "phone_code": "6723"
    },
    {
      "english_name": "North Korea",
      "arabic_name": "كوريا الشمالية",
      "alpha2_code": "KP",
      "alpha3_code": "PRK",
      "phone_code": "850"
    },
    {
      "english_name": "North Macedonia",
      "arabic_name": "مقدونيا الشمالية",
      "alpha2_code": "MK",
      "alpha3_code": "MKD",
      "phone_code": "389"
    },
    {
      "english_name": "Northern Mariana Islands",
      "arabic_name": "جزر ماريانا الشمالية",
      "alpha2_code": "MP",
      "alpha3_code": "MNP",
      "phone_code": "1"
    },
    {
      "english_name": "Norway",
      "arabic_name": "النرويج",
      "alpha2_code": "NO",
      "alpha3_code": "NOR",
      "phone_code": "47"
    },
    {
      "english_name": "Oman",
      "arabic_name": "سلطنة عمان",
      "alpha2_code": "OM",
      "alpha3_code": "OMN",
      "phone_code": "968"
    },
    {
      "english_name": "Pakistan",
      "arabic_name": "باكستان",
      "alpha2_code": "PK",
      "alpha3_code": "PAK",
      "phone_code": "92"
    },
    {
      "english_name": "Palau",
      "arabic_name": "بالاو",
      "alpha2_code": "PW",
      "alpha3_code": "PLW",
      "phone_code": "680"
    },
    {
      "english_name": "Palestine",
      "arabic_name": "فلسطين",
      "alpha2_code": "PS",
      "alpha3_code": "PSE",
      "phone_code": "970"
    },
    {
      "english_name": "Panama",
      "arabic_name": "بنما",
      "alpha2_code": "PA",
      "alpha3_code": "PAN",
      "phone_code": "507"
    },
    {
      "english_name": "Papua New Guinea",
      "arabic_name": "بابوا غينيا الجديدة",
      "alpha2_code": "PG",
      "alpha3_code": "PNG",
      "phone_code": "675"
    },
    {
      "english_name": "Paraguay",
      "arabic_name": "باراغواي",
      "alpha2_code": "PY",
      "alpha3_code": "PRY",
      "phone_code": "595"
    },
    {
      "english_name": "Peru",
      "arabic_name": "بيرو",
      "alpha2_code": "PE",
      "alpha3_code": "PER",
      "phone_code": "51"
    },
    {
      "english_name": "Philippines",
      "arabic_name": "الفلبين",
      "alpha2_code": "PH",
      "alpha3_code": "PHL",
      "phone_code": "63"
    },
    {
      "english_name": "Pitcairn Islands",
      "arabic_name": "جزر بيتكيرن",
      "alpha2_code": "PN",
      "alpha3_code": "PCN",
      "phone_code": "672"
    },
    {
      "english_name": "Poland",
      "arabic_name": "بولندا",
      "alpha2_code": "PL",
      "alpha3_code": "POL",
      "phone_code": "48"
    },
    {
      "english_name": "Portugal",
      "arabic_name": "البرتغال",
      "alpha2_code": "PT",
      "alpha3_code": "PRT",
      "phone_code": "351"
    },
    {
      "english_name": "Puerto Rico",
      "arabic_name": "بورتوريكو",
      "alpha2_code": "PR",
      "alpha3_code": "PRI",
      "phone_code": "1787"
    },
    {
      "english_name": "Qatar",
      "arabic_name": "قطر",
      "alpha2_code": "QA",
      "alpha3_code": "QAT",
      "phone_code": "974"
    },
    {
      "english_name": "Réunion",
      "arabic_name": "ريونيون",
      "alpha2_code": "RE",
      "alpha3_code": "REU",
      "phone_code": "262"
    },
    {
      "english_name": "Romania",
      "arabic_name": "رومانيا",
      "alpha2_code": "RO",
      "alpha3_code": "ROU",
      "phone_code": "40"
    },
    {
      "english_name": "Russia",
      "arabic_name": "روسيا",
      "alpha2_code": "RU",
      "alpha3_code": "RUS",
      "phone_code": "7"
    },
    {
      "english_name": "Rwanda",
      "arabic_name": "رواندا",
      "alpha2_code": "RW",
      "alpha3_code": "RWA",
      "phone_code": "250"
    },
    {
      "english_name": "Saint Barthélemy",
      "arabic_name": "سان بارتيلمي",
      "alpha2_code": "BL",
      "alpha3_code": "BLM",
      "phone_code": "590"
    },
    {
      "english_name": "Saint Helena",
      "arabic_name": "سانت هيلينا",
      "alpha2_code": "SH",
      "alpha3_code": "SHN",
      "phone_code": "290"
    },
    {
      "english_name": "Saint Kitts and Nevis",
      "arabic_name": "سانت كيتس ونيفيس",
      "alpha2_code": "KN",
      "alpha3_code": "KNA",
      "phone_code": "1869"
    },
    {
      "english_name": "Saint Lucia",
      "arabic_name": "سانت لوسيا",
      "alpha2_code": "LC",
      "alpha3_code": "LCA",
      "phone_code": "1758"
    },
    {
      "english_name": "Saint Martin",
      "arabic_name": "سانت مارتن",
      "alpha2_code": "MF",
      "alpha3_code": "MAF",
      "phone_code": "590"
    },
    {
      "english_name": "Saint Pierre and Miquelon",
      "arabic_name": "سان بيير وميكلون",
      "alpha2_code": "PM",
      "alpha3_code": "SPM",
      "phone_code": "508"
    },
    {
      "english_name": "Saint Vincent and the Grenadines",
      "arabic_name": "سانت فينسنت والغرينادين",
      "alpha2_code": "VC",
      "alpha3_code": "VCT",
      "phone_code": "784"
    },
    {
      "english_name": "Samoa",
      "arabic_name": "ساموا",
      "alpha2_code": "WS",
      "alpha3_code": "WSM",
      "phone_code": "685"
    },
    {
      "english_name": "San Marino",
      "arabic_name": "سان مارينو",
      "alpha2_code": "SM",
      "alpha3_code": "SMR",
      "phone_code": "378"
    },
    {
      "english_name": "São Tomé and Príncipe",
      "arabic_name": "ساو تومي وبرينسيب",
      "alpha2_code": "ST",
      "alpha3_code": "STP",
      "phone_code": "239"
    },
    {
      "english_name": "Saudi Arabia",
      "arabic_name": "السعودية",
      "alpha2_code": "SA",
      "alpha3_code": "SAU",
      "phone_code": "966"
    },
    {
      "english_name": "Senegal",
      "arabic_name": "السنغال",
      "alpha2_code": "SN",
      "alpha3_code": "SEN",
      "phone_code": "221"
    },
    {
      "english_name": "Serbia",
      "arabic_name": "صربيا",
      "alpha2_code": "RS",
      "alpha3_code": "SRB",
      "phone_code": "381"
    },
    {
      "english_name": "Seychelles",
      "arabic_name": "سيشل",
      "alpha2_code": "SC",
      "alpha3_code": "SYC",
      "phone_code": "248"
    },
    {
      "english_name": "Sierra Leone",
      "arabic_name": "سيراليون",
      "alpha2_code": "SL",
      "alpha3_code": "SLE",
      "phone_code": "232"
    },
    {
      "english_name": "Singapore",
      "arabic_name": "سنغافورة",
      "alpha2_code": "SG",
      "alpha3_code": "SGP",
      "phone_code": "65"
    },
    {
      "english_name": "Sint Maarten",
      "arabic_name": "سينت مارتن",
      "alpha2_code": "SX",
      "alpha3_code": "SXM",
      "phone_code": "599"
    },
    {
      "english_name": "Slovakia",
      "arabic_name": "سلوفاكيا",
      "alpha2_code": "SK",
      "alpha3_code": "SVK",
      "phone_code": "421"
    },
    {
      "english_name": "Slovenia",
      "arabic_name": "سلوفينيا",
      "alpha2_code": "SI",
      "alpha3_code": "SVN",
      "phone_code": "386"
    },
    {
      "english_name": "Solomon Islands",
      "arabic_name": "جزر سليمان",
      "alpha2_code": "SB",
      "alpha3_code": "SLB",
      "phone_code": "677"
    },
    {
      "english_name": "Somalia",
      "arabic_name": "الصومال",
      "alpha2_code": "SO",
      "alpha3_code": "SOM",
      "phone_code": "252"
    },
    {
      "english_name": "South Africa",
      "arabic_name": "جنوب أفريقيا",
      "alpha2_code": "ZA",
      "alpha3_code": "ZAF",
      "phone_code": "27"
    },
    {
      "english_name": "South Georgia and South Sandwich Islands",
      "arabic_name": "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
      "alpha2_code": "GS",
      "alpha3_code": "SGS",
      "phone_code": "500"
    },
    {
      "english_name": "South Korea",
      "arabic_name": "كوريا الجنوبية",
      "alpha2_code": "KR",
      "alpha3_code": "KOR",
      "phone_code": "82"
    },
    {
      "english_name": "South Sudan",
      "arabic_name": "جنوب السودان",
      "alpha2_code": "SS",
      "alpha3_code": "SSD",
      "phone_code": "211"
    },
    {
      "english_name": "Spain",
      "arabic_name": "إسبانيا",
      "alpha2_code": "ES",
      "alpha3_code": "ESP",
      "phone_code": "34"
    },
    {
      "english_name": "Sri Lanka",
      "arabic_name": "سريلانكا",
      "alpha2_code": "LK",
      "alpha3_code": "LKA",
      "phone_code": "94"
    },
    {
      "english_name": "Sudan",
      "arabic_name": "السودان",
      "alpha2_code": "SD",
      "alpha3_code": "SDN",
      "phone_code": "249"
    },
    {
      "english_name": "Suriname",
      "arabic_name": "سورينام",
      "alpha2_code": "SR",
      "alpha3_code": "SUR",
      "phone_code": "597"
    },
    {
      "english_name": "Svalbard and Jan Mayen",
      "arabic_name": "سفالبارد ويان ماين",
      "alpha2_code": "SJ",
      "alpha3_code": "SJM",
      "phone_code": "47"
    },
    {
      "english_name": "Sweden",
      "arabic_name": "السويد",
      "alpha2_code": "SE",
      "alpha3_code": "SWE",
      "phone_code": "46"
    },
    {
      "english_name": "Switzerland",
      "arabic_name": "سويسرا",
      "alpha2_code": "CH",
      "alpha3_code": "CHE",
      "phone_code": "41"
    },
    {
      "english_name": "Syria",
      "arabic_name": "سوريا",
      "alpha2_code": "SY",
      "alpha3_code": "SYR",
      "phone_code": "963"
    },
    {
      "english_name": "Taiwan",
      "arabic_name": "تايوان",
      "alpha2_code": "TW",
      "alpha3_code": "TWN",
      "phone_code": "886"
    },
    {
      "english_name": "Tajikistan",
      "arabic_name": "طاجيكستان",
      "alpha2_code": "TJ",
      "alpha3_code": "TJK",
      "phone_code": "992"
    },
    {
      "english_name": "Tanzania",
      "arabic_name": "تنزانيا",
      "alpha2_code": "TZ",
      "alpha3_code": "TZA",
      "phone_code": "255"
    },
    {
      "english_name": "Thailand",
      "arabic_name": "تايلاند",
      "alpha2_code": "TH",
      "alpha3_code": "THA",
      "phone_code": "66"
    },
    {
      "english_name": "Timor-Leste",
      "arabic_name": "تيمور الشرقية",
      "alpha2_code": "TL",
      "alpha3_code": "TLS",
      "phone_code": "670"
    },
    {
      "english_name": "Togo",
      "arabic_name": "توجو",
      "alpha2_code": "TG",
      "alpha3_code": "TGO",
      "phone_code": "228"
    },
    {
      "english_name": "Tokelau",
      "arabic_name": "توكيلاو",
      "alpha2_code": "TK",
      "alpha3_code": "TKL",
      "phone_code": "690"
    },
    {
      "english_name": "Tonga",
      "arabic_name": "تونغا",
      "alpha2_code": "TO",
      "alpha3_code": "TON",
      "phone_code": "676"
    },
    {
      "english_name": "Trinidad and Tobago",
      "arabic_name": "ترينيداد وتوباغو",
      "alpha2_code": "TT",
      "alpha3_code": "TTO",
      "phone_code": "868"
    },
    {
      "english_name": "Tunisia",
      "arabic_name": "تونس",
      "alpha2_code": "TN",
      "alpha3_code": "TUN",
      "phone_code": "216"
    },
    {
      "english_name": "Turkey",
      "arabic_name": "تركيا",
      "alpha2_code": "TR",
      "alpha3_code": "TUR",
      "phone_code": "90"
    },
    {
      "english_name": "Turkmenistan",
      "arabic_name": "تركمانستان",
      "alpha2_code": "TM",
      "alpha3_code": "TKM",
      "phone_code": "993"
    },
    {
      "english_name": "Turks and Caicos Islands",
      "arabic_name": "جزر توركس وكايكوس",
      "alpha2_code": "TC",
      "alpha3_code": "TCA",
      "phone_code": "1"
    },
    {
      "english_name": "Tuvalu",
      "arabic_name": "توفالو",
      "alpha2_code": "TV",
      "alpha3_code": "TUV",
      "phone_code": "688"
    },
    {
      "english_name": "U.S. Minor Outlying Islands",
      "arabic_name": "جزر الولايات المتحدة الصغيرة النائية",
      "alpha2_code": "UM",
      "alpha3_code": "UMI",
      "phone_code": "246"
    },
    {
      "english_name": "U.S. Virgin Islands",
      "arabic_name": "جزر العذراء الأمريكية",
      "alpha2_code": "VI",
      "alpha3_code": "VIR",
      "phone_code": "1"
    },
    {
      "english_name": "Uganda",
      "arabic_name": "أوغندا",
      "alpha2_code": "UG",
      "alpha3_code": "UGA",
      "phone_code": "256"
    },
    {
      "english_name": "Ukraine",
      "arabic_name": "أوكرانيا",
      "alpha2_code": "UA",
      "alpha3_code": "UKR",
      "phone_code": "380"
    },
    {
      "english_name": "United Arab Emirates",
      "arabic_name": "الإمارات العربية المتحدة",
      "alpha2_code": "AE",
      "alpha3_code": "ARE",
      "phone_code": "971"
    },
    {
      "english_name": "United Kingdom",
      "arabic_name": "المملكة المتحدة",
      "alpha2_code": "GB",
      "alpha3_code": "GBR",
      "phone_code": "44"
    },
    {
      "english_name": "United States of America",
      "arabic_name": "الولايات المتحدة الأمريكية",
      "alpha2_code": "US",
      "alpha3_code": "USA",
      "phone_code": "1"
    },
    {
      "english_name": "Uruguay",
      "arabic_name": "أوروغواي",
      "alpha2_code": "UY",
      "alpha3_code": "URY",
      "phone_code": "598"
    },
    {
      "english_name": "Uzbekistan",
      "arabic_name": "أوزبكستان",
      "alpha2_code": "UZ",
      "alpha3_code": "UZB",
      "phone_code": "998"
    },
    {
      "english_name": "Vanuatu",
      "arabic_name": "فانواتو",
      "alpha2_code": "VU",
      "alpha3_code": "VUT",
      "phone_code": "678"
    },
    {
      "english_name": "Vatican City",
      "arabic_name": "مدينة الفاتيكان",
      "alpha2_code": "VA",
      "alpha3_code": "VAT",
      "phone_code": "379"
    },
    {
      "english_name": "Venezuela",
      "arabic_name": "فنزويلا",
      "alpha2_code": "VE",
      "alpha3_code": "VEN",
      "phone_code": "58"
    },
    {
      "english_name": "Vietnam",
      "arabic_name": "فيتنام",
      "alpha2_code": "VN",
      "alpha3_code": "VNM",
      "phone_code": "84"
    },
    {
      "english_name": "Wallis and Futuna",
      "arabic_name": "واليس وفوتونا",
      "alpha2_code": "WF",
      "alpha3_code": "WLF",
      "phone_code": "681"
    },
    {
      "english_name": "Western Sahara",
      "arabic_name": "الصحراء الغربية",
      "alpha2_code": "EH",
      "alpha3_code": "ESH",
      "phone_code": "212"
    },
    {
      "english_name": "Yemen",
      "arabic_name": "اليمن",
      "alpha2_code": "YE",
      "alpha3_code": "YEM",
      "phone_code": "967"
    },
    {
      "english_name": "Zambia",
      "arabic_name": "زامبيا",
      "alpha2_code": "ZM",
      "alpha3_code": "ZMB",
      "phone_code": "260"
    },
    {
      "english_name": "Zimbabwe",
      "arabic_name": "زيمبابوي",
      "alpha2_code": "ZW",
      "alpha3_code": "ZWE",
      "phone_code": "263"
    }
  ]

module.exports = {
  countries, options, studies, languages, talents,
  hairColors, eyeColors, skinColors, bodyTypes,
  dialects, categories, fieldsMandatoryPersonalStep,
  fieldsMandatoryContactStep, fieldsMandatorySkillsStep,
  fieldsMandatoryBodyStep, fieldsMandatoryCategoryStep
}