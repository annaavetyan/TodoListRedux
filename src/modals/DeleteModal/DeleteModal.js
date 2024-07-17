import React from "react";
import {Box, Button, Modal, Typography} from "@mui/material";


type DeleteModalProps = {
    open: boolean;
    onClose: () => void;
    deletePost: (post: any) => void; // Adjust `post` type as per your actual post type
    post: any; // Adjust `post` type as per your actual post type
};

const DeleteModal: React.FC<DeleteModalProps> = (props) => {
    const {open, onClose, deletePost, post} = props;

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




    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={[style, (theme) => ({
                [theme.breakpoints.down('sm')]: {
                    width: 'auto'
                },
            })]}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {"Task"}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {"Are you sure you want to delete the task?"}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" mt={5}>
                    <Box mr={2}>
                        <Button variant="contained" onClick={() => deletePost(post)}>{"Yes"}</Button>
                    </Box>
                    <Button variant="outlined" onClick={onClose}>{"No"}</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default DeleteModal