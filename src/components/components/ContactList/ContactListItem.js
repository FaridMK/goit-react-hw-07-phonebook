import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/operations';
import s from './ContactList.module.css';

export default function ContactListItem({ name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      {name}: {phone}
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(delContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
