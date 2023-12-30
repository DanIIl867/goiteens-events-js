import PropTypes from 'prop-types';
import { ListItem, ListTitle, ListText } from './EventItem.styled'

export const EventItem = ({
	name,
	location,
	iconLocation: CiLocationOn,
	iconTime: CiAlarmOn,
	speaker,
	type,
	time,
	iconCalendar: CiCalendar,
	iconPerson: FaPerson, }) => {
	return (
		<ListItem>
			<ListTitle>{name}</ListTitle>
			<ListText> <CiLocationOn />{location}</ListText>
			<ListText> <FaPerson />{speaker}</ListText>
			<ListText><CiCalendar />{type}</ListText>
			<ListText><CiAlarmOn />time</ListText>
		</ListItem>
	)
}