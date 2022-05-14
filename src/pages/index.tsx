import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import ja from 'date-fns/locale/ja'
import InputModal from '../components/InputModal';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
export default function Home() {
  const [invBirthDay, setInvBirthDay] = useState(null);
  const [friendName, setFriendName] = useState("");
  const calcInvBirthDay = (date: number, name) => {
    // 逆誕生日を計算
    const d = new Date(date);
    console.log(
      format(d, 'dd MMMM yyyy', { locale: ja }), name
    );
    const tInvBirthDay = addDays(d, 182);
    console.log(tInvBirthDay);
    setFriendName(name);
    setInvBirthDay(tInvBirthDay);
  };
  return (
    <Container>
      <Typography>
        友達の逆誕生日を計算してみよう！
      </Typography>
      <InputModal calcInvBirthDay={calcInvBirthDay}
                  setInvBirthDay={setInvBirthDay}
                  setFriendName={setFriendName}
                  ></InputModal>
      {invBirthDay && <Typography>
        {friendName}の次の逆誕生日は{format(invBirthDay, 'yyyy年MM月dd日', { locale: ja })}
        </Typography>}
    </Container>
  )
}
