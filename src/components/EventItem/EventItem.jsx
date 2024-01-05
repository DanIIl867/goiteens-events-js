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

	const firstDate = Date.parse(time.start)
	const secondDate = Date.parse(time.end)
	const fullTime = (secondDate - firstDate) / 3600000

	return (
		<ListItem>
			<ListTitle>{name}</ListTitle>
			<ListText> <CiLocationOn />{location}</ListText>
			<ListText> <FaPerson />{speaker}</ListText>
			<ListText><CiCalendar />{type}</ListText>
			<ListText><CiAlarmOn />{fullTime} time</ListText>
		</ListItem>
	)
}