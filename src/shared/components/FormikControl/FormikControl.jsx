import { CustomInput, CustomTextArea, CustomEditable, CustomInputFile} from './index'

const FormikControl = ({control = 'input', ...rest}) => {
    switch (control) {
        case 'input':
            return <CustomInput {...rest}/>
        case 'textarea':
            return <CustomTextArea {...rest}/>
        case 'editable':
            return <CustomEditable {...rest}/>
        case 'file':
            return <CustomInputFile {...rest}/>
        // case 'radio':
        //     return <CustomRadio {...rest}/>
        default: return null
    }
}

export default FormikControl
