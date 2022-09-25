import { Modal, Button, Box, TextField, MenuItem } from '@mui/material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { FunctionComponent, useState } from 'react';
import "./NewPost.css";

export type newPostProps = {
    addPost: (data: any) => void
    handleCloseModal: () => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const blogCategories = [
    {
        value: 'Nature',
        label: 'Nature'
    },
    {
        value: 'Politics',
        label: 'Politics'
    }
  ]

export const NewPost: FunctionComponent<newPostProps> = ({addPost, handleCloseModal}:newPostProps) => {
    const [openPostCreation, setOpenPostCreation] = useState(true);
    const [data, setData] = useState<object>({});
    const [date, setDate] = useState<Dayjs | null>(null);

    return (
        <div>
            <Modal
            open={openPostCreation}
            onClose={handleCloseModal}
            aria-labelledby="new-post-title"
            aria-describedby="new-post-description"
            >
                <Box sx={style} className="ModalHeadLine">
                    New Post
                    <Box className='ModalContent'>
                        <TextField label="Title"></TextField>
                        {/* blog title textfield */}

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date"
                            value={date}
                            onChange={(newDate) => {
                            setDate(newDate);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider>
                        {/* date picker */}

                        <TextField
                        label="Author"></TextField>
                        {/* author name */}

                        <TextField
                        className='blogContentTextField'
                        label="Blog Content"
                        multiline
                        rows={4}
                        >
                        </TextField>
                        {/* blog content textfield */}

                        <TextField
                        id="outlined-select-currency"
                        select
                        label="Catecories"
                        helperText="Please select the catecory of your post"
                        >
                        {blogCategories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField><br />
                        {/* selecting the category of the post         */}

                        <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                        />
                        <label htmlFor="raised-button-file">
                        <Button component="span" >
                            Upload
                        </Button>
                        </label>
                        {/* uploading an image for the post */}

                    </Box>
                    <Button onClick={() => {handleCloseModal(); addPost(data);}}>+</Button>
                </Box>
            </Modal>
        </div>
    )
}
