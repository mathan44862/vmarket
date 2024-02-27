import * as Yup  from 'yup'

const userLoginValidation=Yup.object({
    email : Yup.string().email("Please enter vlaid email").required("Required"),
    password : Yup.string().min(5).required("Required"),
    name : Yup.string().required("Required"),
    confirmpassword : Yup.string().required("Required"),
    contact : Yup.string().required("Required"),
})
export default userLoginValidation;