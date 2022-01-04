import { IoCalendarSharp, IoLocationSharp } from "../../shared/Icons";
import * as s from "./styles";
import { AiOutlineSearch } from "../../shared/Icons/";



export const Location = () => {
  return (
    <s.Local_Details>
      <s.Content_Local_Details>
        <IoLocationSharp color="#C4C4C4" />
        <s.Text_Local_Details>North Carolina, NC 90025</s.Text_Local_Details>
      </s.Content_Local_Details>
      <s.Content_Local_Details>
        <IoCalendarSharp color="#C4C4C4" size={18} />{" "}
        <s.Text_Local_Details_Date>11/03/2021</s.Text_Local_Details_Date>
      </s.Content_Local_Details>
      <s.Content_Local_Details>
        <IoCalendarSharp color="#C4C4C4" size={18} />{" "}
        <s.Text_Local_Details_Date>12/12/2021</s.Text_Local_Details_Date>
      </s.Content_Local_Details>
      <s.Button>
          <AiOutlineSearch size={20}/>
      </s.Button>
    </s.Local_Details>
  );
};
