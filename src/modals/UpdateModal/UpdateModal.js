import React from "react";
import {Box, Button, Modal, Typography} from "@mui/material";
import FormikContainer from "../../components/FormContainer/FormikContainer";
import {Form, Formik} from "formik";
import FormikControl from "../../components/FormContainer/FormikControl";
import * as Yup from "yup";
import {string} from "yup";


const UpdateModal= (props) => {
    const {open, onClose, post, updatePost} = props;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    let initialValue = {
        title: post.title,
        description: post.description,
        date: post.date,
    };

    const onSubmit = (values, onSubmitProps) => {
        let date;

        if (values.date !== post.date) {
            let month = values.date?.getUTCMonth() + 1;
            let day = values.date?.getUTCDate() + 1;
            let year = values.date?.getUTCFullYear();

            date = `${month}/${day}/${year}`;
        }

        updatePost({
            ...post,
            date: date || post.date,
            description: values.description,
            title: values.title,
        });

        onClose();
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        date: Yup.date().required("Required").nullable(),
    });



    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={[style, (theme) => ({
                [theme.breakpoints.down('sm')]: {
                    width: 'auto'

                },
            })]}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {"Task"}
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    <Formik enableReinitialize initialValues={initialValue} onSubmit={onSubmit}
                            validationSchema={validationSchema}>
                        {
                            (formik) => {
                                return (
                                    <Form autoComplete="off">
                                        <FormikContainer/>
                                        <Box mt={3}>
                                            <Button type="submit" variant="contained" >{"Submit"}</Button>
                                        </Box>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </Typography>
            </Box>
        </Modal>
    )
}

export default UpdateModal