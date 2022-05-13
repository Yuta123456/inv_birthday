import { Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import React, { useState, useEffect } from 'react';
import ja from 'date-fns/locale/ja'
export default function Home() {
  const [birthDay, setBirthDay] = useState("");
  // TODO: 今日の日付とかを適当に初期化して入れておく。
  const [value, setValue] = useState("hu May 12 2022 00:00:00 GMT+0900 (日本標準時)");
  return (
    <div className="ion-padding">
      <div>
        友達の誕生日を入力
      </div>
      <Button variant="contained" onClick={() => console.log(birthDay)}>Hello World</Button>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(newValue);
          }}
          inputFormat='yyyy年MM月dd日'
          mask='____年__月__日'
          renderInput={(params) => <TextField {...params} />}
        />
       </LocalizationProvider>
      <input onChange={(e) => setBirthDay(e.target.value)}></input>
      <button onClick={() => console.log(birthDay)}>submit</button>
      
    </div>
  )
}
