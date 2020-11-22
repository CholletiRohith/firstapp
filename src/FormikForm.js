import React from 'react';
import { useformik } from 'formik';

const FormikForm = () => {
    // Notice that we have to initialize ALL of fields with values. These
    // could come from props, but since we don't want to prefill this form,
    // we just use an empty string. If you don't do this, React will yell
    // at you.
    const formikform = useformik({
        initialValues:
        {
            firstname:"",
            lastname:''
        },
        onSubmit: values =>{
            alert(JSON.stringify(values, null,2));
        },
    });

}