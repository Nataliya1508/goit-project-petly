import * as yup from 'yup';
import moment from 'moment/moment'

const regexPrice = /(^[1-9])(\d*)$/
const regexAdress = /^(?:(?:\w+-\w+)+|(?:\w+)+),\s(?:(?:\w+-\w+)+|(?:\w+)+)$/
const regexTitle = /^(?!(?:.*?\d){3})(.+)$/u
const regexName = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/
const regexBreed = /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']
const FILE_SIZE = 1000000

const addNoticeSchema = yup.object().shape({
    categoryName: yup.string().oneOf(['lost-found', 'for-free', 'sell']).required("Required"),
    title: yup.string().min(2).max(48).matches(regexTitle, 'Can contain only two digits').required("Required"),
    name: yup.string().min(2).max(16).matches(regexName, 'Can only contain letters'),
    birthday: yup.date().min(moment("06021995", "DDMMYYYY"), 'Must be at later than 06.02.1995').max(moment(), `Must be at earlier than ${moment().add(1, 'days').format('DD.MM.YYYY')}`),
    breed: yup.string().min(2).max(24).matches(regexBreed, 'Can only contain letters'),
    sex: yup.string().oneOf(['male', 'female']).required("Required"),
    location: yup.string().matches(regexAdress, 'Must be in format City, Region').required("Required"),
    price: yup.string().when('categoryName', {
      is: 'sell',
      then: (schema) => schema.matches(regexPrice, 'Must be a positive integer number').required("Required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    photo: yup.mixed()
    .test(
      'fileSize',
      'Only documents up to 1MB are permitted',
      (value) => value === null || (value && value.size <= FILE_SIZE)
    )
    .test(
      'fileFormat',
      'Unsupported file type',
      (value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    ).nullable(),
    comments: yup.string().min(8).max(120).required("Required"),
});

export default addNoticeSchema
