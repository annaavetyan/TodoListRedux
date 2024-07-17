import React from "react";
import {Box, Typography} from "@mui/material";


const TodoItem = (props) => {
    const {post} = props;
    const style = (theme) => ({color: theme.palette.primary.contrastText})
    const todoTitle = {
        fontSize: 14,
        marginRight: '10px',
    }
    return (
        <>
            <Box mb={2}>
                <Typography variant='h6' component="h6" mb={0} sx={style}>
                    {'Title'}
                </Typography>
                <Box className="todoTitle" sx={[style, todoTitle]}>{post.title}</Box>
            </Box>
            <Box mb={2}>
                <Typography variant='h6' component="h6" mb={0} sx={style}>
                    {'Description'}
                </Typography>
                <Box className="todoTitle" sx={[style, todoTitle]}>{post.description}</Box>
            </Box>
            <Box mb={2}>
                <Typography variant='h6' component="h6" mb={0} sx={style}>
                    {'Deadline'}
                </Typography>
                <Box component="span" sx={[style, todoTitle]}>{post.date}</Box>
            </Box>
        </>
    )
}

export default TodoItem