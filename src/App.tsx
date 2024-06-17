import { useState } from 'react';
import './App.css'
import { birthdayMap } from './data/birthdayMap'
import { getBirthdayWish } from './utils/getBirthdayWish';
import { getFormattedBdayMap } from './utils/getFormattedBdayMap'

const CYF_PERSONAL_MESSAGE = `𝕎𝕖 𝕨𝕒𝕟𝕥𝕖𝕕 𝕥𝕠 𝕨𝕚𝕤𝕙 𝕪𝕠𝕦 𝕒 𝕧𝕖𝕣𝕪 
🎉ℍ𝕒𝕡𝕡𝕪 𝔹𝕚𝕣𝕥𝕙𝕕𝕒𝕪🎉 
𝕗𝕣𝕠𝕞 
ℂ𝕐𝔽 ℂ𝕖𝕟𝕥𝕣𝕒𝕝 𝕋𝕖𝕒𝕞.

ℝ𝕖𝕞𝕖𝕞𝕓𝕖𝕣, 𝕪𝕠𝕦 𝕒𝕣𝕖 𝕤𝕥𝕚𝕝𝕝 𝕪𝕠𝕦𝕟𝕘𝕖𝕣 😎 𝕥𝕙𝕒𝕟 𝕨𝕙𝕒𝕥 𝕪𝕠𝕦'𝕝𝕝 𝕓𝕖 𝕠𝕟 𝕪𝕠𝕦𝕣 𝕟𝕖𝕩𝕥 𝕓𝕚𝕣𝕥𝕙𝕕𝕒𝕪.

So celebrate.....Celebrations 🥳 are more sweeter when they are shared.🎁

𝐓𝐨 𝐦𝐚𝐤𝐞 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐃𝐚𝐲𝐬 𝐦𝐨𝐫𝐞 𝐦𝐞𝐦𝐨𝐫𝐚𝐛𝐥𝐞 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐝𝐨𝐧𝐚𝐭𝐞 𝐚 𝐚𝐦𝐨𝐮𝐧𝐭 𝐢𝐧 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 𝐨𝐟  ₹500 𝐚𝐭 cyf@kotak 𝐭𝐨 𝐂𝐘𝐅'𝐬 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐌𝐎𝐌𝐄𝐍𝐓𝐒 𝐅𝐔𝐍𝐃 𝐰𝐡𝐢𝐜𝐡 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐂𝐘𝐅'𝐬 𝐝𝐡𝐚𝐫𝐦𝐢𝐤 𝐀𝐜𝐭𝐢𝐯𝐢𝐭𝐢𝐞𝐬.

Post donations, please share details in below format to http://wa.me/+918169104190

Your Name -
Zone Name -
Occasion -
Screenshot of the payment -

In case of additional information, Feel free to connect any of the Core Committee Members. 

🅃🄴🄰🄼 🄲🅈🄵`

function App() {
  const today = new Date();
  const bdayMap: {[key: string]: {
    [key: string]: [{name: string, mobileNumber: string}]
  //@ts-ignore
  }} = getFormattedBdayMap(birthdayMap)
  const dd = today.getDate();

// Get the month (adding 1 because months are zero-based)
  const mm = today.getMonth() + 1;

  const [dateDetails, setDateDetails] = useState<{day: number, month: number}>({day: dd, month: mm})

  const selectedDate: string = dateDetails.month + '/' + dateDetails.day
  const todaysBday = bdayMap[selectedDate]

  console.log(todaysBday)

  return (
    <div className="wrapper">

    <div><h1 style={{color: "#1C275C"}}>CYF Birthday messages 🥳 <span style={{color: "#1C275C", fontSize: '10px'}}>made easy</span></h1></div>
    <div style={{display: 'flex', gap: '1rem'}}>
      <div>
    <label>Choose a day:</label>
    <select value={dateDetails.day} onChange={e => setDateDetails({...dateDetails, day: +e.target.value})} name="day" id="day">
      {[...Array(31).keys()].map(dayNumber => <option value={dayNumber+1}>{dayNumber+1}</option>)}
    </select>
    </div>
    <div>
    <label>Choose a month:</label>
    <select value={dateDetails.month} onChange={e => setDateDetails({...dateDetails, month: +e.target.value})} name="month" id="month">
      {[...Array(12).keys()].map(monthNumber => <option value={monthNumber+1}>{monthNumber+1}</option>)}
    </select>
    </div>

    </div>

     {todaysBday !== undefined ? Object.keys(todaysBday).map(zone => {
      const allZonePeople = todaysBday[zone].length === 1 ? todaysBday[zone][0]?.name : todaysBday[zone].reduce((acc, curr) => [...acc, curr.name], []).join(",") 
        return <div key={zone}>
          <p className="zoneTitle">{zone}</p>
          <p style={{fontWeight: 'bold'}}>Birthday members:</p>
          <ol>
          {todaysBday[zone].map((user: {name: string, mobileNumber: string}) => {
            return <li>
              <p><span style={{fontWeight: "bold"}}>{user.name}</span> -  {user.mobileNumber}</p> 
              <a href={`https://wa.me/${user.mobileNumber}?text=${CYF_PERSONAL_MESSAGE}`}><p>Click here to send personal message in one click</p></a>
              <div>
              <button style={{marginRight: '4px'}} className="action-btn" onClick={() => navigator.clipboard.writeText(CYF_PERSONAL_MESSAGE)}>Copy personal text message</button>  
              <button className="action-btn btn-secondary" onClick={() => navigator.clipboard.writeText(user.mobileNumber)}>Copy number</button>  
              </div>
            </li>
          })}
           </ol>

           <p style={{fontWeight: 'bold'}}>Group message:</p>
           <p>{getBirthdayWish(allZonePeople)}</p>
           <button className="action-btn" onClick={() => navigator.clipboard.writeText(getBirthdayWish(allZonePeople))}>Copy group message</button>  
        </div>
       
     }): <div style={{marginTop: '2rem'}}>No birthdays found for this date!</div>}
    </div>
  )
}

export default App
