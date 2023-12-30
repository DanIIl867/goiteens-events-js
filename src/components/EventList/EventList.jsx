import { EventItem } from "components/EventItem/EventItem"
import { CiAlarmOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { List } from './EventList.styled'

export const EventList = ({ events }) => {
	return (
		<List>
			{events.map((event) => {
				return <EventItem name={event.name}
					key={event.name}
					iconCalendar={CiCalendar}
					iconPerson={FaPerson}
					iconLocation={CiLocationOn}
					iconTime={CiAlarmOn}
					location={event.location}
					speaker={event.speaker}
					type={event.type}
					time={event.time} />
			})}
		</List>
	)
}