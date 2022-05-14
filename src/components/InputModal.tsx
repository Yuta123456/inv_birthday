import { SettingsPowerRounded } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box, Button, Input, Modal, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ja } from "date-fns/locale";
import { useState } from "react";

export default function InputModal(props) {
    const [birthDay, setBirthDay] = useState("hu May 12 2022 00:00:00 GMT+0900 (日本標準時)");
    const [friendName, setFriendName] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        props.setFriendName("");
        props.setInvBirthDay("");
    };
    const handleClose = () => {
        setOpen(false);
        setFriendName("");
    };
    return (
        <>
        <Button onClick={handleOpen}>計算する</Button>
        <Modal
            open={open}
            onClose={handleClose}
            // FIXME: ここでエラーが出る
            // children={<></>}
            >
                
            <Box sx={boxStyle}>
                <div style={inputForm}>
                    <Typography sx={{padding:"0 10px 0 0"}}>友達の名前：</Typography>
                    <Input onChange={(e) => {setFriendName(e.target.value)}}
                           inputProps={{maxLength:10}}
                    ></Input>
                </div>
                <div style={inputForm}>
                    <Typography sx={{flex: "1 1", padding:"0 10px 0 0"}}>
                        {friendName}の前回の誕生日を入力
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
                        <DatePicker
                            label={friendName+"の誕生日"}
                            value={birthDay}
                            onChange={(newValue) => {
                                setBirthDay(newValue);
                                console.log(newValue);
                                // console.log(typeof(newValue));
                            }}
                            inputFormat='yyyy年MM月dd日'
                            mask='____年__月__日'
                            renderInput={(params) => <TextField {...params} />}
                            DialogProps={{sx:datePickerStyle}}
                        />
                    </LocalizationProvider>
                </div>
                <div style={{textAlign:'right'}}>
                    <Button onClick={() => {handleClose();props.calcInvBirthDay(birthDay, friendName)}} >OK</Button>
                </div>
            </Box>
        </Modal>
        </>
    )
}

const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    width: "fit-content"
};
const inputForm = {
    display: "flex",
    margin: "15px 0px",
}

const datePickerStyle = {
    flex: "1 1 30%",
    margin: "10px",
}