import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

export const Contact = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <div className={s.element}>
          <span className={s.icon}>
            <BsFillPersonFill size={35} color="purple" />
          </span>
          <p className={s.text}>{name}</p>
        </div>
        <div className={s.element}>
          <span className={s.icon}>
            <BsFillTelephoneFill size={35} color="purple" />
          </span>
          <p className={s.text}>{number}</p>
        </div>
      </div>

      <button className={s.btn} onClick={handleDelete} type="submit">
        Delete
      </button>
    </>
  );
};